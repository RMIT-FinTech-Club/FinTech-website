import plugin from "tailwindcss/plugin";
import { CSSRuleObject, KeyValuePair, ResolvableTo, ScreensConfig } from "tailwindcss/types/config";

type FontSizeType = KeyValuePair<
    string,
    | string
    | [fontSize: string, lineHeight: string]
    | [
        fontSize: string,
        configuration: Partial<{
            lineHeight: string
            letterSpacing: string
            fontWeight: string | number
        }>
    ]
>

// Type guard for [fontSize: string, lineHeight: string]
function isFontSizeLineHeightTuple(value: any): value is [string, string] {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === 'string' && typeof value[1] === 'string';
}

// Type guard for the more complex tuple
function isComplexTuple(value: any): value is [string, Partial<{ lineHeight: string, letterSpacing: string, fontWeight: string | number }>] {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === 'string' && typeof value[1] === 'object' && !Array.isArray(value[1]);
}

/**
 * Represents a mapping of class names to their corresponding styles.
 */
type ConfigUtilities = {
    fontSize: ResolvableTo<FontSizeType>
}

type ConfigDefaultBreakpoints = "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Represents the configuration for responsive styling.
 */
type ResponsiveStylingConfig = {
    [breakpoint: string | ConfigDefaultBreakpoints]: ConfigUtilities
};

/**
 * Replaces underscores and spaces in a string with dashes.
 * 
 * @param str - The input string.
 * @returns The modified string with dashes.
 */
const useDash = (str: string): string => {
    return str.replace(/[_\s]/g, "-");
}

/**
 * A Tailwind CSS plugin that allows for responsive styling.
 * 
 * @param config - The configuration for responsive styling.
 * @returns The Tailwind CSS plugin function.
 */
const responsiveStyling = plugin.withOptions<ResponsiveStylingConfig>(
    (config) => {
        return ({ addUtilities, theme, e }) => {
            const screens = theme("screens", {}) as Record<string, string>;
            // console.log(screens);

            let utilities: CSSRuleObject = {};

            Object.entries(config).forEach(([breakpoint, utilitiesConfig]) => {
                const breakpointSize = screens[breakpoint];

                if (!breakpointSize) {
                    console.warn(`No screen found for breakpoint "${breakpoint}".`);
                    return;
                }

                // Font size
                const fontSizeUtilitiesObj = utilitiesConfig.fontSize;
                Object.entries(fontSizeUtilitiesObj).forEach(([className, fontSize]) => {
                    // Check if the font size is a string

                    const classKey = `.${e(`text-${className}`)}`;

                    if (!utilities[classKey]) {
                        utilities[classKey] = {};
                    }

                    if (typeof fontSize === "string") {
                        utilities[classKey] = {
                            [`@media (min-width: ${breakpointSize})`]: {
                                fontSize: fontSize
                            },
                        };
                    } else if (isFontSizeLineHeightTuple(fontSize)) {
                        utilities[classKey] = {
                            [`@media (min-width: ${breakpointSize})`]: {
                                fontSize: fontSize[0],
                                lineHeight: fontSize[1]
                            }
                        };
                    } else if (isComplexTuple(fontSize)) {
                        const fontConfig = fontSize[1];

                        let { lineHeight, letterSpacing, fontWeight } = fontConfig;
                        lineHeight = lineHeight ?? "1";
                        letterSpacing = letterSpacing ?? "0em";
                        const fontWeightStr = fontWeight?.toString() ?? "400";

                        utilities[classKey] = {
                            [`@media (min-width: ${breakpointSize})`]: {
                                fontSize: fontSize[0],
                                lineHeight: lineHeight,
                                letterSpacing: letterSpacing,
                                fontWeight: fontWeightStr
                            }
                        };
                    }

                    addUtilities(utilities, {
                        respectPrefix: false,
                        respectImportant: false
                    });
                    
                })
            })
        };
    }
);

export default responsiveStyling;
export type { ResponsiveStylingConfig, ConfigUtilities, FontSizeType };
