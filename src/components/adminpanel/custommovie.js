import React, { useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const CustomMovie = () => {
  const [formData, setFormData] = useState({
    actors: [],
    country: "",
    title: "",
    plot: "",
    director: "",
    genre: "",
    year: "",
    poster: "",
    language: "",
    rating: "",
    runtime: "",
    trailer: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      actors: formData.actors.split(",").map((actor) => actor.trim()),
      genre: formData.genre.split(",").map((genre) => genre.trim()),
    };
    console.log("Form Data:", formattedData);
    // Handle form submission (e.g., send data to server)
  };

  return (
    <>
      <Header></Header>
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Movie</h2>
        <form>
          <label className="block  text-gray-700 font-bold mb-2">Actors:</label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Country:
          </label>
          <input className="w-full mt-2 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
          <label className="block text-gray-700 font-bold mb-2">Title:</label>
          <input className="w-full  px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Plot:
          </label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Director:
          </label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Genre :
          </label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Year :
          </label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Poster:
          </label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />

          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Language
          </label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Rating:
          </label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Runtime:( in minutes) :
          </label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Trailer:
          </label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CustomMovie;
