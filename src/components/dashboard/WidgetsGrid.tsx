"use client";

import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store/store";

const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <div className="flex flex-wrap items-center justify-center p-2">
      <SimpleWidget value={counter} />
    </div>
  );
};

export default WidgetsGrid;
