"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {
	Bookmark,
	ChevronDown,
	Clock,
	House,
	Menu,
	MessageCircleMore,
	NotebookText,
	SquareUser,
	Telescope,
	TrendingUp,
	User,
} from "lucide-react";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IconButton } from "@/components/ui/icon-button";
import {
	MenuGroup,
	MenuGroupHeader,
	MenuItem,
	MenuList,
	MenuSeperator,
} from "@/components/ui/menu";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Logo = () => {
	const [subscriptionCollapse, setSubscriptionCollapse] = useState<boolean>(true);
	const sideMenu = useRef<HTMLDivElement | null>(null);
	const toggleSideMenu = (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (sideMenu.current) {
			if (e) {
				if (sideMenu.current === e.target) {
					sideMenu.current.classList.toggle("hidden");
					sideMenu.current.classList.toggle("block");
				}
			} else {
				sideMenu.current.classList.toggle("hidden");
				sideMenu.current.classList.toggle("block");
			}
		}
	};
	return (
		<>
			<div
				ref={sideMenu}
				className='border-app fixed left-0 top-16 hidden h-[calc(100vh-4rem)] w-full border-r bg-black/50 xl:block xl:w-fit xl:bg-transparent xl:py-3'
				onClick={(e) => toggleSideMenu(e)}>
				<aside className='fluent-scrollbar border-app bg-app flex h-full w-64 flex-col items-start justify-start overflow-y-auto overflow-x-hidden px-2 py-3 hover:overflow-y-auto xl:w-72 xl:overflow-y-hidden xl:px-5 xl:py-1'>
					<MenuList>
						<MenuGroup>
							<MenuItem>
								<div className='flex w-full flex-row space-x-4'>
									<House />
									<p>Home</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-4'>
									<TrendingUp />
									<p>Popular</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-4'>
									<Telescope />
									<p>Explore</p>
								</div>
							</MenuItem>
						</MenuGroup>
						<MenuSeperator />
						<MenuGroup>
							<MenuGroupHeader>You</MenuGroupHeader>
							<MenuItem>
								<div className='flex w-full flex-row space-x-4'>
									<SquareUser />
									<p>Profile</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-4'>
									<NotebookText />
									<p>Your posts</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-4'>
									<Bookmark />
									<p>Favorited</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-4'>
									<Clock />
									<p>Watch later</p>
								</div>
							</MenuItem>
						</MenuGroup>
						<MenuSeperator />
						<MenuGroup>
							<MenuGroupHeader>Communities</MenuGroupHeader>
							<MenuItem>
								<div className='flex w-full flex-row space-x-4'>
									<HiOutlineUserGroup className='h-6 w-6' />
									<span>Group</span>
								</div>
							</MenuItem>
							<MenuItem>
								<a
									href='https://bigbruhh-messenger.vercel.app'
									target='_blank'
									className='flex w-full flex-row space-x-4'>
									<MessageCircleMore />
									<span>Messenger</span>
								</a>
							</MenuItem>
						</MenuGroup>
						<MenuSeperator />
						<MenuGroup>
							<Collapsible open={subscriptionCollapse}>
								<div className='flex flex-row items-center px-2 py-1'>
									<h4 className='font-semibold'>Subscriptions</h4>
									<CollapsibleTrigger
										asChild
										onClick={() => setSubscriptionCollapse((pre) => !pre)}>
										<IconButton className='ml-2 rounded-md p-1'>
											<ChevronDown
												className={cn("h-5 w-5", {
													"rotate-180": subscriptionCollapse,
												})}
											/>
										</IconButton>
									</CollapsibleTrigger>
								</div>
								<CollapsibleContent>
									<div className='flex w-full flex-row items-center space-x-2 p-1'>
										<Avatar className='h-9 w-9'>
											<AvatarImage src='' />
											<AvatarFallback>
												<User className='bg-app-foreground h-full w-full cursor-pointer p-2' />
											</AvatarFallback>
										</Avatar>
										<span>Writter</span>
									</div>
									<div className='flex w-full flex-row items-center space-x-2 p-1'>
										<Avatar className='h-9 w-9'>
											<AvatarImage src='' />
											<AvatarFallback>
												<User className='bg-app-foreground h-full w-full cursor-pointer p-2' />
											</AvatarFallback>
										</Avatar>
										<span>Writter</span>
									</div>
									<div className='flex w-full flex-row items-center space-x-2 p-1'>
										<Avatar className='h-9 w-9'>
											<AvatarImage src='' />
											<AvatarFallback>
												<User className='bg-app-foreground h-full w-full cursor-pointer p-2' />
											</AvatarFallback>
										</Avatar>
										<span>Writter</span>
									</div>
									<div className='flex w-full flex-row items-center space-x-2 p-1'>
										<Avatar className='h-9 w-9'>
											<AvatarImage src='' />
											<AvatarFallback>
												<User className='bg-app-foreground h-full w-full cursor-pointer p-2' />
											</AvatarFallback>
										</Avatar>
										<span>Writter</span>
									</div>
								</CollapsibleContent>
							</Collapsible>
						</MenuGroup>
						<MenuSeperator />
						<footer className='flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 p-2 text-sm font-bold'>
							<a>About</a>
							<a>Copyright</a>
							<a>Contact</a>
							<a>Terms</a>
							<a>Privacy</a>
							<p className='text-center text-xs font-light'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris purus,
								viverra et neque finibus, finibus tincidunt libero. Quisque ullamcorper dapibus
								ex sit amet aliquam.
							</p>
							<p className='my-3 w-full text-center text-[0.625rem] font-light'>
								Enlighten @2024. All rights reserved.
							</p>
						</footer>
					</MenuList>
				</aside>
			</div>
			<div className='flex flex-row items-center justify-start gap-1 pr-3'>
				<IconButton
					className='xl:hidden'
					onClick={() => toggleSideMenu()}>
					<Menu />
				</IconButton>
				<Link
					href={"/"}
					className='flex flex-shrink-0 flex-row items-center gap-2'>
					<Image
						src={"/icons/light.png"}
						alt='Enlighten'
						height={192}
						width={192}
						className='h-8 w-8 rounded-md dark:hidden'
					/>
					<Image
						src={"/icons/dark.png"}
						alt='Enlighten'
						height={192}
						width={192}
						className='hidden h-8 w-8 rounded-md dark:block'
					/>
					<h1 className='hidden text-2xl font-bold sm:inline-block'>Enlighten</h1>
				</Link>
			</div>
		</>
	);
};
