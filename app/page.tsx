import React from "react";
import Wallet from "@/components/Wallet";
import VendingMachine from "@/components/VendingMachine";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Wallet />
      <VendingMachine />
    </div>
  );
};

export default HomePage;
