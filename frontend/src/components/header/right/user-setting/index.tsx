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
import { _get } from "@/lib/fetch";
import { DarkMode } from "@/components/header/right/user-setting/dark-mode";
import { AuthGroup } from "@/components/header/right/user-setting/auth-group";

export const UserSetting = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button>
					<Avatar>
						<AvatarImage src='' />
						<AvatarFallback>
							<User className='bg-app-foreground h-10 w-10  p-2' />
						</AvatarFallback>
					</Avatar>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='border-app bg-app'>
				<DropdownMenuLabel>Setting</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<DarkMode />
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<AuthGroup />
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
