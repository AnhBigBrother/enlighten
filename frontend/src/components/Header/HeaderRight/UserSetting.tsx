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
import toast from "react-hot-toast";

export const UserSetting = () => {
	const handleLogout = () => {
		_get("auth/logout")
			.then((result) => {
				toast.success("Loged out");
			})
			.catch((err) => {
				console.error(err);
				toast.error("Something went wrong, try latter.");
			});
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button>
					<Avatar>
						<AvatarImage src='' />
						<AvatarFallback>
							<User className='h-10 w-10 bg-neutral-200 p-2' />
						</AvatarFallback>
					</Avatar>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='bg-neutral-50'>
				<DropdownMenuLabel>Setting</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Link href='/login'>Login</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href='/signup'>Sign up</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<button onClick={() => handleLogout()}>Log out</button>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
