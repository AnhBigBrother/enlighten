import PageHeader from "@/components/Header";
import React from "react";

function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<PageHeader />
			<div className='min-h-[calc(100vh-4rem)] bg-neutral-200 xl:px-[20vw]'>
				<div className='w-full md:pl-64'>
					<main className='flex w-full flex-col justify-start p-2 xl:p-3'>{children}</main>
				</div>
			</div>
		</>
	);
}

export default RootLayout;
