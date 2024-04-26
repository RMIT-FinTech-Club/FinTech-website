import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import "@styles/globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
// import { Navbar } from "@/components/navbar";
import type { Viewport } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
		{ media: "(prefers-color-scheme: tokyo)", color: "red" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<Providers
					themeProps={{ attribute: "class", defaultTheme: "light" }}
				>
					<div className="relative items-center flex flex-col h-screen">
						{/* <Navbar /> */}
						<main className="container min-w-full flex-grow">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<span className="text-default-600">
									Powered by
								</span>
								<p className="text-primary">Jacky Do</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
