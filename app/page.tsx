"use client";

//@imports
import { useState, useContext, useEffect, useCallback } from "react";
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
} from "react-icons/io5";

import {
  MdOutlineHeadsetMic,
  MdOutlineLocalShipping,
  MdOutlineVerifiedUser,
} from "react-icons/md";

import {
  ItemType,
  ProductType,
  CategoryType,
  TrendingProductsType,
} from "@/type.d";

import { AppContext } from "./Context/appContext";
import arrow_up from "../assets/icons/arrow-up.svg";
import { DotButton } from "./Components/dotbutton";
import { Button, Listbox, ListboxItem } from "@nextui-org/react";

const sideNav = [
  {
    name: "Women's Fashion",
    path: "/fashion/women",
    hasArrow: true,
    icon: <IoWomanOutline />,
  },
  {
    name: "Men's Fashion",
    path: "/fashion/men",
    hasArrow: true,
    icon: <IoShirtOutline />,
  },
  {
    name: "Electronics",
    path: "/electronics",
    icon: <IoGameControllerOutline />,
  },
  {
    name: "Home & Lifestyle",
    path: "/lifestyle",
    icon: <IoBagHandleOutline />,
  },
  { name: "Medicine", path: "/medicine", icon: <IoMedkitOutline /> },
  { name: "Sports & Outdoor", path: "/sports", icon: <IoTennisballOutline /> },
  { name: "Baby's & Toy", path: "/toys", icon: <IoBicycleOutline /> },
  {
    name: "Groceries & Pets",
    path: "/groceries",
    icon: <IoColorWandOutline />,
  },
  { name: "Health & Beauty", path: "/health", icon: <IoFitnessOutline /> },
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

const FlashRenderer = ({
  days,
  hours,
  minutes,
  seconds /*completed*/,
}: any) => {
  return (
    <div className="flex items-center justify-between space-x-3 md:space-x-6">
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

const ProductCategoryRenderer = ({
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

const RenderShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index: any) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  //@ARROW NAVIGATION
  // const scrollPrev = useCallback(
  //   () => emblaApi && emblaApi.scrollPrev(),
  //   [emblaApi]
  // );
  // const scrollNext = useCallback(
  //   () => emblaApi && emblaApi.scrollNext(),
  //   [emblaApi]
  // );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
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
        {sideNav.map((item, index) => (
          <ListboxItem
            startContent={item.icon}
            endContent={item.hasArrow ? <IoChevronForwardOutline /> : ""}
            href={item.path}
            key={item.name}
            className="text-base"
          >
            {item.name}
          </ListboxItem>
        ))}
      </Listbox>

      <div className="w-auto overflow-hidden flex flex-col relative flex-1">
        <div className="embla min-h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {[1, 2, 3, 4].map((_, i) => (
              <div className="embla__slide" key={_}>
                <div className="bg-gray-800 p-4 w-full min-h-full h-80 flex items-center justify-evenly md:mt-4">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center justify-start">
                      <IoLogoApple className="text-gray-100 mr-2 w-6 h-6" />
                      <span className="text-gray-400 ">iphone 14 series</span>
                    </div>
                    <div>
                      <h4 className="text-gray-200 font-semibold text-2xl md:text-4xl lg:text-5xl">
                        Up to 10%
                      </h4>
                      <h4 className="text-gray-200 font-semibold text-2xl md:text-4xl lg:text-5xl">
                        off Voucher
                      </h4>
                    </div>
                    <Link
                      href="/shop/now"
                      className="flex items-center text-base justify-start text-gray-300 font-medium underline"
                    >
                      Shop Now
                      <Image
                        src={arrowRight}
                        alt="arrow"
                        className="w-4 h-4 ml-1"
                      />
                    </Link>
                  </div>

                  <Image
                    src={showcaseImage}
                    className="w-44 h-36 md:w-60 md:h-44 lg:w-72 lg:h-52"
                    alt="showcase"
                    priority={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
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

export default function Home() {
  //Internal state
  const [visible, setVisible] = useState<Boolean>(true);
  const [scrollVisible, setScrollVisible] = useState<Boolean>(false);

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
    <IoEyeOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
  ) : (
    <IoEyeOffOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
  );

  return (
    <div className="min-w-full space-y-10">
      {/* Showcase  */}
      <RenderShowcase />

      <div className="space-y-16 divide-y divide-slate-200">
        {/* Today Sale */}
        <div className="container flex flex-col justify-center space-y-4  mx-auto md:pt-4">
          <div className="ml-4">
            {/* Bullet  */}
            <div className="flex items-center space-x-2">
              <div className="h-7 w-3 bg-red-600 rounded-sm" />
              <h4 className="text-red-600 text-sm lg:text-base font-medium">
                Today's
              </h4>
            </div>
          </div>

          {/* Heading  */}
          <div className="flex px-4 justify-between items-center space-x-6">
            <h2 className="text-gray-600 font-semibold text-xl md:text-2xl lg:text-5xl ">
              FLASH SALES
            </h2>
            <Countdown
              renderer={FlashRenderer}
              date={Date.now() + 331200000 /*4days */}
            />

            <div className="flex basis-2/5 items-center justify-end">
              <button className="bg-gray-200 rounded-lg mr-2 p-1">
                <IoArrowBackOutline
                  size={20}
                  className="text-gray-600 w-3 h-3 md:w-5 md:h-5"
                />
              </button>
              <button className="bg-gray-200 rounded-lg p-1">
                <IoArrowForwardOutline className="text-gray-600 w-3 h-3 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          <div className="flex space-x-6 items-stretch overflow-x-auto px-2 w-full">
            {shopList.map((item: ItemType, _) => (
              <div className="flex flex-col space-y-2 relative" key={item.ID}>
                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-gray-100 rounded-sm flex items-center justify-center">
                  <button className="absolute left-4 top-4 rounded-md p-1 bg-red-600 text-xs text-gray-50">
                    - {item.perc_discount}%
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
          <div />
          <button className="self-center rounded w-56 bg-red-600 text-gray-100 text-base text-center p-2">
            View All Products
          </button>
        </div>

        {/* Categories */}
        <div className="container pt-16 flex flex-col justify-center space-y-4  mx-auto ">
          <div className="ml-4">
            {/* Bullet  */}
            <div className="flex items-center space-x-2">
              <div className="h-7 w-3 bg-red-600 rounded-sm" />
              <h4 className="text-red-600 text-base font-medium md:text-lg">
                Categories
              </h4>
            </div>
          </div>

          {/* Heading  */}
          <div className="flex px-4 justify-between items-center space-x-6">
            <h2 className="text-gray-700 text-lg font-medium md:text-2xl">
              Browse By Categories
            </h2>

            <div className="flex basis-2/5 items-center justify-end">
              <button className="bg-gray-200 rounded-lg mr-2 p-1">
                <IoArrowBackOutline className="text-gray-600 w-3 h-3 md:w-5 md:h-5" />
              </button>
              <button className="bg-gray-200 rounded-lg p-1">
                <IoArrowForwardOutline className="text-gray-600 w-3 h-3 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* items */}
          <div className="flex items-center space-x-4 overflow-x-auto px-2 pb-4">
            {Categories.map((category: CategoryType, _) => (
              <Link
                href={category.path}
                key={category.id}
                className="px-10 py-5 text-gray-600 border border-gray-200 rounded-sm flex flex-col items-center justify-center hover:bg-red-500 hover:text-gray-100 space-y-2  "
              >
                <category.logo className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="text-inherit text-ellipsis text-sm lg:text-base">
                  {category.type}
                </span>
              </Link>
            ))}
          </div>
          <div />
          <button className="self-center rounded w-56 bg-red-600 text-gray-100 text-base text-center p-2">
            View All Products
          </button>
        </div>

        {/* Best selling Products */}
        <div className="container flex flex-col justify-center space-y-4  mx-auto pt-16">
          <div className="ml-4">
            {/* Bullet  */}
            <div className="flex items-center space-x-2">
              <div className="h-7 w-3 bg-red-600 rounded-sm" />
              <h4 className="text-red-600 text-base font-medium md:text-lg">
                This Month
              </h4>
            </div>
          </div>

          {/* Heading  */}
          <div className="flex px-4 justify-between items-center space-x-6">
            <h2 className="text-gray-700 text-lg font-medium md:text-2xl">
              Best Selling Products
            </h2>

            <button className="self-center rounded w-28 bg-red-600 text-gray-100 text-sm font-normal text-center p-2">
              View All
            </button>
          </div>

          {/* items */}
          <div className="flex space-x-6 items-center mb-6 overflow-x-auto px-2">
            {bestSelling.map((item: ProductType, _) => (
              <div
                key={item.ID}
                className={`relative flex flex-col space-y-2 ml-4`}
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-gray-100 rounded-sm flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-2/5 h-2/5"
                  />
                  <div className="absolute z-40 top-4 right-2 flex flex-col space-y-3">
                    <button
                      className="bg-gray-100"
                      onClick={() => alert("Item Added To Your Favorites")}
                    >
                      <IoHeartOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
                    </button>
                    <button
                      className="bg-gray-100"
                      onClick={() => alert("Seen!")}
                    >
                      {isSeen}
                    </button>
                  </div>

                  <button
                    className="absolute w-full bottom-0 z-40 text-center text-sm lg:text-base text-gray-100 self-end p-2 bg-gray-800"

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

                  <h4 className="space-x-3 font-medium text-sm">
                    <span className="text-red-500">${item.amount}</span>
                    <span className="text-gray-400 line-through">
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

      {/* Categories2 */}
      <div className="container mx-auto pt-8 pb-8">
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
              renderer={ProductCategoryRenderer}
              date={Date.now() + 496800000 /*6days */}
            />

            <button className="p-4 w-32 flex items-center justify-center h-10 bg-green-500 font-normal text-gray-100 text-sm md:text-lg rounded-sm">
              Buy Now!
            </button>
          </div>

          <Image
            src={jbl_boombox}
            alt="category image"
            className="w-1/3 h-2/3"
          />
        </div>
      </div>

      <div className="space-y-4 border-b border-gray-200 pb-8">
        <div className="container flex flex-col justify-center space-y-6 mx-auto">
          <div className="ml-4">
            {/* Bullet  */}
            <div className="flex items-center space-x-2">
              <div className="h-7 w-3 bg-red-600 rounded-sm" />
              <h4 className="text-red-600 text-base font-medium md:text-lg">
                Our Products
              </h4>
            </div>
          </div>

          {/* Heading  */}
          <div className="flex px-4 justify-between items-center space-x-6">
            <h2 className="text-gray-700 text-lg font-medium md:text-2xl">
              Explore Our Products
            </h2>

            <div className="flex basis-2/5 items-center justify-end">
              <button className="bg-gray-200 rounded-lg mr-2 p-1">
                <IoArrowBackOutline
                  size={20}
                  className="text-gray-600 w-3 h-3 md:w-5 md:h-5"
                />
              </button>
              <button className="bg-gray-200 rounded-lg p-1">
                <IoArrowForwardOutline className="text-gray-600 w-3 h-3 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* items */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 mb-6">
            {products.map((item: TrendingProductsType, _) => (
              <div
                key={item.ID}
                className={`relative flex flex-col space-y-3 items-center`}
              >
                <div className="relative w-5/6  h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-gray-100 rounded-sm flex items-center justify-center">
                  {item.isNew ? (
                    <button className="absolute left-4 top-4 rounded-md p-1 bg-green-400 text-xs  text-gray-50 text-center w-10 h-7">
                      New
                    </button>
                  ) : null}
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-2/5 h-2/5"
                  />
                  <div className="absolute top-4 right-4 z-40 flex flex-col space-y-4">
                    <button className="bg-gray-100">
                      <IoHeartOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
                    </button>
                    <button className="bg-gray-100">{isSeen}</button>
                  </div>

                  <button
                    // onClick={() => setCart(cart + 1)}
                    className="absolute w-full bottom-0 z-40  text-center text-sm lg:text-base text-gray-100  p-2 bg-gray-800"
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

                  <h4 className="space-x-3 text-sm font-medium">
                    <span className="text-red-500">${item.amount}</span>
                    {item.prevAmount ? (
                      <span className="text-gray-400 line-through">
                        ${item.prevAmount}
                      </span>
                    ) : null}
                  </h4>
                  <span className="flex space-x-1">
                    {item.rating &&
                      Array.from(Array(Math.floor(item.rating))).map(
                        (_, id) => (
                          <IoStar className="text-yellow-500" key={id} />
                        )
                      )}
                  </span>

                  {item.colors ? (
                    <div className="flex items-center space-x-2">
                      <h4 className="text-xs font-medium text-grey-500">
                        Colors
                      </h4>
                      {item.colors.map((color: string) => (
                        <button
                          key={color}
                          className="w-3 h-3 lg:w-4 lg:h-4 rounded-xl hover:outline-2 hover:outline-gray-800"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  ) : null}
                </Link>
              </div>
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

      {/* Featured */}
      <div className="container flex flex-col justify-center space-y-4  mx-auto pb-8 pt-8 px-4 md:px-0">
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
          <h2 className="text-gray-700 text-lg font-medium md:text-2xl">
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
                  Women's Collections
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

        <div className="flex items-center justify-center space-x-6 md:justify-evenly pt-16">
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
    </div>
  );
}
