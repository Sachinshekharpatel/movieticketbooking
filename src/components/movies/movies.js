import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import axios from "axios";
const Movies = () => {
  useEffect(() => {}, []);

  return (
    <div>
      f<Header></Header>
      <h1 className="text-center my-2 font-bold text-[14px] uppercase">
        movies List That are newly added
      </h1>
      <Footer></Footer>
    </div>
  );
};

export default Movies;
