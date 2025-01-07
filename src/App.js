import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Uk } from "./pages/Uk";
import { Nav } from "./component/Nav"; 
import Blog from "./pages/Blog";
import { Usa } from "./pages/Usa";
import { Canada } from "./pages/Canada";
import { SouthAfrica } from "./pages/SouthAfrica";
import { Australia } from "./pages/Australia";
import ScrollToTop from "./ScrollToTop";
import {Blogs} from "./pages/Blogs";

const App = () => {
  return (
    <Router>
      {/* Ensure the page scrolls to the top when navigating */}
      <ScrollToTop />

      {/* Navigation Bar */}
      <Nav />

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Blog Pages */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* Explore Page with Dynamic Parameter */}
        <Route path="/explore/:key" element={<Explore />} />

        {/* Country-Specific Pages */}
        <Route path="/usa" element={<Usa />} />
        <Route path="/uk" element={<Uk />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/southafrica" element={<SouthAfrica />} />
        <Route path="/australia" element={<Australia />} />
      </Routes>
    </Router>
  );
};

export default App;



