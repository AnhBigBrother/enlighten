"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { House, Menu, Telescope, TrendingUp } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { MenuGroup, MenuItem, MenuList, MenuSeperator } from "@/components/ui/menu";

export const PageNavigation = () => {
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
				className='fixed left-0 top-16 hidden h-[calc(100vh-4rem)] w-full backdrop-blur-sm md:block md:w-fit md:py-5 md:pl-3 xl:left-[20vw] xl:pl-0'
				onClick={(e) => toggleSideMenu(e)}>
				<aside className='fluent-scrollbar border-app bg-app-foreground flex max-h-full w-64 flex-col items-start justify-start overflow-x-hidden overflow-y-hidden border-r px-3 py-1 hover:overflow-y-auto'>
					<MenuList>
						<MenuGroup>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<House />
									<p>Home</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<TrendingUp />
									<p>Popular</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<Telescope />
									<p>Explore</p>
								</div>
							</MenuItem>
						</MenuGroup>
						<MenuSeperator />
						<MenuGroup>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<House />
									<p>Home</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<TrendingUp />
									<p>Popular</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<Telescope />
									<p>Explore</p>
								</div>
							</MenuItem>
						</MenuGroup>
						<MenuSeperator />
						<MenuGroup>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<House />
									<p>Home</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<TrendingUp />
									<p>Popular</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<Telescope />
									<p>Explore</p>
								</div>
							</MenuItem>
						</MenuGroup>
						<MenuSeperator />
						<MenuGroup>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<House />
									<p>Home</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<TrendingUp />
									<p>Popular</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<Telescope />
									<p>Explore</p>
								</div>
							</MenuItem>
						</MenuGroup>
						<MenuSeperator />
						<MenuGroup>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<House />
									<p>Home</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<TrendingUp />
									<p>Popular</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<Telescope />
									<p>Explore</p>
								</div>
							</MenuItem>
						</MenuGroup>
						<MenuSeperator />
						<MenuGroup>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<House />
									<p>Home</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<TrendingUp />
									<p>Popular</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<Telescope />
									<p>Explore</p>
								</div>
							</MenuItem>
						</MenuGroup>
						<MenuSeperator />
						<MenuGroup>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<House />
									<p>Home</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<TrendingUp />
									<p>Popular</p>
								</div>
							</MenuItem>
							<MenuItem>
								<div className='flex w-full flex-row space-x-5'>
									<Telescope />
									<p>Explore</p>
								</div>
							</MenuItem>
						</MenuGroup>
						<MenuSeperator />
					</MenuList>
				</aside>
			</div>
			<span className='flex flex-row items-center justify-start gap-1'>
				<IconButton
					className='md:hidden'
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
			</span>
		</>
	);
};
