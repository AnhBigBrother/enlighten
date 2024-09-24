import PageHeader from "@/components/header";
import React from "react";

function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<PageHeader />
			<div className='min-h-[calc(100vh-4rem)] xl:px-[20vw]'>
				<div className='w-full md:pl-72'>
					<main className='flex w-full flex-col justify-start px-2 py-5 xl:px-3'>
						{children}
					</main>
				</div>
			</div>
		</>
	);
}

export default RootLayout;
