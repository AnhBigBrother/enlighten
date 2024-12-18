import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";

export const SortContents = () => {
	return (
		<div className='w-full py-2'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className='flex flex-row items-center space-x-2 rounded-xl border p-2 hover:bg-accent'>
						<span>Best</span>
						<ChevronsUpDown className='h-4 w-4' />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='start'>
					<DropdownMenuLabel>Sort by</DropdownMenuLabel>
					<DropdownMenuSeparator></DropdownMenuSeparator>
					<DropdownMenuGroup>
						<DropdownMenuItem>Best</DropdownMenuItem>
						<DropdownMenuItem>Top</DropdownMenuItem>
						<DropdownMenuItem>Hot</DropdownMenuItem>
						<DropdownMenuItem>New</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
