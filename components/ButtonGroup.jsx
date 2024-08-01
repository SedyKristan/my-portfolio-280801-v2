import renderIcon from "@/services/renderIcon";
import { Button } from "./ui/button";
import Link from "next/link";

const ButtonGroup = ({ buttons }) => {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch md:flex-row">
      {buttons?.map((button, index) => (
        <Button
          key={index}
          size="lg"
          variant={button?.elementOrder === 1 ? undefined : "outline"}
        >
          {button?.actionLink ? (
            <Link
              key={index}
              href={button?.actionLink}
              className="flex gap-2 justify-center items-center"
            >
              {button.actionLabel}
              {renderIcon({ iconName: button?.icon })}
            </Link>
          ) : (
            <>
              {button.actionLabel}
              {renderIcon({ iconName: button?.icon })}
            </>
          )}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
