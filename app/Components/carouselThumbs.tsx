import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  imgSrc: string;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide m-2".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <Image
          className="embla-thumbs__slide__img"
          src={imgSrc}
          alt="Your alt text"
          objectFit="contain"
          style={{ maxWidth: 100, maxHeight: 100 }}
        />
      </button>
    </div>
  );
};
