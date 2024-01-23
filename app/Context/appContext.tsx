"use client";

import React, { createContext, useState } from "react";
import {
  DummyUsers,
  Products,
  Shoplist,
  Cart,
  Bestselling,
  Wishlist,
  AllProducts,
} from "@/data/dummyData";

import {
  AppContextInterface,
  ItemType,
  LoginType,
  ProductType,
  UserType,
} from "@/type.d";

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export const AppContextProvider = (props: any) => {
  /*===========================================
             APP  GLOBAL  STATE
    ===========================================*/
  const [cart, setCart] = useState<ProductType[]>([...Cart]);
  const [bestSelling, setBestSelling] = useState<ProductType[]>([
    ...Bestselling,
  ]);

  const [shopList, setShoplist] = useState<ProductType[]>([...Shoplist]);

  const [products, setProducts] = useState<ProductType[]>([...AllProducts]);

  const [wishList, setWishList] = useState<ProductType[]>([...Wishlist]);

  const [authenticated, setAuthenticated] = useState<Boolean>(true);
  const [login, setLogin] = useState<LoginType>({ isLogin: false });
  const [user, setUser] = useState<UserType>({ email: "", password: "" });

  //Handle login
  const handleLogin = (login: UserType) => {
    const loginUser = DummyUsers.filter((user) => user.ID === login.ID);
  };

  return (
    <AppContext.Provider
      value={{
        authenticated,
        products,
        shopList,
        bestSelling,
        setAuthenticated,
        setUser,
        cart,
        setCart,
        wishList,
        login,
        setLogin,
      }}
      {...props}
    />
  );
};
