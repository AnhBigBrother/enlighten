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
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, User } from "lucide-react";
import { _get } from "@/lib/fetch";
import useUserStore from "@/stores/user-store";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { NotebookPen } from "lucide-react";
import React from "react";
import { IconButton } from "@/components/ui/icon-button";

export const Setting = () => {
	const user = useUserStore.use.user();
	const resetUser = useUserStore.use.reset();
	const { setTheme, theme } = useTheme();
	const { toast } = useToast();
	const handleLogout = () => {
		_get("auth/logout")
			.then((result) => {
				resetUser();
				toast({
					title: "Loged out!",
					description: "You have been loged out",
				});
				localStorage.removeItem("access_token");
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
		<menu className='flex flex-row items-center gap-2'>
			<div className='flex flex-row items-center'>
				<IconButton>
					<NotebookPen />
					<p className='ml-2 hidden sm:inline-block'>Write</p>
				</IconButton>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<IconButton>
							<Bell />
						</IconButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='border-app bg-app'>
						<DropdownMenuLabel>Notifications</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem className='cursor-pointer'>Noti1</DropdownMenuItem>
							<DropdownMenuItem className='cursor-pointer'>Noti2</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button>
						<Avatar>
							<AvatarImage src={user?.image} />
							<AvatarFallback>
								<User className='bg-app-foreground h-10 w-10 p-2' />
							</AvatarFallback>
						</Avatar>
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align='end'
					className='border-app bg-app'>
					<DropdownMenuGroup>
						{user ? (
							<DropdownMenuItem>
								<button className='flex h-full w-full flex-col items-start justify-start gap-3 py-3 hover:brightness-90'>
									<Avatar>
										<AvatarImage src={user?.image} />
										<AvatarFallback>
											<User className='bg-app-foreground h-10 w-10 p-2' />
										</AvatarFallback>
									</Avatar>
									<p>{user?.name}</p>
								</button>
							</DropdownMenuItem>
						) : (
							<DropdownMenuLabel className='py-3 text-base'>Setting</DropdownMenuLabel>
						)}
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem asChild>
							<Dialog>
								<DialogTrigger asChild>
									<button className='flex items-center px-2 py-[0.375rem] text-sm'>
										<p>Dark mode</p>
										<p className='ml-10 w-10 font-bold text-blue-600'>
											{theme === "light" ? "OFF" : theme === "dark" ? "ON" : "AUTO"}
										</p>
									</button>
								</DialogTrigger>
								<DialogContent className='max-w-max'>
									<DialogHeader>
										<DialogTitle>Theme setting</DialogTitle>
										<DialogDescription>
											Adjust how you'd like Enlighten to appear on this browser.
										</DialogDescription>
									</DialogHeader>
									<div className='flex flex-row items-center space-x-4'>
										<div
											onClick={() => setTheme("light")}
											className={cn("flex cursor-pointer flex-col space-y-2 rounded-md p-2", {
												"bg-app-foreground": theme === "light",
											})}>
											<div className='flex items-center space-x-2'>
												<Checkbox
													id='light-mode'
													checked={theme === "light"}
												/>
												<label htmlFor='light-mode'>Light</label>
											</div>
											<Image
												src='/themes/light.svg'
												alt='Light mode'
												height={160}
												width={160}
												className='rounded-sm'></Image>
										</div>
										<div
											onClick={() => setTheme("dark")}
											className={cn("flex cursor-pointer flex-col space-y-2 rounded-md p-2", {
												"bg-app-foreground": theme === "dark",
											})}>
											<div className='flex items-center space-x-2'>
												<Checkbox
													id='dark-mode'
													checked={theme === "dark"}
												/>
												<label htmlFor='dark-mode'>Dark</label>
											</div>
											<Image
												src='/themes/dark.svg'
												alt='Dark mode'
												height={160}
												width={160}
												className='rounded-sm'></Image>
										</div>
										<div
											onClick={() => setTheme("system")}
											className={cn("flex cursor-pointer flex-col space-y-2 rounded-md p-2", {
												"bg-app-foreground": theme === "system",
											})}>
											<div className='flex items-center space-x-2'>
												<Checkbox
													id='system-mode'
													checked={theme === "system"}
												/>
												<label htmlFor='system-mode'>System</label>
											</div>
											<div className='relative h-fit w-fit flex-shrink-0'>
												<Image
													src='/themes/light.svg'
													alt='Light'
													height={160}
													width={160}
													className='rounded-l-sm rounded-r-lg'></Image>
												<Image
													src='/themes/dark.svg'
													alt='Dark'
													height={160}
													width={160}
													className='absolute right-0 top-0 h-full w-1/2 rounded-r-sm object-cover object-right'></Image>
											</div>
										</div>
									</div>
									<DialogFooter>
										<DialogClose asChild>
											<Button>Save change</Button>
										</DialogClose>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						{user ? (
							<DropdownMenuItem>
								<button
									className='h-full w-full text-start'
									onClick={() => handleLogout()}>
									Log out
								</button>
							</DropdownMenuItem>
						) : (
							<>
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
							</>
						)}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</menu>
	);
};
