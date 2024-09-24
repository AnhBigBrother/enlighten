"use client";

import * as React from "react";
import { useTheme } from "next-themes";

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
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

export function DarkMode() {
	const { setTheme, theme } = useTheme();

	return (
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
					<div className='flex flex-col space-y-2'>
						<div className='flex items-center space-x-2'>
							<Checkbox
								id='light-mode'
								checked={theme === "light"}
								onClick={() => setTheme("light")}
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
					<div className='flex flex-col space-y-2'>
						<div className='flex items-center space-x-2'>
							<Checkbox
								id='dark-mode'
								checked={theme === "dark"}
								onClick={() => setTheme("dark")}
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
					<div className='flex flex-col space-y-2'>
						<div className='flex items-center space-x-2'>
							<Checkbox
								id='system-mode'
								checked={theme === "system"}
								onClick={() => setTheme("system")}
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
	);
}
