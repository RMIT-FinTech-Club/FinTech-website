import { Poppins as FontSans, Fira_Code as FontMono } from "next/font/google";

export const fontMono = FontMono({
  subsets: ["latin"],
//   weight: "500",
  variable: "--font-mono",
})

export const fontSans = FontSans({
    subsets: ["latin"],
    weight: "500",
    variable: "--font-mono",
  })
