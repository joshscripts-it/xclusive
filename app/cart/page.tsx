"use client";

import { useContext } from "react";
import { AppContext } from "../Context/appContext";
import { ProductType } from "@/type.d";
import Image from "next/image";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import Link from "next/link";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function Page() {
  const { cart } = useContext(AppContext);

  const cartTotal = cart
    ?.map((val: any) => val.amount)
    .reduce((prevVal, currentVal) => prevVal + currentVal);

  return (
    <div className="container mx-auto my-4  w-full h-auto p-8 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumbs separator={"/"}>
        <BreadcrumbItem>/Home</BreadcrumbItem>
        <BreadcrumbItem>carts</BreadcrumbItem>
      </Breadcrumbs>

      <div>
        <div className="space-y-8">
          {cart && cart?.length ? (
            <>
              <div className="flex justify-between items-center shadow p-4 shadow-gray-100">
                <h4 className="basis-1/4 text-sm md:text-base lg:text-lg font-medium text-gray-600 text-center">
                  Product
                </h4>
                <h4 className="basis-1/4 text-sm md:text-base lg:text-lg font-medium text-gray-600 text-center">
                  Price
                </h4>
                <h4 className="basis-1/4 text-sm md:text-base lg:text-lg font-medium text-gray-600">
                  Quantity
                </h4>
                <h4 className="basis-1/4 text-sm md:text-base lg:text-lg font-medium text-gray-600 text-center">
                  Subtotal
                </h4>
              </div>
              {cart.map((item: ProductType) => (
                <div
                  key={item.ID}
                  className="flex justify-between items-center shadow p-4 shadow-gray-100"
                >
                  <div className="basis-1/4 flex items-center space-x-2">
                    <Image
                      src={item.images[0]}
                      className="w-1/3 h-1/3 lg:w-20 lg:h-20"
                      alt={`${item.name} image`}
                    />
                    <h4 className="text-xs md:text-sm lg:text-base  font-medium text-gray-500">
                      {item.name}
                    </h4>
                  </div>

                  <h4 className="basis-1/4 text-xs md:text-sm  font-medium lg:text-base text-gray-500 text-center">
                    $ {item.amount}
                  </h4>
                  <div className="basis-1/4">
                    <div className="shadow border border-gray-400 px-2  w-16 rounded flex items-center justify-center space-x-2">
                      <input
                        name="city"
                        defaultValue="1"
                        className="self-center block w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm text-center placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                      <div className="flex flex-col items-center justify-center space-y-1">
                        <button>
                          <IoChevronUpOutline className="w-3 h-3 text-gray-500" />
                        </button>
                        <button>
                          <IoChevronDownOutline className="w-3 h-3 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <h4 className="basis-1/4 text-xs md:text-sm lg:text-base font-medium text-gray-500 text-center">
                    $ {item.amount}
                  </h4>
                </div>
              ))}

              <div className="flex justify-between items-center">
                <button className="py-3 px-5 flex items-center justify-center text-xs md:text-sm lg:text-base font-medium text-gray-600 border border-gray-300">
                  Return To Shop
                </button>

                <button className="py-3 px-5 flex items-center justify-center text-xs md:text-sm lg:text-base font-medium text-gray-600 border border-gray-300">
                  Update Cart
                </button>
              </div>

              {/* Summary  */}
              <div className="flex items-start justify-between flex-wrap space-y-3 pt-16">
                <div className="basis-full md:basis-2/4 flex items-center space-x-2 pr-2">
                  <input
                    placeholder="Coupon Code"
                    type="text"
                    className="w-full flex-1W lg:w-48 text-sm p-4 text-center border-0 bg-slate-100 focus:border-slate-500 focus:ring-slate-400"
                  />

                  <button className="w-48 p-4 flex items-center justify-center text-sm lg:text-base text-gray-50 bg-red-500 rounded">
                    Apply Code
                  </button>
                </div>

                <div className="basis-full md:basis-2/4  p-6 flex flex-col justify-center text-sm lg:text-base font-medium rounded space-y-4 text-gray-600 border border-gray-300">
                  <h2 className="text-base lg:text-lg font-medium text-gray-700">
                    Cart Total
                  </h2>
                  <div className="flex items-center justify-between p-3 border-b border-b-gray-300">
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      Subtotal:{" "}
                    </h4>
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      $ {cartTotal}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between p-3 border-b border-b-gray-300">
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      Shipping:{" "}
                    </h4>
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      Free
                    </h4>
                  </div>

                  <div className="flex items-center justify-between p-3">
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      Total:{" "}
                    </h4>
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      $ {cartTotal}
                    </h4>
                  </div>

                  <Link
                    href="/checkout"
                    className="self-center py-1 px-3 w-full md:w-auto lg:w-48 h-14 flex items-center justify-center text-sm lg:text-base text-gray-50 bg-red-500 rounded"
                  >
                    Process to checkout
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="h-32 p-4 flex items-center justify-center ">
              <h4 className="bg-gray-100 p-2 text-sm md:text-lg lg:text-xl font-medium text-gray-500">
                Your cart is empty!
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
