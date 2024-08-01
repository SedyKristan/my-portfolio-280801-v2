export const getCurrentModule = ({ contents }) => {
  const allModules = [
    ...new Set(contents.flatMap((content) => content.module)),
  ];
  const commonModule = allModules.find((module) =>
    contents.every((content) => content.module.includes(module))
  );
  return commonModule;
};
