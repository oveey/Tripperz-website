import React, { useEffect, useState, useRef } from "react";
import { Nav } from "../component/Nav";

export const Home = () => {
  const images = [
    {
      key: "set9",
      mainT: "USA",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731430595/discover1_f6tiv8.png",
      ],
      smallT: "Explore location",
    },
  ];

  return (
    <>
      <section className="header__section">
        <div className="header__inner__con">
          <Nav />
          <h1 className="header__text">Experience a Lifetime of Adventure</h1>
          <p>
            We are a passionate travel agency that spent years helping people
            explore the world.
          </p>
          <button className="button">Explore Now</button>
        </div>
      </section>

      <section className="whoweare__section">
        <div className="whoweare__con">
          <p>Who we are </p>
          <h2>
            We are a passionate travel agency that spent years helping people
            explore the world.{" "}
          </h2>
          <div className="who_left_con">
            <div className="img__con">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="comment__section">
        <div className="comment__con">
          <span>icon</span>
          <h1 className="comment__heading">
            The world is a book, and those who do not travel read only one page.
          </h1>
          <p> – Saint Augustine</p>
          <img src="" alt="" />
        </div>
      </section>

      <section className="ourservice__section">
        <div className="ourservice__con">
          <h1 className="ourservice__heading">
            Our comprehensive services are designed to cater to all your travel
            needs
          </h1>
          <img src="" alt="" />
        </div>
      </section>

      <section className="destination__section">
        <div className="destination__con">
          <h1 className="destination__heading">Top Destinations</h1>
          <div className="destination__img">
            <div className="destination__img__2">
              {images.map((imageSet) => (
                <div
                  style={{ backgroundImage: `url(${imageSet.urls[0]})` }}
                  className="image__con"
                >
                  <div className="inside__image__text">
                    <h1>{imageSet.mainT}</h1>
                    <p>{imageSet.smallT}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="destination__img">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <section className="testimonial__section">
        <div className="testimonial__con">
          <h1 className="location__heading">What Our Clients Say About Us</h1>
          <span>Icon</span>
          <div className="location__sub">
            <h2>
              Love the simplicity of the service and the prompt customer
              support. We can’t imagine working without it.
            </h2>
            <h3>Caitlyn King</h3>
            <p>Head of Design, Layers</p>
            <span>icon</span>
            <span>pagnition</span>
          </div>
        </div>
      </section>

      <section className="faq__section">
        <div className="faq__con">
          <h1 className="faq__heading">Frequently asked questions</h1>
          <p>Everything you need to know about the product and billing.</p>
        </div>
      </section>

      <section className="location__section">
        <div className="location__con">
          <h1 className="location__heading">Our location</h1>
          <img src="" alt="" />
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
