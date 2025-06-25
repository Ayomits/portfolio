import { motion } from "motion/react";

export function Logo() {
  return (
    <motion.a
      whileHover={{
        scale: 1.1
      }}
      href="/"
      className="bg-gradient-to-t text-2xl from-primary to-primary-active bg-clip-text text-transparent"
    >
      Ayo
    </motion.a>
  );
}
