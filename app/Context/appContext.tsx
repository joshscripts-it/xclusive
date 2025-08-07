"use client";

import React, { createContext, useState } from "react";
import {
  DummyUsers,
  Shoplist,
  Cart,
  Bestselling,
  Wishlist,
  AllProducts,
} from "@/data/dummyData";

import {
  AppContextInterface,
  LoginType,
  ProductType,
  UserType,
} from "@/type.d";

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export const AppContextProvider = (props: any) => {
  /*===========================================
             APP  GLOB STATE
    ===========================================*/
  const [cart, setCart] = useState<string[]>([...Cart]);
  const [cartQuantities, setCartQuantities] = useState<{
    [key: string]: number;
  }>({});
  const [bestSelling, setBestSelling] = useState<ProductType[]>([
    ...Bestselling,
  ]);

  const [shopList, setShoplist] = useState<ProductType[]>([...Shoplist]);

  const [products, setProducts] = useState<ProductType[]>([...AllProducts]);

  const [wishList, setWishList] = useState<string[]>([...Wishlist]);

  const [authenticated, setAuthenticated] = useState<Boolean>(true);
  const [login, setLogin] = useState<LoginType>({ isLogin: false });
  const [user, setUser] = useState<UserType>({ email: "", password: "" });

  //@handle user login
  const handleLogin = (login: UserType) => {
    const loginUser = DummyUsers.filter((user) => user.ID === login.ID);
  };

  //@check if certain product exist on wishlist
  const isProdOnCart = (prodID: string) => {
    return cart?.find((i: string) => i == prodID);
  };
  // @add item/prod. to cart
  const addToCart = (prodID: string) => {
    // @make sure same item/product dont repeat on cart
    const itemsOnCart = new Set(cart);

    // @check if item/prod. already on cart
    const isOnCart = Array.from(itemsOnCart).find((i) => i == prodID);
    if (isOnCart) {
      console.log("Item already on cart!");
      return setCart(Array.from(itemsOnCart));
    }

    itemsOnCart.add(prodID);
    setCartQuantities((prev) => ({ ...prev, [prodID]: 1 }));
    console.log(`Product with the ID: ${prodID} added to Cart!`);
    return setCart(Array.from(itemsOnCart));
  };

  // @increment quantity of product in cart
  const incrementCartQuantity = (prodID: string) => {
    if (isProdOnCart(prodID)) {
      setCartQuantities((prev) => ({
        ...prev,
        [prodID]: (prev[prodID] || 1) + 1,
      }));
    } else {
      addToCart(prodID);
    }
  };

  // @decrement quantity of product in cart
  const decrementCartQuantity = (prodID: string) => {
    if (isProdOnCart(prodID)) {
      setCartQuantities((prev) => {
        const currentQty = prev[prodID] || 1;
        if (currentQty <= 1) {
          removeFromCart(prodID);
          const { [prodID]: removed, ...rest } = prev;
          return rest;
        }

        return {
          ...prev,
          [prodID]: currentQty - 1,
        };
      });
    }
  };

  // @remove item/prod. from cart
  const removeFromCart = (prodID: string) => {
    // make sure same item/product dont repeat on cart
    const itemsOnCart = new Set(cart);
    // check if item/prod. already on cart
    const isOnCart = Array.from(itemsOnCart).find((i) => i == prodID);
    if (isOnCart) {
      console.log("Item removed from cart!");
      itemsOnCart.delete(prodID);
      setCartQuantities((prev) => {
        const { [prodID]: removed, ...rest } = prev;
        return rest;
      });
      return setCart(Array.from(itemsOnCart));
    }
  };

  //check if certain product exist on wishlist
  const isOnWishList = (prodID: string) => {
    return wishList?.find((i: string) => i == prodID);
  };
  //@addorRemove item from wishlist
  const addOrRemoveProdFromWishList = (prodID: string) => {
    const setFromWishList = new Set(wishList);

    const isExist = Array.from(setFromWishList).find(
      (i: string) => i == prodID
    );

    if (isExist) {
      //remove prod. from wishlist if it exists
      setFromWishList.delete(prodID);

      console.log(`Product with ProdID: ${prodID} was removed from wish list`);
      return setWishList(Array.from(setFromWishList));
    }

    setFromWishList.add(prodID);

    console.log(`Product with ProdID: ${prodID} was added to wish list`);

    return setWishList(Array.from(setFromWishList).reverse());
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
        cartQuantities,
        wishList,
        login,
        setLogin,
        addOrRemoveProdFromWishList,
        isOnWishList,
        addToCart,
        removeFromCart,
        isProdOnCart,
        incrementCartQuantity,
        decrementCartQuantity,
      }}
      {...props}
    />
  );
};
