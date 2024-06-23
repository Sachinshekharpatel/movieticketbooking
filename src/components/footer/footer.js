import React from "react";
import logoImg from "./logo.png";
import bgImg from "./savebgimage.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

const Footer = () => {
  return (
    <div>
      <div
        className="relative md:flex md:px-[100px] px-[20px] py-[50px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImg})`,
          // Ensure the overlay covers the entire background image
          position: "relative",
          zIndex: "1",
        }}
      >
        {/* Overlay with dark background */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="md:flex relative">
          <div className="md:w-2/5 z-10 relative">
            {" "}
            {/* Ensuring content is above the overlay */}
            <img
              className="cursor-pointer mt-2 z-20 relative"
              src={logoImg}
              alt="logo"
            ></img>
            <p className="text-[14px] font-semibold text-gray-300 mt-2 z-20 relative">
              Welcome to Shekhar Movie, the ultimate movie booking website
              designed for seamless and enjoyable ticket purchasing. Explore the
              latest releases, top-rated films, and upcoming attractions with
              ease. Our user-friendly interface allows you to browse showtimes,
              select your favorite seats, and secure tickets in just a few
              clicks. Stay updated with recent posts, customer services, and
              exclusive offers.
            </p>
          </div>
          <div className="md:ml-[30px] md:w-1/2 z-10 relative">
            <p className="text-[28px] text-white font-bold mt-2 z-20 relative">
              Customer Services
            </p>
            <span className="cursor-pointer text-[14px] text-gray-300 font-semibold hover:text-[#FE7900] mt-4 z-20 relative">
              Home
            </span>
            <br></br>
            <span className="cursor-pointer text-[14px] text-gray-300 font-semibold mt-4 hover:text-[#FE7900] z-20 relative">
              Coming Soon
            </span>
            <br></br>
            <span className=" cursor-pointer text-[14px] text-gray-300 font-semibold hover:text-[#FE7900] mt-4 z-20 relative">
              Top Rated
            </span>
            <br></br>
          </div>
        </div>

        <div className="md:flex relative">
          <div className="md:mr-[40px] md:w-[2/3] z-10 relative">
            <p className="text-[28px] text-white font-bold mt-2 z-20 relative">
              Recent Posts
            </p>
            <div className="flex py-3 border-b-[1px] border-gray-300 z-20 relative">
              <img
                className="cursor-pointer md:h-[90px]"
                src={img1}
                alt="img1"
              ></img>
              <div className="ml-3 z-20 relative">
                <p className="text-[14px] cursor-pointer text-gray-300 font-bold hover:text-[#FE7900] mt-2 z-20 relative">
                  THE MOVIE: EIGHT DAYS A WEEK – THE TOURING GUIDE
                </p>
                <p className="italic cursor-pointer text-[14px] text-gray-300 font-semibold hover:text-[#FE7900] mt-2 z-20 relative">
                  April 28, 2024 / 108 Comments
                </p>
              </div>
            </div>
            <div className="flex py-3 border-b-[1px] md:w-[250px] border-gray-300 z-20 relative">
              <img
                className="cursor-pointer md:h-[90px]"
                src={img2}
                alt="img2"
              ></img>
              <div className="ml-3 z-20 relative">
                <p className="cursor-pointer text-[14px] text-gray-300 font-bold hover:text-[#FE7900] mt-2 z-20 relative">
                  BATMAN: DAYS NIGHT – GUIDE
                </p>
                <p className="cursor-pointer italic text-[14px] text-gray-300 font-semibold hover:text-[#FE7900] mt-2 z-20 relative">
                  MAY 28, 2024 / 120 Comments
                </p>
              </div>
            </div>
          </div>
          <div className="md:ml-[50px] md:w-1/3 z-10 relative">
            <p className="text-[28px] text-white font-bold mt-2 z-20 relative">
              Contact Us
            </p>
            <div className="flex cursor-pointer z-20 relative">
              <svg
                viewBox="0 0 384 512"
                fill="currentColor"
                height="1em"
                width="1em"
                className="mt-[10px]  mr-3 z-20 relative"
              >
                <path d="M384 192c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192z" />
              </svg>
              <p className="text-[13px] text-gray-300 font-semibold mt-2 z-20 relative">
                Zurich, Rewa 486001
              </p>
            </div>
            <div className="flex cursor-pointer z-20 relative">
              <div className="mr-2 z-20 relative">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="mt-[10px] z-20 relative"
                >
                  <path d="M2 6v14h18v2H2c-1.105 0-2-.89-2-2V6h2m22-2c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4m-2 0l-8 5-8-5h16m0 12H6V6l8 5 8-5v10z" />
                </svg>
              </div>
              <p className="ml-1 text-[13px] text-gray-300 font-semibold mt-2 z-20 relative">
                heroft@example.com
              </p>
            </div>
            <div className="flex cursor-pointer z-20 relative">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                className="bi bi-telephone-fill mt-[10px] mr-3 z-20 relative"
              >
                <path d="M11 1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1h6zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" />
                <path d="M8 14a1 1 0 100-2 1 1 0 000 2z" />
              </svg>

              <p className="text-[13px]  font-semibold mt-2 text-[#FE7900] z-20 relative">
                +91 6263-77374
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-3 bg-black h-[100px]">
        <div>
          <p className="text-[13px] text-gray-300 font-semibold">
            © 2024. All Rights Reserved . Shekhar Movies
          </p>
        </div>
        <div className="flex space-x-4 text-gray-300">
          <div
            onClick={() => window.scrollTo(0, 0)}
            className="text-[13px] mt-1 font-semibold cursor-pointer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M7 2 H17 A5 5 0 0 1 22 7 V17 A5 5 0 0 1 17 22 H7 A5 5 0 0 1 2 17 V7 A5 5 0 0 1 7 2 z" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
            </svg>
          </div>
          <div
            onClick={() => window.scrollTo(100, 100)}
            className="text-[13px] mt-1 font-semibold cursor-pointer"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
            </svg>
          </div>
          <p
            onClick={() => window.scrollTo(0, 0)}
            className="text-[13px] font-semibold cursor-pointer"
          >
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
