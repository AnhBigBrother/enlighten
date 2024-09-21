import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
	constructor(private jwtService: JwtService) {}

	use(req: Request, res: Response, next: NextFunction) {
		try {
			const access_token = req.cookies['access_token'] || req.headers['authorization']; // always type string, ex: "undefined"
			const user = this.jwtService.verify(access_token);
			if (user && user.exp && user.exp > Date.now()) {
				req['user'] = user;
			}
			next();
		} catch (error) {
			next();
		}
	}
}
