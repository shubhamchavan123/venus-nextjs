import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  
  {
    label: "Blog",
    href: "/blog",
    submenu: [
      { label: "Blog list", href: "/blog" },
      { label: "Blog details", href: "/blog/Blog_1" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Documentation", href: "/documentation" },
];  