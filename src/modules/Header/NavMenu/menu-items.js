import { nanoid } from "nanoid"

export const menuItems = [
    {
        id: nanoid(),
        title: "Main Page",
        href: "/"
    },
    {
        id: nanoid(),
        title: "Categories",
        href: "/categories"
    },
    {
        id: nanoid(),
        title: "All products",
        href: "/products/all"
    },
    {
        id: nanoid(),
        title: "All sales",
        href: "/sales"
    },
]