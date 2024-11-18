import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useStore } from "../store";
import FilterSidebar from "./FilterSidebar"; // Uvezi filter sidebar
import SearchBar from "./SearchBar";
import { useProductStore } from "../searchProductsStore";
import ProductInkAnimation from "./ProductInkAnimation";

const ProductList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const filters = useStore((state) => state.filters);
  const searchTerm = useProductStore((state) => state.searchTerm);

  useEffect(() => {
    setCurrentPage(1); // Restartiranje da se paginacija vrati na prvu stranicu
  }, [filters, searchTerm]);

  // Filtriraj proizvode na temelju filtera
  const filteredProducts = products.filter((product) => {
    const { price, gender, size, brand, color, bestSelling } = filters;

    if (price) {
      const [minPrice, maxPrice] = price;
      if (minPrice !== null && product.price < minPrice) return false;
      if (maxPrice !== null && product.price > maxPrice) return false;
    }
    if (gender && product.gender !== gender) return false;
    if (size && product.size !== size) return false;
    if (brand && !product.brand.toLowerCase().includes(brand.toLowerCase()))
      return false;
    if (color && !product.color.toLowerCase().includes(color.toLowerCase()))
      return false;
    if (bestSelling && !product.bestSelling) return false;

    if (
      searchTerm &&
      !(
        product.title.toLowerCase().includes(searchTerm) ||
        product.color.toLowerCase().includes(searchTerm) ||
        product.gender.toLowerCase().includes(searchTerm)
      )
    ) {
      return false;
    }

    return true;
  });

  const [currentPage, setCurrentPage] = useState(1); // State za praćenje trenutne stranice
  const productsPerPage = 16; // Koliko proizvoda prikazati po stranici

  // Izračunaj početni i krajnji indeks za proizvode na trenutnoj stranici
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Ukupan broj stranica
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Funkcija za promjenu stranice
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=" w-full min-h-[calc(100vh-216px)]">
      <ProductInkAnimation />
      <div className="px-4">
        <SearchBar />
      </div>
      <h1 className="my-6 sm:my-8 text-2xl sm:text-3xl md:text-4xl font-serif px-4">
        Wear Good - Fell Good
      </h1>
      <div className="flex gap-2 relative px-2">
        <div className="hidden sm:block">
          <FilterSidebar setIsSidebarOpen={setIsSidebarOpen} />
        </div>
        <div className=" sm:hidden">
          {isSidebarOpen ? (
            <FilterSidebar setIsSidebarOpen={setIsSidebarOpen} />
          ) : (
            <div
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="absolute top-2 right-2 z-30 cursor-pointer"
            >
              <button className="py-2 px-4 rounded-md bg-gray-200 font-bold">
                Filters <i className="fa-solid fa-arrow-up-z-a"></i>
              </button>
            </div>
          )}
        </div>

        <div className=" mx-auto pb-6 px-2">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pt-20 sm:pt-0">
            {currentProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="border p-4 hover:shadow-lg flex flex-col min-h-[350px] sm:min-h-[330px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover mb-2"
                  />
                  <h3 className="text-lg font-bold flex-grow">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 mt-auto text-xl font-bold">
                    ${Math.floor(product.price)}
                    <sup className="text-sm align-middle  font-semibold">
                      {(product.price % 1).toFixed(2).split(".")[1]}
                    </sup>
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Paginacija */}
          <div className="flex justify-center mt-6">
            <button
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === 1
                  ? "bg-white text-slate-800 border border-slate-800 shadow-sm"
                  : "bg-slate-800 text-white"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {"<<"}
            </button>

            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page + 1}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === page + 1
                    ? "bg-slate-800 text-white"
                    : "bg-white text-slate-800 border border-slate-800 shadow-sm"
                }`}
                onClick={() => handlePageChange(page + 1)}
              >
                {page + 1}
              </button>
            ))}

            <button
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-white text-slate-800 border border-slate-800 shadow-sm"
                  : "bg-slate-800 text-white"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={
                currentPage === totalPages || currentProducts.length === 0
              }
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
