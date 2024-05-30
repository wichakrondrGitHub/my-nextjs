import { products } from "@/data/products";
import { Product } from "@/interface/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VendingMachineState {
  products: Product[];
  credit: number;
  selectedProductId?: string;
  selectedProduct?: Product;
  isSuccess?: boolean;
  invoiceProduct: { product: Product; quantity: number }[];
}

// Remove duplicate products from the initial state
const uniqueProducts = products.reduce((acc, product) => {
  if (!acc.find((p) => p.id === product.id)) {
    acc.push(product);
  }
  return acc;
}, [] as Product[]);

const initialState: VendingMachineState = {
  products: uniqueProducts,
  credit: 0,
  invoiceProduct: [],
};

const vendingMachineSlice = createSlice({
  name: "vendingMachine",
  initialState,
  reducers: {
    addCredit(state, action: PayloadAction<number>) {
      state.credit += action.payload;
    },
    selectProduct(state, action: PayloadAction<Product>) {
      const selectedProduct = action.payload;
      state.selectedProduct = selectedProduct;

      // Find the product in the invoice list
      const invoiceProductIndex = state.invoiceProduct.findIndex(
        (invoice) => invoice.product.id === selectedProduct.id
      );

      if (invoiceProductIndex >= 0) {
        // Update quantity if product is already in the invoice
        state.invoiceProduct[invoiceProductIndex].quantity += 1;
      } else {
        // Add new product to the invoice
        state.invoiceProduct.push({ product: selectedProduct, quantity: 1 });
      }

      // Update the quantity of the selected product in the products list
      const productIndex = state.products.findIndex(
        (product) => product.id === selectedProduct.id
      );
      if (productIndex >= 0 && state.products[productIndex].quantity > 0) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          quantity: state.products[productIndex].quantity - 1,
        };
      }
    },
    buyProduct(state) {
      const product = state.selectedProduct;
      if (product) {
        const invoiceItem = state.invoiceProduct.find(
          (invoice) => invoice.product.id === product.id
        );
        if (
          invoiceItem &&
          invoiceItem.quantity > 0 &&
          state.credit >= product.price * invoiceItem.quantity
        ) {
          state.credit -= product.price * invoiceItem.quantity;
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
        }
      }
    },
  },
});

export const { addCredit, selectProduct, buyProduct } =
  vendingMachineSlice.actions;
export default vendingMachineSlice.reducer;
