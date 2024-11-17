import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-4 text-white shadow-lg mt-12 text-center h-20">
      <div className="container mx-auto h-full flex items-center justify-center">
        <p className="font-semibold text-sm">
          © {new Date().getFullYear()} BestBuy, All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
