import { motion } from "motion/react";
import { Button } from "../../shared/ui/button";
import { DISCORD_URL } from "../../data/social-links";

const sectionVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center flex-col-reverse gap-4 lg:gap-6 lg:flex-row"
    >
      <motion.div
        variants={childVariants}
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
        className="flex flex-col shrink-0 gap-4 font-bold"
      >
        <h1 className="text-[2.5rem]">Привет, я Дима</h1>

        <div className="flex text-foreground-active font-normal flex-col gap-4 text-left lg:max-w-[25rem]">
          <p>
            <span className="font-bold text-foreground">
              Фронтенд разработчик
            </span>{" "}
            с 2 годами опыта в программировании
          </p>
          <p>
            Начинал с простеньких чат ботов, а сейчас занимаюсь Web разработкой
          </p>
        </div>
        <motion.a
          href={DISCORD_URL}
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg" color="primary">
            Связаться
          </Button>
        </motion.a>
      </motion.div>

      <motion.img
        src="/hero.webp"
        loading="lazy"
        initial={{ opacity: 0, y: -100, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full h-auto size-full rounded-xl"
      />
    </motion.section>
  );
}
