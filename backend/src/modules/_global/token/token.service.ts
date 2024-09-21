import {
	BadRequestException,
	ForbiddenException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { ACCESS_TOKEN_AGE, COOKIE_AGE, REFRESH_TOKEN_AGE } from 'src/constants';
import { PrismaService } from 'src/modules/_global/prisma/prisma.service';

@Injectable()
export class TokenService {
	constructor(
		private jwt: JwtService,
		private prisma: PrismaService,
	) {}

	async create2Tokens(email: string, id?: number | string) {
		try {
			const now = Date.now();
			const refresh_token = this.encrypt({
				typ: 'refresh_token',
				iat: now,
				exp: now + REFRESH_TOKEN_AGE,
				email,
				...(id && { id: id }),
			});
			const user = await this.prisma.user.update({
				where: { email: email },
				data: { refresh_token: refresh_token },
			});
			if (!user) new NotFoundException('User not found');
			const access_token = this.encrypt({
				typ: 'access_token',
				iat: now,
				exp: now + ACCESS_TOKEN_AGE,
				email: user.email,
				name: user.name,
				id: user.id,
				image: user.image,
			});
			return { refresh_token, access_token };
		} catch (error) {
			if (error.status) throw error;
			throw new BadRequestException(error.message);
		}
	}

	async refreshAccessTokens(refresh_token: string) {
		try {
			const payload = this.jwt.verify(refresh_token);
			if (payload.typ !== 'refresh_token' || payload.exp < Date.now())
				throw new ForbiddenException('Refresh token failed');
			let user = await this.prisma.user.findUnique({
				where: {
					email: payload.email,
				},
			});
			if (!user) throw new NotFoundException('User not found');
			if (user.refresh_token !== refresh_token)
				throw new ForbiddenException('Refresh token failed');
			const now = Date.now();
			const access_token = this.encrypt({
				typ: 'access_token',
				iat: now,
				exp: now + ACCESS_TOKEN_AGE,
				email: user.email,
				name: user.name,
				id: user.id,
				image: user.image,
			});
			return { refresh_token, access_token };
		} catch (error) {
			if (error.status) throw error;
			throw new BadRequestException(error.message);
		}
	}

	async validateAccessToken(token: string) {
		try {
			const payload = this.jwt.verify(token);
			if (payload.typ !== 'access_token' || payload.exp < Date.now())
				throw new ForbiddenException('Access token failed');
			return payload;
		} catch (error) {
			if (error.status) throw error;
			throw new BadRequestException(error.message);
		}
	}

	async deleteAccessToken(email?: string, token?: string) {
		try {
			if (!email) {
				if (!token) return;
				const payload = this.jwt.verify(token);
				if (payload.typ !== 'refresh_token' || !payload.email) return;
				email = payload.email;
			}
			const user = await this.prisma.user.update({
				where: {
					email,
				},
				data: {
					refresh_token: null,
				},
			});
			if (!user) throw new NotFoundException('User not found');
			return;
		} catch (error) {
			if (error.status) throw error;
			throw new BadRequestException(error.message);
		}
	}

	encrypt(payload: any) {
		return this.jwt.sign(payload, {
			algorithm: 'HS256',
		});
	}

	setCookie(res: Response, key: string, value: string, maxAge: number = COOKIE_AGE) {
		return res.cookie(key, value, {
			httpOnly: true,
			sameSite: 'none',
			secure: true,
			maxAge,
		});
	}
}
