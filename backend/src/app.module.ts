import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/_global/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './modules/user/user.module';
import { TokenModule } from './modules/_global/token/token.module';
import { UserMiddleware } from 'src/middlewares/user/user.middleware';
import { JWT_SECRET } from 'src/constants';

@Module({
	imports: [
		JwtModule.register({
			global: true,
			secret: JWT_SECRET,
		}),
		TokenModule,
		PrismaModule,
		AuthModule,
		UserModule,
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(UserMiddleware).forRoutes('/');
	}
}
