"use client";

import { useCallback, useContext, useEffect, useState } from "react";

import { ItemType, PageProps } from "@/type.d";
import { AllProducts } from "@/data/dummyData";
import Image from "next/image";
import {
  IoAddOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoHeartOutline,
  IoRemoveOutline,
  IoStar,
} from "react-icons/io5";
import reload_icon from "../../../assets/icons/reload.svg";
import van_icon from "../../../assets/icons/van.svg";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

import { AppContext } from "@/app/Context/appContext";

import { Thumb } from "@/app/Components/carouselThumbs";

export default function ProductDetails({ params: { id } }: PageProps) {
  //INTERNAL STATE
  const [visible, setVisible] = useState<Boolean>(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  const { shopList } = useContext(AppContext);

  const isMatch = AllProducts.filter((product) => product.ID == id);

  const images: string[] = [];
  isMatch[0]?.images?.forEach((img) => images.push(img));

  const imageByIndex = (index: number): string => images[index % images.length];

  const SLIDE_COUNT = images.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const isSeen = visible ? (
    <IoEyeOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
  ) : (
    <IoEyeOffOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
  );

  return (
    <div className="container mx-auto mb-4 w-full h-auto p-8 space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h4 className="text-xs md:text-sm text-gray-400">
          / products/
          <span className="text-gray-500 font-medium">{isMatch[0]?.name}</span>
        </h4>
      </header>

      <div className="flex items-center justify-center flex-wrap md:flex-nowrap lg:flex-nowrap">
        {/* Main */}
        <div className="basis-full md:basis-2/3 lg:basis-2/3 relative">
          <div className="embla h-44" ref={emblaMainRef}>
            <div className="embla__container">
              {isMatch[0]?.images?.map((image, id) => (
                <div className="embla__slide" key={id}>
                  <Image
                    priority={true}
                    src={image}
                    alt="image details"
                    className="w-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="embla-thumbs self-center">
            <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
              <div className="embla-thumbs__container">
                {slides.map((index) => (
                  <Thumb
                    onClick={() => onThumbClick(index)}
                    selected={index === selectedIndex}
                    index={index}
                    imgSrc={imageByIndex(index)}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Aside  */}
        <form className="block basis-full md:basis-5/12 lg:basis-6/12">
          <div className="flex flex-col space-y-8">
            <div className="space-y-2 border-b border-b-gray-300 py-4">
              <h2 className="text-gray-700 text-base lg:text-xl font-medium">
                {isMatch[0].name}
              </h2>

              <span className="flex space-x-1">
                {isMatch[0].rating &&
                  Array.from(Array(Math.floor(isMatch[0]?.rating))).map(
                    (id) => <IoStar className="text-yellow-500" key={id} />
                  )}
              </span>
              <p className="text-gray-700 text-base lg:text-xl font-medium">
                ${isMatch[0].amount}
              </p>

              <p className="text-gray-500 text-sm lg:text-base">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-6">
                <p className="text-gray-500 text-sm lg:text-base">Colors:</p>{" "}
                <div className="flex items-center space-x-2">
                  {isMatch[0].colors?.map((color, id) => (
                    <button
                      key={color}
                      style={{ backgroundColor: color }}
                      className="w-4 h-4 rounded-full  hover:scale-110 hover:border-2 hover:border-gray-700"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <p className="text-gray-500 text-sm lg:text-base">Sizes:</p>{" "}
                <div className="flex items-center space-x-2">
                  {isMatch[0].sizes?.map((size, _) => (
                    <button
                      key={_}
                      className="w-6 h-6 rounded border border-gray-300 text-gray-600 text-xs md:text-sm"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-6 items-stretch">
                <div className="basis-2/5 flex items-stretch border border-gray-300 divide-x rounded-md">
                  <button className="basis-2/6 text-center flex items-center justify-center">
                    <IoRemoveOutline className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="basis-2/3 text-gray-500 text-lg font-medium">
                    2
                  </button>
                  <button className="basis-2/6 bg-red-500 flex items-center justify-center">
                    <IoAddOutline className="w-5 h-5 text-gray-50" />
                  </button>
                </div>
                <button className="basis-2/4 bg-red-500 p-2 rounded-md text-gray-100 text-base font-medium">
                  Buy Now
                </button>
                <button className="basis-2/12 rounded-md flex items-center justify-center p-2 border border-gray-300">
                  <IoHeartOutline className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-stretch divide-y border border-gray-300 rounded-md">
              <div className="flex items-center justify-start space-x-4 p-4">
                <Image src={van_icon} className="w-8 h-8" alt="logo van" />
                <div>
                  <h4 className="text-gray-700 text-base font-medium">
                    Free Delivery
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Enter your postal code for Delivery Availability.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-start space-x-4 p-4">
                <Image src={reload_icon} className="w-8 h-8" alt="logo van" />
                <div>
                  <h4 className="text-gray-700 text-base lg:text font-medium">
                    Return Delivery
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Free 30 Days Delivery Returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="space-y-4 pt-8">
        {/* Bullet  */}
        <div className="flex items-center space-x-2">
          <div className="h-7 w-3 bg-red-600 rounded-sm" />
          <h4 className="text-gray-600 text-base font-medium md:text-lg">
            Related Items
          </h4>
        </div>

        <div className="flex space-x-6 items-stretch overflow-x-auto px-2">
          {shopList.map((item: ItemType) => (
            <div key={item.ID} className={`relative flex flex-col space-y-2`}>
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
              <Link href={`${item.path}/${item.ID}`} className="space-y-2 mb-4">
                <h4 className="text-gray-700 text-sm lg:text-base font-medium">
                  {item.name}
                </h4>

                <h4 className="space-x-3 font-medium">
                  <span className="text-red-500 text-sm">${item.amount}</span>
                  <span className="text-gray-400 text-sm line-through">
                    ${item.prevAmount}
                  </span>
                </h4>

                <span className="flex space-x-1">
                  {item.rating &&
                    Array.from(Array(Math.floor(item.rating))).map((id) => (
                      <IoStar className="text-yellow-500" key={id} />
                    ))}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
