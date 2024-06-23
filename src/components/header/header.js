import React from "react";
import logoImg from "./logo.png";
import movieposter from "./movieposter.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" flex justify-between items-center px-[20px] bg-black h-auto py-2">
        <div>
          <p className="hidden md:flex text-[13px] text-gray-500 font-semibold">
            <span className="bg-[#9F599B] h-full text-white px-1">
              VIP SWEEPSTAKES{" "}
            </span>
            <span className="ml-2 mr-2 text-[#FE7900]">
              $5000 SHOPPING SPREE
            </span>{" "}
            Join Movies VIP for a chance to win. Don't forget to join during
            checkout
          </p>
        </div>
        <div className="flex space-x-4 text-gray-300">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="hover:text-[#FE7900] flex text-[13px] mt-1 font-semibold cursor-pointer"
          >
            <svg
              width={"1em"}
              viewBox="0 0 1024 1024"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transition: "fill 0.3s" }}
              onMouseEnter={(e) => {
                e.target.setAttribute("fill", "#FE7900");
              }}
              onMouseLeave={(e) => {
                e.target.setAttribute("fill", "#ffffff");
              }}
            >
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
            </svg>
            <p className="hover:text-[#FE7900] text-gray-500">Login</p>
          </div>
        </div>
      </div>
      <div className="flex h-[80px] p-[20px] md:p-[30px] items-center bg-[#ECE9E2]">
        <div
          onClick={() => navigate("/")}
          className="md:w-1/2 mr-[30px] md:mr-0"
        >
          <img className="ml-5" src={logoImg} alt="Logo" />
        </div>
        <div className="">
          <button
            onClick={() => navigate("/custommovie")}
            className="uppercase text-[#FE7900] underline text-[14px] font-semibold"
          >
            Add Movie (Admin Only)
          </button>
        </div>
        <div className=" md:hidden ml-3">
          <button
            onClick={() => navigate("/movies")}
            className="uppercase text-[#FE7900] underline text-[14px] font-semibold"
          >
            Movies List{" "}
          </button>
        </div>
        <div className=" md:hidden ml-3">
          <button
            onClick={() => navigate("/comingsoon")}
            className="uppercase text-[#FE7900] underline text-[14px] font-semibold"
          >
            Coming Soon{" "}
          </button>
        </div>
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <div
            onClick={() => navigate("/")}
            className="group relative mr-[20px]"
          >
            <p className="text-[16px] font-bold uppercase cursor-pointer">
              Home
            </p>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FE7900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
          <div
            onClick={() => navigate("/movies")}
            className="group relative mr-[20px]"
          >
            <p className="text-[16px] font-bold uppercase cursor-pointer">
             Movie-List
            </p>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FE7900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
          {["Movie", "Show time", "Top rated"].map((item, index) => (
            <div key={index} className="group relative mr-[20px]">
              <p className="text-[16px] font-bold uppercase cursor-pointer">
                {item}
              </p>
              <div className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FE7900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              {item === "Movie" && (
                <div className="absolute p-2 left-0 border-b-[2px] border-[#FE7900] top-full mt-0 hidden group-hover:block bg-black shadow-lg px-4 py-3 rounded z-10">
                  {item === "Movie" && (
                    <>
                      <p
                        onClick={() => navigate("/")}
                        className="text-[14px] font-semibold border-b-[1px] border-gray-200 text-gray-300 hover:text-yellow-500 cursor-pointer w-full whitespace-nowrap"
                      >
                        Now Playing
                      </p>
                      <p
                        onClick={() => navigate("/comingsoon")}
                        className="text-[14px] font-semibold border-b-[1px] border-gray-200 text-gray-300 hover:text-yellow-500 cursor-pointer w-full whitespace-nowrap mt-1"
                      >
                        Coming Soon
                      </p>
                    </>
                  )}
                </div>
              )}

              {item === "Single Movie" && (
                <div className="absolute p-2 border-b-[2px] border-[#FE7900] left-0 top-full mt-0 hidden group-hover:block bg-black shadow-lg px-4 py-3 rounded z-10">
                  {item === "Single Movie" && (
                    <>
                      <p className="text-[14px] font-semibold border-b-[1px] border-gray-200 text-gray-300 hover:text-yellow-500 cursor-pointer w-full whitespace-nowrap">
                        Full width & Banner
                      </p>
                      <p className="text-[14px] font-semibold border-b-[1px] border-gray-200 text-gray-300 hover:text-yellow-500 cursor-pointer w-full whitespace-nowrap mt-1">
                        Full width & No Banner
                      </p>
                      <p className="text-[14px] font-semibold border-b-[1px] border-gray-200 text-gray-300 hover:text-yellow-500 cursor-pointer w-full whitespace-nowrap">
                        sidebar & Banner
                      </p>
                      <p className="text-[14px] font-semibold border-b-[1px] border-gray-200 text-gray-300 hover:text-yellow-500 cursor-pointer w-full whitespace-nowrap mt-1">
                        Sidebar & No Banner
                      </p>
                    </>
                  )}
                </div>
              )}

              {item === "Show time" && (
                <div className=" p-2 border-b-[2px] border-[#FE7900] absolute left-0  top-full mt-0 hidden group-hover:block bg-black shadow-lg px-4 py-3 rounded z-10">
                  {item === "Show time" && (
                    <>
                      <p className="text-[14px] font-semibold w-full border-b-[1px] border-gray-200 text-gray-300 hover:text-yellow-500 cursor-pointer uppercase whitespace-nowrap">
                        Daily Showtime Layout List
                      </p>
                      <p className="text-[14px] font-semibold w-full border-b-[1px] border-gray-200 text-gray-300 hover:text-yellow-500 cursor-pointer uppercase whitespace-nowrap mt-1">
                        Daily Showtime AJAX
                      </p>
                      <p className="text-[14px] font-semibold w-full border-b-[1px] border-gray-200 text-gray-300 hover:text-yellow-500 cursor-pointer uppercase whitespace-nowrap mt-1">
                        Weekly Showtime Layout List
                      </p>
                      <p className="text-[14px] font-semibold w-full border-b-[1px] border-gray-200 text-gray-300 hover:text-yellow-500 cursor-pointer uppercase whitespace-nowrap mt-1">
                        Weekly Showtime Table
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
