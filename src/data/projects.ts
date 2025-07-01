import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Animori",
    img: "/animori-logo.webp",
    link: "https://animori.onetraf.com"
  },
  {
    name: "Ayocord",
    img: "/ayocord.svg",
    link: "https://ayocord.tech"
  },
  {
    name: "Fear",
    img: "/fear-logo.webp",
    link: "https://discord.gg/feargames"
  },
  {
    name: "Portfolio",
    img: "/hero.webp",
    link: "/"
  },
] as const
