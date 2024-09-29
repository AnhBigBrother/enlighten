import {
	ForbiddenException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { LoginDto, SignupDto } from 'src/modules/auth/dto';
import { PrismaService } from 'src/modules/_global/prisma/prisma.service';
import { createRandomString } from 'src/libs/function';
import { GITHUB_GET_USER_DATA_URL, GOOGLE_GET_USER_DATA_URL } from 'src/constants';

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService) {}

	async signup(dto: SignupDto) {
		try {
			const { email, password, name, image } = dto;
			const hashedPassword = await bcrypt.hash(password, 12);
			const user = await this.prisma.user.create({
				data: {
					name,
					email,
					image: image || '',
					password: hashedPassword,
				},
			});
			delete user.password;
			return user;
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					throw new ForbiddenException('Email is taken');
				}
			}
			throw new InternalServerErrorException(error);
		}
	}

	async login(dto: LoginDto) {
		const { email, password } = dto;
		const user = await this.prisma.user.findUnique({
			where: {
				email,
			},
		});
		if (!user) {
			throw new NotFoundException('User not found');
		}
		const isMatched = await bcrypt.compare(password, user.password);
		if (!isMatched) {
			throw new UnauthorizedException('Wrong password');
		}
		delete user.password;
		return user;
	}

	async getGoogleUserData(token_type: string, access_token: string) {
		const googleUserInfo = await fetch(GOOGLE_GET_USER_DATA_URL, {
			headers: {
				Authorization: `${token_type} ${access_token}`,
			},
		}).then((res) => res.json());
		const { email, name, picture } = googleUserInfo;
		return { email, name, picture };
	}

	async getGithubUserData(token_type: string, access_token: string) {
		const getUserInfo = fetch(GITHUB_GET_USER_DATA_URL, {
			headers: {
				Authorization: `${token_type} ${access_token}`,
			},
		}).then((res) => res.json());
		const getUserEmail = fetch(GITHUB_GET_USER_DATA_URL + '/emails', {
			headers: {
				Authorization: `${token_type} ${access_token}`,
			},
		}).then((res) => res.json());
		const [githubUserInfo, githubUserEmail] = await Promise.all([getUserInfo, getUserEmail]);
		const email = githubUserEmail[0].email;
		const { name, avatar_url } = githubUserInfo;
		return { email, name, avatar_url };
	}

	// !!!careful : only use inside oauth-controller
	async oauthLogin(email: string, name: string, image: string) {
		let user = await this.prisma.user.findUnique({
			where: {
				email,
			},
		});
		if (!user) {
			const password = createRandomString(24);
			const hashedPassword = await bcrypt.hash(password, 12);
			user = await this.prisma.user.create({
				data: {
					email,
					name,
					image: image,
					password: hashedPassword,
				},
			});
		}
		delete user.password;
		return user;
	}
}
