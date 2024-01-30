import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import { ItemType } from "@/type.d";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import Link from "next/link";

type PropType = {
  slides: number[];
  options?: any;
};

const Carousel: React.FC<PropType> = ({ shopList, isSeen }: any) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {shopList.map((item: ItemType) => (
            <div
              className="embla__slide_fs basis-3/12 w-40 md:w-48  lg:w-52"
              key={item.ID}
            >
              <div className="flex flex-col space-y-2 relative">
                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-gray-100 rounded-sm flex items-center justify-center">
                  <button className="absolute left-4 top-4 rounded-md p-1 bg-red-600 text-xs text-gray-50">
                    - {item.discount}%
                  </button>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-2/5 h-2/5"
                    priority={true}
                  />
                  <div className="absolute top-4 right-2 flex flex-col space-y-3">
                    <button className="bg-gray-100">
                      <IoHeartOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
                    </button>
                    <button className="bg-gray-100">{isSeen}</button>
                  </div>

                  <button
                    className="absolute w-full bottom-0 text-sm lg:text-base  text-center text-gray-100  p-2 bg-gray-800"
                    // onClick={() => setCart(cart + 1)}
                  >
                    Add To Cart
                  </button>
                </div>
                <Link
                  href={`${item.path}/${item.ID}`}
                  className="space-y-2 mb-4"
                >
                  <h4 className="text-gray-700 text-sm lg:text-base font-medium">
                    {item.name}
                  </h4>

                  <h4 className="space-x-3 font-medium">
                    <span className="text-red-500 text-sm">${item.price}</span>
                    <span className="text-gray-400 text-sm line-through">
                      ${item.prevPrice}
                    </span>
                  </h4>

                  <span className="text-gray-400 text-sm">
                    Rating ({item.rating})
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
