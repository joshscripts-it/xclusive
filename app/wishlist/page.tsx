"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { AppContext } from "../Context/appContext";
import {
  IoCartOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoStar,
  IoTrashOutline,
} from "react-icons/io5";
import { ItemType, ProductType } from "@/type.d";

export default function Page() {
  // App Internal State
  const [visible, setVisible] = useState<Boolean>(true);

  const { shopList, setCart, cart, wishList } = useContext(AppContext);

  const isSeen = visible ? (
    <IoEyeOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
  ) : (
    <IoEyeOffOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
  );

  return (
    <div className="container mx-auto my-4  w-full h-auto p-8 space-y-16">
      {/* WishList  */}
      <div className="space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h4 className="text-base font-medium text-gray-600 d:text-base lg:text-lg">
            wishlist {wishList?.length && `(${wishList.length})`}
          </h4>
          {wishList?.length && (
            <button className="flex items-center justify-center w-auto px-4 md:px-6 py-2 border border-gray-500 text-center text-gray-600 text-xs font-medium md:text-base lg:text-md">
              Move All To Bag
            </button>
          )}
        </header>

        {wishList?.length ? (
          <div className="flex space-x-6 items-center mb-6 overflow-x-auto">
            {wishList.map((item: ProductType) => (
              <div
                key={item.ID}
                className={`relative flex flex-col space-y-2 ml-4 z-30`}
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-gray-100 rounded-sm flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-2/5 h-2/5"
                    priority={true}
                  />
                  <div className="absolute z-50 top-4 right-2 flex flex-col space-y-4">
                    <button className="bg-gray-100">
                      <IoTrashOutline className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>

                  <button
                    className="absolute w-full text-sm font-medium flex items-center justify-center bottom-0 z-50 text-center text-gray-100 self-end p-2 bg-gray-800"

                    // onClick={() => setCart(cart?.length)}
                  >
                    <IoCartOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-200 mr-2 text-sm lg:text-base" />
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
        <div className="flex space-x-6 items-center mb-6 overflow-x-auto">
          {shopList.map((item: ItemType) => (
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
                <div className="absolute z-50 top-4 right-2 flex flex-col space-y-4">
                  <button
                    className="bg-gray-100"
                    onClick={() => alert("Seen!")}
                  >
                    {isSeen}
                  </button>
                </div>

                <button
                  className="absolute w-full text-sm  font-medium flex items-center justify-center bottom-0 z-50 text-center text-gray-100 self-end p-2 bg-gray-800"

                  // onClick={() => setCart(cart + 1)}
                >
                  <IoCartOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-200 mr-2" />
                  Add To Cart
                </button>
              </div>
              <Link href={`${item.path}/${item.ID}`} className="space-y-2 mb-4">
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
  );
}
