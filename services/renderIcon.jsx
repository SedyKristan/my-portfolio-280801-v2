import * as HeroIcons from "@heroicons/react/24/solid";

const renderIcon = ({ iconName, size = "medium", color = "currentColor" }) => {
  const IconComponent = HeroIcons[iconName];

  const sizeStyle = (() => {
    switch (size) {
      case "small":
        return { height: "1rem", width: "1rem" }; // 1rem = 16px
      case "medium":
        return { height: "1.25rem", width: "1.25rem" }; // 1.25rem = 20px
      case "large":
        return { height: "1.5rem", width: "1.5rem" }; // 1.5rem = 24px
      default:
        return { height: "1.25rem", width: "1.25rem" }; // Fallback
    }
  })();

  const colorStyle = { color };

  return IconComponent ? (
    <IconComponent style={{ ...sizeStyle, ...colorStyle }} />
  ) : (
    <div>Icon not found</div>
  );
};

export default renderIcon;
