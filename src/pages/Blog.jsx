import React, { useEffect, useState  } from "react";
import "../styles/explore.css";
import AOS from "aos";
import { Footer } from "../component/Footer";
import "aos/dist/aos.css"; // Import AOS styles
import "../styles/blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



export const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (milliseconds)
      easing: "ease-in-out", // Easing for animation
      startEvent: "DOMContentLoaded", // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed
      once: true, // Animation will run only once
    });
  }, []);



  const images = [
    {
      key: "set1",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620546/Travel_1_p4v7sm.png ",
      ],
      header: "9 incredible places to visit in November around the world",
      subtext:
        "Discover breathtaking destinations off the beaten path. From quaint villages to serene landscapes, these spots will inspire your next adventure.",
    },

    {
      key: "set2",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620533/Travel_2_dxfpkq.png",
      ],
      header: "Top 10 Hidden Gems in Europe",
      subtext:
        "Discover breathtaking destinations off the beaten path. From quaint villages to serene landscapes, these spots will inspire your next adventure.",
    },

    {
      key: "set3",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620555/Travel_3_gcpv8h.png",
      ],
      header: "Ultimate Packing Tips for Every Traveler",
      subtext:
        "Discover breathtaking destinations off the beaten path. From quaint villages to serene landscapes, these spots will inspire your next adventure.",
    },

    {
      key: "set4",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620555/Travel_3_gcpv8h.png",
      ],
      header: "How to Travel Sustainably in 2025",
      subtext:
        "Discover breathtaking destinations off the beaten path. From quaint villages to serene landscapes, these spots will inspire your next adventure.",
    },

    {
      key: "set5",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620555/Travel_3_gcpv8h.png",
      ],
      header: "The Best Street Foods Around the Globe",
      subtext:
        "Discover breathtaking destinations off the beaten path. From quaint villages to serene landscapes, these spots will inspire your next adventure.",
    },

    {
      key: "set6",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620555/Travel_3_gcpv8h.png",
      ],
      header: "Tips for Staying Safe and Having Fun",
      subtext:
        "Discover breathtaking destinations off the beaten path. From quaint villages to serene landscapes, these spots will inspire your next adventure.",
    },
    {
      key: "set6",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620555/Travel_3_gcpv8h.png",
      ],
      header: " Solo Travel Guide: Tips for Staying Safe and Having Fun",
      subtext:
        "Discover breathtaking destinations off the beaten path. From quaint villages to serene landscapes, these spots will inspire your next adventure.",
    },
    {
      key: "set6",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620555/Travel_3_gcpv8h.png",
      ],
      header: " Solo Travel Guide: Tips for Staying Safe and Having Fun",
      subtext:
        "Discover breathtaking destinations off the beaten path. From quaint villages to serene landscapes, these spots will inspire your next adventure.",
    },
    {
      key: "set6",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620555/Travel_3_gcpv8h.png",
      ],
      header: " Solo Travel Guide: Tips for Staying Safe and Having Fun",
      subtext:
        "Discover breathtaking destinations off the beaten path. From quaint villages to serene landscapes, these spots will inspire your next adventure.",
    },
    {
      key: "set6",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620555/Travel_3_gcpv8h.png",
      ],
      header: " Solo Travel Guide: Tips for Staying Safe and Having Fun",
      subtext:
        "Discover breathtaking destinations off the beaten path. From quaint villages to serene landscapes, these spots will inspire your next adventure.",
    },
  ];

  return (
    <>
      <section className="explore__section">
        <div className="explore__inner__con " data-aos="zoom-in-down">
          <h1 className="explore__text">Blog </h1>
        </div>
      </section>

      <section className="other__destination__section" id="explore">
        <div
          className="other__destination__con"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {/* <h1 className="other__destination__heading">Top Destinations</h1> */}

          <div className="other__destination__img2">
            {images.map((imageSet) => (
              <div key={imageSet.key} className="image__conn-container">
                {/* Image Background */}
                <div
                  className={`image__conn ${imageSet.key === "set3"}`}
                  style={{ backgroundImage: `url(${imageSet.urls[0]})` }}
                ></div>
                {/* Header and Subtext */}
                <div className="image__text-container">
                  <Link
                    to={
                      imageSet.mainT === "USA"
                        ? "/usa"
                        : imageSet.mainT === "Canada"
                        ? "/canada"
                        : imageSet.mainT === "Australia"
                        ? "/australia"
                        : imageSet.mainT === "SouthAfrica"
                        ? "/SouthAfrica"
                        : imageSet.mainT === "Jamaica"
                        ? "/jamaica"
                        : imageSet.mainT === "Enugu"
                        ? "/enugu"
                        : imageSet.mainT === "Lagos"
                        ? "/Lagos"
                        : imageSet.mainT === "Jungle"
                        ? "/jungle"
                        : imageSet.mainT === "UK"
                        ? "/uk"
                        : `/explore/${imageSet.key}`
                    }
                    className="image__link"
                  >
                    <h2 className="image__header">
                      {imageSet.header}
                      <span className="icon-container">
                        <FontAwesomeIcon
                          icon={faCircleArrowRight}
                          className="arrow-icon-font-awesome2"
                        />
                      </span>
                    </h2>
                    <br></br>
                    <p className="image__subtext">{imageSet.subtext}</p>
                  </Link>
                </div>
              </div>
            ))}
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63432.43500191985!2d3.6237259419604153!3d6.454682590673177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf9ad9283e39b%3A0x1dbc4c625ed7f850!2sJoy%20Good%20mall!5e0!3m2!1sen!2sng!4v1733488888596!5m2!1sen!2sng"
            width="100%"
            height="600"
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
      <Footer />
    </>
  );
};
