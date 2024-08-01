import Image from "next/image";
import { useState, useEffect } from "react";

const RenderImage = ({ imageName, alt, localFolder, className }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (imageName) {
      import(`../${localFolder}/${imageName}.svg`)
        .then((image) => {
          setImageSrc(image.default);
        })
        .catch((err) => {
          console.error("Error loading image:", err);
        });
    }
  }, [imageName]);

  console.log(localFolder, imageName);

  if (!imageSrc) {
    return <p>Loading...</p>;
  }

  return <Image src={imageSrc} alt={alt || "image"} className={className} />;
};

export default RenderImage;
