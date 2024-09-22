import PageHeader from "@/components/Header";
import { UserContextProvider } from "@/contexts/userContext";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<UserContextProvider>
			<PageHeader />
			<div className='min-h-[calc(100vh-4rem)] bg-neutral-300 xl:px-[20vw]'>
				<Toaster />
				<div className='w-full md:pl-72'>
					<main className='flex w-full flex-col justify-start px-2 py-5 xl:px-3'>
						{children}
					</main>
				</div>
			</div>
		</UserContextProvider>
	);
}

export default RootLayout;
