"use client";

//@imports
import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Countdown from "react-countdown";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import showcaseImage from "../assets/images/iphone.png";
import arrowRight from "../assets/icons/arrow-right.svg";
import jbl_boombox from "../assets/images/jbl_boombox.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoHeartOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoLogoApple,
  IoPhonePortraitOutline,
  IoDesktopOutline,
  IoWatchOutline,
  IoCameraOutline,
  IoHeadsetOutline,
  IoGameControllerOutline,
  IoStar,
  IoChevronForwardOutline,
  IoBagHandleOutline,
  IoMedkitOutline,
  IoShirtOutline,
  IoTennisballOutline,
  IoWomanOutline,
  IoBicycleOutline,
  IoFitnessOutline,
  IoColorWandOutline,
  IoHeart,
  IoCartSharp,
} from "react-icons/io5";

import {
  MdOutlineHeadsetMic,
  MdOutlineLocalShipping,
  MdOutlineVerifiedUser,
} from "react-icons/md";

import { ItemType, ProductType, CategoryType } from "@/type.d";

import { AppContext } from "./Context/appContext";
import arrow_up from "../assets/icons/arrow-up.svg";
import { EmblaDots } from "./Components/emblaDots";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
// import { BrowseByCategoryCarousel } from "@/components/ui/carousel";

const sideNav = [
  {
    name: "Women's Fashion",
    path: "/category/fashion/women",
    hasArrow: true,
    icon: <IoWomanOutline />,
    id: "side_nav_1",
  },
  {
    name: "Men's Fashion",
    path: "/fashion/men",
    hasArrow: true,
    icon: <IoShirtOutline />,
    id: "side_nav_2",
  },
  {
    name: "Electronics",
    path: "/electronics",
    icon: <IoGameControllerOutline />,
    id: "side_nav_3",
  },
  {
    name: "Home & Lifestyle",
    path: "/lifestyle",
    icon: <IoBagHandleOutline />,
    id: "side_nav_4",
  },
  {
    name: "Medicine",
    path: "/medicine",
    icon: <IoMedkitOutline />,
    id: "side_nav_5",
  },
  {
    name: "Sports & Outdoor",
    path: "/sports",
    icon: <IoTennisballOutline />,
    id: "side_nav_6",
  },
  {
    name: "Baby's & Toy",
    path: "/toys",
    icon: <IoBicycleOutline />,
    id: "side_nav_7",
  },
  {
    name: "Groceries & Pets",
    path: "/groceries",
    icon: <IoColorWandOutline />,
    id: "side_nav_8",
  },
  {
    name: "Health & Beauty",
    path: "/health",
    icon: <IoFitnessOutline />,
    id: "side_nav_9",
  },
];

const Categories = [
  {
    type: "Phones",
    logo: IoPhonePortraitOutline,
    id: 1,
    path: "/category/phones",
  },
  {
    type: "Computers",
    logo: IoDesktopOutline,
    id: 2,
    path: "/category/computers",
  },
  {
    type: "SmartWatch",
    logo: IoWatchOutline,
    id: 3,
    path: "/category/smartwatches",
  },
  { type: "Camera", logo: IoCameraOutline, id: 4, path: "/category/cameras" },
  {
    type: "Headphones",
    logo: IoHeadsetOutline,
    id: 5,
    path: "/category/headphones",
  },
  {
    type: "Gamepad",
    logo: IoGameControllerOutline,
    id: 6,
    path: "/category/gamepad",
  },
];

/*===============================
        COUNTDOWN RENDERER
=================================*/
const FlashCountdownComponent = ({
  days,
  hours,
  minutes,
  seconds /*completed*/,
}: any) => {
  return (
    <div className="flex items-end justify-start space-x-3 sm:space-x-6 flex-1">
      <h2 className="text-gray-700 text-md font-semibold lg:text-2xl">
        FLASH SALES
      </h2>
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="text-gray-700 font-medium text-xs">DAYS</span>
        <h2 className="text-gray-700 font-bold text-xl md:text-2xl lg:text-4xl">
          {days}
        </h2>
      </div>
      <span className="text-2xl text-red-700">:</span>
      <div className="flex flex-col space-y-2 items-center justify-center">
        <span className="text-gray-700 font-medium text-xs">HRS</span>
        <h2 className="text-gray-700 font-bold text-xl md:text-2xl lg:text-4xl">
          {hours}
        </h2>
      </div>
      <span className="text-2xl text-red-700">:</span>

      <div className="flex flex-col space-y-2 items-center justify-center">
        <span className="text-gray-700 font-medium text-xs">MINS</span>
        <h2 className="text-gray-700 font-bold text-xl md:text-2xl lg:text-4xl">
          {minutes}
        </h2>
      </div>
      <span className="text-2xl text-red-700">:</span>

      <div className="flex flex-col space-y-2 items-center justify-center">
        <span className="text-gray-700 font-medium text-xs">SECS</span>
        <h2 className="text-gray-700 font-bold text-xl md:text-2xl lg:text-4xl">
          {seconds}
        </h2>
      </div>
    </div>
  );
};

