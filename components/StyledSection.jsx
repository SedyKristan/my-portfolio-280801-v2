import grid from "@public/specialization/grid.svg";
import Image from "next/image";

const StyledSection = ({ children, colored }) => {
  return (
    <div
      className={`relative flex w-full pt-4 pb-6 flex-col lg:flex-row items-start gap-6 rounded-[20px] border border-solid border-border-light-primary ${
        colored ? "bg-section-gradient" : "bg-light-primary"
      } overflow-hidden`}
    >
      {colored && (
        <Image
          src={grid}
          alt="grid asset"
          className="absolute min-w-[1200px] w-[1200px] left-1/2 -bottom-4 -translate-x-1/2"
        />
      )}
      {children}
    </div>
  );
};

export default StyledSection;
