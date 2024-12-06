import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Nav } from "./component/Nav";
import { Usa } from "./pages/Usa";
import { Canada } from "./pages/Canada";
import { SouthAfrica } from "./pages/SouthAfrica";
import { Australia } from "./pages/Australia";
import ScrollToTop from "./ScrollToTop"; // Import the ScrollToTop component

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure this is added here */}
      <Nav />
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        
        {/* Explore page with dynamic parameter */}
        <Route path="/explore/:key" element={<Explore />} />

        {/* USA page */}
        <Route path="/usa" element={<Usa />} />

        {/* Canada page */}
        <Route path="/canada" element={<Canada />} />

        {/* South Africa page */}
        <Route path="/southAfrica" element={<SouthAfrica />} />

        {/* Australia page */}
        <Route path="/australia" element={<Australia />} />
      </Routes>
    </Router>
  );
};

export default App;


