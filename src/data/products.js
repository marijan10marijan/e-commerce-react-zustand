import jacket from "../images/jacket.jpg";
import tShirt from "../images/t-shirt.jpg";
import jeans from "../images/jeans.jpg";
import menJeans from "../images/menJeans.jpg";
import menJeans2 from "../images/menJeans2.avif";
import socks from "../images/socks.webp";
import blouse from "../images/blouse.webp";
import blouse2 from "../images/blouse2.webp";
import pullover from "../images/pullover.jpg";
import shirt2 from "../images/shirt2.png";
import dress from "../images/dress.webp";
import tights from "../images/tights.jpg";
import hoodie from "../images/hoodie.jpg";
import purpleMenPullover from "../images/purpleMenPullover.jpg";
import purpleWomanHoodie from "../images/purpleWomanHoodie.jpg";
import unisexShirt from "../images/unisexShirt.webp";
import unisexJeans from "../images/unisexJeans.jpg";
import { v4 as uuidv4 } from "uuid";

const id = uuidv4();

export const products = [
  {
    id: uuidv4(),
    title: "Long Sleeve Blouse",
    description:
      "Soft and comfortable blouse made from high-quality cotton, perfect for everyday wear.",
    price: 23.59,
    image: blouse,
    gender: "female",
    size: "M",
    brand: "Blouslley",
    color: "yellowbrown",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Custom Quality Denim",
    description: "Soft and comfortable jeans.",
    price: 43.59,
    image: unisexJeans,
    gender: "unisex",
    size: "S",
    brand: "StreetWear",
    color: "blackgray",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Woman Hoodie",
    description:
      "Soft and comfortable houdi made from high-quality cotton, perfect for everyday wear.",
    price: 39.59,
    image: purpleWomanHoodie,
    gender: "female",
    size: "L",
    brand: "Houdini",
    color: "purple",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Long Sleeve Premium Blouse",
    description:
      "Soft and comfortable blouse made from high-quality cotton, perfect for everyday wear.",
    price: 31.59,
    image: blouse2,
    gender: "female",
    size: "S",
    brand: "Blouslley",
    color: "blue",
    bestSelling: true,
  },

  {
    id: uuidv4(),
    title: "Everyday Shirt",
    description:
      "Comfortable jeans for men made with love, perfect for everyday wear.",
    price: 11.59,
    image: shirt2,
    gender: "male",
    size: "S",
    brand: "JeanWear",
    color: "lightgreen",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "ComfortFit Socks",
    description:
      "Soft and comfortable socks made from high-quality cotton, perfect for everyday wear and sports activities.",
    price: 5.99,
    image: socks,
    gender: "unisex",
    size: "L",
    brand: "ComfortFeet",
    color: "white",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Men Essential Pullover",
    description:
      "Soft and comfortable pullover made for real mens who know what is quality.",
    price: 45.59,
    image: purpleMenPullover,
    gender: "male",
    size: "L",
    brand: "Houdini",
    color: "purple",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Explorer Jacket",
    description:
      "A waterproof jacket designed for adventurers, providing maximum protection against wind and rain. Perfect for hiking and outdoor activities.",
    price: 79.99,
    image: jacket,
    gender: "male",
    size: "L",
    brand: "OutdoorKing",
    color: "brown",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "HighRise Skinny Jeans",
    description:
      "Stylish high-waisted skinny jeans made from premium stretch material for ultimate comfort and durability.",
    price: 45.99,
    image: jeans,
    gender: "female",
    size: "M",
    brand: "BlueDenim",
    color: "navy",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Denim Premium",
    description: "Soft and comfortable jeans.",
    price: 55.99,
    image: unisexJeans,
    gender: "unisex",
    size: "XL",
    brand: "BlueDenim",
    color: "black",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Classic Summer T-shirt",
    description:
      "Lightweight and breathable cotton t-shirt, perfect for warm summer days. A wardrobe essential for casual outfits.",
    price: 12.99,
    image: tShirt,
    gender: "male",
    size: "S",
    brand: "StreetWear",
    color: "black",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Urban Slim Jeans",
    description:
      "Slim-fit jeans designed for the modern man. Made with durable denim that combines style and comfort for all-day wear.",
    price: 59.99,
    image: menJeans,
    gender: "male",
    size: "L",
    brand: "TheBoss",
    color: "blue",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Pullover for Him",
    description:
      "Soft and comfortable pullover made for real mens who know what is quality.",
    price: 39.59,
    image: purpleMenPullover,
    gender: "male",
    size: "L",
    brand: "Houdini",
    color: "purple",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Made for everyone",
    description:
      "Soft and comfortable pullover made for real mens who know what is quality.",
    price: 39.59,
    image: unisexShirt,
    gender: "unisex",
    size: "M",
    brand: "AdventureGear",
    color: "white",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Cozy Winter Pullover",
    description:
      "A warm and cozy pullover made from soft wool blend, perfect for layering during cold winter days.",
    price: 39.99,
    image: pullover,
    gender: "male",
    size: "M",
    brand: "WinterWear",
    color: "green",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Relaxed Fit Cargo Pants",
    description:
      "Comfortable cargo pants with multiple pockets, ideal for casual wear and outdoor adventures. Made from durable fabric.",
    price: 49.99,
    image: menJeans,
    gender: "male",
    size: "L",
    brand: "AdventureGear",
    color: "olive",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Elegant Maxi Men Shirt",
    description:
      "Shirt, perfect for special occasions or a stylish evening out.",
    price: 89.99,
    image: tShirt,
    gender: "male",
    size: "S",
    brand: "ChicMale",
    color: "black",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Vintage Denim Jacket",
    description:
      "Classic denim jacket with a timeless design, made from sturdy denim fabric. A must-have for casual layering.",
    price: 69.99,
    image: jacket,
    gender: "male",
    size: "M",
    brand: "RetroStyle",
    color: "brown",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Sporty Zip Hoodie",
    description:
      "A comfortable zip-up hoodie made from breathable fabric, perfect for workouts or lounging. Features a modern, slim fit.",
    price: 39.99,
    image: pullover,
    gender: "male",
    size: "XL",
    brand: "ActiveWear",
    color: "green",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Classic Chino Pants",
    description:
      "Chino pants with a classic cut, made from high-quality cotton for a smart casual look. Perfect for both work and leisure.",
    price: 54.99,
    image: jeans,
    gender: "female",
    size: "M",
    brand: "UrbanEssentials",
    color: "lightblue",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Luxury Cashmere Sweater",
    description:
      "A soft and luxurious cashmere sweater that adds a touch of elegance to any outfit. Ideal for cooler days and stylish evenings.",
    price: 99.99,
    image: pullover,
    gender: "male",
    size: "S",
    brand: "LuxuryWear",
    color: "green",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Beach Vibes T-shirt",
    description:
      "A casual t-shirt featuring a beach-inspired design. Made from lightweight cotton, perfect for summer vacations.",
    price: 19.99,
    image: tShirt,
    gender: "male",
    size: "L",
    brand: "CoastalBrand",
    color: "navy",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Modern Bootcut Jeans",
    description:
      "Bootcut jeans designed to give a flattering fit with a bit of extra room at the hem. Crafted from durable denim for everyday wear.",
    price: 49.99,
    image: jeans,
    gender: "female",
    size: "M",
    brand: "UrbanDenim",
    color: "dark blue",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Premium Leather Jacket",
    description:
      "A high-quality leather jacket that combines rugged durability with sleek style. Perfect for adding edge to any outfit.",
    price: 149.99,
    image: jacket,
    gender: "male",
    size: "L",
    brand: "RockStyle",
    color: "brown",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Cotton Lounge Pants",
    description:
      "Comfortable and lightweight cotton lounge pants designed for relaxation at home or casual outings.",
    price: 29.99,
    image: menJeans,
    gender: "male",
    size: "XL",
    brand: "ChillWear",
    color: "blue",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Black Summer Shirt",
    description:
      "A light and breezy summer shirt with a beautiful premium black color. Perfect for garden parties.",
    price: 59.99,
    image: tShirt,
    gender: "male",
    size: "L",
    brand: "SummerBreeze",
    color: "black",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Slim Fit Polo Shirt",
    description:
      "A modern slim-fit polo shirt made from breathable cotton. Great for casual occasions or semi-formal events.",
    price: 34.99,
    image: tShirt,
    gender: "male",
    size: "M",
    brand: "UrbanGent",
    color: "black",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Classic Cardigan Pullover",
    description:
      "A classic button-up cardigan made from soft wool blend, ideal for layering over shirts or dresses.",
    price: 45.99,
    image: pullover,
    gender: "male",
    size: "M",
    brand: "ElegantKnits",
    color: "green",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Athletic Jeans",
    description:
      "Lightweight and breathable athletic jeans designed for comfort during daily activities.",
    price: 24.99,
    image: jeans,
    gender: "female",
    size: "L",
    brand: "ActivePro",
    color: "lightblue",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Cozy Long Sleeve Blouse",
    description:
      "This long sleeve blouse is crafted from premium, high-quality cotton, ensuring ultimate comfort and a soft feel. A perfect choice for a stylish and comfortable everyday look.",
    price: 23.59,
    image: blouse, // add appropriate image path
    gender: "female",
    size: "M",
    brand: "Blouslley",
    color: "yellowbrown",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Premium Cotton Blouse",
    description:
      "Experience luxury with this premium long sleeve blouse, made from the finest cotton. Soft, breathable, and designed for all-day wear, this blouse is a must-have for casual and formal settings.",
    price: 31.59,
    image: blouse2, // add appropriate image path
    gender: "female",
    size: "S",
    brand: "Blouslley",
    color: "blue",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Relaxed Fit Jeans",
    description:
      "A pair of men's jeans designed for comfort and durability. Made from high-quality denim, these jeans are perfect for a casual look or everyday wear, offering a relaxed fit for all-day comfort.",
    price: 18.59,
    image: menJeans2,
    gender: "male",
    size: "L",
    brand: "JeanWear",
    color: "blue",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Classic Everyday Shirt",
    description:
      "A versatile shirt for men, perfect for both casual and semi-formal occasions. Made from soft, breathable fabric, this shirt offers comfort and style throughout the day.",
    price: 11.59,
    image: shirt2,
    gender: "male",
    size: "S",
    brand: "JeanWear",
    color: "green",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Urban Chic Blazer",
    description:
      "This trendy blazer combines style and comfort, perfect for casual and formal occasions. Made from high-quality fabric, it adds a touch of class to any outfit.",
    price: 45.99,
    image: blouse,
    gender: "female",
    size: "M",
    brand: "EleganceWear",
    color: "yellowbrown",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Dynamic Flex Jeans",
    description:
      "Experience ultimate comfort with these stretchy jeans. Tailored for a modern fit, they offer a perfect blend of style and functionality for everyday wear.",
    price: 38.49,
    image: jeans,
    gender: "female",
    size: "S",
    brand: "DenimX",
    color: "blue",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Elegant Flare Dress",
    description:
      "This flare dress is designed for the modern woman. With a flattering cut and soft material, it is ideal for both casual outings and formal events.",
    price: 57.89,
    image: dress,
    gender: "female",
    size: "S",
    brand: "Modista",
    color: "multicolor",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Bold Activewear Tights",
    description:
      "These performance tights offer a sleek, body-hugging fit for an active lifestyle. Made with breathable fabric, they're perfect for workouts or casual wear.",
    price: 22.99,
    image: tights,
    gender: "female",
    size: "M",
    brand: "SportFlex",
    color: "black",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Luxe Cotton Hoodie",
    description:
      "Stay cozy with this ultra-soft cotton hoodie. Designed for maximum comfort, it’s ideal for lounging at home or layering on cool days.",
    price: 29.99,
    image: hoodie, // add appropriate image path
    gender: "male",
    size: "XL",
    brand: "StreetWear",
    color: "darkgreen",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Long Sleeve Blouse",
    description:
      "Soft and comfortable blouse made from high-quality cotton, perfect for everyday wear.",
    price: 23.59,
    image: blouse, // existing image
    gender: "female",
    size: "M",
    brand: "Blouslley",
    color: "yellowbrown",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Long Sleeve Premium Blouse",
    description:
      "Soft and comfortable blouse made from high-quality cotton, perfect for everyday wear.",
    price: 31.59,
    image: blouse2, // existing image
    gender: "female",
    size: "S",
    brand: "Blouslley",
    color: "blue",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Funny Jeans",
    description:
      "Comfortable jeans for men made with love, perfect for everyday wear.",
    price: 18.59,
    image: menJeans2, // existing image
    gender: "male",
    size: "L",
    brand: "JeanWear",
    color: "blue",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Everyday Shirt",
    description:
      "Comfortable jeans for men made with love, perfect for everyday wear.",
    price: 11.59,
    image: shirt2, // existing image
    gender: "male",
    size: "S",
    brand: "JeanWear",
    color: "lightgreen",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Urban Chic Blazer",
    description:
      "A stylish and comfortable blazer, perfect for both casual and formal events. Made from premium fabric to elevate your look.",
    price: 45.99,
    image: blouse, // reuse blouse image
    gender: "female",
    size: "M",
    brand: "EleganceWear",
    color: "yellowbrown",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Dynamic Flex Jeans",
    description:
      "Modern fit stretchy jeans, perfect for those who seek both style and comfort.",
    price: 38.49,
    image: menJeans2, // reuse menJeans2 image
    gender: "male",
    size: "L",
    brand: "DenimX",
    color: "dark blue",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Coastal Breeze Polo",
    description:
      "Breathable and lightweight polo, ideal for warm weather. Keeps you cool and comfortable all day long.",
    price: 19.79,
    image: shirt2, // reuse shirt2 image
    gender: "male",
    size: "L",
    brand: "ClassicFit",
    color: "navy",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Luxe Blouse",
    description:
      "A cozy blouse designed for maximum comfort, perfect for layering or casual outings.",
    price: 29.99,
    image: blouse2, // reuse blouse2 image
    gender: "female",
    size: "M",
    brand: "StreetWear",
    color: "blue",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Bold Activewear Blouse",
    description:
      "Performance-driven activewear blouse that offer a sleek fit for active days.",
    price: 22.99,
    image: blouse, // reuse blouse image
    gender: "female",
    size: "M",
    brand: "SportFlex",
    color: "yellowbrown",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Vivid Striped Sweater",
    description:
      "Brighten up your wardrobe with this bold striped sweater. The vibrant colors and soft fabric make it a must-have.",
    price: 39.49,
    image: blouse2, // reuse blouse2 image
    gender: "female",
    size: "M",
    brand: "ColorPop",
    color: "blue",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Chill Vibes Joggers",
    description:
      "Relaxed-fit joggers with soft fleece lining for all-day comfort during casual outings.",
    price: 27.89,
    image: menJeans2, // reuse menJeans2 image
    gender: "male",
    size: "XL",
    brand: "LoungeLife",
    color: "charcoal",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Essential Workout Tee",
    description:
      "A workout tee designed for performance with moisture-wicking fabric to keep you cool.",
    price: 14.99,
    image: shirt2, // reuse shirt2 image
    gender: "male",
    size: "M",
    brand: "FitGear",
    color: "lightgreen",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Classic Denim Jeans",
    description:
      "A classic denim jeans for versatile styling, from casual to smart-casual looks.",
    price: 58.99,
    image: menJeans2, // reuse menJeans2 image
    gender: "male",
    size: "M",
    brand: "DenimX",
    color: "blue",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Sleek Gym Jeans",
    description:
      "Performance-focused gym jeans designed with breathable, moisture-wicking fabric.",
    price: 17.49,
    image: menJeans2, // reuse menJeans2 image
    gender: "male",
    size: "M",
    brand: "ActivePulse",
    color: "black/blue",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Elegant Satin Top",
    description:
      "Luxurious satin top, perfect for a refined evening look. Smooth fabric ensures both comfort and elegance.",
    price: 34.99,
    image: blouse, // reuse blouse image
    gender: "female",
    size: "S",
    brand: "SilkWay",
    color: "champagne",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Comfy Knit Cardigan",
    description:
      "A must-have knit cardigan for layering, with a relaxed fit and cozy feel for colder days.",
    price: 36.99,
    image: blouse2, // reuse blouse2 image
    gender: "female",
    size: "L",
    brand: "CozyKnit",
    color: "beige",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Summer Breeze Sundress",
    description:
      "Flowy and lightweight sundress designed for warm, sunny days. Ideal for casual summer outings.",
    price: 24.99,
    image: blouse, // reuse blouse image
    gender: "female",
    size: "S",
    brand: "BlossomWear",
    color: "yellow",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Stretch Fit Skinny Jeans",
    description:
      "Classic skinny jeans with stretch for added comfort. A wardrobe essential for versatile looks.",
    price: 32.79,
    image: menJeans2, // reuse menJeans2 image
    gender: "male",
    size: "L",
    brand: "DenimX",
    color: "black",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Vibrant Color Block Blouse",
    description:
      "Bold color block blouse with a vibrant design, perfect for making a stylish statement.",
    price: 30.49,
    image: blouse2,
    gender: "female",
    size: "M",
    brand: "StreetWear",
    color: "blue",
    bestSelling: true,
  },
  {
    id: uuidv4(),
    title: "Relaxed Fit T-Shirt",
    description:
      "A simple and casual t-shirt, perfect for everyday wear with a relaxed fit and soft cotton fabric.",
    price: 12.59,
    image: shirt2, // reuse shirt2 image
    gender: "male",
    size: "M",
    brand: "BasicWear",
    color: "green",
    bestSelling: false,
  },
  {
    id: uuidv4(),
    title: "Everyday Socks",
    description:
      "Soft and comfortable socks made from high-quality cotton, perfect for everyday wear and sports activities.",
    price: 3.99,
    image: socks,
    gender: "unisex",
    size: "M",
    brand: "ComfortFeet",
    color: "white and black",
    bestSelling: true,
  },
];

// 192.168.0.170
