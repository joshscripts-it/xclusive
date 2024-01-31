"use client";

import { useContext, useMemo, useState } from "react";
import Image from "next/image";
import { AppContext } from "../Context/appContext";
import master_card from "../../assets/images/master.png";
import visa_card from "../../assets/images/visa.png";
import bkash_card from "../../assets/images/bkash.png";
import nagad_card from "../../assets/images/nagad.png";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { CartItemType, ItemTotalType, ProductType } from "@/type";

export default function Page() {
  const [coupon, setCoupon] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState("cash on delivery");
  const { cart } = useContext(AppContext);

  const handleApplyCoupon = () => {
    if (!coupon) {
      return alert("Invalid coupon code!");
    }

    alert("Coupon code applied successfully");
  };

  //calc item total
  const itemTotals = useMemo(() => {
    const itemTotal =
      cart &&
      cart.reduce((acc: any[], item: CartItemType) => {
        const existingItem = acc.find((i: any) => i.productId === item?.ID);

        if (existingItem) {
          existingItem.total += item?.price * item?.quantity;
        } else {
          acc.push({
            productId: item?.ID,
            total: item?.price * item?.quantity,
          });
        }
        return acc;
      }, [] as ItemTotalType[]);

    return itemTotal;
  }, [cart]);

  //calculate grand total
  const cartTotal = itemTotals?.reduce(
    (total: any, item: any) => total + item.total,
    0
  );
  return (
    <div className="container mx-auto  w-full h-auto p-8 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumbs separator="/">
        <BreadcrumbItem href="/account">Account</BreadcrumbItem>
        <BreadcrumbItem href="/account/my_account">my account</BreadcrumbItem>
        <BreadcrumbItem href="/account/my_account/product">
          product
        </BreadcrumbItem>
        <BreadcrumbItem href="/account/product/checkout">
          checkout
        </BreadcrumbItem>
      </Breadcrumbs>

      <div className="pt-4">
        <div className="flex flex-wrap justify-center md:justify-between items-stretch space-y-8">
          <div className="basis-full md:basis-2/4">
            <h2 className="text-base md:text-xl lg:text-2xl font-medium text-gray-700 mb-5">
              Billing Details
            </h2>
            <form className="block space-y-6">
              <label className="block">
                <span className="block text-xs md:text-sm text-slate-500">
                  First Name<span className="text-red-400">*</span>
                </span>
                <input
                  name="firstname"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block">
                <span className="block text-xs md:text-sm text-slate-500">
                  Company Name
                </span>
                <input
                  name="company"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block">
                <span className="block text-xs md:text-sm text-slate-500">
                  Street Address<span className="text-red-400">*</span>
                </span>
                <input
                  name="address"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block">
                <span className="block text-xs md:text-sm text-slate-500">
                  Apartment, floor, etc. (optional)
                </span>
                <input className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
              </label>

              <label className="block">
                <span className="block text-xs md:text-sm text-slate-500">
                  Town/City<span className="text-red-400">*</span>
                </span>
                <input
                  name="city"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block">
                <span className="block text-xs md:text-sm text-slate-500">
                  Phone Number<span className="text-red-400">*</span>
                </span>
                <input
                  name="phone"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block">
                <span className="block text-xs md:text-sm text-slate-500">
                  Email Address<span className="text-red-400">*</span>
                </span>
                <input
                  name="email"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>
              <label className="flex space-x-3 justify-start items-center">
                <input
                  type="checkbox"
                  className="appearance:none checked:text-red-500 checked:ring-red-500 hover:ring-red-500 active:ring-red-500 indeterminate:ring-red-500"
                />
                <span className="block text-xs md:text-sm text-slate-500">
                  Save this information for faster check-out next time
                </span>
              </label>
            </form>
          </div>

          <div className="basis-full md:basis-2/5">
            <div className="p-6 flex flex-col justify-center text-sm lg:text-base font-medium rounded space-y-4 text-gray-600">
              <div className="flex items-center justify-between p-3 border-b border-b-gray-300">
                <h4 className="text-base text-gray-700">Subtotal: </h4>
                <h4 className="text-base text-gray-700">$ {cartTotal}</h4>
              </div>
              <div className="flex items-center justify-between p-3 border-b border-b-gray-300">
                <h4 className="text-base text-gray-700">Shipping: </h4>
                <h4 className="text-lg text-gray-700">Free</h4>
              </div>

              <div className="flex items-center justify-between p-3">
                <h4 className="text-base text-gray-700">Total: </h4>
                <h4 className="text-base text-gray-700">$ {cartTotal}</h4>
              </div>

              <RadioGroup
                label="Choose Payment Method"
                color="danger"
                defaultValue={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <Radio value="Bank">
                  <div className="flex w-full space-x-4 justify-between items-center">
                    <h4 className="basis-2/5">Bank</h4>
                    <div className="flex basis-3/5 items-center justify-end space-x-4">
                      <Image src={master_card} alt="card master" />
                      <Image src={visa_card} alt="card master" />
                      <Image src={bkash_card} alt="card master" />
                      <Image src={nagad_card} alt="card master" />
                    </div>
                  </div>
                </Radio>

                <Radio value="cash on delivery">Cash on delivery</Radio>
              </RadioGroup>

              <div className="basis-full flex items-stretch space-x-2">
                <input
                  placeholder="Coupon Code"
                  defaultValue={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  type="text"
                  className="w-full flex-1 form-input p-4 text-center border-0 bg-slate-100 focus:border-slate-500 focus:ring-slate-400"
                />

                <Button
                  variant="solid"
                  color="danger"
                  size="lg"
                  className="p-4 flex items-center justify-center text-base md:text-sm lg:text-base text-gray-50 bg-red-500 rounded font-medium"
                  onPress={handleApplyCoupon}
                  disableAnimation
                >
                  Apply Code
                </Button>
              </div>

              <Button
                disableAnimation
                color="danger"
                size="lg"
                className="self-start py-1 px-5 w-full  md:w-auto lg:w-48 h-14 flex items-center justify-center text-base lg:text-lg text-gray-50 bg-red-500 rounded font-medium"
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
