import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "../styles/nav.css";

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const location = useLocation();

  // Scroll to top or target section on navigation
  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const target = document.getElementById(hash.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      scroll.scrollToTop(); // Scroll to the top of the page if no hash
    }
  }, [location]);

  // Detect scrolling for nav style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle window resize for mobile view
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
    <div className={`home__nav ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/">
        <img src="./assets/tripperzway.svg" alt="logo" />
      </Link>

      <ul className={`${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/#home" className="nav_link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/#who" className="nav_link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/#faq" className="nav_link">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/blog" className="nav_link">
            Blog
          </Link>
        </li>
        <li className="nav-button2">
          <a
            href="https://mainstack.me/tripperzway"
            className="nav_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </li>
      </ul>

      <li className="nav-button">
        <a
          href="https://mainstack.me/tripperzway"
          className="nav_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </li>

      <button className={`${isOpen ? "menu" : ""}`} onClick={toggleMenu}>
        <span className="line top"></span>
        <span className="line middle"></span>
        <span className="line last"></span>
      </button>
    </div>
  );
};
