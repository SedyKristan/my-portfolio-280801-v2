const ExperienceSection = ({ content }) => {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch px-6 order-3">
      <h2>{content[0]?.section}</h2>
      <div className="flex items-start self-stretch">
        {content?.map((item, index) => {
          let parsedConfig = null;
          try {
            parsedConfig = item?.config ? JSON.parse(item.config) : null;
          } catch (error) {
            console.error(
              `Error parsing config for item at index ${index}:`,
              error
            );
          }

          return (
            <div
              key={index}
              className="rounded-2xl w-full border border-solid border-border-light-primary bg-ghost-primary-20 flex py-4 px-5 flex-col items-start gap-2"
            >
              <div className="flex flex-col items-start self-stretch gap-2">
                <div className="flex flex-col self-stretch gap-1">
                  <div className="flex justify-between items-start self-stretch text-sm font-bold">
                    <p>{parsedConfig?.date}</p>
                    <p className="text-typography-light-secondary">
                      {parsedConfig?.duration}
                    </p>
                  </div>
                  <h3 className="text-secondary">{parsedConfig?.position}</h3>
                </div>

                <ul className="pl-4">
                  {parsedConfig?.details?.map((list, index) => {
                    return (
                      <li
                        key={index}
                        className="text-typography-light-secondary list-disc text-sm"
                      >
                        {list}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
