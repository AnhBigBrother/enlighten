import { Body, Controller, Get, HttpCode, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/decorators/user/user.decorator';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { AuthService } from 'src/modules/auth/auth.service';
import { LoginDto, SignupDto } from 'src/modules/auth/dto';
import { TokenService } from 'src/modules/_global/token/token.service';

@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
		private tokenService: TokenService,
	) {}

	@Post('signup')
	async signup(@Body() dto: SignupDto, @Res({ passthrough: true }) res: Response) {
		const user = await this.authService.signup(dto);
		const { access_token, refresh_token } = await this.tokenService.create2Tokens(
			user.email,
			user.id,
		);
		this.tokenService.setCookie(res, 'refresh_token', refresh_token);
		this.tokenService.setCookie(res, 'access_token', access_token);
		return { access_token, refresh_token };
	}

	@Post('login')
	@HttpCode(200)
	async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
		const user = await this.authService.login(dto);
		const { access_token, refresh_token } = await this.tokenService.create2Tokens(
			user.email,
			user.id,
		);
		this.tokenService.setCookie(res, 'refresh_token', refresh_token);
		this.tokenService.setCookie(res, 'access_token', access_token);
		return { access_token, refresh_token };
	}

	@UseGuards(new AuthGuard())
	@Get('logout')
	async Logout(@User('email') email: string, @Res({ passthrough: true }) res: Response) {
		await this.tokenService.deleteAccessToken(email);
		res.cookie('refresh_token', '', { maxAge: 1 });
		res.cookie('access_token', '', { maxAge: 1 });
		return { message: 'Loged out' };
	}
}
