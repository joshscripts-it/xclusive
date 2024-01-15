"use client";

import { useContext } from "react";
import Image from "next/image";
import { AppContext } from "../Context/appContext";
import master_card from "../../assets/images/master.png";
import visa_card from "../../assets/images/visa.png";
import bkash_card from "../../assets/images/bkash.png";
import nagad_card from "../../assets/images/nagad.png";

export default function Page() {
  const { cart } = useContext(AppContext);

  const cartTotal = cart
    ?.map((val: any) => val.amount)
    .reduce((prevVal, currentVal) => prevVal + currentVal);

  return (
    <div className="container mx-auto  w-full h-auto p-8 space-y-8">
      {/* Breadcrumb */}
      <header className="flex justify-between items-center">
        <h4 className="text-xs font-medium text-gray-400 md:text-sm">
          Account / My account / product / cart /{" "}
          <span className="text-gray-500">Checkout</span>
        </h4>
      </header>

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

              <div className="flex items-center justify-between space-x-4  flex-wrap">
                <label className="flex items-center justify-start space-x-4">
                  <input
                    type="checkbox"
                    className="rounded-full checked:text-red-500 checked:ring-red-500 hover:ring-red-500 active:ring-red-500 indeterminate:ring-red-500"
                  />
                  <h4 className="text-base text-gray-700">Bank</h4>
                </label>
                <div className="flex items-center justify-end space-x-4">
                  <Image src={master_card} alt="card master" />
                  <Image src={visa_card} alt="card master" />
                  <Image src={bkash_card} alt="card master" />
                  <Image src={nagad_card} alt="card master" />
                </div>
              </div>

              <label className="flex items-center justify-start space-x-4">
                <input
                  type="checkbox"
                  className="rounded-full checked:text-red-500 checked:ring-red-500 hover:ring-red-500 active:ring-red-500 indeterminate:ring-red-500"
                />
                <h4 className="text-base text-gray-700">Cash on delivery</h4>
              </label>

              <div className="basis-full flex items-center space-x-2">
                <input
                  placeholder="Coupon Code"
                  type="text"
                  className="w-full flex-1 form-input p-4 text-center border-0 bg-slate-100 focus:border-slate-500 focus:ring-slate-400"
                />

                <button className="p-4 flex items-center justify-center text-base md:text-sm lg:text-base text-gray-50 bg-red-500 rounded">
                  Apply Code
                </button>
              </div>

              <button className="self-start py-1 px-5  md:w-auto lg:w-48 h-14 flex items-center justify-center text-base text-gray-50 bg-red-500 rounded">
                place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
