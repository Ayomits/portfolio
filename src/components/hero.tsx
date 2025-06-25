import { motion } from "motion/react";

const sectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center flex-col-reverse gap-4 lg:gap-6 lg:flex-row"
    >
      <div className="flex flex-col shrink-0 gap-4 font-bold">
        <motion.h1 variants={childVariants} className="text-[2.5rem]">
          Привет, я Дима
        </motion.h1>

        <motion.div
          className="flex font-normal flex-col gap-4 text-left lg:max-w-[25rem]"
          variants={childVariants}
        >
          <motion.p variants={childVariants}>
            <span className="font-bold">Фронтенд разработчик</span> с 2 годами
            опыта в программировании
          </motion.p>
          <motion.p variants={childVariants}>
            Начинал с простеньких чат ботов, а сейчас занимаюсь Web разработкой
          </motion.p>
          <motion.p variants={childVariants}>
            Есть желание поучаствовать в каком-нибудь интересном проекте, когда
            будет больше опыта
          </motion.p>
        </motion.div>
      </div>

      <motion.img
        src="/hero.webp"
        loading="lazy"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="w-full h-auto size-full rounded-xl"
      />
    </motion.section>
  );
}
