import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookiesParser from 'cookie-parser';
import { ForbiddenException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { FRONTEND_URL, PORT } from 'src/constants';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		credentials: true,
		origin: function (origin, callback) {
			if (origin === FRONTEND_URL) {
				callback(null, true);
			} else {
				throw new ForbiddenException('Not allowed by CORS');
			}
		},
	});
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			errorHttpStatusCode: HttpStatus.BAD_REQUEST,
		}),
	);
	app.use(cookiesParser());

	await app.listen(PORT, () => {
		console.log(`Server is running on port ${1320}`);
	});
}
bootstrap();
