"use client";

import { useCallback, useContext, useEffect, useState } from "react";

import { PageProps, ProductType } from "@/type.d";
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
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@nextui-org/react";

const RelatedItemsComponent = ({
  item,
  isSeen,
}: {
  item: ProductType;
  isSeen: React.ReactNode;
}) => {
  return (
    //@FlashItem
    <Card
      id="card"
      shadow="none"
      style={{ maxWidth: 350, minWidth: 200, width: 350 }}
    >
      <CardBody
        className="p-0 bg-gray-200 relative rounded-b-lg overflow-hidden w-full"
        style={{ height: 250, minHeight: 250, maxHeight: 250 }}
      >
        <div className="relative w-full h-60 py-6 flex items-center justify-center">
          {item?.discount && (
            <Button
              disableAnimation
              size="sm"
              variant="faded"
              radius="sm"
              className="absolute border-none left-4 top-4 bg-red-600 text-xs text-gray-50"
              style={{ width: 40, height: 26 }}
            >
              - {item.discount}%
            </Button>
          )}

          <Image
            src={item.images[0]}
            alt={item.name}
            className="max-w-sm w-auto h-3/5"
            loading="lazy"
          />
          <div className="absolute top-4 right-2 flex flex-col space-y-1">
            <Button
              disableAnimation
              isIconOnly
              size="sm"
              variant="solid"
              className="bg-gray-50 border-none"
              radius="full"
            >
              <IoHeartOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </Button>
            <Button
              disableAnimation
              radius="full"
              isIconOnly
              variant="solid"
              size="sm"
              className="bg-gray-50 border-none"
            >
              {isSeen}
            </Button>
          </div>
        </div>
        <Button
          disableAnimation
          variant="flat"
          className="absolute w-full rounded-t-none rounded-b-lg bottom-0 text-sm lg:text-base  text-center text-gray-100 bg-gray-800"
        >
          Add To Cart
        </Button>
      </CardBody>

      <CardFooter as={Link} href={`${item.path}/${item.ID}`}>
        <div className="flex flex-col space-y-2">
          <h2 className="text-gray-800 font-medium text-base">{item.name}</h2>
          <div className="flex space-x-2">
            <h4 className="text-base font-medium text-red-500 ">
              $ {item.price}
            </h4>
            {item?.discount && (
              <h4 className="text-base font-medium text-gray-400 line-through">
                $ {item.discount}
              </h4>
            )}
          </div>

          <span className="flex space-x-1">
            {item.rating &&
              Array.from(Array(Math.floor(item.rating))).map((id) => (
                <IoStar className="text-yellow-500" key={item.ID} />
              ))}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default function ProductDetails({ params: { id } }: PageProps) {
  //INTERNAL STATE
  const [visible, setVisible] = useState<Boolean>(true);
  const [selectedIndex, setSelectedIndex] = useState(2);

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
  isMatch[0]?.images.forEach((img: any) => images.push(img));

  const imageByIndex = (index: number): string => images[index];

  const SLIDE_COUNT = images.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const isSeen = visible ? (
    <IoEyeOutline className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-700" />
  ) : (
    <IoEyeOffOutline className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-700" />
  );

  return (
    <div className="container mx-auto mb-4 w-full h-auto space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs separator={"/"} className="px-2">
        <BreadcrumbItem href="/products">/Products</BreadcrumbItem>
        {isMatch.length && <BreadcrumbItem>{isMatch[0].name}</BreadcrumbItem>}
      </Breadcrumbs>

      <div className="flex space-x-4 items-stretch justify-center flex-wrap md:flex-nowrap lg:flex-nowrap">
        {/* Main */}
        <div className="basis-full flex items-stretch space-x-4 flex-col sm:flex-row-reverse  justify-center md:basis-2/3 lg:basis-2/3 relative">
          <div
            className="embla flex-1 flex justify-center items-center bg-red-500"
            style={{
              backgroundColor: "#F5F5F5",
              minHeight: 350,
              minWidth: 300,
            }}
            ref={emblaMainRef}
          >
            <div className="embla__container flex justify-center">
              {isMatch[0]?.images?.map((image: any, id: number) => (
                <div
                  className="embla__slide flex justify-center items-center self-center"
                  key={id}
                >
                  <Image
                    priority={true}
                    src={image}
                    alt="image details"
                    className="w-4/5 h-3/5 self-center"
                    objectFit="contain"
                    style={{
                      height: 300,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="embla-thumbs self-center">
            <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
              <div
                className="embla-thumbs__container justify-center items-center flex-row flex-wrap sm:flex-col"
                style={{ display: "flex" }}
              >
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
        <div className="block basis-full md:basis-5/12 lg:basis-6/12">
          <div className="flex flex-col space-y-8">
            <div className="space-y-2 border-b border-b-gray-300 py-4">
              <h2 className="text-gray-700 text-lg lg:text-2xl font-semibold">
                {isMatch[0].name}
              </h2>

              <span className="flex space-x-1">
                {isMatch[0].rating &&
                  Array.from(Array(Math.floor(isMatch[0]?.rating))).map(
                    (id) => <IoStar className="text-yellow-500" key={id} />
                  )}
              </span>
              <p className="text-gray-700 text-base lg:text-xl font-medium">
                ${isMatch[0].price}
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
                <p className="text-gray-500 text-sm lg:text-base">Sizes:</p>
                <div className="flex items-center space-x-2">
                  {isMatch[0].sizes?.map((size, _) => (
                    <button
                      key={_}
                      className="rounded border w-6 h-6 border-gray-300 text-gray-600 text-xs md:text-sm"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-6 items-stretch">
                <div className="basis-2/5 flex items-stretch border border-gray-300 divide-x rounded-md">
                  <button className="basis-2/6 p-2 text-center flex items-center justify-center">
                    <IoRemoveOutline className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="basis-4/6 p-2 text-gray-500 text-lg font-medium">
                    2
                  </button>
                  <button className="basis-2/6 bg-red-500 rounded-e-md p-2 flex items-center justify-center">
                    <IoAddOutline className="w-5 h-5 text-gray-50" />
                  </button>
                </div>

                <Button
                  disableAnimation
                  className="basis-2/4 bg-red-500 p-2 rounded-md text-gray-100 text-base font-medium"
                >
                  Buy Now
                </Button>
                <Button
                  radius="full"
                  isIconOnly
                  variant="solid"
                  className="bg-gray-50 border-none"
                >
                  <IoHeartOutline className="w-5 h-5  text-gray-500" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-stretch divide-y border border-gray-300 rounded-md">
              <div className="flex items-center justify-start space-x-4 p-4">
                <Image
                  src={van_icon}
                  className="w-8 h-8"
                  alt="logo van"
                  loading="lazy"
                />
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
                <Image
                  src={reload_icon}
                  className="w-8 h-8"
                  alt="logo van"
                  loading="lazy"
                />
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
        </div>
      </div>

      <div className="space-y-4 px-2 mt-8">
        {/* Bullet  */}
        <div className="flex items-center space-x-2">
          <div className="h-7 w-3 bg-red-600 rounded-sm" />
          <h4 className="text-gray-600 text-base font-medium md:text-lg">
            Related Items
          </h4>
        </div>

        <div className="flex space-x-4 items-stretch overflow-x-auto">
          {shopList.map((item: ProductType) => (
            <RelatedItemsComponent item={item} key={item.ID} isSeen={isSeen} />
          ))}
        </div>
      </div>
    </div>
  );
}
