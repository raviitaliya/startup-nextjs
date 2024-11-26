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
        path: "/branding",
        newTab: false,
      },
      {
        id: 41,
        title: "Web Development",
        path: "/webdevelopment",
        newTab: false,
      },
      {
        id: 41,
        title: "digital marketing",
        path: "/digitalmarketing",
        newTab: false,
      },
      {
        id: 41,
        title: "social media management", 
        path: "/socialmediamanagement",
        newTab: false,
      },
      {
        id: 44,
        title: "contact marketing",
        path: "/contactmarketing",
        newTab: false,
      },
      {
        id: 41,
        title: "business automation",
        path: "/businessautomation",
        newTab: false,
      },
    ],
  },
];
export default menuData;
