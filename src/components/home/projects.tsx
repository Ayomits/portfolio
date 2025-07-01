import { motion } from "motion/react";
import { BiChevronRight } from "react-icons/bi";
import { projects } from "../../data/projects";
import { fadeAnimations } from "../../shared/lib/animations/fade";

interface ProjectItemProps {
  img: string;
  name: string;
  link: string;
}

function Project({ img, name, link }: ProjectItemProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      viewport={{ amount: 0.2, once: true }}
      variants={fadeAnimations.fadeYDown}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        scale: 1.05,
      }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="w-full h-[7.5rem] px-8 flex items-center justify-between bg-secondary rounded-4xl hover:bg-secondary-hover active:bg-secondary-active"
    >
      <div className="flex items-center gap-3">
        <img
          className="object-cover size-16 rounded-lg"
          src={img}
          loading="lazy"
          width={64}
          height={64}
        />
        {name}
      </div>
      <BiChevronRight className="size-8" />
    </motion.a>
  );
}

const projectSectionVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function Projects() {
  return (
    <motion.section
      viewport={{ once: true, amount: 0.2 }}
      variants={projectSectionVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 1 }}
      className="max-w-full flex flex-col items-center gap-8"
    >
      <motion.h3 className="text-2xl font-semibold">Проекты</motion.h3>
      <motion.ul className="w-full flex flex-col gap-6 items-center">
        {projects.map((project, idx) => (
          <motion.li
            key={idx}
            initial={{
              y: 100 + 10 * idx,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.3 * idx, duration: 0.3 }}
            className="w-full h-[7.5rem]"
          >
            <Project {...project} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
