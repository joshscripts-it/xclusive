import Image from "next/image";
import about_image from "../../assets/images/side_image.png";
import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";
import person3 from "../../assets/images/person3.png";

import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoStorefrontOutline,
} from "react-icons/io5";
import {
  MdOutlineCurrencyExchange,
  MdOutlineHeadsetMic,
  MdOutlineLocalShipping,
  MdOutlineMonetizationOn,
  MdOutlineShoppingBag,
  MdOutlineVerifiedUser,
} from "react-icons/md";

export default function Page() {
  return (
    <div className="container mx-auto my-4  w-full h-auto p-8 space-y-12 lg:space-y-20">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h4 className="text-sm text-light text-gray-400  ">
          / <span className="text-gray-500 font-medium">About</span>
        </h4>
      </header>

      <div className="flex justify-between items-center flex-wrap-reverse md:flex-nowrap">
        <div className="basis-full md:basis-2/5 space-y-4">
          <h2 className="text-xl lg:text-2xl text-gray-800 font-medium">
            Our Story
          </h2>
          <p className="text-base font-light text-gray-500">
            Launced in 2023, Xclusive is West Africa’s premier online shopping
            makterplace with an active presense in Lagos, Nigeria. Supported by
            wide range of tailored marketing, data and service solutions,
            Xclusive has 10,500 sallers and 300 brands and serves 3 millioons
            customers across the region.
          </p>

          <p className="text-base font-light text-gray-500">
            Xclusive has more than 1 Million products to offer, growing at a
            very fast pace. Xclusive offers a diverse assotment in categories
            ranging consumer.
          </p>
        </div>
        <div className="basis-full md:basis-3/4 flex justify-center md:justify-end mb-8">
          <Image src={about_image} alt="about image" className="w-3/4 h-2/3" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="flex flex-col items-center justify-center p-6 border border-gray-300 space-y-4 rounded hover:bg-red-500 hover:text-gray-50">
          <div className="p-2 border-8  text-inherit border-gray-300 rounded-full bg-gray-900">
            <IoStorefrontOutline className="text-gray-50 w-6 h-6" />
          </div>
          <h2 className="font-bold text-xl lg:text-2xl text-inherit">10.5k</h2>

          <span className="text-inherit text-base text-center text-gray-500 font-light">
            Active Sellers On Site
          </span>
        </button>

        <button className="flex flex-col items-center justify-center p-6 border border-gray-300 space-y-4 rounded hover:bg-red-500 hover:text-gray-50">
          <div className="p-2 border-8  text-inherit border-gray-300 rounded-full bg-gray-900">
            <MdOutlineMonetizationOn className="text-gray-50  w-6 h-6" />
          </div>
          <h2 className="font-bold text-xl lg:text-2xl text-inherit">33k</h2>

          <span className="text-inherit text-sm lg:text-base text-center text-gray-500 font-light">
            Monthly Products Sale
          </span>
        </button>

        <button className="flex flex-col items-center justify-center p-6 border border-gray-300 space-y-4 rounded hover:bg-red-500 hover:text-gray-50">
          <div className="p-2 border-8  text-inherit border-gray-300 rounded-full bg-gray-900">
            <MdOutlineShoppingBag className="text-gray-50 w-6 h-6" />
          </div>
          <h2 className="font-bold text-xl lg:text-2xl text-inherit">45.5k</h2>

          <span className="text-inherit text-sm lg:text-base text-center text-gray-500 font-light">
            Active Customers On Site
          </span>
        </button>

        <button className="flex flex-col items-center justify-center p-6 border border-gray-300 space-y-4 rounded hover:bg-red-500 hover:text-gray-50">
          <div className="p-2 border-8 text-inherit border-gray-300 rounded-full bg-gray-900">
            <MdOutlineCurrencyExchange className="text-gray-50 w-6 h-6" />
          </div>
          <h2 className="font-bold text-xl lg:text-2xl text-inherit">25k</h2>

          <span className="text-inherit text-sm lg:text-base text-center text-gray-500 font-light">
            Gross Annual Sales On Site
          </span>
        </button>
      </div>

      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-2 lg:gap-10 h-86">
        <div className="h-full flex flex-col space-y-4">
          <div
            className="bg-gray-200 self-center h-3/4 flex items-end justify-center px-4 pt-4"
            style={{ width: "95%" }}
          >
            <Image src={person1} alt="admin one" style={{ height: "95%" }} />
          </div>
          <div className="flex flex-col justify-start items-start space-y-2 ml-4">
            <h4 className="text-gray-700 text-base md:text-lg lg:text-xl font-medium">
              Tom Cruise
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Founder & chairman
            </p>
            <div className="flex justify-start space-x-2">
              <IoLogoTwitter className="w-3 h-3" />
              <IoLogoInstagram className="w-3 h-3" />
              <IoLogoLinkedin className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col space-y-4">
          <div
            className="bg-gray-200 self-center h-3/4 flex items-end justify-center px-4 pt-4"
            style={{ width: "95%" }}
          >
            <Image src={person2} alt="admin two" style={{ height: "95%" }} />
          </div>
          <div className="flex flex-col justify-start items-start space-y-2 ml-4">
            <h4 className="text-gray-700 text-base md:text-lg lg:text-xl font-medium">
              Emma Watson
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Managing Director
            </p>
            <div className="flex justify-start space-x-2">
              <IoLogoTwitter className="w-3 h-3" />
              <IoLogoInstagram className="w-3 h-3" />
              <IoLogoLinkedin className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col space-y-4">
          <div
            className="bg-gray-200 h-3/4 self-center flex items-end justify-center px-4 pt-4"
            style={{ width: "95%" }}
          >
            <Image src={person3} alt="admin three" style={{ height: "95%" }} />
          </div>
          <div className="flex flex-col justify-start items-start space-y-2 ml-4">
            <h4 className="text-gray-700 text-base md:text-lg lg:text-xl font-medium">
              Will Smith
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Product Designer
            </p>
            <div className="flex justify-start space-x-2">
              <IoLogoTwitter className="w-3 h-3" />
              <IoLogoInstagram className="w-3 h-3" />
              <IoLogoLinkedin className="w-3 h-3" />
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

          <h2 className="text-gray-800 text-center  font-medium text-sm lg:text-lg">
            FREE AND FAST DELIVERY
          </h2>
          <p className="text-sm lg:text-base text-center text-gray-500 font-light">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="basis-1/3 flex flex-col items-center justify-center space-y-4">
          {/* Icon  */}
          <button className="p-2 md:p-3 border-8 text-inherit border-gray-300 rounded-full bg-gray-900">
            <MdOutlineHeadsetMic className="text-gray-50 h-5 w-5 md:w-6 md:h-6" />
          </button>

          <h2 className="text-gray-800 text-center font-medium text-sm lg:text-lg">
            24/7 CUSTOMER SERVICE
          </h2>

          <p className="text-gray-500 font-light text-center text-sm lg:text-base">
            Friendly 24/7 customer support
          </p>
        </div>

        <div className="basis-1/3 flex flex-col items-center justify-center space-y-4">
          {/* Icon  */}
          <button className="p-2 md:p-3 border-8 text-inherit border-gray-300 rounded-full bg-gray-900">
            <MdOutlineVerifiedUser className="text-gray-50 h-5 w-5 md:w-6 md:h-6" />
          </button>

          <h2 className="text-gray-800 text-center font-medium text-sm lg:text-lg">
            MONEY BACK GUARANTEE
          </h2>

          <p className="text-gray-500 font-light text-center text-sm lg:text-base">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}
