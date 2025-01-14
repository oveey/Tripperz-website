import React from "react";
import { Footer } from "../Footer";

const BlogDetails = ({ title, image, author, date, content }) => {
  return (
    <>
      <section className="explore__section">
        {/* Blog Image */}

        <div className="explore__inner__con " data-aos="zoom-in-down">
          <h1 className="explore__text">{title} </h1>
          {/* Author and Date */}

          <h3 className="text-gray-600 mb-6">
            By <span className="font-semibold">{author}</span> on {date}
          </h3>
        </div>
      </section>

      <section>
        {/* Blog Content */}
        <div
          className="Blog_writeup_section"
          dangerouslySetInnerHTML={{
            __html: content, // Be cautious with this to avoid XSS vulnerabilities
          }}
        ></div>
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

export default BlogDetails;
