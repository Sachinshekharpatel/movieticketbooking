import "./index.css";
import React, { useEffect } from "react";
import "./App.css";
import NowPlaying from "./components/nowplaying/nowplaying";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComingSoon from "./components/comingsoon/comingsoon";
import { reduxActions } from "./components/reduxstore/reduxstore";
import { useSelector } from "react-redux";
import BookTicket from "./components/bookticketpage/bookticket";
import TopRated from "./components/toprated/toprated";
import CustomMovie from "./components/adminpanel/custommovie";
import Movies from "./components/movies/movies";
function App() {
  const movieToBook = useSelector((state) => state.movie.movieToBook);
  useEffect(() => {
    console.log(movieToBook);
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/movies" element={<Movies/>}></Route>
          <Route exact path="/custommovie" element={<CustomMovie />}></Route>
          <Route exact path="/toprated" element={<TopRated />}></Route>
          <Route exact path="/" element={<NowPlaying />}></Route>
          <Route exact path="/comingsoon" element={<ComingSoon />}></Route>
          <Route exact path="/bookticket" element={<BookTicket />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
