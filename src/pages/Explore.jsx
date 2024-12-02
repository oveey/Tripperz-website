import React, { useEffect } from "react";
import { Nav } from "../component/Nav";
import "../styles/explore.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const Explore = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration (milliseconds)
      easing: "ease-in-out", // Easing for animation
      startEvent: "DOMContentLoaded", // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed
    });
  }, []);

  const images = [
    {         
      key: "set1",
      mainT: "USA",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620546/Travel_1_p4v7sm.png",
      ],
      smallT: "Explore this location",
    },

    {
      key: "set2",
      mainT: "United kingdom",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620533/Travel_2_dxfpkq.png",
      ],
      smallT: "Explore this location",
    },

    {
      key: "set3",
      mainT: "South Africa",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620555/Travel_3_gcpv8h.png",
      ],
      smallT: "Explore this location",
    },

    {
      key: "set4",
      mainT: "Australia",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620544/Travel_4_wbhatr.png",
      ],
      smallT: "Explore this location",
    },
  ];

  return (
    <>
      <section className="explore__header__section" id="explore">
        <Nav />
        <div className="header__inner__con " data-aos="zoom-in-down">
          <h1 className="header__text">United Kingdom</h1>
          <p className="header__p">Explore location</p>

        </div>
      </section>

      <section className="our__service__section">
        <div className="our__service__con">
          <div
            className="our__service"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="service__title">Why Visit</p>
            <h1 className="our__service__heading">
            The USA is a land of diverse attractions, from bustling cities to natural wonders. It’s a melting pot of cultures, with vibrant arts, film, and music scenes.
            </h1>
          </div>

          <div
            className="image_set"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src="./assets/Frame 1.png" alt="" />
            <img src="./assets/Frame 2.png" alt="" />
            <img src="./assets/Frame 3.png" alt="" />
            <img src="./assets/Frame 4.png" alt="" />
            <img src="./assets/Frame 5.png" alt="" />
            <img src="./assets/Frame 6.png" alt="" />
          </div>
        </div>
      </section>

      <section className="location__section" id="location">
        <div
          className="location__con"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="location__heading">Our location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.214649514615!2d3.6194410057794744!3d6.470676235337425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf9ad9283e39b%3A0x1dbc4c625ed7f850!2sJoy%20Good%20mall!5e0!3m2!1sen!2sng!4v1731682410319!5m2!1sen!2sng"
            width="100%"
            height="600vh"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing the location of Joy Good Mall, Sangotedo, Lagos, Nigeria"
          ></iframe>
          <div className="location__sub">
            <h2>Lagos</h2>
            <p>
              Suite 9, Joygood Mall, Km 27, Lekki-Epe Express Way, Opposite Fara
              Park, Sangotedo, Lagos, Nigeria
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
