import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";


export const Nav = () => {
  return (
    <>
      <div className="home__nav">
        <Link to="/">
        <img src="./assets/tripperzway.svg" alt="logo" />
        </Link>

        <ul>
          <li>
            <NavLink to="/" className="nav_link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="nav_link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className="nav_link">
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink to="/portfolio" className="nav_link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
