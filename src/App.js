import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../src/pages/Home";
import { Explore } from "../src/pages/Explore";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
