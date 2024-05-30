"use client";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "@nextui-org/react";
import { RootState } from "@/store/store";
import {
  Product,
  addCredit,
  buyProduct,
  selectProduct,
} from "@/store/slices/vendingMachineSlice";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

const VendingMachine: React.FC = () => {
  const [selectedProductState, setSelectedProduct] = useState<Product>();

  const products = useSelector(
    (state: RootState) => state.vendingMachine.products
  );
  const { credit, selectedProduc, isSuccess } = useSelector(
    (state: RootState) => state.vendingMachine
  );

  const dispatch = useDispatch();

  useMemo(() => {
    !isSuccess &&
      selectedProductState &&
      Swal.fire({
        title: "Not enough credit",
        text: "Please add coins to continue buy it.",
        icon: "warning",
      });
    console.log({ selectedProductState });
  }, [selectedProductState, isSuccess]);

  useMemo(() => {
    !selectedProductState &&
      Swal.fire({
        title: "Not enough credit",
        text: "Please add coins to continue buy it.",
        icon: "warning",
      });
    console.log({ selectedProductState });
  }, [selectedProductState, isSuccess]);

  const handleSelectProduct = (product: Product) => {
    if (selectedProductState?.id !== product.id) {
      setSelectedProduct({ ...product, quantity: 1 });
    } else {
      setSelectedProduct({
        ...product,
        quantity: selectedProductState.quantity + 1,
      });
    }
    console.log({ selectedProductState });
    dispatch(selectProduct(product));
  };

  const handleBuyProduct = () => {
    !selectedProductState &&
      Swal.fire({
        title: "Empty cart.",
        text: "Please choose a product first.",
        icon: "warning",
      });
    dispatch(buyProduct());
  };

  // useEffect(() => {
  //   console.log(selectedProductState);
  // }, [selectedProductState]);

  return (
    <div className="flex flex-col items-center p-5 border-2 border-red-300 rounded-lg bg-red-50">
      {credit === 0 && <> no money</>}
      <div className="text-2xl font-bold text-red-600 mb-4">
        Dear Vending Machine 25h{" "}
      </div>
      <div className=" mb-4"></div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col items-center p-3 border rounded relative bg-white ${
              product.quantity === 0 ? "bg-gray-300" : ""
            }`}
          >
            <Image src={product.imageUrl} width={100} height={100} />
            <p className="font-semibold">{product.name}</p>
            <p className="font-bold"> ฿ {product.price.toFixed(2)}</p>
            <p className="font-bold"> Remain {product.quantity} </p>

            {product.quantity === 0 ? (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-red-600 px-2 py-1 rounded text-sm">
                SOLD OUT
              </div>
            ) : (
              <Button
                disableAnimation
                // disabled={credit === 0}
                flat
                onClick={() => handleSelectProduct(product)}
                className="mt-2"
              >
                Select
              </Button>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3>Credit: ฿{credit.toFixed(2)}</h3>
        <h3>Selected Product: {selectedProductState?.name}</h3>
        {selectedProductState?.quantity && (
          <h3>Quantity: {selectedProductState?.quantity}</h3>
        )}
        <Button onClick={handleBuyProduct} className="mt-4 ">
          Buy
        </Button>
      </div>
    </div>
  );
};

export default VendingMachine;
