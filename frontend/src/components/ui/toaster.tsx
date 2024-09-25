"use client";

import { useToast } from "@/hooks/use-toast";
import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from "@/components/ui/toast";
import { TOAST_REMOVE_DELAY } from "@/constants";

export function Toaster() {
	const { toasts } = useToast();

	return (
		<ToastProvider duration={TOAST_REMOVE_DELAY}>
			{toasts.map(function ({ id, title, description, action, ...props }) {
				return (
					<Toast
						key={id}
						{...props}>
						<div className='grid gap-1'>
							{title && <ToastTitle>{title}</ToastTitle>}
							{description && <ToastDescription>{description}</ToastDescription>}
						</div>
						{action}
						<ToastClose />
					</Toast>
				);
			})}
			<ToastViewport />
		</ToastProvider>
	);
}
