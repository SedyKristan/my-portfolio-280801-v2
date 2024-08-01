import { motion } from "framer-motion";

// DynamicTag Component
const DynamicTag = ({ tag: Tag, className, children }) => {
  return <Tag className={className}>{children}</Tag>;
};

const Wrapper = ({ children }) => {
  return <span className="inline-block">{children}</span>;
};

const HeroAnimatedText = ({ text, tag: Tag = "h1", className }) => {
  const itemVariant = {
    hidden: {
      y: "200%",
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.85,
      },
    },
    show: {
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
      },
    },
  };

  const splitWords = text.split(" ");
  const words = [];
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }
  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <div className="flex flex-wrap items-center h-[70px]">
      {words.map((word, index) => (
        <DynamicTag key={index} tag={Tag} className={className}>
          <Wrapper>
            {word.flat().map((element, index) => (
              <span className="overflow-hidden inline-block" key={index}>
                <motion.span className="inline-block" variants={itemVariant}>
                  {element}
                </motion.span>
              </span>
            ))}
          </Wrapper>
        </DynamicTag>
      ))}
    </div>
  );
};

export default HeroAnimatedText;
