import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

import "./SimpleCarrousel.scss";

export default function SimpleCarrousel({
  id = "",
  images = [],
  prefix = "",
  isVideo = false,
  padding = false,
}) {
  const [index, setIndex] = useState(0);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "djbmfd9y6",
    },
  });

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className={
        "simple-carrousel" +
        (images.length < 2 ? " hide-control" : "") +
        " " +
        id
      }
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
    >
      {images.map((image) => (
        <Carousel.Item id={image} key={image}>
          {isVideo ? (
            <AdvancedVideo
              className="d-block w-100 carrousel-video"
              controls={true}
              //autoPlay
              cldVid={cld
                .video(`${prefix}/${image}`)
                .addTransformation("ar_3:4,c_crop")}
            />
          ) : (
            <AdvancedImage
              className="d-block w-100 carrousel-img"
              cldImg={cld
                .image(`${prefix}/${image}`)
                .addTransformation("ar_3:4,c_crop")}
            />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
