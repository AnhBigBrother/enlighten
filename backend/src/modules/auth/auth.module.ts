import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { OauthService } from './oauth.service';

@Module({
	controllers: [AuthController],
	providers: [AuthService, OauthService],
})
export class AuthModule {}
