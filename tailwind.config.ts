import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { nextuiThemeConfig, tailwindExtendThemeConfig } from "./config/theme";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                "side-margin-mobile": "1rem",
                "side-margin": "8.375rem", 
            }
        },
        dropShadow: {
            "3xl": "0 4px 2px rgba(0, 0, 0, 0.25)",
            "none": "0 0 #0000"
        },
        screens: {
            "mobile": "812px",
        }
    },
    darkMode: "class",
    plugins: [
        nextui(nextuiThemeConfig),
    ],
};

export default config;
