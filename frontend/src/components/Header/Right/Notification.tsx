"use client";

import { IconButton } from "@/components/Header/IconButton";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

export const Notification = () => {
	const router = useRouter();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<IconButton>
					<Bell />
				</IconButton>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='border-neutral-50 bg-neutral-200'>
				<DropdownMenuLabel>Notifications</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem className='cursor-pointer'>Noti1</DropdownMenuItem>
					<DropdownMenuItem className='cursor-pointer'>Noti2</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
