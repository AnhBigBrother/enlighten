import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginDto {
	@IsNotEmpty()
	@IsEmail()
	email: string;
	@IsNotEmpty()
	@IsString()
	@MinLength(6)
	password: string;
}

export class SignupDto extends LoginDto {
	@IsString()
	@IsNotEmpty()
	name: string;
	@IsString()
	@IsOptional()
	image: string;
}
