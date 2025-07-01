import { Discord } from "../shared/icons/discord";
import { Github } from "../shared/icons/github";
import type { SocialLink } from "./types";

export const DISCORD_URL = "https://discord.com/users/1129162686194790572";
export const GH_URL = "https://github.com/Ayomits";

export const socialLinks: SocialLink[] = [
  {
    icon: <Discord />,
    link: DISCORD_URL,
  },
  {
    icon: <Github />,
    link: GH_URL,
  },
];
