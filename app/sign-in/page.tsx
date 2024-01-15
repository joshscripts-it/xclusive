"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import shopping_cart from "../../assets/images/shopping.webp";
import Link from "next/link";
import { DummyUsers } from "@/data/dummyData";
import { AppContext } from "../Context/appContext";

type LoginType = { email: string; password: string };

export default function SigninPage() {
  //Internal State
  const [login, setLogin] = useState<LoginType>({ email: "", password: "" });

  const { setAuthenticated, setUser, authenticated } = useContext(AppContext);

  // Handle login
  const handleLogin = () => {
    const { email, password } = login;

    if (!email) return alert("Email Fied Is Empty!");
    if (!password) return alert("Password Fied Is Empty!");

    const findUser = DummyUsers.filter(
      (user) => user.email === email && user.password === password
    );

    if (!findUser.length) return alert("No user was found!");

    setAuthenticated(true);
    setUser(findUser[0]);
  };

  useEffect(() => {
    if (authenticated) {
      redirect("/");
    }
  });

  return (
    <div className="flex items-center my-4 h-auto">
      <div className="h-full w-full grid grid-cols-1 grid-rows-1  md:grid-cols-2 space-y-8">
        <Image
          src={shopping_cart}
          alt="shopping cart"
          className="h-full"
          priority={true}
        />
        <div className="w-2/3 flex flex-col items-center justify-center space-y-8 py-4 mx-auto">
          <div className="w-full space-y-3">
            <h2 className="text-gray-800 text-xl font-medium md:text-2xl lg:text-4xl">
              Log in to Xclusive
            </h2>
            <p className="text-gray-600 text-base md:text-md lg:text-lg">
              Enter your details below
            </p>
          </div>
          <div className="w-full space-y-4">
            <input
              value={login.email}
              name="email"
              onChange={(e) =>
                setLogin((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              placeholder="Email or Phone Number"
              className="w-full block border-b text-gray-600 text-base placeholder-gray-400 border-gray-300 p-2"
            />
            <input
              value={login.password}
              name="password"
              onChange={(e) =>
                setLogin((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              placeholder="Password"
              className="w-full block border-b text-gray-600 text-base placeholder-gray-400 border-gray-300 p-2"
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <button
              onClick={handleLogin}
              className="w-20 lg:w-28 text-sm lg:text-lg bg-red-600 font-medium text-gray-100 p-1 lg:p-2 rounded"
            >
              Log In
            </button>
            <Link
              href="/forgot-password"
              className="text-red-500 text-sm md:text-base"
            >
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
