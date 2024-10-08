import { Post } from "@/components/_shared/post";
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

export default function Home() {
	return (
		<div className='flex flex-col'>
			<div className='w-full py-2'>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className='hover:bg-app-foreground flex flex-row items-center space-x-1 rounded-full p-2'>
							<span>Best</span>
							<ChevronsUpDown className='h-4 w-4' />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align='start'
						className='border-app bg-app'>
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
			<div className='flex flex-col space-y-3'>
				<Post />
				<Post />
			</div>
		</div>
	);
}
