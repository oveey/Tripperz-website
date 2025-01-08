import React, { useEffect } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "aos/dist/aos.css";

export const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      startEvent: "DOMContentLoaded", // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed
    });
  }, []);

  return (
    <>
      <section className="footer__section">
        <div className="footer">
          <div className="footer__content" data-aos="fade-up">
            <div className="footer__logo">
              <img src="./assets/tripperzway.svg" alt="logo" />

              <p className="logo__text">
                We are a passionate travel agency that spent years helping
                people explore the world.
              </p>
            </div>
            <ul className="footer__links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/#who">About Us</Link>
              </li>
              <li>
                <Link to="/#faq">FAQ</Link>
              </li>

              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <a
                  href="https://mainstack.me/tripperzway"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="footer__social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </a>

              <a
                href="https://www.instagram.com/tripperz_way"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>

              <a
                href="https://www.linkedin.com/company/tripperzway/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>

              {/* <a
                href="https://www.linkedin.com/company/tripperzway/"
                target="_blank"
                rel="noopener noreferrer"
              >
               <FontAwesomeIcon className="icon" icon={faWhatsapp}/>
              </a> */}

              <a
                href="https://www.tiktok.com/@tripperz_way"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faTiktok} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__section2">
          <div className="footer__two" data-aos="fade-up">
            <p>
              &copy; {new Date().getFullYear()} Tripperzway. All rights
              reserved.
            </p>
            {/* <ul className="footer__links2">
              <li>
                <a href="/terms">Terms</a>
              </li>
              <li>
                <a href="/privacy">Privacy policy</a>
              </li>
              <li>
                <a href="/cookies">Cookies</a>
              </li>
            </ul> */}
          </div>
        </div>
      </section>
    </>
  );
};
