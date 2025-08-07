"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { AppContext } from "../Context/appContext";
import {
  IoCartOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import user_icon from "../../assets/icons/user_icon.svg";
import order_icon from "../../assets/icons/order.svg";
import cancel_icon from "../../assets/icons/icon-cancel.svg";
import review_icon from "../../assets/icons/Icon-Reviews.svg";
import logout_icon from "../../assets/icons/Icon-logout.svg";
import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

export const AppbarComponent = () => {
  // #@Internal state
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { authenticated, cart, wishList } = useContext(AppContext);
  const pathname = usePathname();

  return (
    <Navbar
      isBordered
      className="z-50"
      classNames={{
        wrapper: "justify-around min-w-full",
      }}
    >
      <NavbarBrand>
        <Link href="/" className="font-bold text-center text-xl lg:text-2xl">
          shopEssential
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 flex-1" justify="center">
        <NavbarItem
          className={`${
            pathname === "/" ? "border-0 border-b-2 border-gray-400" : ""
          } text-center`}
        >
          <Link color="foreground" href="/" className="text-sm lg:text-base">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${
            pathname === "/contact" ? "border-0 border-b-2 border-gray-400" : ""
          } text-center`}
        >
          <Link href="/contact" className="text-sm lg:text-base">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${
            pathname === "/about" ? "border-0 border-b-2 border-gray-400" : ""
          } text-center`}
        >
          <Link
            color="foreground"
            href="/about"
            className="text-sm lg:text-base"
          >
            About
          </Link>
        </NavbarItem>

        <NavbarItem
          className={`${
            pathname === "/sign-up" ? "border-0 border-b-2 border-gray-400" : ""
          } text-center`}
        >
          <Link
            color="foreground"
            href="/sign-up"
            className="text-sm lg:text-base"
          >
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="w-full" justify="end">
        <NavbarItem className="hidden lg:flex">
          <div className="relative hidden md:flex items-center">
            <input
              type="search"
              className="form-input rounded-md pr-10 border-0 bg-slate-100 focus:border-slate-500 w-60 focus:ring-slate-400"
              placeholder="What are you looking for?"
            />
            <Button
              isIconOnly
              variant="light"
              size="sm"
              className="absolute right-5"
            >
              <IoSearchOutline size={20} className="text-gray-400" />
            </Button>
          </div>
        </NavbarItem>
        <NavbarItem>
          <Badge
            showOutline={false}
            color="danger"
            content={wishList && wishList.length}
          >
            <Button
              as={Link}
              variant={pathname === "/wishlist" ? "solid" : "light"}
              isIconOnly
              href="/wishlist"
              size="sm"
              className="relative"
              radius="full"
              color={pathname === "/wishlist" ? "danger" : "default"}
            >
              <IoHeartOutline
                className={`${
                  pathname === "/wishlist" ? "text-gray-50" : "text-gray-600"
                } w-5 h-5  lg:w-6 lg:h-6`}
              />
            </Button>
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <Badge
            showOutline={false}
            content={cart && cart.length}
            color="danger"
          >
            <Button
              as={Link}
              variant={pathname === "/cart" ? "solid" : "light"}
              isIconOnly
              href="/cart"
              size="sm"
              className="relative"
              color={pathname === "/cart" ? "danger" : "default"}
              radius="full"
            >
              <IoCartOutline
                className={`${
                  pathname === "/cart" ? "text-gray-50" : "text-gray-600"
                } w-5 h-5 lg:w-6 lg:h-6`}
              />
            </Button>
          </Badge>
        </NavbarItem>

        {authenticated && (
          <NavbarItem>
            <Dropdown
              onOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
              // showArrow
              classNames={{
                base: "min-w-md before:bg-default-200", // change arrow background
                content:
                  "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
              }}
            >
              <DropdownTrigger>
                <Button
                  variant={isMenuOpen ? "solid" : "light"}
                  color={isMenuOpen ? "danger" : "default"}
                  isIconOnly
                  radius="full"
                  size="sm"
                >
                  <IoPersonOutline
                    className={`${
                      isMenuOpen ? "text-gray-50" : "text-gray-600"
                    } w-5 h-5 lg:w-6 lg:h-6`}
                  />
                </Button>
              </DropdownTrigger>

              <DropdownMenu aria-label="menu items" variant="faded">
                <DropdownItem
                  href="/account"
                  startContent={
                    <Image
                      src={user_icon}
                      alt="order icon"
                      className="w-6 h-6 mr-2"
                      style={{ width: "auto", height: "auto" }}
                    />
                  }
                >
                  Manage My Account
                </DropdownItem>
                <DropdownItem
                  href="/cart"
                  startContent={
                    <Image
                      src={order_icon}
                      alt="order icon"
                      style={{ width: "auto", height: "auto" }}
                      className="w-5 h-5 mr-2"
                    />
                  }
                >
                  My Order
                </DropdownItem>
                <DropdownItem
                  href="/cancellation"
                  startContent={
                    <Image
                      src={cancel_icon}
                      alt="cancel icon"
                      style={{ width: "auto", height: "auto" }}
                      className="w-5 h-5 mr-2"
                    />
                  }
                >
                  My Cancellation
                </DropdownItem>
                <DropdownItem
                  startContent={
                    <Image
                      src={review_icon}
                      alt="review icon"
                      style={{ width: "auto", height: "auto" }}
                      className="w-6 h-6 mr-2"
                    />
                  }
                >
                  My Reviews
                </DropdownItem>
                <DropdownItem
                  href="/sign-in"
                  startContent={
                    <Image
                      src={logout_icon}
                      alt="logout icon"
                      style={{ width: "auto", height: "auto" }}
                      className="w-6 h-6 mr-2"
                    />
                  }
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
};