const ProductCoundownComponent = ({
  days,
  hours,
  minutes,
  seconds,
}: /*completed*/
any) => {
  return (
    <div className="flex justify-start items-center space-x-2 md:space-x-3">
      <div className="flex flex-col items-center justify-center rounded-full w-12 h-12 md:w-20 md:h-20 bg-gray-300">
        <h2 className="text-gray-700 font-bold text-xl md:text-2xl lg:text-4xl">
          {hours}
        </h2>
        <span className="text-ellipsis overflow-hidden text-center text-gray-700 font-medium text-xs">
          HRS
        </span>
      </div>
      <div className="flex flex-col items-center justify-center rounded-full w-12 h-12 md:w-20 md:h-20 bg-gray-300">
        <h2 className="text-gray-700 font-bold text-xl md:text-2xl lg:text-4xl">
          {days}
        </h2>
        <span className="text-ellipsis overflow-hidden text-center text-gray-700 font-medium text-xs">
          DAYS
        </span>
      </div>
      <div className="flex flex-col items-center justify-center rounded-full w-12 h-12 md:w-20 md:h-20 bg-gray-300">
        <h2 className="text-gray-700 font-bold text-xl md:text-2xl lg:text-4xl">
          {minutes}
        </h2>
        <span className="text-ellipsis overflow-hidden text-center text-gray-700 font-medium text-xs">
          MINS.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center rounded-full w-12 h-12 md:w-20 md:h-20 bg-gray-300">
        <h2 className="text-gray-700 font-bold text-xl md:text-2xl lg:text-4xl">
          {seconds}
        </h2>
        <span className="text-ellipsis overflow-hidden text-center text-gray-700 font-medium text-xs">
          SEC.
        </span>
      </div>
    </div>
  );
};

/*==============================
        HOME SHOWCASE
================================*/

const ShowcaseComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
  ]);

  const scrollTo = useCallback(
    (index: any) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useMemo(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="flex justify-around items-stretch lg:px-4 space-x-4 mb-1 mt-2 relative">
      <Listbox
        className="hidden lg:block p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 max-w-sm first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
        aria-label="side menu"
      >
        {sideNav.map((item, _) => (
          <ListboxItem
            startContent={item.icon}
            endContent={item.hasArrow ? <IoChevronForwardOutline /> : ""}
            href={item.path}
            key={item.id}
            className="text-base"
          >
            {item.name}
          </ListboxItem>
        ))}
      </Listbox>

      <div className="w-full overflow-hidden flex flex-col relative flex-1">
        <div className="embla min-h-full" ref={emblaRef}>
          <div className="embla__container w-full h-full">
            {["showcase 1", "showcase 2", "showcase 3", "showcase 4"].map(
              (_, i) => (
                <div className="embla__slide" key={_}>
                  <div className="bg-gray-800 p-4 w-full min-h-full h-80 flex items-center justify-evenly">
                    <div className="flex flex-col items-start space-y-4">
                      <div className="flex items-center justify-start">
                        <IoLogoApple className="text-gray-100 mr-2 w-6 h-6" />
                        <span className="text-gray-400 ">iphone 14 series</span>
                      </div>
                      <div>
                        <h4 className="text-gray-200 leading-7 font-semibold text-2xl md:text-4xl lg:text-5xl">
                          Up to 10%
                        </h4>
                        <h4 className="text-gray-200 leading-8 font-semibold text-2xl md:text-4xl lg:text-5xl">
                          off Voucher
                        </h4>
                      </div>
                      <Link
                        href="/shop/now"
                        className="flex font-medium items-center text-base justify-start text-gray-200 underline"
                      >
                        Shop Now
                        <Image
                          src={arrowRight}
                          alt="arrow"
                          className="w-4 h-4 ml-1"
                          priority
                        />
                      </Link>
                    </div>

                    <Image
                      src={showcaseImage}
                      className="w-3/5 h-4/5"
                      alt="showcase banner"
                      priority={true}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <EmblaDots
              key={index}
              onClick={() => scrollTo(index)}
              className={"embla__dot bg-gray-500".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FlashSalesComponent = ({
  shopList,
  isSeen,
}: {
  shopList: ItemType[];
  isSeen: React.ReactNode;
}) => {
  //CAROUSEL
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
  ]);

  const scrollTo = useCallback(
    (index: any) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  // @EMBLA_ARROW_NAVIGATION
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const FlashSalesItem = ({ item }: { item: ProductType }) => {
    const {
      addOrRemoveProdFromWishList,
      isOnWishList,
      addToCart,
      isProdOnCart,
      removeFromCart,
    } = useContext(AppContext);

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
              priority={true}
            />
            <div className="absolute top-4 right-2 flex flex-col space-y-1">
              <Button
                disableAnimation
                isIconOnly
                size="sm"
                variant="solid"
                className="bg-gray-50 border-none"
                radius="full"
                onClick={() => addOrRemoveProdFromWishList(item.ID)}
              >
                {isOnWishList(item.ID) ? (
                  <IoHeart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                ) : (
                  <IoHeartOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                )}
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
          {isProdOnCart(item.ID) ? (
            <Button
              disableAnimation
              variant="flat"
              className="absolute w-full rounded-t-none rounded-b-lg bottom-0 text-sm lg:text-base  text-center text-gray-800 bg-[#ffe712]"
              onClick={() => removeFromCart(item.ID)}
            >
              <IoCartSharp className="w-5 h-5 text-gray-700" />
              REMOVE FROM CART
            </Button>
          ) : (
            <Button
              disableAnimation
              variant="flat"
              className="absolute w-full rounded-t-none rounded-b-lg bottom-0 text-sm lg:text-base  text-center text-gray-100 bg-gray-800"
              onClick={() => addToCart(item.ID)}
            >
              <IoCartSharp className="w-5 h-5 text-gray-50" />
              ADD TO CART
            </Button>
          )}
        </CardBody>

        <CardFooter as={Link} href={`${item.path}/${item.name}/${item.ID}`}>
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
                  <IoStar
                    className="text-yellow-500"
                    key={item.ID + Math.random()}
                  />
                ))}
            </span>
          </div>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center space-y-4 pt-4">
      {/* Today Sale */}
      <div className="ml-4">
        {/* Bullet  */}
        <div className="flex items-center space-x-2">
          <div className="h-7 w-3 bg-red-600 rounded-sm" />
          <h4 className="text-red-600 text-sm lg:text-base font-semibold">
            Today&apos;s
          </h4>
        </div>
      </div>

      {/* Heading  */}
      <div className="flex px-4 justify-between items-center space-x-6">
        <Countdown
          renderer={FlashCountdownComponent}
          date={Date.now() + 331200000 /*4days */}
        />

        <div className="flex space-x-2 items-center justify-end">
          <Button
            disableAnimation
            isIconOnly
            radius="full"
            size="sm"
            variant="faded"
            className="border-none"
          >
            <IoArrowBackOutline
              size={20}
              className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
            />
          </Button>
          <Button
            disableAnimation
            isIconOnly
            radius="full"
            size="sm"
            variant="faded"
            className="border-none"
          >
            <IoArrowForwardOutline className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </Button>
        </div>
      </div>

      <div
        className="flex items-stretch scrollbar-hide
      overflow-x-auto relative space-x-4  p-1 w-full"
      >
        {/* <div className="embla">
          <div className="embla_container"> */}
        {shopList.map((item: ItemType, _) => (
          <FlashSalesItem item={item} key={item.ID} />
        ))}
        {/* </div>
        </div> */}
      </div>

      <button className="self-center rounded w-56 bg-red-600 text-gray-100 text-base text-center p-2">
        View All Products
      </button>
    </div>
  );
};

const BrowseByCategoryComponent = ({
  categories,
}: {
  categories: CategoryType[];
}) => {
  return (
    <div className="w-full pt-16 flex flex-col justify-center px-2 space-y-4  mx-auto ">
      <div className="ml-4">
        {/* Bullet  */}
        <div className="flex items-center space-x-2">
          <div className="h-7 w-3 bg-red-600 rounded-sm" />
          <h4 className="text-red-600 text-base font-semibold">Categories</h4>
        </div>
      </div>

      {/* Heading  */}
      <div className="flex px-4 justify-between items-center space-x-6">
        <h2 className="text-gray-700 text-lg font-semibold lg:text-2xl">
          Browse By Categories
        </h2>

        <div className="flex basis-2/5 items-center justify-end">
          <Button
            disableAnimation
            isIconOnly
            size="sm"
            variant="solid"
            className="bg-gray-50 border-none"
            radius="full"
          >
            <IoArrowBackOutline className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </Button>
          <Button
            disableAnimation
            isIconOnly
            size="sm"
            variant="solid"
            className="bg-gray-50 border-none"
            radius="full"
          >
            <IoArrowForwardOutline className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </Button>
        </div>
      </div>

      {/* items */}
      <div className="flex items-center space-x-4 overflow-x-auto px-2 pb-4 scrollbar-hide">
        {categories.map((category: CategoryType, _) => (
          <Link
            href={category.path}
            key={category.id}
            className="px-10 py-5 text-gray-600 border border-gray-200 rounded-sm flex flex-col items-center justify-center hover:bg-red-500 hover:text-gray-100 space-y-2"
            style={{ maxWidth: 170, minWidth: 170, height: 145 }}
          >
            <category.logo className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            <span className="text-inherit text-ellipsis text-sm lg:text-base">
              {category.type}
            </span>
          </Link>
        ))}
      </div>
      <div />
      <Button
        disableAnimation
        className="self-center rounded w-56 bg-red-600 text-gray-100 text-base text-center p-2"
      >
        View All Products
      </Button>
    </div>
  );
};

const BestSellingComponent = ({
  bestSelling,
  isSeen,
}: {
  bestSelling: ProductType[];
  isSeen: React.ReactNode;
}) => {
  const {
    addOrRemoveProdFromWishList,
    isOnWishList,
    addToCart,
    isProdOnCart,
    removeFromCart,
  } = useContext(AppContext);

  const RenderBestSellingItem = ({ item }: { item: ProductType }) => {
    return (
      //@FlashItem
      <Card
        id="card"
        shadow="none"
        isPressable
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
              priority={true}
            />
            <div className="absolute top-4 right-2 flex flex-col space-y-1">
              <Button
                disableAnimation
                isIconOnly
                size="sm"
                variant="solid"
                className="bg-gray-50 border-none"
                radius="full"
                onClick={() => addOrRemoveProdFromWishList(item.ID)}
              >
                {isOnWishList(item.ID) ? (
                  <IoHeart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                ) : (
                  <IoHeartOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                )}
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

          {isProdOnCart(item.ID) ? (
            <Button
              onClick={() => removeFromCart(item.ID)}
              disableAnimation
              disableRipple
              variant="flat"
              className="absolute w-full rounded-t-none rounded-b-lg bottom-0 text-sm lg:text-base  text-center text-gray-800 bg-[#ffe712]"
            >
              <IoCartSharp className="w-5 h-5 text-gray-700" />
              REMOVE FROM CART
            </Button>
          ) : (
            <Button
              onClick={() => addToCart(item.ID)}
              disableAnimation
              disableRipple
              variant="flat"
              className="absolute w-full rounded-t-none rounded-b-lg bottom-0 text-sm lg:text-base  text-center text-gray-100 bg-gray-800"
            >
              <IoCartSharp className="w-5 h-5 text-gray-50" />
              ADD TO CART
            </Button>
          )}
        </CardBody>

        <CardFooter as={Link} href={`${item.path}/${item.name}/${item.ID}`}>
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
                  <IoStar
                    className="text-yellow-500"
                    key={item.ID + Math.random()}
                  />
                ))}
            </span>
          </div>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center space-y-4  mx-auto pt-16">
      {/* Best selling Products */}
      <div className="ml-4">
        {/* Bullet  */}
        <div className="flex items-center space-x-2">
          <div className="h-7 w-3 bg-red-600 rounded-sm" />
          <h4 className="text-red-600 text-sm lg:text-base font-semibold">
            This Month
          </h4>
        </div>
      </div>

      {/* Heading  */}
      <div className="flex px-4 justify-between items-center space-x-6">
        <h2 className="text-gray-700 text-lg font-semibold lg:text-2xl">
          Best Selling Products
        </h2>

        <Button
          disableAnimation
          className="self-center rounded w-28 bg-red-600 text-gray-100 text-sm font-normal text-center p-2"
        >
          View All
        </Button>
      </div>

      {/* items */}
      <div
        className="flex items-stretch
      overflow-x-auto relative space-x-4  p-1 w-full scrollbar-hide"
      >
        {bestSelling.map((item: ProductType, i) => (
          <RenderBestSellingItem item={item} key={item.ID + `${i}`} />
        ))}
      </div>
    </div>
  );
};

