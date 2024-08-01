import renderIcon from "@/services/renderIcon";

import designerImage from "@public/specialization/designer.svg";
import developerImage from "@public/specialization/developer.svg";
import Image from "next/image";

const CardSpecialization = ({ content, isActive, onClick }) => {
  const parsedData = content?.answer ? JSON.parse(content?.answer) : null;

  const designerImageClass =
    "min-w-[148px] w-[148px] absolute transform -scale-x-100 -bottom-6 -right-4";
  const developerImageClass =
    "min-w-[168px] w-[168px] absolute transform -scale-x-100 -bottom-8 -right-6";

  return (
    <div
      className={`flex h-[127px] items-start rounded-3xl shadow-md ${
        isActive ? "bg-tertiary" : "bg-light-primary"
      }`}
      onClick={onClick}
    >
      <div className="relative w-[108px] overflow-hidden flex flex-col rounded-tl-3xl rounded-bl-3xl items-start shrink-0 self-stretch">
        <Image
          src={
            content?.question === "Designer" ? designerImage : developerImage
          }
          alt="card image"
          width="100%"
          height="100%"
          className={
            content?.question === "Designer"
              ? designerImageClass
              : developerImageClass
          }
        />
      </div>
      <div className="flex p-4 flex-col justify-center items-start self-stretch">
        <div className="flex py-2 px-5 flex-col items-start gap-1 self-stretch rounded-[20px] bg-light-gray">
          <div>
            <h3 className="text-secondary">{content?.question}</h3>
            <div className="flex items-center gap-2">
              {renderIcon({ iconName: "StarIcon", color: "#F9CE69" })}
              <p className="text-sm font-bold">{parsedData?.rating}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {renderIcon({ iconName: "BriefcaseIcon", color: "#83868C" })}
            <p className="text-sm font-bold text-typography-light-secondary">
              {parsedData?.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSpecialization;
