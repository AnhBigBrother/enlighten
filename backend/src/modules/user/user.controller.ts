import {
	BadRequestException,
	Body,
	Controller,
	Delete,
	Get,
	Patch,
	Query,
	Req,
	Res,
	UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from 'src/decorators/user/user.decorator';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { TokenService } from 'src/modules/_global/token/token.service';
import {
	DeleteUserDto,
	SessionDto,
	UpdatePersonalInfoDto,
	UpdateSessionDto,
} from 'src/modules/user/dto';
import { UserService } from 'src/modules/user/user.service';

@Controller('user')
export class UserController {
	constructor(
		private userService: UserService,
		private token: TokenService,
	) {}

	@UseGuards(new AuthGuard())
	@Get('personal-info')
	async getPersonalInfo(@User('email') email: string) {
		const user = await this.userService.getPersonalInfo(email);
		return { user };
	}

	@UseGuards(new AuthGuard())
	@Patch('personal-info')
	async updatePersonalInfo(@User('email') email: string, @Body() body: UpdatePersonalInfoDto) {
		const { name, password, image } = body;
		const user = await this.userService.updatePersonalInfo(email, name, password, image);
		return { user };
	}

	@UseGuards(new AuthGuard())
	@Delete()
	async deleteUser(
		@User('email') email: string,
		@Body() body: DeleteUserDto,
		@Res() res: Response,
	) {
		await this.userService.deleteUser(email, body.password);
		res.cookie('access_token', '', { maxAge: 1 });
		return { message: 'User deleted' };
	}

	@UseGuards(new AuthGuard())
	@Get('session')
	async getSession(@User() user: SessionDto) {
		return { user };
	}

	@UseGuards(new AuthGuard())
	@Patch('session')
	async updateSession(
		@User() user: SessionDto,
		@Body() body: UpdateSessionDto,
		@Res() res: Response,
	) {
		const { name, image } = body;
		if (name) user['name'] = name;
		if (image) user['image'] = image;
		const access_token = this.token.encrypt(user);
		this.token.setCookie(res, 'access_token', access_token);
		return { access_token };
	}

	@Get('access-token')
	async getTokens(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response,
		@Query('refresh_token') refresh_token: string | undefined,
	) {
		if (!refresh_token) {
			if (!req.cookies['refresh_token']) {
				throw new BadRequestException('Refresh token is required');
			}
			refresh_token = req.cookies['refresh_token'];
		}
		const tokens = await this.token.refreshAccessTokens(refresh_token);
		const access_token = tokens.access_token;
		refresh_token = tokens.refresh_token;
		this.token.setCookie(res, 'access_token', access_token);
		return { access_token, refresh_token };
	}
}
