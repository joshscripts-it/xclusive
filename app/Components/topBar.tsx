"use client";

import { Select, SelectItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const langs = [
  { name: "English" },
  { name: "French" },
  { name: "German" },
  { name: "Spanish" },
  { name: "Italian" },
  { name: "Hebrew" },
  { name: "Chinese" },
  { name: "Russian" },
  { name: "Hindu" },
];

export const TopBarComponent = () => {
  const [selectedItem, setSelectedItem] = useState<string>("English");

  const handleOnSelectionChange = (e: any) => {
    setSelectedItem(e.target.value);
  };

  return (
    <div className="bg-slate-900 min-w-full flex items-center p-4">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <p className="text-gray-300  text-xs md:text-base lg:text-md">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Button
            as={Link}
            variant="light"
            href="/shop"
            className="dark text-gray-200 font-semibold text-xs md:text-base lg:text-md hover:underline"
          >
            Shop Now
          </Button>
        </div>

        <Select
          className="dark max-w-xs w-32  font-bold place-content-center"
          classNames={{
            popoverContent: "dark min-w-32",
            selectorIcon: "text-gray-400",
          }}
          onChange={handleOnSelectionChange}
          aria-label="choose your default language"
          defaultSelectedKeys={[selectedItem]}
          variant="flat"
          selectorIcon={
            <IoChevronDownOutline
              size={20}
              className="text-gray-400 w-auto h-auto"
            />
          }
        >
          {langs.map((lang: any) => (
            <SelectItem
              key={lang.name}
              value={lang.name}
              className="dark text-gray-400 font-bold text-sm md:text-md lg:text-lg"
            >
              {lang.name}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
