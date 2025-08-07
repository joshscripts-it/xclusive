import Image from "next/image";
import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import { IoLogoApple, IoLogoInstagram } from "react-icons/io5";
import QrCode from "../../assets/images/Joshag_Qrcode_Generator.svg";
import iconSend from "../../assets/icons/icon-send.svg";
import playstore_icon from "../../assets/icons/icons8-google-play.svg";

export const Footer = () => {
  return (
    <div className="min-w-full w-full bg-slate-900 flex flex-col items-center min-h-80 h-full p-8">
      <div className="container grid grid-flow-row grid-rows-4 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:grid-rows-2 lg:grid-rows-2  xl:grid-rows-1 mx-auto">
        <div>
          <h2 className="tex-xl mb-2 text-center font-bold text-gray-100 md:text-2xl">
            ShopEssential
          </h2>

          <div className="flex flex-col items-center">
            <h4 className="tex-base mb-1 text-center font-medium text-gray-200 md:text-lg">
              Subscribe
            </h4>
            <p className="text-center mb-1 text-gray-300 text-sm lg:text-base">
              Get 10% off your first order
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-center text-gray-100 p-2 pr-10 w-60 md:w-52 h-auto bg-slate-800 rounded-md focus:ring-2 focus:ring-slate-400"
              />
              <Image
                src={iconSend}
                alt="send"
                style={{ marginLeft: "-2rem" }}
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="tex-base mb-1 text-center font-medium text-gray-200 md:text-lg">
            Support
          </h4>
          <div className="mb-2">
            <p className="text-center mb-1 text-gray-300 text-sm lg:text-base">
              111 Rd., Km15, Ikeja
            </p>
            <p className="text-center mb-1 text-gray-300 text-sm lg:text-base">
              Lagos, Nigeria
            </p>
          </div>
          <div>
            <p className="text-center mb-1 text-gray-300 text-sm lg:text-base">
              shopEssential@gmail.com
            </p>
            <p className="text-center mb-1 text-gray-300 text-sm lg:text-base">
              +88015-88888-9999
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="tex-base mb-1 text-center font-medium text-gray-200 md:text-lg">
            Account
          </h4>
          <Link
            href="/account"
            className="text-center mb-1 text-gray-400 text-sm lg:text-base hover:text-gray-200"
          >
            My account
          </Link>
          <Link
            href="/sign-in"
            className="text-center mb-1 text-gray-400 text-sm lg:text-base hover:text-gray-200"
          >
            Log-in/register
          </Link>

          <Link
            href="/cart"
            className="text-center mb-1 text-gray-400 text-sm lg:text-base hover:text-gray-200"
          >
            Cart
          </Link>
          <Link
            href="/wishlist"
            className="text-center mb-1 text-gray-400 text-sm lg:text-base hover:text-gray-200"
          >
            Wishlist
          </Link>

          <Link
            href="/shop"
            className="text-center mb-1 text-gray-400 text-sm lg:text-base hover:text-gray-200"
          >
            Shop
          </Link>
        </div>

        <div className="flex items-center flex-col">
          <h4 className="tex-base mb-1 text-center font-medium text-gray-200 md:text-lg">
            Quick link
          </h4>
          <Link
            href="/privacy"
            className="text-center mb-1 text-gray-400 text-sm lg:text-base hover:text-gray-200"
          >
            Privacy policy
          </Link>

          <Link
            href="/terms"
            className="text-center mb-1 text-gray-400 text-sm lg:text-base hover:text-gray-200"
          >
            Terms of use
          </Link>
          <Link
            href="/about"
            className="text-center mb-1 text-gray-400 text-sm lg:text-base hover:text-gray-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-center mb-1 text-gray-400 text-sm lg:text-base hover:text-gray-200"
          >
            Contact
          </Link>
          <Link
            href="/faqs"
            className="ttext-center mb-1 text-gray-400 text-sm lg:text-base hover:text-gray-200"
          >
            FAQ
          </Link>
        </div>

        <div className="flex flex-col">
          <h4 className="tex-base mb-1 text-center font-medium text-gray-200 md:text-lg">
            Download App
          </h4>

          <div>
            <p className="text-center mb-1 text-gray-400 text-sm lg:text-base">
              Save $3 With App New Users Only
            </p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <Image src={QrCode} alt="qrcode" className="w-28 h-28" />
              <div className="space-y-2">
                <button className="flex w-44 h-12 space-x-2 items-center justify-center ring-1 p-2 rounded-lg ring-slate-400">
                  <Image
                    src={playstore_icon}
                    alt="logo playstore"
                    width={27}
                    height={27}
                  />

                  <div className="flex flex-col justify-center">
                    <p className="text-gray-300 text-left text-sm font-light">
                      Get it on
                    </p>
                    <p className="tex-base mb-1 text-center font-medium text-gray-200 md:text-lg">
                      Google Play
                    </p>
                  </div>
                </button>
                <button className="flex w-44 h-12 space-x-2 items-center justify-center ring-1 p-2 rounded-lg ring-slate-400">
                  <IoLogoApple size={27} className="text-gray-300" />
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-gray-300 text-left text-sm font-light">
                      Download on the
                    </p>
                    <p className="tex-base mb-1 text-center font-medium text-gray-200 md:text-lg">
                      App Store
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Link href="http://facebook.com">
                <TiSocialFacebook size={24} className="text-gray-300" />
              </Link>
              <Link href="http://twitter.com">
                <TiSocialTwitter size={24} className="text-gray-300" />
              </Link>
              <Link href="http://instagram.com">
                <IoLogoInstagram size={20} className="text-gray-300" />
              </Link>

              <Link href="http://linkedin.com">
                <TiSocialLinkedin size={24} className="text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-t-slate-500 mt-4" />
      <div className="mt-6">
        <h4 className="text-gray-400 text-sm text-center">
          &copy;Copyright shopEssential 2025. All right reserved.
        </h4>
      </div>
    </div>
  );
};
