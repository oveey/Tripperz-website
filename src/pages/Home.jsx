import React, { useEffect } from "react";
import { Nav } from "../component/Nav";
import { Footer } from "../component/Footer";
import Whatsapp from "../component/Whatsapp";
import Faq from "../component/Faq";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import BlogCard from "../component/blog-components/BlogCard";
import travelaroundtheworld from "../asset/travel-around-world.png";
import earnings from "../asset/earnings.jpg";
import visafree from "../asset/visa-free.jpg";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (milliseconds)
      easing: "ease-in-out", // Easing for animation
      startEvent: "DOMContentLoaded", // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed
      once: true, // Animation will run only once
    });
  }, []);

  const navigate = useNavigate();


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
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1732384912/1_oz3mzf.jpg",
      ],
      smallT: "Ceo/Founder",
    },

    {
      key: "set2",
      mainT: "Oyindamola Olaoye",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1732384912/3_g0nirt.jpg",
      ],
      smallT: "Sales Manager",
    },

    {
      key: "set3",
      mainT: "Zanas Emadamerho-Atori",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1732384912/9_bgsgys.jpg",
      ],
      smallT: "Digital Marketer/Sales Officer",
    },

    {
      key: "set4",
      mainT: "Christabel Obadaseraye",
      urls: [
        "https://res.cloudinary.com/dw3vqhvte/image/upload/v1732384911/2_b5fjou.jpg",
      ],
      smallT: "Sales Executive",
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
      <Whatsapp />

      <section className="header__section" id="home">
        <Nav />

        <div className="header__inner__con " data-aos="zoom-in-down">
          <h1 className="header__text">Experience a Lifetime of Adventure</h1>
          <p className="header__p">
            Discover the World, One Unforgettable Journey at a Time, with Endless Possibilities Await You
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
                <h3>2000+</h3>
                <h6>Happy Travelers</h6>
              </div>

              <div className="box_1">
                <h3>95%</h3>
                <h6>Customer Satisfaction</h6>
              </div>
            </div>
          </div>
          <div className="img__con" data-aos="fade-up">
            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1731431498/whoweare_ldy0do.png"
              alt="a woman holding a phone up"
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

      <section className="destination__section" id="explore">
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
                className={`image__con ${imageSet.key === "set3" ? "south-africa-style" : ""
                  }`}
                style={{
                  backgroundImage: `url(${imageSet.urls[0]})`,
                  ...(imageSet.key === "set3" && {}),
                }}
              >
                <div className="inside__image__text">
                  <h1>{imageSet.mainT}</h1>
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
                    className="explore-button"
                  >
                    <p>
                      {imageSet.smallT}{" "}
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

          <SwiperSlide>
            <div className="testimonial__sub">
              <h2>
                I had an amazing trip to South Africa with Tripperz Way. From exploring the stunning Safaris to enjoying the warm culture in Cape Town, it was definitely great vacation!

              </h2>
              <div className="testimonial__cap">
                <h3> DR. BOLU</h3>
                <img src="./assets/Stars.svg" alt="stars" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__sub">
              <h2>
                I’ve always been worried about traveling internationally but my mindset has changed thanks to Tripperz Way! Their lovely travel representatives made sure I had a seamless trip from start to finish, I can’t wait to book my next trip with them.
              </h2>
              <div className="testimonial__cap">
                <h3> DR.YEMI </h3>
                <img src="./assets/Stars.svg" alt="stars" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__sub">
              <h2>
                I’ve known about Tripperz Way for a while and decided to book my last trip to Seychelles with them. What I really loved about my experience was the consistent communication. They stayed in touch with me throughout my trip and were available to resolve any issues that came up! I highly recommend them for anyone who’s anxious or scared about traveling abroad!

              </h2>
              <div className="testimonial__cap">
                <h3> DR.BODE </h3>
                <img src="./assets/Stars.svg" alt="stars" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__sub">
              <h2>
                All my trips with Tripperz Way have been unforgettable! With them, I’ve had lovely visits to Spain, Canada and the UK. They always take their time to plan a detailed itinerary and they also book the best hotel accommodations!

              </h2>
              <div className="testimonial__cap">
                <h3> AMBASSADOR SEUN </h3>
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
                className={`team__image__con ${imageSet.key === "set2" ? "set2-highlight" : ""
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
