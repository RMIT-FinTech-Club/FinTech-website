import { type NextUIPluginConfig } from "@nextui-org/react";

export const themeConfig = {
    prefix: "fintech",
    addCommonColors: false,
    defaultTheme: "light",
    defaultExtendTheme: "light",
    themes: {
        light: {
            colors: {
                background: {
                    DEFAULT: "#F9FAFB",
                    modal: "#979797",
                },
                text: {
                    black: "#000000",
                    gray: "#EBEBEB",
                },
                primary: {
                    yellow: {
                        50: "#FFF9E6",
                        100: "#FDF8E2",
                        200: "#FBF0C6",
                        300: "#F4E1A7",
                        400: "#EAD08D",
                        500: "#DCB968", // primary
                        600: "#BD974C",
                        700: "#9E7734",
                        800: "#7F5A21",
                        900: "#694513",
                        DEFAULT: "#DCB968",
                    },
                    blue: {
                        50: "#E9F0FF",
                        100: "#DCDFF7",
                        200: "#BBC0EE",
                        300: "#8C92CF",
                        400: "#5E649F",
                        500: "#2C305F", // primary
                        600: "#202351",
                        700: "#161944",
                        800: "#0E1037",
                        900: "#080A2D",
                        DEFAULT: "#2C305F",
                    },
                },
                secondary: {
                    yellow: "#F8DA92",
                    blue: "#97ABD6",
                },
                supporting: {
                    red: "#BB2649",
                    pink: "#EDCDC2",
                    lightpink: "#D4CACD",
                }
            },
            layout: {
                radius: {
                    DEFAULT: "16px",
                }, 
            },    
        },
        dark: {
            colors: {
                test: "#00ff00",
            }
        },
    }
} as NextUIPluginConfig;
