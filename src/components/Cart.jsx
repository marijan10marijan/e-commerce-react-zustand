// src/components/Cart.js
import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const clearCart = useStore((state) => state.clearCart);
  const getTotalPrice = useStore((state) => state.getTotalPrice);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [cart, getTotalPrice]);

  const handleQuantityChange = (id, quantity) => {
    // Ako je quantity prazan ili nije broj, postavi ga na 0
    const validQuantity = parseInt(quantity) >= 0 ? parseInt(quantity) : 0;
    updateQuantity(id, validQuantity);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-6 min-h-[calc(100vh-192px)] px-4">
        <h2 className="mb-2 font-bold text-2xl">Cart</h2>
        <p className="text-gray-700 mb-6">There are no items in your bag.</p>
        <Link
          className="py-2 px-4 rounded-md bg-slate-800 text-white font-bold"
          to={"/"}
        >
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 mb-12 px-4 min-h-[calc(100vh-240px)]">
      <button
        onClick={clearCart}
        className="bg-red-500 text-white px-4 py-2 mb-4 font-bold rounded-md"
      >
        Clear Cart
      </button>
      {cart.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 flex justify-between items-center"
        >
          <div className="flex">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-700 mt-auto text-xl font-bold">
                ${Math.floor(item.price)}
                <sup className="text-sm align-middle  font-semibold">
                  {(item.price % 1).toFixed(2).split(".")[1]}
                </sup>
              </p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                className="w-16 border p-1"
                min="0"
              />
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-4 font-bold py-2 rounded-md self-end sm:self-center"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Prikaz ukupne cijene */}
      <div className="text-right">
        <h2 className="text-2xl font-bold inline-block">
          Total: $
          <span className="text-2xl font-bold">
            {Math.floor(totalPrice).toLocaleString("de-DE")}
          </span>
          <sup className="text-sm align-top font-semibold">
            {totalPrice.toFixed(2).split(".")[1]}
          </sup>
        </h2>
      </div>
    </div>
  );
};

export default Cart;
