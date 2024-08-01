import Image from "next/image";

import hexPattern from "@public/hero/hex-pattern.svg";

const HeroBackgroundPattern = () => {
  return (
    <div className="w-[840px] md:w-[1850px] fixed -top-16 md:-top-40">
      <Image
        src={hexPattern}
        alt="background pattern hexagon"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default HeroBackgroundPattern;
