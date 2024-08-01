import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

const Rating = ({ rate, total }) => {
  const stars = [];

  for (let i = 1; i <= total; i++) {
    if (i <= rate) {
      stars.push(<StarIcon key={i} className="w-6 h-6 text-[#F9CE69]" />);
    } else if (i === Math.ceil(rate) && rate % 1 !== 0) {
      stars.push(
        <div key={i} className="relative w-6 h-6">
          <StarIcon
            className="w-6 h-6 text-[#F9CE69] absolute"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
          <StarOutline className="w-6 h-6 text-[#F9CE69] absolute" />
        </div>
      );
    } else {
      stars.push(<StarOutline key={i} className="w-6 h-6 text-[#F9CE69]" />);
    }
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex justify-center items-center gap-1">{stars}</div>
      <p className="font-bold">{rate}</p>
    </div>
  );
};

export default Rating;
