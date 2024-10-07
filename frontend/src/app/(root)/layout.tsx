import PageHeader from "@/components/_layout/header";
import { Button } from "@/components/ui/button";
import { MenuGroupHeader, MenuList, MenuSeperator } from "@/components/ui/menu";
import React from "react";

function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<PageHeader />
			<div className='min-h-[calc(100vh-4rem)] xl:px-5'>
				<div className='flex w-full flex-col items-center justify-start xl:pl-72'>
					<div className='flex w-full max-w-[72rem] flex-row justify-start space-x-4 px-2'>
						<main className='flex-grow'>{children}</main>
						<aside className='hidden h-[calc(100vh-4rem)] w-80 flex-shrink-0 overflow-auto py-4 lg:block'>
							<MenuList className='bg-app-foreground rounded-lg p-3 text-sm'>
								<div className='flex w-full items-center justify-between'>
									<h3 className='px-2 font-bold'>RECENTS</h3>
									<Button
										variant='link'
										className='text-blue-500'>
										Clear
									</Button>
								</div>
							</MenuList>
						</aside>
					</div>
				</div>
			</div>
		</>
	);
}

export default RootLayout;
