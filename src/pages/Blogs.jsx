import BlogCard from "../component/blog-components/BlogCard";
import BlogCategories from "../component/blog-components/BlogCategories";
import BlogHero from "./BlogHero";
import BlogPagination from "../component/blog-components/BlogPagination";
import { blogData, categoryData } from "../data/blogData";
import Whatsapp from "../component/Whatsapp";
import { useState } from "react";
import { Footer } from "../component/Footer";

export const Blogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogsPerPage = 6;

  // Calculate indices for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Update the active category
    if (category === "All") {
      setFilteredBlogs(blogData);
    } else {
      setFilteredBlogs(blogData.filter((blog) => blog.category === category));
    }
    setCurrentPage(1); // Reset to page 1 when category changes
  };

  return (
    <>
      <Whatsapp />
      {/* Hero Section */}
      <BlogHero />

      {/* Category Filters */}
      <section className="blog__categories">
        <BlogCategories
          categories={["All", ...categoryData]}
          onSelectCategory={handleCategorySelect}
          selectedCategory={selectedCategory} // Pass active category
        />
      </section>

      {/* Blog Cards */}
      <section className="blog__section">
        <div className="blog__con">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="px-6 py-10 md:px-12 lg:px-24 flex justify-center">
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
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
