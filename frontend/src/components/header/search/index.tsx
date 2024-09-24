"use client";

import React, { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IconButton } from "@/components/header/icon-button";
import { FaXmark } from "react-icons/fa6";

export const Search = () => {
	const [search, setSearch] = useState<string>("");
	const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
	};
	return (
		<search className='border-app bg-app-foreground min-w-20 max-w-[32rem] flex-grow overflow-hidden rounded-md border'>
			<form className='flex h-10 w-full flex-row items-center justify-center pr-3'>
				<IconButton onClick={(e) => handleSearch(e)}>
					<HiMiniMagnifyingGlass className='h-6 w-10' />
				</IconButton>
				<div className='border-app h-[60%] w-1 border-l'></div>
				<input
					className='h-full flex-grow rounded-r-xl bg-transparent px-3 outline-none'
					placeholder='Search...'
					size={1}
					value={search}
					onChange={(e) => setSearch(e.target.value)}></input>
				{search && (
					<button
						className='bg-app rounded-full p-1'
						type='button'
						onClick={() => setSearch("")}>
						<FaXmark className='h-3 w-3' />
					</button>
				)}
			</form>
		</search>
	);
};
