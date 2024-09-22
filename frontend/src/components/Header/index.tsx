import React from "react";
import { Search } from "@/components/Header/Search";
import { Left } from "@/components/Header/Left";
import { Right } from "@/components/Header/Right";

const PageHeader = () => {
	return (
		<header className='sticky left-0 top-0 z-10 h-16 w-full border-b bg-neutral-200 px-1 shadow-md sm:px-3 xl:px-[20vw]'>
			<nav className='relative flex h-full w-full flex-row items-center justify-between gap-3 md:gap-10'>
				<Left />
				<Search />
				<Right />
			</nav>
		</header>
	);
};

export default PageHeader;
