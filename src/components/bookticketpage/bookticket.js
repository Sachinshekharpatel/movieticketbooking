import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useSelector, useDispatch } from "react-redux";
import { reduxActions } from "../reduxstore/reduxstore";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookTicket = () => {
  const item = useSelector((state) => state.movie.movieToBook);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    console.log(item);
    if (item === null) {
      navigate("/");
    }
  }, []);

  const confirmBooking = () => {
    const data = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      selectedTime: selectedTime,
      selectedDate: selectedDate,
      movie: item,
    };
    if (!name || !phoneNumber || !email || !selectedTime || !selectedDate) {
      alert("Please fill all the fields");
      return;
    } else {
      alert("Booking Confirmed");
      try {
        axios
          .post(
            "https://dcathelone-default-rtdb.firebaseio.com/userMovieBookings.json",
            data
          )
          .then((res) => {
            const realdata = {
              name: name,
              phoneNumber: phoneNumber,
              email: email,
              selectedTime: selectedTime,
              selectedDate: selectedDate,
              movie: item,
              id: res.data.name,
            };
            axios.put(
              `https://dcathelone-default-rtdb.firebaseio.com/userMovieBookings/${res.data.name}.json`,
              realdata
            );
            setName("");
            setPhoneNumber("");
            setEmail("");
            setSelectedTime("");
            setSelectedDate("");
            dispatch(reduxActions.addMovie(null));
            navigate("/");
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
  const dayAfterNext = new Date(today);
  dayAfterNext.setDate(dayAfterNext.getDate() + 3);

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div>
      <Header></Header>
      {item === null ? (
        <div className="mb-4 mt-4 text-3xl justify-center text-center">
          Please Select a movie to book
        </div>
      ) : (
        <div>
          <div className="flex  md:flex-row s-center md:items-start md:justify-between w-full h-[300px] bg-gray-200 p-4 rounded-lg">
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
          </div>

          {/* Schedule time for booking movie */}
          <div className="flex flex-col items-center">
            <div className="my-4 text-2xl font-bold">Showtime</div>

            {/* Date selection buttons */}
            <div className="flex justify-between w-3/4 mb-4">
              <button
                className={`bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded ${
                  selectedDate === formatDate(today)
                    ? "bg-green-500 text-white"
                    : ""
                }`}
                onClick={() => handleDateSelection(formatDate(today))}
              >
                {formatDate(today)}
              </button>
              <button
                className={`bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded ${
                  selectedDate === formatDate(tomorrow)
                    ? "bg-green-500 text-white"
                    : ""
                }`}
                onClick={() => handleDateSelection(formatDate(tomorrow))}
              >
                {formatDate(tomorrow)}
              </button>
              <button
                className={`bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded ${
                  selectedDate === formatDate(dayAfterTomorrow)
                    ? "bg-green-500 text-white"
                    : ""
                }`}
                onClick={() =>
                  handleDateSelection(formatDate(dayAfterTomorrow))
                }
              >
                {formatDate(dayAfterTomorrow)}
              </button>
              <button
                className={`bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded ${
                  selectedDate === formatDate(dayAfterNext)
                    ? "bg-green-500 text-white"
                    : ""
                }`}
                onClick={() => handleDateSelection(formatDate(dayAfterNext))}
              >
                {formatDate(dayAfterNext)}
              </button>
            </div>

            {/* Timing selection buttons */}
            <div className="flex justify-between w-3/4 mb-4">
              <button
                className={`bg-orange-500 text-white font-bold py-2 px-4 rounded ${
                  selectedTime === "12-3" ? "bg-green-500" : ""
                }`}
                onClick={() => setSelectedTime("12-3")}
              >
                12-3
              </button>
              <button
                className={`bg-orange-500 text-white font-bold py-2 px-4 rounded ${
                  selectedTime === "3-6" ? "bg-green-500" : ""
                }`}
                onClick={() => setSelectedTime("3-6")}
              >
                3-6
              </button>
              <button
                className={`bg-orange-500 text-white font-bold py-2 px-4 rounded ${
                  selectedTime === "6-9" ? "bg-green-500" : ""
                }`}
                onClick={() => setSelectedTime("6-9")}
              >
                6-9
              </button>
              <button
                className={`bg-orange-500 text-white font-bold py-2 px-4 rounded ${
                  selectedTime === "9-12" ? "bg-green-500" : ""
                }`}
                onClick={() => setSelectedTime("9-12")}
              >
                9-12
              </button>
            </div>

            {/* Booking form */}
            <div className="flex flex-col items-center w-3/4">
              <input
                type="text"
                placeholder="Name"
                className="border-2 mb-1 border-gray-400 w-full px-4 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border-2 mb-1 border-gray-400 w-full px-4 py-2"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="border-2 border-gray-400 w-full px-4 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-blue-500 mb-1 text-white px-4 py-2 rounded mt-4"
                onClick={confirmBooking}
                disabled={
                  !name ||
                  !phoneNumber ||
                  !email ||
                  !selectedTime ||
                  !selectedDate
                }
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default BookTicket;
