"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		const [showPassword, setShowPassword] = React.useState(false);
		const disabled = props.value === "" || props.value === undefined || props.disabled;
		return (
			<div className='relative'>
				<input
					type={showPassword ? "text" : "password"}
					className={cn(
						"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-12 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
						className,
					)}
					ref={ref}
					{...props}
				/>
				<Button
					type='button'
					variant='ghost'
					size='sm'
					className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
					onClick={() => setShowPassword((prev) => !prev)}
					disabled={disabled}>
					{showPassword && !disabled ? <Eye /> : <EyeOff />}
					<span className='sr-only'>{showPassword ? "Hide password" : "Show password"}</span>
				</Button>
			</div>
		);
	},
);
PasswordInput.displayName = "PasswordInput";

export { Input, PasswordInput };
