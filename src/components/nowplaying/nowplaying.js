import React, { useEffect, useState, useRef } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import movieposter from "./movieposter.png";
import axios from "axios";
import { reduxActions } from "../reduxstore/reduxstore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const NowPlaying = () => {
  const [movieArray, setMovieArray] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      axios.get("https://freetestapi.com/api/v1/movies").then((response) => {
        setMovieArray(response.data);
        console.log(response.data);
      });
    } catch (error) {
      console.log("movies data not found ", "api error");
    }
  }, []);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setFilterOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const addMovieFunctionHandler = (movie) => {
    dispatch(reduxActions.addMovie(movie));
    navigate("/bookticket");
  };

  const FilterBtnHandler = (type) => {
    try {
      axios.get(`https://freetestapi.com/api/v1/movies`).then((response) => {
        const dramaMovieArray = response.data.filter((item) => {
          return item.genre[0] === type;
        });
        setMovieArray(dramaMovieArray);
      });
    } catch (error) {
      console.log("movies data not found ", "api error");
    }
  };

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
          <span className="text-white text-2xl font-bold">Now Playing</span>
        </div>
      </div>
      {/* filter button below */}
      <div className="flex justify-center items-center ">
        <div className="relative" ref={dropdownRef}>
          <button
            className="bg-blue-500 text-white px-9 py-2 rounded"
            onClick={toggleFilter}
          >
            Filter
          </button>
          {filterOpen && (
            <div className="absolute mt-2 bg-white shadow-lg rounded z-10 right-0">
              <ul>
                <li
                  onClick={() => FilterBtnHandler("Drama")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  Drama
                </li>
                <li
                  onClick={() => FilterBtnHandler("Action")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  Action
                </li>
                <li
                  onClick={() => FilterBtnHandler("Adventure")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  Adventure
                </li>
                <li
                  onClick={() => FilterBtnHandler("Crime")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  Crime
                </li>
                <li
                  onClick={() => FilterBtnHandler("Animation")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  Animation
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* movie data appended here */}
      <div>
        {movieArray.map((item, index) => (
          <div
            key={index}
            className="flex  md:flex-row items-center md:items-start md:justify-between w-full h-[300px] bg-gray-200 p-4 rounded-lg"
          >
            <div className="relative mr-2 w-[150px] h-[200px]">
              <img
                className="w-full h-full rounded-lg"
                src={item.poster}
                alt="Movie Poster"
              />
              <div className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {item.rating}
              </div>
            </div>
            <div className="md:ml-4 flex-grow">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <div className="flex items-center">
                <div className="mr-2 bg-orange-500 text-white text-xs font-bold px-2 py-1">
                  G
                </div>
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="ml-2 mr-1 text-orange-500"
                  width="1em"
                >
                  <path d="M232 120c0-13.3 10.7-24 24-24s24 10.7 24 24v123.2l85.3 56.8c11 7.4 14 22.3 5.8 33.3-6.5 11-21.4 14-32.4 5.8l-96-64c-6.7-3.6-10.7-11.1-10.7-20V120zM256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256z" />
                </svg>
                <div className="mr-2 text-orange-500 text-xs font-bold px-2 py-1">
                  {item.runtime} minute
                </div>
              </div>
              <p className="text-gray-500 md:max-w-[900px] font-semibold text-[12px]">
                {item.plot}
              </p>
              <div className="flex">
                <p className="text-gray-500 font-semibold text-[12px]">
                  Language:
                </p>
                <p className="ml-2 text-gray-700 font-semibold text-[12px]">
                  {item.language}
                </p>
              </div>
              <div className="flex">
                <p className="text-gray-500 font-semibold text-[12px]">
                  Release Date:
                </p>
                <p className="ml-2 text-gray-700 font-semibold text-[12px]">
                  {item.year}
                </p>
              </div>
              <div className="flex">
                <p className="text-gray-500 font-semibold text-[12px]">
                  Genre:
                </p>
                <p className="ml-2 text-gray-700 font-semibold text-[12px]">
                  {item.genre[0]}
                </p>
              </div>
              <div className="flex">
                <p className="text-gray-500 font-semibold text-[12px]">
                  Actors:
                </p>
                <p className="ml-2 text-gray-700 font-semibold text-[12px]">
                  {item.actors.join(", ")}
                </p>
              </div>
              <div className="flex">
                <p className="text-gray-500 font-semibold text-[12px]">
                  Director:
                </p>
                <p className="ml-2 text-gray-700 font-semibold text-[12px]">
                  {item.director}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => addMovieFunctionHandler(item)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
              >
                Book Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NowPlaying;
