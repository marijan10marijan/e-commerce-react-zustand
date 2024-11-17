import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimilarProducts = React.memo(({ currentProduct }) => {
  const similarProducts = products.filter((product) => {
    return (
      (product.id !== currentProduct.id && // Ne prikazuj trenutni proizvod
        (product.gender === currentProduct.gender || !currentProduct.gender)) || // Filter po genderu
      product.size === currentProduct.size ||
      !currentProduct.size || // Filter po veličini
      product.brand === currentProduct.brand ||
      !currentProduct.brand // Filter po brendu
    );
  });

  // Funkcija za nasumično miješanje proizvoda
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Nasumično poredaj proizvode
  const randomSimilarProducts = shuffleArray(similarProducts);
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <i
        onClick={onClick}
        className="fa-solid fa-circle-chevron-left arrows arrow-left"
      ></i>
    );
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <i
        onClick={onClick}
        className="fa-solid fa-circle-chevron-right arrows arrow-right"
      ></i>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    className: "slides",
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-12 mb-12 px-2">
      <h2 className="text-xl font-bold mb-4 px-4">Similar Products</h2>
      <Slider {...settings}>
        {randomSimilarProducts.slice(0, 14).map((product) => (
          <div key={product.id} className="p-2">
            <Link to={`/product/${product.id}`}>
              <div className="border p-4 hover:shadow-lg flex flex-col min-h-[330px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 sm:h-48 object-cover mb-2"
                />
                <h3 className="text-lg font-bold flex-grow">{product.title}</h3>
                <p className="text-gray-700 mt-auto text-xl font-bold">
                  ${Math.floor(product.price)}
                  <sup className="text-sm align-middle  font-semibold">
                    {(product.price % 1).toFixed(2).split(".")[1]}
                  </sup>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default SimilarProducts;
