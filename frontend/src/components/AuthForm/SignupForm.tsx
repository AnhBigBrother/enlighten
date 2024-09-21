"use client";

import { Signup } from "@/actions/auth";
import { FormError, FormSuccess } from "@/components/AuthForm/FormNotification";
import { FormWrapper } from "@/components/AuthForm/FormWrapper";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupDTO, SignupSchema } from "@/schemas/AuthForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function SignupForm() {
	const router = useRouter();
	const [isPending, setIsPending] = useState<boolean>(false);
	const [success, setSuccess] = useState<string>("");
	const [error, setError] = useState<string>("");
	const form = useForm<SignupDTO>({
		resolver: zodResolver(SignupSchema),
		defaultValues: {
			email: "",
			name: "",
			password: "",
		},
	});
	const onSubmit = async (data: SignupDTO) => {
		setIsPending(true);
		setError("");
		const result = await Signup(data);
		if (result.error) {
			setSuccess("");
			setError(result.message);
			return;
		}
		localStorage.setItem("access_token", result.access_token);
		setError("");
		setSuccess("Success!");
		router.push("/");
		setIsPending(false);
	};

	return (
		<FormWrapper
			headerLabel='Signup'
			showOAuth={false}
			footerLinkLabel='Already have account? Login here!'
			footerLinkHref='/login'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-5'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder='Your email'
										type='email'></Input>
								</FormControl>
								<FormMessage></FormMessage>
							</FormItem>
						)}></FormField>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder='Your name'
										type='text'></Input>
								</FormControl>
								<FormMessage></FormMessage>
							</FormItem>
						)}></FormField>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder='Your password'
										type='password'></Input>
								</FormControl>
								<FormMessage></FormMessage>
							</FormItem>
						)}></FormField>
					<FormSuccess message={success} />
					<FormError message={error} />
					<Button
						type='submit'
						disabled={isPending}>
						Signup
					</Button>
				</form>
			</Form>
		</FormWrapper>
	);
}

export default SignupForm;
