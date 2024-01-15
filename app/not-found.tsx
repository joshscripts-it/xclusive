"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto p-8 flex flex-col justify-center items-center">
      <h2 className="w-full h-full text-4xl lg:text-6xl font-semibold text-center">
        404 Not Found
      </h2>
      <p className="text-lg mt-4 text-center">
        The page you are looking for does not exist.
      </p>

      <Button
        variant="solid"
        color="danger"
        as={Link}
        href="/"
        className="p-6 min-w-xl w-xl text-xl rounded-sm mt-8 font-semibold"
        disableRipple
      >
        Back To Home
      </Button>
    </div>
  );
}
