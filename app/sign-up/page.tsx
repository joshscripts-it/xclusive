import Link from "next/link";
import Image from "next/image";
import shopping_cart from "../../assets/images/shopping.webp";
import logo_google from "../../assets/icons/icons8-google-96.svg";
import { Button } from "@nextui-org/react";

export default function SigninPage() {
  return (
    <div className="flex items-center my-4 h-auto">
      <div className="h-full w-full grid grid-cols-1 grid-rows-1  md:grid-cols-2 space-y-8">
        <Image
          src={shopping_cart}
          alt="shopping cart"
          className="h-full"
          priority={true}
        />
        <div className="w-2/3 flex flex-col items-center justify-center space-y-6 py-8 mx-auto">
          <div className="w-full space-y-3">
            <h2 className="text-gray-800 text-xl font-medium md:text-2xl lg:text-4xl">
              Create an account
            </h2>
            <p className="text-gray-600 text-base md:text-md lg:text-lg">
              Enter your details below
            </p>
          </div>
          <div className="w-full space-y-4">
            <input
              placeholder="Name"
              className="block w-full text-gray-600 text-base placeholder-gray-400 border-gray-300 p-2 md:text-left "
            />
            <input
              placeholder="Email or Phone Number"
              className="w-full block text-gray-600 text-base placeholder-gray-400 border-gray-300 p-2 md:text-lef focus:border-slate-500"
            />
            <input
              placeholder="Password"
              className="w-full block text-gray-600 text-base placeholder-gray-400 border-gray-300 p-2 md:text-left focus:border-slate-500 active:border-slate-500"
            />
            <Button
              disableRipple
              disableAnimation
              size="lg"
              className="w-full text-lg bg-red-600 font-medium text-gray-100 p-4 rounded"
            >
              Create Account
            </Button>

            <Button
              disableAnimation
              disableRipple
              size="lg"
              variant="solid"
              className="w-full flex items-center justify-center text-lg outline-1 outline bg-transparent outline-gray-400 font-medium text-gray-600 p-4 rounded"
            >
              <Image
                src={logo_google}
                alt="logo google"
                className="w-7 h-7 mr-4"
              />
              Sign-up with Google
            </Button>
            <div className="flex items-center justify-center space-x-4">
              <p className="text-gray-600 text-base md:text-md lg:text-lg">
                Already have account?
              </p>
              <Link
                href="/sign-in"
                className="font-bold text-base text-gray-600"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
