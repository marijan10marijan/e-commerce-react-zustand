import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      cart: [],
      filters: {
        price: [null, null], // [minPrice, maxPrice]
        gender: null, // 'male', 'female', 'unisex'
        size: null, // 'S', 'M', 'L', 'XL'
        brand: null, // 'Nike', 'Adidas', itd.
        color: null, // 'red', 'blue', itd.
        bestSelling: false, // true ili false
      },
      setFilter: (filterType, value) =>
        set((state) => ({
          filters: {
            ...state.filters,
            [filterType]: value,
          },
        })),
      resetFilters: () =>
        set(() => ({
          filters: {
            price: [null, null],
            gender: null,
            size: null,
            brand: null,
            color: null,
            bestSelling: false,
          },
        })),
      addToCart: (product, quantity = 1) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          // Ako proizvod ne postoji, dodajemo ga s navedenom količinom
          return { cart: [...state.cart, { ...product, quantity }] };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: parseInt(quantity) } : item
          ),
        })),
      clearCart: () =>
        set(() => ({
          cart: [],
        })),
      getTotalPrice: () => {
        const cart = useStore.getState().cart || [];
        return cart.reduce((total, item) => {
          const quantity = item.quantity || 0; // Ako je količina NaN ili undefined, tretiraj je kao 0
          const price = item.price || 0; // Ako je cijena nepostojeća, tretiraj je kao 0
          return total + price * quantity;
        }, 0);
      },
    }),
    {
      name: "cart-storage", // Naziv pod kojim će se spremati u localStorage
      getStorage: () => localStorage, // Koristi localStorage
    }
  )
);
