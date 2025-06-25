import type { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../shared/ui/carousel";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "../../shared/lib/cn";
import { technologies } from "../../data/technologies";

interface TechnologyProps extends HTMLMotionProps<"div"> {
  from: string;
  to: string;
  name: string;
  icon: ReactNode;
}

export function Technology({
  from,
  to,
  name,
  icon,
  className,
  ...props
}: TechnologyProps) {
  return (
    <motion.div
      viewport={{
        once: true,
        amount: 0.2,
      }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      whileHover={{
        scale: 1.1,
      }}
      style={{
        background: `linear-gradient(to top, ${from}, ${to})`,
      }}
      className={cn(
        "flex flex-col size-[200px] justify-center items-center gap-6 rounded-xl",
        className
      )}
      {...props}
    >
      <h4 className="text-2xl">{name}</h4>
      {icon}
    </motion.div>
  );
}

const carouselTechnologiesVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function Technologies() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-12"
    >
      <motion.h3
        variants={carouselTechnologiesVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9, duration: 0.5, ease: "easeInOut" }}
        className="text-2xl font-semibold"
      >
        Технологии
      </motion.h3>
      <motion.div
        variants={carouselTechnologiesVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9, duration: 0.5, ease: "easeInOut" }}
        className="max-w-full"
      >
        <Carousel
          opts={{
            dragFree: true,
          }}
        >
          <CarouselContent className="py-4">
            {technologies.map((techonology, idx) => (
              <CarouselItem className="px-6 basis-[224px]" key={idx}>
                <Technology {...techonology} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden size-16 lg:flex -translate-y-1/2" />
          <CarouselNext className="hidden size-16 lg:flex -translate-y-1/2" />
        </Carousel>
      </motion.div>
    </motion.section>
  );
}
