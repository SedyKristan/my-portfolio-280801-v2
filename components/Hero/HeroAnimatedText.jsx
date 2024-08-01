import { motion } from "framer-motion";
import ButtonGroup from "../ButtonGroup";
import Image from "next/image";

import logo from "@public/hero/logo.svg";

const HeroAnimatedText = ({ textConfig }) => {
  const {
    headingAnswer,
    headingQuestion,
    subheadingAnswer,
    subheadingQuestion,
    button,
  } = textConfig;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 6, duration: 0.5 }}
      className="mx-auto mt-12 md:mt-0 h-full w-hero flex flex-col md:justify-center md:items-start self-stretch z-20"
    >
      <div className="flex self-stretch flex-col justify-between md:justify-center items-start gap-8 md:self-auto">
        <div className="flex md:w-[536px] flex-col justify-center items-center md:items-start gap-8 text-typography-light-on-color">
          <Image
            src={logo}
            alt="my-personal-logo"
            width="100%"
            height="100%"
            className="h-6 w-fit md:h-10"
          />
          <div className="flex flex-col gap-4 self-stretch text-center md:text-left">
            <h2 className="">{subheadingQuestion}</h2>
            <div className="text-shadow-sm gap-1 md:gap-3 flex flex-col self-stretch">
              <h1
                dangerouslySetInnerHTML={{
                  __html: headingQuestion,
                }}
                className="display"
              />
              <h1>{textConfig?.headingAnswer}</h1>
            </div>
            <h4 dangerouslySetInnerHTML={{ __html: subheadingAnswer }} />
          </div>
          <ButtonGroup buttons={button} />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroAnimatedText;
