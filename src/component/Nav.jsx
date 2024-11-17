import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/nav.css";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) {
        setIsOpen(false); // Close menu if resizing above 900px
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div className="home__nav">
        <Link to="/">
          <img src="./assets/tripperzway.svg" alt="logo" />
        </Link>

        <ul className={`${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className="nav_link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav_link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav_link">
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink to="/" className="nav_link">
              Contact
            </NavLink>
          </li>

          <div className="dropdown">
            <span className="colors"></span>
          </div>
        </ul>

        <button className={`${isOpen ? "menu" : ""}`} onClick={toggleMenu}>
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line last"></span>

        </button>
      </div>
    </>
  );
};
