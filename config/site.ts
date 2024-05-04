export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "FinTech",
    description: "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About Us",
            href: "/about-us",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Events",
            href: "/events",
        },
        {
            label: "Join us",
            href: "/join-us",
        },
    ],
    links: {
        github: "https://github.com/RMIT-FinTech-Club/FinTech-website",
        discord: "https://discord.gg/GHDEEhEGZa",
        facebook: "https://www.facebook.com/rmitfintechclub"
    },
};