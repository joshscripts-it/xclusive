"use client";

import { use, useContext, useMemo, useState } from "react";
import { AppContext } from "../Context/appContext";
import Image from "next/image";
import { IoAdd, IoCheckmarkDoneCircleOutline, IoRemove } from "react-icons/io5";
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
import { ItemTotalType, ProductType } from "@/type";

export default function Page() {
  const [coupon, setCoupon] = useState<string>("Save10");
  const [discount, setDiscount] = useState<number>(0);
  const [tax, setTax] = useState<number>(0.08); // 8% tax rate
  const [shippingFee, setShippingFee] = useState<number>(0);
  const [couponApplied, setCouponApplied] = useState<boolean>(false);
  const {
    cart,
    products,
    cartQuantities,
    incrementCartQuantity,
    decrementCartQuantity,
  } = useContext(AppContext);
  const cartList: ProductType[] = [];

  const handleApplyCoupon = () => {
    if (!coupon) {
      return alert("Please enter coupon code");
    }
    // Apply discount based on coupon code
    if (coupon.toLowerCase() === "save10") {
      setDiscount(0.1); // 10% discount
      setCouponApplied(true);
      alert("10% discount applied successfully!");
    } else if (coupon.toLowerCase() === "save20") {
      setDiscount(0.2); // 20% discount
      setCouponApplied(true);
      alert("20% discount applied successfully!");
    } else if (coupon.toLowerCase() === "save30") {
      setDiscount(0.3); //30% discount
      setCouponApplied(true);
      alert("30% discount applied successfully!");
    } else if (coupon.toLowerCase() === "save40") {
      setDiscount(0.4); //30% discount
      setCouponApplied(true);
      alert("40% discount applied successfully!");
    } else if (coupon.toLowerCase() === "save50") {
      setDiscount(0.5); //30% discount
      setCouponApplied(true);
      alert("50% discount applied successfully!");
    } else {
      setDiscount(0.1); // 5% default discount
      setCouponApplied(true);
      alert("10% discount applied successfully!");
    }
  };

  if (cart?.length && products?.length) {
    for (let i in cart) {
      // newWishList.push(products[i].ID == wishList[i]);
      let found = products.filter(
        (product: ProductType) => product?.ID == cart[i]
      );

      cartList.push(...found);
    }
  }

  //calc item total
  const itemTotals = useMemo(() => {
    const itemTotal =
      cartList.length &&
      cartList.reduce((initialVal: ItemTotalType[], item: ProductType) => {
        const quantity = cartQuantities[item.ID] || 1;
        initialVal.push({
          productId: item.ID,
          qtty: quantity,
          total: item.price * quantity,
        });

        return initialVal;
      }, [] as ItemTotalType[]);

    return itemTotal;
  }, [cartList, cartQuantities, incrementCartQuantity, decrementCartQuantity]);

  //calculate cart subtotal (before discounts and tax)
  const cartSubtotal = useMemo(() => {
    return itemTotals && Array.isArray(itemTotals)
      ? itemTotals.reduce(
          (total: number, item: ItemTotalType) => total + item.total,
          0
        )
      : 0;
  }, [itemTotals]);

  //calculate discount amount
  const discountAmount = useMemo(() => {
    return cartSubtotal * discount;
  }, [cartSubtotal, discount]);

  //calculate amount after discount
  const afterDiscountAmount = useMemo(() => {
    return cartSubtotal - discountAmount;
  }, [cartSubtotal, discountAmount]);

  //calculate tax amount
  const taxAmount = useMemo(() => {
    return afterDiscountAmount * tax;
  }, [afterDiscountAmount, tax]);

  //calculate final total
  const cartGrandTotal = useMemo(() => {
    return afterDiscountAmount + taxAmount + shippingFee;
  }, [afterDiscountAmount, taxAmount]);

  // console.log("Item Totals:", itemTotals);
  // console.log("Cart Total:", cartGrandTotal);
  // console.log("Cart Quantities: ", cartQuantities);
  // console.log("Subtotal: ", cartSubtotal);

  const tableCols = [
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
          {cartList && cartList?.length ? (
            <>
              <Table
                isStriped
                aria-label="cart lists"
                classNames={{ wrapper: "rounded-sm" }}
              >
                <TableHeader columns={tableCols}>
                  {(column) => (
                    <TableColumn className="font-bold text-[16px]">
                      {column.label}
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody items={cartList}>
                  {(item: ProductType) => (
                    <TableRow key={item.ID}>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Image
                            src={item?.images[0]}
                            className="w-1/3 h-1/3 lg:w-20 lg:h-20"
                            alt={`${item?.name} image`}
                            priority={true}
                          />
                          <h4 className="text-xs md:text-sm lg:text-lg font-medium  text-gray-500">
                            {item.name}
                          </h4>
                        </div>
                      </TableCell>
                      <TableCell>
                        <h4 className="text-xs md:text-sm  font-medium lg:text-lg text-gray-500 text-left">
                          $ {item.price}
                        </h4>
                      </TableCell>
                      <TableCell>
                        <div
                          className="shadow border border-gray-400   rounded flex items-center justify-center space-x-1"
                          style={{
                            width: 100,
                            maxHeight: 50,
                          }}
                        >
                          <p className="w-full text-center text-gray-500 text-base">
                            {cartQuantities[item.ID] || 1}
                          </p>
                          <div className="flex items-center justify-center">
                            <Button
                              // disableRipple
                              isIconOnly
                              size="sm"
                              radius="none"
                              variant="light"
                              onClick={() => decrementCartQuantity(item.ID)}
                            >
                              <IoRemove className="w-3 h-3 text-gray-500" />
                            </Button>
                            <Button
                              // disableRipple
                              isIconOnly
                              radius="none"
                              size="sm"
                              variant="flat"
                              onClick={() => incrementCartQuantity(item.ID)}
                            >
                              <IoAdd className="w-3 h-3 text-gray-500" />
                            </Button>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell>
                        <h4 className="text-xs md:text-sm  font-medium lg:text-lg text-gray-500 text-left">
                          ${" "}
                          {(
                            item?.price * (cartQuantities[item?.ID] || 1)
                          ).toFixed(2)}
                        </h4>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>

              <div className="flex justify-between items-center">
                <Button
                  variant="bordered"
                  radius={"none"}
                  size="lg"
                  as={Link}
                  className="py-3 h-[60px] w-[150px] px-5 flex items-center justify-center text-xs md:text-sm lg:text-lg font-medium text-gray-600 border border-gray-300"
                  href={"/"}
                >
                  Return To Shop
                </Button>
              </div>

              {/* Summary  */}
              <div className="flex items-start justify-between flex-wrap space-y-0 mt-16">
                <div className="basis-full md:basis-2/4 flex items-center space-x-2 pr-2">
                  <input
                    disabled={couponApplied}
                    defaultValue={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon Code"
                    type="text"
                    className="w-full h-[60px] lg:w-48 text-sm lg:text-lg p-4 text-center border-0 bg-slate-100 focus:border-slate-500 focus:ring-slate-400"
                  />
                  {couponApplied ? (
                    <button
                      className="w-48 p-4 flex items-center justify-center text-sm lg:text-lg font-medium text-gray-50 bg-green-500 rounded"
                      onClick={handleApplyCoupon}
                      disabled={couponApplied}
                    >
                      Coupon Applied
                      <IoCheckmarkDoneCircleOutline className="w-5 h-5 ml-1 text-gray-50" />
                    </button>
                  ) : (
                    <button
                      className="w-48 p-4 flex items-center justify-center text-sm lg:text-lg text-gray-50 bg-red-500 rounded"
                      onClick={handleApplyCoupon}
                    >
                      Apply Code
                    </button>
                  )}
                </div>

                <div className="basis-full md:basis-2/4  p-6 flex flex-col justify-center text-sm lg:text-base font-medium rounded space-y-4 text-gray-600 border border-gray-300">
                  <h2 className="text-lg lg:text-xl font-semibold text-gray-700">
                    Cart Total
                  </h2>
                  <div className="flex items-center justify-between p-3 border-b border-b-gray-300">
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      Subtotal:
                    </h4>
                    <h4 className="text-sm font-bold md:text-base lg:text-lg text-gray-700">
                      $ {cartSubtotal.toFixed(2)}
                    </h4>
                  </div>

                  {discount > 0 && (
                    <div className="flex items-center justify-between p-3 border-b border-b-gray-300">
                      <h4 className="text-sm md:text-base lg:text-lg text-red-600">
                        Discount ({(discount * 100).toFixed(0)}%):
                      </h4>
                      <h4 className="text-sm font-bold md:text-base lg:text-lg text-red-600">
                        - $ {discountAmount.toFixed(2)}
                      </h4>
                    </div>
                  )}

                  <div className="flex items-center justify-between p-3 border-b border-b-gray-300">
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      Tax ({(tax * 100).toFixed(0)}%):
                    </h4>
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      $ {taxAmount.toFixed(2)}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between p-3 border-b border-b-gray-300">
                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      Shipping:
                    </h4>

                    <h4 className="text-sm md:text-base lg:text-lg text-gray-700">
                      {shippingFee ? shippingFee : "Free"}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between p-3">
                    <h4 className="text-sm md:text-lg lg:text-xl text-gray-700 font-semibold">
                      Total:
                    </h4>
                    <h4 className="text-sm font-bold md:text-base lg:text-lg text-gray-700">
                      $ {cartGrandTotal.toFixed(2)}
                    </h4>
                  </div>

                  <Link
                    href="/checkout"
                    className="self-center py-1 px-3 w-full md:w-auto lg:w-48 h-14 flex items-center justify-center text-sm lg:text-lg font-medium text-gray-50 bg-red-500 rounded"
                  >
                    Proceed to checkout
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
