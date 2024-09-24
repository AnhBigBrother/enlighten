import React from "react";
import { Search } from "@/components/header/search";
import { Left } from "@/components/header/left";
import { Right } from "@/components/header/right";

const PageHeader = () => {
	return (
		<header className='bg-app sticky left-0 top-0 z-10 h-16 w-full px-1 shadow-md sm:px-3 xl:px-[20vw]'>
			<nav className='relative flex h-full w-full flex-row items-center justify-between gap-3 md:gap-10'>
				<Left />
				<Search />
				<Right />
			</nav>
		</header>
	);
};

export default PageHeader;