import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import heroImage from "@public/hero/hero-image.svg";

const MotionImage = motion(Image);

const HeroImageMobile = () => {
  const totalCells = 15 * 15;

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      top: 0,
      left: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      bottom: 0,
      left: "50%",
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  const gridContainerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.01,
      },
    },
    rotate: {
      rotate: 40,
      transition: { delay: 3, duration: 1, ease: "easeInOut" },
    },
  };

  const lineVariants = {
    hidden: {
      height: 0,
    },
    show: {
      height: "1400px",
      transition: {
        duration: 2,
        delay: 1,
        ease: "easeOut",
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

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="absolute top-0 left-0 w-screen h-screen md:hidden block"
    >
      <MotionImage
        src={heroImage}
        alt="hero-image"
        width="100%"
        height="100%"
        variants={imageVariants}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      />
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate={["show", "rotate"]}
        className="absolute inset-0 z-10 flex w-[1000px] h-fit left-1/2"
      >
        <motion.div
          variants={lineVariants}
          className="bg-light-primary min-w-1 w-1 shadow-sm"
        ></motion.div>
        <div className="flex flex-wrap items-start">
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

export default HeroImageMobile;
