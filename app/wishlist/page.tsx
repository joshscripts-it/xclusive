"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { AppContext } from "../Context/appContext";
import {
  IoCartSharp,
  IoEyeOffOutline,
  IoEyeOutline,
  IoHeart,
  IoHeartOutline,
  IoStar,
  IoTrashOutline,
} from "react-icons/io5";
import { ProductType } from "@/type.d";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import { AnimatePresence, motion } from "motion/react";

const WishListItem = ({ item }: { item: ProductType }) => {
  const {
    addOrRemoveProdFromWishList,
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
              <IoTrashOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
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

const JustForYouComponent = ({
  item,
  isSeen,
}: {
  item: ProductType;
  isSeen: React.ReactNode;
}) => {
  const {
    addOrRemoveProdFromWishList,
    isOnWishList,
    removeFromCart,
    isProdOnCart,
    addToCart,
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

export default function Page() {
  // App Internal State
  const [visible, setVisible] = useState<Boolean>(true);
  let newWishList: any[] = [];

  const { shopList, wishList, products } = useContext(AppContext);

  if (wishList?.length && products?.length) {
    for (let i in wishList) {
      // newWishList.push(products[i].ID == wishList[i]);
      let found = products.filter(
        (product: ProductType) => product?.ID == wishList[i]
      );

      newWishList.push(...found);
    }
  }

  const isSeen = visible ? (
    <IoEyeOutline className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-gray-700" />
  ) : (
    <IoEyeOffOutline className="w-3 h-3  sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-gray-700" />
  );

  return (
    <div className="container mx-auto my-4 px-2  w-full h-auto space-y-16">
      {/* WishList  */}
      <div className="space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h4 className="text-base font-medium text-gray-600 d:text-base lg:text-lg">
            Wishlist {wishList?.length && `(${wishList.length})`}
          </h4>
          {wishList?.length && (
            <button className="flex items-center justify-center w-auto px-4 md:px-6 py-2 border border-gray-500 text-center text-gray-600 text-xs font-medium md:text-base lg:text-md">
              Move All To Bag
            </button>
          )}
        </header>

        {wishList?.length ? (
          <div className="flex space-x-6 items-stretch mb-6 overflow-x-auto scrollbar-hide">
            {newWishList.map((item: ProductType) => (
              <WishListItem item={item} key={item.ID} />
            ))}
          </div>
        ) : (
          <div className="h-32 flex items-center justify-center">
            {" "}
            <h4 className="text-gray-500 text-center text-sm md:text-md lg:text-lg bg-gray-50 p-2 rounded">
              Yey! Your wishlist is currently empty!
            </h4>
          </div>
        )}
      </div>

      {/* For You  */}
      <div className="space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h4 className="text-base font-medium text-gray-600 d:text-base lg:text-lg">
            Just For You
          </h4>
          <button className="flex items-center justify-center w-auto px-4 md:px-6 py-2 border border-gray-500 text-center text-gray-600 text-xs font-medium md:text-base lg:text-md">
            See All
          </button>
        </header>
        <div className="flex space-x-6 items-stretch mb-6 overflow-x-auto scrollbar-hide">
          {shopList.map((item: ProductType) => (
            <JustForYouComponent isSeen={isSeen} item={item} key={item.ID} />
          ))}
        </div>
      </div>
    </div>
  );
}
