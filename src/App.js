import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Uk } from "./pages/Uk";
import { Nav } from "./component/Nav";
import { Blog } from "./pages/Blog";
import { Usa } from "./pages/Usa";
import { Canada } from "./pages/Canada";
import { SouthAfrica } from "./pages/SouthAfrica";
import { Australia } from "./pages/Australia";
import ScrollToTop from "./ScrollToTop"; 

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Nav />

      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<Blog />} />

        
        {/* Explore page with dynamic parameter */}
        <Route path="/explore/:key" element={<Explore />} />

        {/* USA page */}
        <Route path="/usa" element={<Usa />} />

        {/* USA page */}
        <Route path="/uk" element={<Uk />} />

        {/* Canada page */}
        <Route path="/canada" element={<Canada />} />

        {/* South Africa page */}
        <Route path="/SouthAfrica" element={<SouthAfrica />} />

        {/* Australia page */}
        <Route path="/australia" element={<Australia />} />
      </Routes>
    </Router>
  );
};

export default App;


