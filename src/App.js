import "./index.css";
import React from "react";
import "./App.css";
import NowPlaying from "./components/nowplaying/nowplaying";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComingSoon from "./components/comingsoon/comingsoon";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<NowPlaying />}></Route>
          <Route exact path="/comingsoon" element={<ComingSoon />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
