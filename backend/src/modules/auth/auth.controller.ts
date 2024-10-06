import {
	BadRequestException,
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	Query,
	Res,
	UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/decorators/user/user.decorator';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { AuthService } from 'src/modules/auth/auth.service';
import { LoginDto, SignupDto } from 'src/modules/auth/dto';
import { TokenService } from 'src/modules/_global/token/token.service';
import { OauthService } from 'src/modules/auth/oauth.service';

@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
		private oauthService: OauthService,
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

	@Post('google')
	@HttpCode(200)
	async authGoogle(
		@Query('token_type') token_type: string,
		@Query('access_token') google_access_token: string,
	) {
		try {
			const { email, name, picture } = await this.oauthService.getGoogleUserInfo(
				token_type,
				google_access_token,
			);
			const user = await this.oauthService.getOrCreateUser(email, name, picture);
			const { access_token, refresh_token } = await this.tokenService.create2Tokens(
				user.email,
				user.id,
			);
			return { access_token, refresh_token };
		} catch (error) {
			console.error(error);
			throw new BadRequestException();
		}
	}

	@Post('github')
	@HttpCode(200)
	async authGithub(
		@Query('token_type') token_type: string,
		@Query('access_token') github_access_token: string,
	) {
		try {
			const { email, name, picture } = await this.oauthService.getGithubUserInfo(
				token_type,
				github_access_token,
			);
			const user = await this.oauthService.getOrCreateUser(email, name, picture);
			const { access_token, refresh_token } = await this.tokenService.create2Tokens(
				user.email,
				user.id,
			);
			return { access_token, refresh_token };
		} catch (error) {
			console.error(error);
			throw new BadRequestException();
		}
	}

	@Post('microsoft')
	@HttpCode(200)
	async authMicrosoft(
		@Query('token_type') token_type: string,
		@Query('access_token') microsoft_access_token: string,
	) {
		try {
			const { email, name, picture } = await this.oauthService.getMicrosoftUserInfo(
				token_type,
				microsoft_access_token,
			);
			const user = await this.oauthService.getOrCreateUser(email, name, picture);
			const { access_token, refresh_token } = await this.tokenService.create2Tokens(
				user.email,
				user.id,
			);
			return { access_token, refresh_token };
		} catch (error) {
			console.error(error);
			throw new BadRequestException();
		}
	}

	@Post('discord')
	@HttpCode(200)
	async authDiscord(
		@Query('token_type') token_type: string,
		@Query('access_token') discord_access_token: string,
	) {
		try {
			const { email, name, picture } = await this.oauthService.getDiscordUserInfo(
				token_type,
				discord_access_token,
			);
			const user = await this.oauthService.getOrCreateUser(email, name, picture);
			const { access_token, refresh_token } = await this.tokenService.create2Tokens(
				user.email,
				user.id,
			);
			return { access_token, refresh_token };
		} catch (error) {
			console.error(error);
			throw new BadRequestException();
		}
	}
}
