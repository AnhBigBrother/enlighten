import React from "react";
import { Search } from "@/components/Header/Search";
import { HeaderLeft } from "@/components/Header/HeaderLeft";
import { HeaderRight } from "@/components/Header/HeaderRight";

const PageHeader = () => {
	return (
		<header className='sticky left-0 top-0 z-10 h-16 w-full border-b border-neutral-400 bg-neutral-100 px-1 sm:px-3 xl:px-[20vw]'>
			<nav className='relative flex h-full w-full flex-row items-center justify-between gap-3 md:gap-10'>
				<HeaderLeft />
				<Search />
				<HeaderRight />
			</nav>
		</header>
	);
};

export default PageHeader;
