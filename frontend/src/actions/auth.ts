"use server";

/*<---validate login/signup form-input on server--->*/

import { COOKIE_AGE } from "@/constants";
import { _post } from "@/lib/fetch";
import { LoginDTO, LoginSchema, SignupDTO, SignupSchema } from "@/schemas/AuthForm";
import { cookies } from "next/headers";
import { fromZodError } from "zod-validation-error";

export const Login = async (dto: LoginDTO) => {
	try {
		const result = LoginSchema.safeParse(dto);
		if (!result.success) {
			return {
				message: fromZodError(result.error).toString().slice(18),
				error: "Validation error",
			};
		}
		const data = await _post("/auth/login", { body: result.data });
		if (data.error) return data;
		const cookieStore = cookies();
		cookieStore.set("access_token", data.access_token, { maxAge: COOKIE_AGE });
		cookieStore.set("refresh_token", data.refresh_token, { maxAge: COOKIE_AGE });
		return data;
	} catch (error) {
		console.error(error);
		return { message: "Something went wrong", error: "Login failed" };
	}
};

export const Signup = async (dto: SignupDTO) => {
	try {
		const result = SignupSchema.safeParse(dto);
		if (!result.success) {
			return {
				message: fromZodError(result.error).toString().slice(18),
				error: "Validation error",
			};
		}
		const data = await _post("/auth/signup", { body: result.data });
		if (data.error) return data;
		const cookieStore = cookies();
		cookieStore.set("access_token", data.access_token, { maxAge: COOKIE_AGE });
		cookieStore.set("refresh_token", data.refresh_token, { maxAge: COOKIE_AGE });
		return data;
	} catch (error) {
		console.error(error);
		return { message: "Something went wrong", error: "Sign up failed" };
	}
};
