import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { nextuiThemeConfig, responsiveStylingConfig, tailwindExtendedThemeConfig } from "./config/theme";
import responsiveStyling from "./plugins/responsiveStyling";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: tailwindExtendedThemeConfig
    },
    darkMode: "class",
    plugins: [
        nextui(nextuiThemeConfig),
        responsiveStyling(responsiveStylingConfig)
    ],
};

export default config;
