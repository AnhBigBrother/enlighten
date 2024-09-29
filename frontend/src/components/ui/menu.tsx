import { cn } from "@/lib/utils";
import React from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export const MenuList = React.forwardRef<HTMLMenuElement, Props>(
	({ children, className }, ref) => {
		return (
			<menu
				className={cn("flex h-fit w-full flex-col items-start justify-start", className)}
				ref={ref}>
				{children}
			</menu>
		);
	},
);

export const MenuGroup = React.forwardRef<HTMLDivElement, Props>(
	({ children, className }, ref) => {
		return (
			<div
				className={cn("flex h-fit w-full flex-col gap-0", className)}
				ref={ref}>
				{children}
			</div>
		);
	},
);

export const MenuItem = React.forwardRef<HTMLLIElement, Props & { active?: boolean }>(
	({ children, className, active }, ref) => {
		return (
			<li
				className={cn(
					"hover:bg-app w-full cursor-pointer rounded-md p-2",
					className,
					active && "bg-app",
				)}
				ref={ref}>
				{children}
			</li>
		);
	},
);

export const MenuSeperator = () => {
	return <div className='border-app my-5 w-full border'></div>;
};
