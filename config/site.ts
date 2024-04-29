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
            href: "/about",
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
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev"
    },
};