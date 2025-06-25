import { motion } from "motion/react";
import { DISCORD_URL } from "../../data/social-links";
import { SocialLinks } from "./social-links";

export const Footer = () => {
  return (
    <footer className="h-[6.25rem] w-full px-14 bg-secondary rounded-4xl flex items-center justify-between">
      <motion.a
        whileHover={{
          scale: 1.1,
        }}
        href={DISCORD_URL}
        className="bg-gradient-to-t text-2xl from-primary to-primary-active bg-clip-text text-transparent"
      >
        Contact me
      </motion.a>
      <SocialLinks />
    </footer>
  );
};
