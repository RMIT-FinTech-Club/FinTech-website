import plugin from "tailwindcss/plugin";

interface DynamicFontSizeOptions {
    [className: string]: string;
}

// interface DynamicFontSizeOptions {
//     baseFontSize: string;
//     fontSizeRatio: number;
//     breakpoints: string[];
// }

interface DynamicFontSizeConfig {
    [breakpoint: string]: DynamicFontSizeOptions;
}

const dynamicFontSize = (config?: DynamicFontSizeConfig): ReturnType<typeof plugin> => plugin(({ addUtilities, theme, e }) => {
    const screens = theme("screens") as { [breakpoint: string]: string }
    const dynamicSize: { [breakpoint: string]: DynamicFontSizeOptions } = theme('dynamicFontSize', {})

})

export default dynamicFontSize;
export { type DynamicFontSizeConfig };
