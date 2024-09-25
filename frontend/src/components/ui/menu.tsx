import { cn } from "@/lib/utils";
import React from "react";

type Props = {
	children: React.ReactNode;
};

export const MenuList = ({ children }: Props) => {
	return (
		<menu className='flex h-fit w-full flex-col items-start justify-start'>{children}</menu>
	);
};

export const MenuGroup = ({ children }: Props) => {
	return <div className='flex h-fit w-full flex-col gap-0'>{children}</div>;
};

export const MenuItem = ({
	children,
	active = false,
}: {
	children: React.ReactNode;
	active?: boolean;
}) => {
	return (
		<li className={cn("hover:bg-app w-full cursor-pointer rounded-md p-2", active && "bg-app")}>
			{children}
		</li>
	);
};

export const MenuSeperator = () => {
	return <div className='border-app my-5 w-full border'></div>;
};
