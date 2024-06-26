import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import "react-toastify/dist/ReactToastify.css";
import "@styles/globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
// import { Navbar } from "@/components/navbar";
import type { Viewport } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "@styles/carousel.css";
import { Providers } from "./providers";
import { Flip, ToastContainer } from "react-toastify";

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
					"min-h-screen bg-background font-sans antialiased overflow-x-hidden",
					fontSans.variable,
				)}
			>
				<Providers
					themeProps={{ attribute: "class", defaultTheme: "light" }}
				>
					<ToastContainer
						position="top-center"
						autoClose={3000}
						hideProgressBar
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
						transition={Flip}
					/>
					<div className="relative items-center flex flex-col h-screen">
						{<Navbar />}
						<main className="min-w-full flex-grow">{children}</main>
						{<Footer />}
					</div>
				</Providers>
			</body>
		</html>
	);
}
