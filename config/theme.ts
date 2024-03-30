import { type NextUIPluginConfig } from "@nextui-org/react";

export const themeConfig = {
    prefix: "fintech",
    addCommonColors: false,
    defaultTheme: "light",
    defaultExtendTheme: "light",
    themes: {
        light: {
            colors: {
                test: "#ff0000",
            }
        },
        dark: {
            colors: {
                test: "#00ff00",
            }
        },
    }
} as NextUIPluginConfig;
