import RenderImage from "@/services/renderImage";

const Skills = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 items-center gap-6 self-stretch">
      {skills["Developer"]?.map((skill, index) => {
        return (
          <div key={index} className="relative h-[72px] flex items-center pl-6">
            <RenderImage
              imageName={skill?.imageName}
              localFolder={"public/skills/developer"}
              className="absolute top-0 left-0"
            />
            <div className="flex flex-col justify-center rounded-lg bg-light-gray py-2 w-full pl-11">
              <p className="font-bold text-base">{skill?.answer}</p>
              <p className="text-typography-light-secondary text-sm">
                {skill?.question}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
