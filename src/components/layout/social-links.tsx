import { motion } from "motion/react";
import { socialLinks } from "../../data/social-links";

export function SocialLinks() {
  return (
    <ul className="flex gap-2">
      {socialLinks.map((item) => (
        <motion.li
          whileHover={{
            scale: 1.25,
          }}
        >
          <a target="_blank" href={item.link}>
            {item.icon}
          </a>
        </motion.li>
      ))}
    </ul>
  );
}
