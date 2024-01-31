"use client";

import { useContext, useMemo, useState } from "react";
import { AppContext } from "../Context/appContext";
import Image from "next/image";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import Link from "next/link";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { CartItemType, ItemTotalType } from "@/type";

export default function Page() {
  const [coupon, setCoupon] = useState<string>("");
  const { cart } = useContext(AppContext);

  const handleApplyCoupon = () => {
    if (!coupon) {
      return alert("Please enter coupon code");
    }
    alert("Coupon applied successfully!");
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

  const columns = [
    {
      key: "product",
      label: "PRODUCT",
    },
    {
      key: "price",
      label: "PRICE",
    },
    {
      key: "quantity",
      label: "QUANTITY",
    },
    {
      key: "subtotal",
      label: "SUBTOTAL",
    },
  ];

  return (
    <div className="container mx-auto my-4  w-full h-auto p-2 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumbs separator={"/"}>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>carts</BreadcrumbItem>
      </Breadcrumbs>

      <div>
        <div className="space-y-8 ">
          {cart && cart?.length ? (
            <>
              <Table
                isStriped
                aria-label="cart lists"
                classNames={{ wrapper: "rounded-sm" }}
              >
                <TableHeader columns={columns}>
                  {(column) => <TableColumn>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={cart}>
                  {(item: CartItemType) => (
                    <TableRow key={item.ID}>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Image
                            src={item?.images[0]}
                            className="w-1/3 h-1/3 lg:w-20 lg:h-20"
                            alt={`${item?.name} image`}
                            priority={true}
                          />
                          <h4 className="text-xs md:text-sm lg:text-base  font-medium text-gray-500">
                            {item.name}
                          </h4>
                        </div>
                      </TableCell>
                      <TableCell>
                        <h4 className="text-xs md:text-sm  font-medium lg:text-base text-gray-500 text-center">
                          $ {item.price}
                        </h4>
                      </TableCell>
                      <TableCell>
                        <div
                          className="shadow border border-gray-400   rounded flex items-center justify-center space-x-1"
                          style={{
                            width: 80,
                            maxHeight: 50,
                          }}
                        >
                          <input
                            name="itemCount"
                            defaultValue={item?.quantity}
                            className="flex-1 h-full block w-full bg-transparent border-0 text-xs md:text-sm  font-medium lg:text-base shadow-sm text-center placeholder-slate-400 focus:ring-0"
                          />
                          <div className="flex flex-col items-center justify-center">
                            <Button
                              disableRipple
                              isIconOnly
                              size="sm"
                              variant="solid"
                              className="flex-1 bg-transparent"
                              radius="full"
                            >
                              <IoChevronUpOutline className="w-3 h-3 text-gray-500" />
                            </Button>
                            <Button
                              disableRipple
                              isIconOnly
                              size="sm"
                              radius="full"
                              variant="solid"
                              className="flex-1 bg-transparent"
                            >
                              <IoChevronDownOutline className="w-3 h-3 text-gray-500" />
                            </Button>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell>
                        <h4 className="text-xs md:text-sm lg:text-base font-medium text-gray-500 text-center">
                          ${" "}
                          {itemTotals &&
                            itemTotals?.find(
                              (i: any) => i.productId === item.ID
                            )?.total}
                        </h4>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>

              <div className="flex justify-between items-center">
                <button className="py-3 px-5 flex items-center justify-center text-xs md:text-sm lg:text-base font-medium text-gray-600 border border-gray-300">
                  Return To Shop
                </button>

                <button className="py-3 px-5 flex items-center justify-center text-xs md:text-sm lg:text-base font-medium text-gray-600 border border-gray-300">
                  Update Cart
                </button>
              </div>

              {/* Summary  */}
              <div className="flex items-start justify-between flex-wrap space-y-3 pt-16">
                <div className="basis-full md:basis-2/4 flex items-center space-x-2 pr-2">
                  <input
                    defaultValue={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon Code"
                    type="text"
                    className="w-full flex-1W lg:w-48 text-sm p-4 text-center border-0 bg-slate-100 focus:border-slate-500 focus:ring-slate-400"
                  />

                  <button
                    className="w-48 p-4 flex items-center justify-center text-sm lg:text-base text-gray-50 bg-red-500 rounded"
                    onClick={handleApplyCoupon}
                  >
                    Apply Code
                  </button>
                </div>

                <div className="basis-full md:basis-2/4  p-6 flex flex-col justify-center text-sm lg:text-base font-medium rounded space-y-4 text-gray-600 border border-gray-300">
                  <h2 className="text-lg lg:text-xl font-semibold text-gray-700">
                    Cart Total
                  </h2>
                  <div className="flex items-center justify-between p-3 border-b border-b-gray-300">
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      Subtotal:
                    </h4>
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      $ {cartTotal}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between p-3 border-b border-b-gray-300">
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      Shipping:
                    </h4>
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      Free
                    </h4>
                  </div>

                  <div className="flex items-center justify-between p-3">
                    <h4 className="text-sm md:text-lg lg:text-xl text-gray-700">
                      Total:
                    </h4>
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      $ {cartTotal}
                    </h4>
                  </div>

                  <Link
                    href="/checkout"
                    className="self-center py-1 px-3 w-full md:w-auto lg:w-48 h-14 flex items-center justify-center text-sm lg:text-base text-gray-50 bg-red-500 rounded"
                  >
                    Process to checkout
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="h-32 p-4 flex items-center justify-center ">
              <h4 className="bg-gray-100 p-2 text-sm md:text-lg lg:text-xl font-medium text-gray-500">
                Your cart is empty!
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
