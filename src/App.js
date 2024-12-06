import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Nav } from "./component/Nav";
import { Usa } from "./pages/Usa";
import { Canada } from "./pages/Canada";
import { SouthAfrica } from "./pages/SouthAfrica";
import { Australia } from "./pages/Australia";



const App = () => {
  return (
    <Router>
      <Nav /> 
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

          {/* Explore page with dynamic parameter */}
          <Route path="/usa/:key" element={<Usa />} />
        
        {/* Explore page with dynamic parameter */}
        <Route path="/explore/:key" element={<Explore />} />
        
        {/* USA page */}
        <Route path="/canada/:key" element={<Canada />} />
        {/* USA page */}
        <Route path="/southAfrica/:key" element={<SouthAfrica />} />
        {/* USA page */}
        <Route path="/australia/:key" element={<Australia />} />
    
      </Routes>
    </Router>
  );
};

export default App;

