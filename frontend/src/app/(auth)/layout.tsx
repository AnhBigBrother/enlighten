"use client";

import { _get } from "@/lib/fetch";
import useUserStore from "@/stores/user-store";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const user = useUserStore.use.user();
	useLayoutEffect(() => {
		if (user) {
			redirect("/");
		}
	}, [user]);
	return (
		<div className='bg-app-foreground grid h-screen w-screen place-content-center '>
			{children}
		</div>
	);
}
