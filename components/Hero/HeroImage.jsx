import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import heroImage from "@public/hero/hero-image.svg";

const MotionImage = motion(Image);

const lineVariants = {
  hidden: {
    height: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  show: {
    height: "140%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const gridVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
    bottom: "50%",
    right: "50%",
    x: "50%",
    y: "50%",
  },
  show: {
    opacity: 1,
    bottom: "50%",
    right: "50%",
    x: "50%",
    y: "50%",
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
  move: {
    opacity: 1,
    bottom: 0,
    right: 0,
    x: "0",
    y: "0",
    transition: {
      delay: 1,
      ease: "easeInOut",
      duration: 3,
    },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.005,
    },
  },
  rotate: {
    rotate: 40,
    transition: { delay: 3, duration: 1, ease: "easeInOut" },
  },
};

const HeroImage = () => {
  const [step, setStep] = useState(0);
  const totalCells = 20 * 20;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={step === 0 ? "show" : "move"}
      className="absolute w-[919px] h-[902px] hidden md:block"
    >
      <MotionImage
        src={heroImage}
        alt="hero-image"
        width={919}
        height={902}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="relative"
      />
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate={["show", "rotate"]}
        onAnimationComplete={() => setStep(1)}
        className={`absolute inset-0 z-10 flex w-[1400px] h-[1400px] left-1/2  translate-y-1/2`}
      >
        <motion.div
          variants={lineVariants}
          className="bg-light-primary min-w-2 w-2 h-[140%] shadow-sm"
        ></motion.div>
        <div className="grid grid-cols-20">
          {Array.from({ length: totalCells }, (_, i) => (
            <motion.div
              key={i}
              variants={gridVariants}
              className="w-20 h-20 bg-[#ffffff01] backdrop-blur-xl shrink-0"
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
