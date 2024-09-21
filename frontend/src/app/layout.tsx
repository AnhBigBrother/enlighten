import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const merriweather = localFont({
	src: "./merriweather.ttf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Enlighten",
	description: "It is not the answer that enlightens, but the question.",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/images/icon-light.png",
				href: "/images/icon-light.png",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/images/icon-dark.png",
				href: "/images/icon-dark.png",
			},
		],
	},
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={merriweather.className}>{children}</body>
		</html>
	);
}
