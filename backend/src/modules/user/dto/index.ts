import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, MinLength } from 'class-validator';

export class UpdatePersonalInfoDto {
	@IsOptional()
	@IsString()
	name: string;
	@IsOptional()
	@IsString()
	@MinLength(6)
	password: string;
	@IsOptional()
	@IsString()
	@IsUrl()
	image: string;
}

export class SessionDto {
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string;
	@IsNotEmpty()
	@IsString()
	name: string;
	@IsNotEmpty()
	@IsString()
	image: string;
}

export class UpdateSessionDto {
	@IsOptional()
	@IsString()
	name: string;
	@IsOptional()
	@IsString()
	@IsUrl()
	image: string;
}

export class DeleteUserDto {
	@IsString()
	@MinLength(6)
	password: string;
}
