"use client";

import React from "react";
import { NextUIProvider as ThemeProvider } from "@nextui-org/react";
import { AppContextProvider as ContextProvider } from "./Context/appContext";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ContextProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </ContextProvider>
);
