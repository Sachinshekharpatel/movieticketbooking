import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import movieposter from "./pushpa2bg.png";

const ComingSoon = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src={movieposter}
          alt="Movie Poster"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">Coming Soon</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
