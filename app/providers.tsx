"use client";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type * as React from "react";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: Omit<ThemeProviderProps, "children">;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter();
	const queryClient = new QueryClient()

	return (
		<NextUIProvider navigate={router.push}>
			<QueryClientProvider client={queryClient}>
				<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
			</QueryClientProvider>
		</NextUIProvider>
	);
}
