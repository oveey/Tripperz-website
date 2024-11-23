import React, { useEffect } from "react";
import { Nav } from "../component/Nav";
import Faq from "../component/Faq";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export const Home = () => {
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

    {
      key: "set5",
      mainT: "Canada",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1731620541/Travel_5_xeli36.png",
      ],
      smallT: "Explore this location",
    },
  ];

  const teamImages = [
    {
      key: "set1",
      mainT: "Toba Subair",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1732384912/1_oz3mzf.jpg",
      ],
      smallT: "Ceo/founder",
    },

    {
      key: "set2",
      mainT: "Christabel Obadaseraye",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1732384912/3_g0nirt.jpg",
      ],
      smallT: "Sales Officer",
    },

    {
      key: "set3",
      mainT: "Oyindamola Olaoye",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1732384912/9_bgsgys.jpg",
      ],
      smallT: "Sales Manager",
    },

    {
      key: "set4",
      mainT: "Zanas Emadamerho-Ator",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1732384911/2_b5fjou.jpg",
      ],
      smallT: "Digital Marketer/ Sales Officer",
    },

    {
      key: "set5",
      mainT: "Precious Effiong",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1732384914/8_movvxu.jpg",
      ],
      smallT: "Visa Officer",
    },
  ];

  return (
    <>
      <section className="header__section">
        <Nav />

        <div className="header__inner__con " data-aos="zoom-in-down">
          <h1 className="header__text">Experience a Lifetime of Adventure</h1>
          <p className="header__p">
            We are a passionate travel agency that spent years helping people
            explore the world.
          </p>
          <div className="button">
            <button className="button__con">
              Explore Now
              <span className="icon-container">
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="arrow-icon-font-awesome"
                />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="whoweare__section">
        <div className="whoweare__con">
          <div className="whoweare" data-aos="fade-up" data-aos-duration="3000">
            <p>Who we are </p>
            <h2>
              Tripperz Way is a professional and trust worthy travel and tour
              company that offers outstanding, swift and memorable travel
              experience to travelers worldwide. Our vision is to become the
              number one choice for individual and cooperate clients for their
              travel experience by providing excellent customer service and
              unforgettable travel memories.
            </h2>

            <div className="box">
              <div className="box_1">
                <h3>3X</h3>
                <h6>Faster Booking Process</h6>
              </div>

              <div className="box_1">
                <h3>500+</h3>
                <h6>Happy Travelers</h6>
              </div>

              <div className="box_1">
                <h3>95%</h3>
                <h6>Customer Satisfaction</h6>
              </div>
            </div>

          </div>
          <div className="img__con" data-aos="fade-up" data-aos-duration="3000">
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1731431498/whoweare_ldy0do.png"
              alt="a woman holding a phone up"
            />
          </div>
        </div>
      </section>

      <section className="comment__section">
        <div
          className="comment__con"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img src="/assets/Number.svg" alt="Number" />
          <h1 className="comment__heading">
            The world is a book, and those who do not travel read only one page.
          </h1>
          <p> – Saint Augustine</p>
        </div>
      </section>

      <section className="our__service__section">
        <div className="our__service__con">
          <div
            className="our__service"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="service__title">Our service</p>
            <h1 className="our__service__heading">
              Our comprehensive services are designed to cater to all your
              travel needs
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

      <section className="destination__section">
        <div
          className="destination__con"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="destination__heading">Top Destinations</h1>

          <div className="destination__img">
            {images.map((imageSet) => (
              <div
                key={imageSet.key}
                className={`image__con ${
                  imageSet.key === "set3" ? "set3-style" : ""
                }`}
                style={{ backgroundImage: `url(${imageSet.urls[0]})` }}
              >
                <div className="inside__image__text">
                  <h1>{imageSet.mainT}</h1>
                  <p>
                    {imageSet.smallT}{" "}
                    <span className="icon-container2">
                      <FontAwesomeIcon
                        icon={faCircleArrowRight}
                        className="arrow-icon-font-awesome2"
                      />
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial__section">
        <div
          className="testimonial__con"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="testimonial__heading">
            What Our Clients Say About Us
          </h1>
          <img src="./assets/arrow.svg" alt="Arrow" />
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="testimonial__swiper"
          data-aos="fade-up"
        >
          <SwiperSlide>
            <div className="testimonial__sub">
              <h2>
                I’ve worked with Tripperz Way multiple times and it has always
                been a smooth experience. My standout moment from my experience
                with Tripperz Way was when they curated a lovely tour for me and
                my wife for our honeymoon in Zanzibar, I created memories that
                I’ll never forget.
              </h2>
              <div className="testimonial__cap">
                <h3>DR. JEREMIAH</h3>
                <img src="./assets/Stars.svg" alt="stars" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial__sub">
              <h2>
                Right from the start, I’ve been a huge fan of Tripperz Way and
                the swift and excellent customer service they offer. Most
                recently, I attended a world class conference in Egypt through
                their visa and tour service and it was a great experience
              </h2>
              <div className="testimonial__cap">
                <h3> DR. VICTOR</h3>
                <img src="./assets/Stars.svg" alt="stars" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="team__section">
        <div className="team__con" data-aos="fade-up" data-aos-duration="3000">
          <h1 className="team__heading"> Meet the Team</h1>

          <div className="team__img">
            {teamImages.map((imageSet) => (
              <div
                key={imageSet.key}
                className={`team__image__con ${
                  imageSet.key === "set2" ? "set2-highlight" : ""
                }`}
                style={{ backgroundImage: `url(${imageSet.urls[0]})` }}
              >
                <div className="team__text">
                  <div className="team__bg">
                  <h1>{imageSet.mainT}</h1>
                  <p>{imageSet.smallT}</p>
                  </div>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Faq />

      <section className="location__section">
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
