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
}
