"use client"

import type * as React from "react"
import { NextUIProvider } from "@nextui-org/system"
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export interface ProvidersProps {
	children: React.ReactNode
	themeProps?: Omit<ThemeProviderProps, "children">
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
		</NextUIProvider>
	);
}
