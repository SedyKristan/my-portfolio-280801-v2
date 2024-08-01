const Card = ({ content }) => {
  const badges = content?.answer?.split(", ").map((item) => item.trim());
  return (
    <div className="flex w-[290px] min-w-[290px] h-[155px] min-h-[155px] items-start rounded-3xl bg-ghost-primary-20 shadow-md">
      <div className="flex w-[124px] flex-col items-start shrink-0 self-stretch"></div>
      <div className="flex pt-2 pl-2 pb-4 pr-4 flex-col justify-center items-start gap-2 flex-[1_0_0] self-stretch">
        <div>
          <h3 className="text-secondary">{content?.question}</h3>
          <p className="font-bold -mt-1 text-typography-light-secondary">
            {content?.subsection}
          </p>
        </div>
        <div className="flex items-center gap-1 flex-wrap self-stretch">
          {badges?.map((badge, index) => {
            return (
              <div
                key={index}
                className="flex px-2 py-1 items-center gap-1 rounded-full bg-secondary text-tertiary text-xs font-bold"
              >
                {badge}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
