import React, { useEffect } from "react";
import "../styles/explore.css";
import AOS from "aos";
import { Footer } from "../component/Footer";
import Whatsapp from "../component/Whatsapp";
import "aos/dist/aos.css"; // Import AOS styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Explore = () => {
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
      mainT: "USA",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620546/Travel_1_p4v7sm.png",
      ],
      header: "United state of America",
      subtext:
        "The USA is a land of diverse attractions, from bustling cities to natural wonders. It’s a melting pot of cultures, with vibrant arts, film, and music scenes.",
    },

    {
      key: "set2",
      mainT: "UK",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620533/Travel_2_dxfpkq.png",
      ],
      header: "United Kingdom",
      subtext:
        "The UK is a land of diverse attractions, from bustling cities to natural wonders. It’s a melting pot of cultures, with vibrant arts, film, and music scenes.",
    },

    {
      key: "set3",
      mainT: "Canada",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620555/Travel_3_gcpv8h.png",
      ],
      header: "Canada",
      subtext:
        "Canada is celebrated for its high quality of life, stunning natural landscapes, and welcoming attitude towards immigrants. It’s a haven for adventure seekers and nature lovers alike.",
    },
  ];

  return (
    <>
          <Whatsapp />

      <section className="explore__section">
        <div className="explore__inner__con " data-aos="zoom-in-down">
          <h1 className="explore__text">
            A Journey Through History and Heritage
          </h1>
        </div>
      </section>

      <section className="attraction__section">
        <div className="attraction__con">
          <div
            className="attraction"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1>South Africa</h1>
            <h2>
              South Africa, known as the "Rainbow Nation," offers a rich
              cultural experience, iconic wildlife, and stunning natural
              landscapes.
            </h2>

            <div
              className="img__con2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1733360095/united_kingdom_ifst1c.png"
                alt="Uk image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="attraction__section">
        <h1 className="attraction__heading">Top Attraction</h1>

        <div className="attraction__con">
          <ul className="attraction__info">
            <h2>Cape Town</h2>
            <li>Visit Table Mountain, Robben Island, and Cape Point</li>

            <h2>Kruger National Park</h2>

            <li>Go on a safari to see the Big Five.</li>
            <h2>Garden Route</h2>

            <li>Explore scenic coastal drives and charming towns.</li>

            <h2>Johannesburg</h2>

            <li>
              Learn about history at the Apartheid Museum and Constitution Hill.
            </li>
          </ul>

          <div
            className="img__con4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1733360087/top_attraction_dmmok3.png"
              alt="travel image"
            />
          </div>
        </div>
      </section>

      <section className="travel__section">
        <div className="travel__con">
          <div
            className="travel__service"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="travel__heading">Travel Tips</h1>

            <ul className="travel__info">
              <li>South Africa uses the South African Rand (ZAR).</li>
              <li>
                Tap water is safe in most urban areas but bottled water is
                recommended in rural regions.
              </li>
              <li>
                Wildlife safaris often require advanced bookings; plan ahead.
              </li>
            </ul>
          </div>

          <div
            className="img__con2"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1733360096/Travel_tip_wys8wm.png"
              alt="a cup image"
            />
          </div>
        </div>
      </section>

      <section className="attraction__section">
        <div className="attraction__con">
          <ul className="attraction__info">
            <h1 className="attraction__heading">Local Cuisine</h1>

            <li>• Braai (South African BBQ)</li>

            <li>• Bobotie (curried mince with egg topping)</li>

            <li>• Bunny Chow (hollowed bread filled with curry)</li>

            <li>• Melktert (milk tart)</li>
          </ul>

          <div
            className="img__con4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1733361843/Local_cusine_cyyskx.png"
              alt="a woman holding a phone up"
            />
          </div>
        </div>
      </section>

      <section className="other__destination__section" id="explore">
        <div
          className="other__destination__con"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="other__destination__heading">Top Destinations</h1>

          <div className="other__destination__img">
            {images.map((imageSet) => (
              <div key={imageSet.key} className="image__conn-container">
                {/* Image Background */}
                <div
                  className={`image__conn ${imageSet.key === "set3"}`}
                  style={{ backgroundImage: `url(${imageSet.urls[0]})` }}
                >
                  <div className="inside__image__text">
                    <h1>{imageSet.mainT}</h1>
                  </div>
                </div>
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
                          icon={faArrowRight}
                          className="arrow-icon"
                        />
                      </span>
                    </h2>
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
