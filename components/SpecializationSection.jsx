"use client";

import CardSpecialization from "./CardSpecialization";
import Rating from "./Rating";

import developerImage from "@public/specialization/developer_large.svg";
import designerImage from "@public/specialization/designer_large.svg";
import Image from "next/image";
import { useState } from "react";
import TriangleButton from "./TriangleButton";

const SpecializationSection = ({ title, content, setOpenModal }) => {
  const [activeCard, setActiveCard] = useState("Developer");

  const cards = content?.filter((card) => {
    return card?.type === "card";
  });

  return (
    <div className="flex flex-col items-start gap-2 self-stretch">
      <div className="flex flex-col items-start self-stretch">
        <h2 className="px-6">{title}</h2>
        <div className="flex items-start gap-6 w-full overflow-scroll px-6 pt-8 pb-6">
          {cards?.map((card, index) => {
            return (
              <CardSpecialization
                key={index}
                content={card}
                isActive={card?.question === activeCard}
                onClick={() => setActiveCard(card?.question)}
              />
            );
          })}
        </div>
        {cards?.map((item, index) => {
          const parsedData = item?.answer ? JSON.parse(item?.answer) : null;
          console.log(item?.question);
          if (item?.question === activeCard) {
            return (
              <div
                key={index}
                className="flex flex-col items-center self-stretch mt-4"
              >
                <div className="flex flex-col items-center">
                  <h2>{item?.question}</h2>
                  <Rating rate={parsedData?.rating} total={5} />
                </div>
                <Image
                  src={
                    item?.question === "Developer"
                      ? developerImage
                      : designerImage
                  }
                  alt="developer image"
                  height={300}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
        <TriangleButton type={"show"} onClick={() => setOpenModal(true)} />
      </div>
    </div>
  );
};

export default SpecializationSection;
