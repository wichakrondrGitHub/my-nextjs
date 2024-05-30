"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const Invoice: React.FC = () => {
  const invoiceProduct = useSelector(
    (state: RootState) => state.vendingMachine.invoiceProduct
  );
  const totalAmount = invoiceProduct.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Invoice</h2>
      {invoiceProduct.length === 0 ? (
        <p>No items selected.</p>
      ) : (
        <div>
          <ul>
            {invoiceProduct.map((item) => (
              <li key={item.id}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ width: 50, height: 50 }}
                />
                <span>{item.name}</span>
                <span> x {item.quantity}</span>
                <span> - ${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default Invoice;
