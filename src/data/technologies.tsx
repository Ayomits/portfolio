import { DiJavascript } from "react-icons/di";
import { FaDocker, FaVuejs } from "react-icons/fa";
import {
  SiNestjs,
  SiNuxtdotjs,
  SiReact,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const technologies = [
  {
    name: "JavaScript",
    icon: <DiJavascript className="size-16" />,
    from: "#F7DF1E",
    to: "#E5C81A",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="size-16" />,
    from: "#3178C6",
    to: "#225EA8",
  },
  {
    name: "React",
    icon: <SiReact className="size-16" />,
    from: "#61DAFB",
    to: "#21A1C4",
  },
  {
    name: "Nextjs",
    icon: <TbBrandNextjs className="size-16" />,
    from: "#000000",
    to: "#2E2E2E",
  },
  {
    name: "Vue",
    icon: <FaVuejs className="size-16" />,
    from: "#42B883",
    to: "#35495E",
  },
  {
    name: "Nuxtjs",
    icon: <SiNuxtdotjs className="size-16" />,
    from: "#00DC82",
    to: "#108775",
  },
  {
    name: "Nestjs",
    icon: <SiNestjs className="size-16" />,
    from: "#E0234E",
    to: "#B31245",
  },
  {
    name: "Redis",
    icon: <SiRedis className="size-16" />,
    from: "#D82C20",
    to: "#911914",
  },
  {
    name: "Docker",
    icon: <FaDocker className="size-16" />,
    from: "#2496ED",
    to: "#147BBC",
  },
] as const;
