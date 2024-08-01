const GridBlur = () => {
  const totalCells = 22 * 22;
  return (
    <div className="shrink-0 grid grid-cols-22">
      {Array.from({ length: totalCells }, (_, i) => (
        <div
          key={i}
          className="w-10 h-10 bg-[#ffffff01] backdrop-blur-xl"
        ></div>
      ))}
    </div>
  );
};

export default GridBlur;
