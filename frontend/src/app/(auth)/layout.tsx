import { _get } from "@/lib/fetch";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = cookies();
	const access_token = cookieStore.get("access_token")?.value;
	const refresh_token = cookieStore.get("refresh_token")?.value;
	const session = await _get("user/session", {
		authorization: access_token,
		searchParams: { refresh_token: refresh_token || "" },
	}).catch((err) => console.error(err));
	if (session?.user) redirect("/");

	return (
		<div className='bg-app-foreground grid h-screen w-screen place-content-center '>
			{children}
		</div>
	);
}
