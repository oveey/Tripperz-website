import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "../styles/nav.css";

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className={`home__nav ${isScrolled ? "scrolled" : ""}`}>
        <Link to="/">
          <img src="./assets/tripperzway.svg" alt="logo" />
        </Link>

        <ul className={`${isOpen ? "open" : ""}`}>
          <li>
            <ScrollLink to="home" className="nav_link">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="who" className="nav_link">
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="faq" className="nav_link">
              FAQ
            </ScrollLink>
          </li>
        </ul>

        <li className="nav-button">
          <ScrollLink to="location" className="nav_link">
            Contact Us
          </ScrollLink>
        </li>

        <button className={`${isOpen ? "menu" : ""}`} onClick={toggleMenu}>
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line last"></span>
        </button>
      </div>
    </>
  );
};
