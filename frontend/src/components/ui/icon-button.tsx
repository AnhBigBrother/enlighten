import { cn } from "@/lib/utils";
import React from "react";

export const IconButton = React.forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...buttonProps }, ref?) => {
	return (
		<button
			ref={ref}
			className={cn(
				"hover:bg-app-foreground flex h-fit w-fit flex-shrink-0 flex-row items-center rounded-full p-2",
				className,
			)}
			{...buttonProps}>
			{children}
		</button>
	);
});
