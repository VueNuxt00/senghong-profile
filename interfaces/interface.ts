import { useDark, useToggle } from "@vueuse/core";

type typLink = {
  name: string;
  href: string;
};
export const links: typLink[] = [
  { name: "home", href: "/" },
  { name: "Skills", href: "/skill" },
  { name: "Contact Me", href: "/contact" },
  { name: "Services", href: "/service" },
  { name: "My Works", href: "/mywork" },
];

// for themes toggle
export const isDark = useDark();
export const toggleDark = useToggle(isDark);

export const myInfo = [
  { title: "Phone", data: "096 863 4125" },
  { title: "Email", data: "senghonghang@gmail.com" },
  { title: "Address", data: "Kampong Cham" },
];
