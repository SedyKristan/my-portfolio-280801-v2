import RenderImage from "@/services/renderImage";

const Tools = ({ tools }) => {
  return (
    <div className="grid grid-cols-3 gap-6 content-center items-start rounded-lg bg-light-gray px-4 py-8">
      {tools["Developer"]?.map((tool, index) => {
        console.log(tool);
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1"
          >
            <RenderImage
              imageName={tool?.imageName}
              localFolder={"public/toolsFolder/developer"}
            />
            <p className="text-typography-light-secondary text-sm font-bold text-center">
              {tool?.question}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Tools;
