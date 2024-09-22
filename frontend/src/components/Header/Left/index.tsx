"use client";

import { IconButton } from "@/components/Header/IconButton";
import { SideMenu } from "@/components/Header/Left/SideMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { Menu } from "lucide-react";

export const Left = () => {
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
				<SideMenu />
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
						src={"/images/icon-dark.png"}
						alt='Enlighten'
						height={192}
						width={192}
						className='h-10 w-10 rounded-md border'
					/>
					<h1 className='hidden h-7 text-2xl font-bold text-black sm:inline-block'>
						Enlighten
					</h1>
				</Link>
			</span>
		</>
	);
};
