"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function FormOAuth() {
	const { toast } = useToast();
	const handleSignInGoogle = async () => {
		try {
			const { url } = await fetch("/api/oauth/google").then((res) => res.json());
			window.location.href = url;
		} catch (error) {
			toast({
				title: "Failed to login",
				description: "Something went wrong, try later!",
				variant: "destructive",
			});
			console.error(error);
		}
	};
	const handleSignInGitHub = async () => {
		try {
			const { url } = await fetch("/api/oauth/github").then((res) => res.json());
			window.location.href = url;
		} catch (error) {
			toast({
				title: "Failed to login",
				description: "Something went wrong, try later!",
				variant: "destructive",
			});
			console.error(error);
		}
	};
	return (
		<div className='flex w-full flex-col items-center justify-center gap-2'>
			<p className='flex w-full items-center justify-between text-gray-300'>
				<span className='line-through'>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</span>
				<span className='text-gray-500'>or</span>
				<span className='line-through'>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</span>
			</p>
			<Button
				onClick={handleSignInGoogle}
				size={"lg"}
				className='w-full'
				variant={"outline"}>
				<div className='flex h-full w-full items-center justify-center gap-3'>
					<FcGoogle className='h-5 w-5' />
					<span>Continue With Google</span>
				</div>
			</Button>
			<Button
				onClick={handleSignInGitHub}
				size={"lg"}
				className='w-full'
				variant={"outline"}>
				<div className='flex h-full w-full items-center justify-center gap-3'>
					<FaGithub className='h-5 w-5' />
					<span>Continue With GitHub</span>
				</div>
			</Button>
		</div>
	);
}