const BannerComponent = () => {
  return (
    <div className="w-full mx-auto pt-8 pb-8">
      {/* Categories2 */}
      <div className="py-12 bg-gray-900 space-x-4 flex items-center justify-around">
        <div className="space-y-6 flex flex-col">
          <h4 className="text-green-400 font-medium text-lg md:text-2xl">
            Categories
          </h4>
          <div>
            <h2 className="text-2xl font-semibold text-gray-200 md:text-5xl">
              Enhance Your
            </h2>
            <h2 className="text-2xl font-semibold text-gray-200 md:text-5xl">
              Music Experience
            </h2>
          </div>
          <Countdown
            renderer={ProductCoundownComponent}
            date={Date.now() + 496800000 /*6days */}
          />

          <Button
            disableAnimation
            className="p-4 w-32 flex items-center justify-center h-10 bg-green-500 font-normal text-gray-100 text-sm md:text-lg rounded-sm"
          >
            Buy Now!
          </Button>
        </div>

        <Image src={jbl_boombox} alt="category image" className="w-1/3 h-2/3" />
      </div>
    </div>
  );
};

const ProductsComponent = ({
  products,
  isSeen,
}: {
  products: ProductType[];
  isSeen: React.ReactNode;
}) => {
  const {
    addOrRemoveProdFromWishList,
    isOnWishList,
    addToCart,
    isProdOnCart,
    removeFromCart,
  } = useContext(AppContext);

  const ProductItem = ({ item }: { item: ProductType }) => {
    return (
      <Card
        shadow="none"
        className="p-0 max-w-sm min-w-sm w-auto h-full relative"
      >
        <CardBody className="p-0 bg-gray-200 h-40 relative rounded-b-lg">
          <div className="relative w-full h-full py-6 flex items-center justify-center">
            {item?.isNew && (
              <Button
                disableAnimation
                size="sm"
                variant="faded"
                radius="sm"
                className="absolute border-none left-4 top-4 w-4 bg-green-500 text-xs text-gray-50"
              >
                New
              </Button>
            )}

            <Image
              src={item.images[0]}
              alt={item.name}
              className="max-w-sm w-auto h-3/5"
              priority={true}
            />
            <div className="absolute top-4 right-2 flex flex-col space-y-1">
              <Button
                disableAnimation
                isIconOnly
                size="sm"
                variant="solid"
                className="bg-gray-50 border-none"
                radius="full"
                onClick={() => addOrRemoveProdFromWishList(item.ID)}
              >
                {isOnWishList(item.ID) ? (
                  <IoHeart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                ) : (
                  <IoHeartOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                )}
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
          {isProdOnCart(item.ID) ? (
            <Button
              onClick={() => removeFromCart(item.ID)}
              disableAnimation
              disableRipple
              variant="flat"
              className="absolute w-full rounded-t-none rounded-b-lg bottom-0 text-sm lg:text-base  text-center text-gray-800 bg-[#ffe712]"
            >
              <IoCartSharp className="w-5 h-5 text-gray-700" />
              REMOVE FROM CART
            </Button>
          ) : (
            <Button
              onClick={() => addToCart(item.ID)}
              disableAnimation
              disableRipple
              variant="flat"
              className="absolute w-full rounded-t-none rounded-b-lg bottom-0 text-sm lg:text-base  text-center text-gray-100 bg-gray-800"
            >
              <IoCartSharp className="w-5 h-5 text-gray-50" />
              ADD TO CART
            </Button>
          )}
        </CardBody>

        <CardFooter as={Link} href={`${item.path}/${item.name}/${item.ID}`}>
          <div className="flex flex-col space-y-2">
            <h2 className="text-gray-800 font-medium text-base">{item.name}</h2>
            <div className="flex space-x-2">
              <h4 className="text-base font-medium text-red-500 ">
                $ {item.price}
              </h4>
              {item?.prevPrice && (
                <h4 className="text-base font-medium text-gray-400 line-through">
                  $ {item.prevPrice}
                </h4>
              )}
            </div>
            <div className="flex space-x-2">
              <span className="flex space-x-1">
                {item.rating &&
                  Array.from(Array(Math.floor(item.rating))).map((id) => (
                    <IoStar
                      className="text-yellow-500"
                      key={item.ID + Math.random()}
                    />
                  ))}
              </span>
              {item?.ratersCount && (
                <h4 className="text-base font-medium text-gray-400">
                  ({item.ratersCount})
                </h4>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="space-y-4 px-2 w-full border-b border-gray-200 pb-8">
      <div className="w-full flex flex-col justify-center space-y-6 mx-auto">
        <div>
          {/* Bullet  */}
          <div className="flex items-center space-x-2">
            <div className="h-7 w-3 bg-red-600 rounded-sm" />
            <h4 className="text-red-600 text-base font-medium md:text-lg">
              Our Products
            </h4>
          </div>
        </div>

        {/* Heading  */}
        <div className="flex px-4justify-between items-center space-x-6">
          <h2 className="text-gray-700 flex-1 text-lg font-semibold lg:text-2xl">
            Explore Our Products
          </h2>

          <div className="flex space-x-2 items-center justify-end">
            <Button
              disableAnimation
              isIconOnly
              size="sm"
              variant="solid"
              className="bg-gray-50 border-none"
              radius="full"
            >
              <IoArrowBackOutline
                size={20}
                className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
              />
            </Button>
            <Button
              disableAnimation
              isIconOnly
              size="sm"
              variant="solid"
              className="bg-gray-50 border-none"
              radius="full"
            >
              <IoArrowForwardOutline className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>

        {/* items */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 mb-6">
          {products.map((item: ProductType, i) => (
            <ProductItem item={item} key={item.ID + `${i}`} />
          ))}
        </div>
        <div />
        <div />
        <Link
          href="/products"
          className="self-center rounded w-56 bg-red-600 text-gray-100 text-base text-center p-2"
        >
          View All Products
        </Link>
      </div>
      <div />
    </div>
  );
};

const NewArrivalComponent = ({
  scrollVisible,
  scrollToTop,
}: {
  scrollVisible: boolean;
  scrollToTop: () => void;
}) => {
  return (
    <div className="w-full flex flex-col justify-center space-y-4  mx-auto pb-8 pt-8">
      <div className="ml-4">
        {/* Bullet  */}
        <div className="flex items-center space-x-2">
          <div className="h-7 w-3 bg-red-600 rounded-sm" />
          <h4 className="text-red-600 text-base font-medium md:text-lg">
            Featured
          </h4>
        </div>
      </div>

      {/* Heading  */}
      <div className="flex px-4 justify-between items-center space-x-6">
        <h2 className="text-gray-700 text-lg font-semibold lg:text-2xl">
          New Arrival
        </h2>
      </div>

      {/* items */}
      <div className="grid grid-cols-1 grid-rows-1 gap-2 md:grid-cols-2">
        <div className="bg-playStation bg-right bg-contain bg-no-repeat h-96 flex-1 flex items-end bg-black p-8">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-lg font-medium md:text-2xl">
              PlayStation 5
            </h2>
            <p className="text-gray-300 text-sm lg:text-base">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="text-gray-200 font-medium text-sm md:text-md lg:text-lg py-1 border-b border-b-gray-400 hover:text-gray-100">
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col item-stretch space-y-3">
          <div className="flex-1 flex items-end bg-womenCollection bg-black bg-right bg-contain bg-no-repeat p-6">
            <div className="space-y-3">
              <h2 className="text-gray-200 text-lg font-medium md:text-2xl">
                Women&apos;s Collections
              </h2>
              <p className="text-gray-300 text-sm lg:text-base">
                Featured woman collections that give you another vibe.
              </p>
              <button className="text-gray-200 font-medium text-sm md:text-md lg:text-lg py-1 border-b border-b-gray-400 hover:text-gray-100">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex-1 flex space-x-4 items-stretch justify-stretch">
            <div className="flex-1 flex items-end bg-speakers bg-black  bg-right bg-contain bg-no-repeat p-6">
              <div className="space-y-3">
                <h2 className="text-gray-200 text-lg font-medium md:text-2xl">
                  Speakers
                </h2>
                <p className="text-gray-300 text-sm lg:text-base">
                  Amazon wireless speakers
                </p>
                <button className="text-gray-200 font-medium text-xs md:text-md lg:text-lg py-1 border-b border-b-gray-400 hover:text-gray-100">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="flex-1 flex items-end bg-perfums bg-black  bg-right bg-contain bg-no-repeat p-6">
              <div className="space-y-3">
                <h2 className="text-gray-200 text-lg font-medium md:text-2xl">
                  Perfums
                </h2>
                <p className="text-gray-300 text-sm lg:text-base">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="text-gray-200 font-medium text-xs md:text-md lg:text-lg py-1 border-b border-b-gray-400 hover:text-gray-100">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-6 md:justify-evenly px-4 pt-16">
        <div className="basis-1/3 flex flex-col items-center justify-center space-y-4">
          {/* Icon  */}
          <button className="p-2 md:p-3 border-8 text-inherit border-gray-300 rounded-full bg-gray-900">
            <MdOutlineLocalShipping className="text-gray-50 h-5 w-5 md:w-6 md:h-6" />
          </button>

          <h2 className="text-gray-800 text-center  font-medium text-xs md:text-base lg:text-lg">
            FREE AND FAST DELIVERY
          </h2>
          <p className="text-gray-500 text-center text-xs md:text-sm lg:text-base">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="basis-1/3 flex flex-col items-center justify-center space-y-4">
          {/* Icon  */}
          <button className="p-2 md:p-3 border-8 text-inherit border-gray-300 rounded-full bg-gray-900">
            <MdOutlineHeadsetMic className="text-gray-50 h-5 w-5 md:w-6 md:h-6" />
          </button>

          <h2 className="text-gray-800 text-center font-medium text-xs md:text-base lg:text-lg">
            24/7 CUSTOMER SERVICE
          </h2>

          <p className="text-gray-500 text-xs text-center md:text-sm lg:text-base">
            Friendly 24/7 customer support
          </p>
        </div>

        <div className="basis-1/3 flex flex-col items-center justify-center space-y-4">
          {/* Icon  */}
          <button className="p-2 md:p-3 border-8 text-inherit border-gray-300 rounded-full bg-gray-900">
            <MdOutlineVerifiedUser className="text-gray-50 h-5 w-5 md:w-6 md:h-6" />
          </button>

          <h2 className="text-gray-800 text-center font-medium text-xs md:text-base lg:text-lg">
            MONEY BACK GUARANTEE
          </h2>

          <p className="text-gray-500 text-xs text-center md:text-sm lg:text-base">
            We return money within 30 days
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="p-4 w-11 h-11 z-40 fixed bottom-4 right-4 bg-gray-200 rounded-full"
          style={{ display: scrollVisible ? "block" : "none" }}
          onClick={scrollToTop}
        >
          <Image src={arrow_up} alt="logo arrow_up" />
        </button>
      </div>
    </div>
  );
};

/*=============================
        INDEX PAGE
===============================*/
export default function Home() {
  //Internal state
  const [visible, setVisible] = useState<boolean>(true);
  const [scrollVisible, setScrollVisible] = useState<boolean>(false);

  // consume context
  const { products, shopList, bestSelling, authenticated } =
    useContext(AppContext);

  //redirect user if not Authenticated
  if (!authenticated) {
    return redirect("/sign-in");
  }

  // Scroll-To-Top effect
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setScrollVisible(true);
    } else if (scrolled <= 500) {
      setScrollVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  //CAROUSEL SETUP
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }); //end scroll-to-top

  const isSeen = visible ? (
    <IoEyeOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
  ) : (
    <IoEyeOffOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
  );
  return (
    <div className="min-w-full flex flex-col space-y-10">
      {/* Showcase  */}
      <ShowcaseComponent />
      <div className="container mx-auto flex flex-col justify-between items-center space-y-16 divide-y divide-slate-200">
        <FlashSalesComponent shopList={shopList} isSeen={isSeen} />

        <BrowseByCategoryComponent categories={Categories} />
        {/* <BrowseByCategoryCarousel /> */}
        <BestSellingComponent isSeen={isSeen} bestSelling={bestSelling} />
      </div>
      <div className="container mx-auto flex flex-col justify-between items-center">
        <BannerComponent />
        <ProductsComponent products={products} isSeen={isSeen} />
        {/* Featured */}
        <NewArrivalComponent
          scrollToTop={scrollToTop}
          scrollVisible={scrollVisible}
        />
      </div>
    </div>
  );
}
