"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addCredit } from "@/store/slices/vendingMachineSlice";
import { Button } from "@nextui-org/react";

const Wallet: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddCredit = (amount: number) => {
    dispatch(addCredit(amount));
  };

  return (
    <div className="flex flex-col items-center p-5 bg-brown-800 rounded-lg shadow-lg text-white">
      <div className="w-full flex justify-between items-center mb-4">
        <div className="text-lg font-bold">My Wallet</div>
      </div>
      <div className="flex justify-around w-full">
        {[5, 10, 20, 100, 500, 1000].map((amount) => (
          <Button
            key={amount}
            onClick={() => handleAddCredit(amount)}
            className="flex flex-col items-center justify-center w-16 h-16   rounded-full shadow-md  text-sm font-bold hover:bg-gray-300"
          >
            {amount.toLocaleString()}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
