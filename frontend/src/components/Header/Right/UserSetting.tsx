"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import Link from "next/link";
import { _get } from "@/lib/fetch";
import { useToast } from "@/hooks/use-toast";

export const UserSetting = () => {
	const { toast } = useToast();
	const handleLogout = () => {
		_get("auth/logout")
			.then((result) => {
				toast({
					title: "Success",
					description: "You have been loged out",
				});
			})
			.catch((err) => {
				console.error(err);
				toast({
					title: "Failed to log out",
					description: "Something went wrong, try latter!",
					variant: "destructive",
				});
			});
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button>
					<Avatar>
						<AvatarImage src='' />
						<AvatarFallback>
							<User className='h-10 w-10 bg-neutral-300 p-2' />
						</AvatarFallback>
					</Avatar>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='border-neutral-50 bg-neutral-200'>
				<DropdownMenuLabel>Setting</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Link
							className='h-full w-full'
							href='/login'>
							Login
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link
							className='h-full w-full'
							href='/signup'>
							Sign up
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<button onClick={() => handleLogout()}>Log out</button>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
