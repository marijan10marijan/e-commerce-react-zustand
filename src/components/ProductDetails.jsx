import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Use useNavigate to redirect
import { products } from "../data/products"; // Import your products data
import { useStore } from "../store";
import SimilarProducts from "./SimilarProducts";

const ProductPage = () => {
  const { id } = useParams(); // ID now comes as UUID
  const navigate = useNavigate(); // To programmatically navigate if needed
  const product = products.find((p) => p.id === id); // Find product by UUID
  const addToCart = useStore((state) => state.addToCart);

  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState("");

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setNotification(`Added ${product.title} to cart!`);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div className="container mx-auto py-6  md:w-3/4">
      <div className="flex flex-col sm:flex-row gap-6 items-center relative">
        {/* Product image */}
        <img
          src={product.image}
          alt={product.title}
          className="flex-1 max-w-96 w-full min-h-80 h-auto object-cover"
        />

        {/* Product details */}
        <div className="ml-6 flex-1">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <h1 className="text-sm mb-4 text-gray-700 w-3/4">
            {product.description}
          </h1>
          <p className="mb-4">
            Size: <span className="text-xl font-semibold">{product.size}</span>
          </p>
          <p className="text-gray-700 mt-auto text-2xl font-bold mb-4">
            ${Math.floor(product.price)}
            <sup className="text-sm align-middle font-semibold">
              {(product.price % 1).toFixed(2).split(".")[1]}
            </sup>
          </p>

          {/* Quantity selection */}
          <label htmlFor="quantity" className="block mb-2">
            Quantity:
          </label>
          <div className="flex items-center mb-4">
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border p-2 w-20"
            />
            <button
              onClick={handleAddToCart}
              className="bg-slate-800 text-white px-4 py-2"
            >
              Add to Cart
            </button>
          </div>

          {notification && (
            <div className="absolute z-10 -bottom-8 left-2 sm:left-auto sm:bottom-4 sm:right-4 mt-4 p-2 font-semibold rounded-md bg-green-100 border border-green-400 text-green-700">
              {notification}
            </div>
          )}
        </div>
      </div>
      <SimilarProducts currentProduct={product} />
    </div>
  );
};

export default ProductPage;
