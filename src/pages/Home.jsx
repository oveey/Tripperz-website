import React, { useEffect } from "react";
import { Nav } from "../component/Nav";
import { Footer } from "../component/Footer";
import Whatsapp from "../component/Whatsapp";
import Faq from "../component/Faq";
import BlogCard from "../component/blog-components/BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/home.css";

import travelaroundtheworld from "../asset/travel-around-world.png";
import earnings from "../asset/earnings.jpg";
import visafree from "../asset/visa-free.jpg";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      startEvent: "DOMContentLoaded",
      offset: 120,
      once: true,
    });
  }, []);

  const blogs = [
    {
      title: "Saving Money While Traveling Abroad",
      description:
        "Traveling abroad can be an exciting adventure, but it can also strain your wallet if you're not careful. Here are some practical tips to help Nigerian travelers save money on their journeys.",
      image: travelaroundtheworld,
      author: "Zanas Emadamerho-Atori",
      date: "2025-01-10",
      category: "Travel Tips",
    },
    {
      title: "Pack like a pro for your next vacation",
      description:
        "Packing for a trip can be quite a task, but with the right approach, you can make it a breeze. Here are some friendly and practical tips ....",
      image: earnings,
      author: "Zanas Emadamerho-Atori",
      date: "2025-01-12",
      category: "Travel Tips",
    },
    {
      title: "Five Visa-Free Countries Nigerians Can Visit in 2025",
      description:
        "Traveling without the hassle of applying for a visa is a dream come true for many. Luckily, there are several countries Nigerians can visit visa-free in 2025.",
      image: visafree,
      author: "Zanas Emadamerho-Atori",
      date: "2025-01-15",
      category: "Travel Tips",
    },
  ];

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
      mainT: "UK",
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
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1769286733/WhatsApp_Image_2026-01-24_at_17.19.57_vn2go9.jpg",
      ],
      smallT: "CEO/Founder",
    },
    {
      key: "set2",
      mainT: "Akanbi Dorcas Damilola",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1769286354/WhatsApp_Image_2026-01-24_at_17.19.56_5_zg7noe.jpg",
      ],
      smallT: "Human Resource Manager",
    },
    {
      key: "set3",
      mainT: "Adelabu Jesutofunmi",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1769286589/WhatsApp_Image_2026-01-24_at_17.36.22_obmaxh.jpg",
      ],
      smallT: "Sales Executive",
    },
    {
      key: "set4",
      mainT: "Ubochi Benjamin",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1769286125/WhatsApp_Image_2026-01-24_at_17.36.22_ik9zu5.jpg",
      ],
      smallT: "Visa Officer",
    },
    {
      key: "set5",
      mainT: "Etuk Felicia",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1769285815/WhatsApp_Image_2026-01-24_at_17.19.55_xsmk0p.jpg",
      ],
      smallT: "Sales Executive",
    },
    {
      key: "set6",
      mainT: "Rita Agha",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1769286125/WhatsApp_Image_2026-01-24_at_17.36.23_aukcvy.jpg"
      ],
      smallT: "Sales Executive",
    },

    {
      key: "set7",
      mainT: "Alabi Taiwo ",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1769285816/WhatsApp_Image_2026-01-24_at_17.19.56_1_fbe0mc.jpg",
      ],
      smallT: "Sales Executive",
    },

    {
      key: "set8",
      mainT: "Madu Genevieve",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1769285816/WhatsApp_Image_2026-01-24_at_17.19.56_2_ljpblf.jpg",
      ],
      smallT: "Social media manager",
    },

    {
      key: "set9",
      mainT: "Akinwunmi Blessing ",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1769285816/WhatsApp_Image_2026-01-24_at_17.19.56_3_wmswpy.jpg",
      ],
      smallT: "Office assistant",
    },

    {
      key: "set10",
      mainT: "Betiku Daniel",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1769285816/WhatsApp_Image_2026-01-24_at_17.19.56_4_kc4jlu.jpg",
      ],
      smallT: "Sales Executive",
    },
  ];

  const getDestinationLink = (location) => {
    const mapping = {
      USA: "/usa",
      Canada: "/canada",
      Australia: "/australia",
      "South Africa": "/SouthAfrica",
      UK: "/uk",
    };
    return mapping[location] || `/explore/${location}`;
  };

  return (
    <>
      <Whatsapp />
      <section className="header__section" id="home">
        <Nav />
        <div className="header__inner__con" data-aos="zoom-in-down">
          <h1 className="header__text">Experience a Lifetime of Adventure</h1>
          <p className="header__p">
            Discover the World, One Unforgettable Journey at a Time, with
            Endless Possibilities Await You
          </p>
          <ScrollLink to="explore" className="button">
            <button className="button__con">
              Explore Now
              <span className="icon-container">
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="arrow-icon-font-awesome"
                />
              </span>
            </button>
          </ScrollLink>
        </div>
      </section>

      <section className="whoweare__section" id="who">
        <div className="whoweare__con">
          <div className="whoweare" data-aos="fade-up" data-aos-duration="3000">
            <p>Who we are</p>
            <h2>
              Tripperz Way is a professional and trustworthy travel and tour
              company offering outstanding, swift, and memorable experiences
              worldwide. Our vision is to become the top choice for individuals
              and corporate clients by providing excellent customer service and
              unforgettable travel memories.
            </h2>
            <div className="box">
              <div className="box_1">
                <h3>3X</h3>
                <h6>Faster Booking Process</h6>
              </div>
              <div className="box_1">
                <h3>2000+</h3>
                <h6>Happy Travelers</h6>
              </div>
              <div className="box_1">
                <h3>100%</h3>
                <h6>Customer Satisfaction</h6>
              </div>
            </div>
          </div>
          <div className="img__con" data-aos="fade-up">
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1731431498/whoweare_ldy0do.png"
              alt="Who we are"
            />
          </div>
        </div>
      </section>

      <section className="comment__section">
        <div className="comment__con" data-aos="fade-up">
          <img src="/assets/Number.svg" alt="Number" />
          <h1 className="comment__heading">
            The world is a book, and those who do not travel read only one page.
          </h1>
          <p>- Saint Augustine</p>
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
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <img
                key={num}
                src={`./assets/Frame ${num}.png`}
                alt={`Service ${num}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="destination__section" id="explore">
        <div
          className="destination__con"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="destination__heading">Top Destinations</h1>
          <div className="destination__img">
            {images.map(({ key, mainT, urls, smallT }) => (
              <div
                key={key}
                className={`image__con ${key === "set3" ? "south-africa-style" : ""}`}
                style={{ backgroundImage: `url(${urls[0]})` }}
              >
                <div className="inside__image__text">
                  <h1>{mainT}</h1>
                  <Link
                    to={getDestinationLink(mainT)}
                    className="explore-button"
                  >
                    <p>
                      {smallT}{" "}
                      <span className="icon-container2">
                        <FontAwesomeIcon
                          icon={faCircleArrowRight}
                          className="arrow-icon-font-awesome2"
                        />
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial__section">
        <div className="testimonial__con" data-aos="fade-up">
          <h1 className="testimonial__heading">
            What Our Clients Say About Us
          </h1>
          <img src="./assets/arrow.svg" alt="Arrow" />
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="testimonial__swiper"
          data-aos="fade-up"
        >
          {[
            {
              text: "I've worked with Tripperz Way multiple times ...",
              name: "DR. JEREMIAH",
            },
            {
              text: "Right from the start, I've been a huge fan ...",
              name: "DR. VICTOR",
            },
            {
              text: "I had an amazing trip to South Africa ...",
              name: "DR. BOLU",
            },
            {
              text: "I've always been worried about traveling ...",
              name: "DR. YEMI",
            },
            {
              text: "I've known about Tripperz Way for a while ...",
              name: "DR. BODE",
            },
            {
              text: "All my trips with Tripperz Way have been unforgettable ...",
              name: "AMBASSADOR SEUN",
            },
          ].map(({ text, name }, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial__sub">
                <h2>{text}</h2>
                <div className="testimonial__cap">
                  <h3>{name}</h3>
                  <img src="./assets/Stars.svg" alt="stars" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="team__section">
        <div className="team__con" data-aos="fade-up" data-aos-duration="3000">
          <h1 className="team__heading">Meet the Team</h1>
          <div className="team__img">
            {teamImages.map(({ key, mainT, urls, smallT }) => (
              <div
                key={key}
                className={`team__image__con ${key === "set2" ? "set2-highlight" : ""}`}
                style={{ backgroundImage: `url(${urls[0]})` }}
              >
                <div className="team__text">
                  <div className="team__bg">
                    <h1>{mainT}</h1>
                    <p>{smallT}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <section className="blog__post__section">
        <h2 className="blog_title">Latest Blogs</h2>
        <div className="blog-preview">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </section>

      <section className="location__section">
        <div
          className="location__con"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="location__heading">Our location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.463965812683!2d3.6743092749924093!3d6.462753693528839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfeb946206f77%3A0x4faad975505c60c1!2sKm.28!5e0!3m2!1sen!2sng!4v1746006846026!5m2!1sen!2sng"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing the location of Lekki, Lagos, Nigeria"
          ></iframe>
          <div className="location__sub">
            <h2>Lagos</h2>
            <p>
              Kilometer 28, Lekki-Epe Expressway Opposite 2nd gate Abijo GRA,
              Lagos.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
