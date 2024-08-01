import Image from "next/image";
import { motion } from "framer-motion";
import showButton from "@public/specialization/triangle-button.svg";
import hideButton from "@public/specialization/triangle-button-hide.svg";
import shadow from "@public/specialization/shadow-button.svg";
import shadowHide from "@public/specialization/shadow-hide.svg";

const MotionImage = motion(Image);

const TriangleButton = ({ type = "show", onClick }) => {
  const buttonVariants = {
    initial: { y: 0 },
    float: {
      y: ["50%", "40%"],
      transition: {
        y: {
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
    },
    pressed: { scale: 0.9, y: "60%" },
  };

  const shadowVariants = {
    initial: { scale: 1, y: 0 },
    float: {
      scale: [0.9, 1],
      y: "-30%",
      transition: {
        scale: {
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
    },
    pressed: { scale: 0.9, y: "-30%" },
  };

  return (
    <motion.div className="relative flex justify-center items-center flex-col min-h-[124px] h-[124px] self-stretch">
      {type === "show" ? (
        <>
          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate="float"
            whileTap="pressed"
            className="relative z-10"
            onClick={onClick}
          >
            <p className="text-lg font-bold absolute left-1/2 -translate-x-1/2 top-3 z-20">
              Info
            </p>
            <Image src={showButton} alt="triangle button" />
          </motion.div>
          <MotionImage
            src={shadow}
            alt="shadow button"
            variants={shadowVariants}
            initial="initial"
            animate="float"
            whileTap="pressed"
          />
        </>
      ) : (
        <>
          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate="float"
            whileTap="pressed"
            className="relative z-10"
            onClick={onClick}
          >
            <p className="text-lg font-bold absolute left-1/2 -translate-x-1/2 top-5 z-20">
              Hide
            </p>
            <Image src={hideButton} alt="triangle button" />
          </motion.div>
          <MotionImage
            src={shadowHide}
            alt="shadow button"
            variants={shadowVariants}
            initial="initial"
            animate="float"
            whileTap="pressed"
          />
        </>
      )}
    </motion.div>
  );
};

export default TriangleButton;
