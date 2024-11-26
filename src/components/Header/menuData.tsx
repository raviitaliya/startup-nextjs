import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Branding",
        path: "/about",
        newTab: false,
      },
      {
        id: 41,
        title: "Web Development",
        path: "/about",
        newTab: false,
      },
      {
        id: 41,
        title: "digital marketing",
        path: "/about",
        newTab: false,
      },
      {
        id: 41,
        title: "social media management", 
        path: "/about",
        newTab: false,
      },
      {
        id: 44,
        title: "contact marketing",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 41,
        title: "business automation",
        path: "/about",
        newTab: false,
      },
    ],
  },
];
export default menuData;
