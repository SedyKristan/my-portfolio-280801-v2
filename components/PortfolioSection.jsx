"use client";

import Card from "./Card";

const PortfolioSection = ({ title, content }) => {
  const cards = content?.filter((card) => {
    return card?.type === "card";
  });

  return (
    <div className="flex flex-col items-start gap-2 self-stretch order-2 lg:order-1">
      <div className="flex flex-col items-start self-stretch">
        <h2 className="px-6">{title}</h2>
        <div className="flex items-start gap-6 w-full overflow-scroll px-6 pt-8 pb-6">
          {cards?.map((card, index) => {
            return <Card key={index} content={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
