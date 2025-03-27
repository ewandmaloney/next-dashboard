"use client";
import {
  decrement,
  increment,
  initCounterState,
  resetCounter,
} from "@/store/shopping-cart/counter";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";
import { useEffect } from "react";

const getApiCounter = async () => {
  const data = fetch("/api/counter").then((res) => res.json());
  return data;
};

interface CartCounterProps {
  value?: number;
}

const CartCounter = ({ value = 50 }: CartCounterProps) => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then((data) => dispatch(initCounterState(data.count)));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex flex-row gap-2">
        <button
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(resetCounter(5))}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default CartCounter;
