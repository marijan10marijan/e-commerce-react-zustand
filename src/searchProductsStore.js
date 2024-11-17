// search products store.js
import { create } from "zustand";
import { products } from "./data/products";

export const useProductStore = create((set) => ({
  products: products,
  searchTerm: "",
  setSearchTerm: (term) => set(() => ({ searchTerm: term })),
}));
