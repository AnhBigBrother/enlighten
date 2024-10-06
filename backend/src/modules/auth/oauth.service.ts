import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/_global/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { createRandomString } from 'src/libs/function';
import {
	DISCORD_GET_USER_INFO_URL,
	GITHUB_GET_USER_DATA_URL,
	GOOGLE_GET_USER_DATA_URL,
	MICROSOFT_GET_USER_INFO_URL,
} from 'src/constants';

@Injectable()
export class OauthService {
	constructor(private prisma: PrismaService) {}

	async getGoogleUserInfo(token_type: string, access_token: string) {
		const googleUserInfo = await fetch(GOOGLE_GET_USER_DATA_URL, {
			headers: {
				Authorization: `${token_type} ${access_token}`,
			},
		}).then((res) => res.json());
		const { email, name, picture } = googleUserInfo;
		return { email, name, picture };
	}

	async getGithubUserInfo(token_type: string, access_token: string) {
		const getUserInfo = fetch(GITHUB_GET_USER_DATA_URL, {
			headers: {
				Authorization: `${token_type} ${access_token}`,
			},
		}).then((res) => res.json());
		const getUserEmail = fetch(GITHUB_GET_USER_DATA_URL + '/emails', {
			headers: {
				Authorization: `${token_type} ${access_token}`,
			},
		}).then((res) => res.json());
		const [githubUserInfo, githubUserEmail] = await Promise.all([getUserInfo, getUserEmail]);
		const email = githubUserEmail[0].email;
		const { name, avatar_url } = githubUserInfo;
		return { email, name, picture: avatar_url };
	}

	async getMicrosoftUserInfo(token_type: string, access_token: string) {
		const microsoftUserInfo = await fetch(MICROSOFT_GET_USER_INFO_URL, {
			headers: {
				Authorization: `${token_type} ${access_token}`,
			},
		}).then((res) => res.json());
		const { email, name, picture } = microsoftUserInfo;
		return { email, name, picture };
	}

	async getDiscordUserInfo(token_type: string, access_token: string) {
		const discordUserInfo = await fetch(DISCORD_GET_USER_INFO_URL, {
			headers: {
				Authorization: `${token_type} ${access_token}`,
			},
		}).then((res) => res.json());
		const { id, email, global_name, avatar } = discordUserInfo;
		return {
			email,
			name: global_name,
			picture: 'https://cdn.discordapp.com/avatars/' + id + '/' + avatar,
		};
	}

	// !!!careful : only use inside oauth-controller
	async getOrCreateUser(email: string, name: string, image: string) {
		let user = await this.prisma.user.findUnique({
			where: {
				email,
			},
		});
		if (!user) {
			const password = createRandomString(12);
			const hashedPassword = await bcrypt.hash(password, 12);
			user = await this.prisma.user.create({
				data: {
					email,
					name,
					image: image,
					password: hashedPassword,
				},
			});
		}
		delete user.password;
		return user;
	}
}
