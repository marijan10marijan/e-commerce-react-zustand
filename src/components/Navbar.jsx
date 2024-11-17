import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";

const Navbar = () => {
  const cart = useStore((state) => state.cart);

  return (
    <nav className="bg-slate-800 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <i className="fas fa-store"></i>
          <p>BestBuy</p>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/cart" className="relative">
            <i className="fas fa-shopping-cart text-2xl"></i>
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
