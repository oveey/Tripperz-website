import BlogCard from "../component/blog-components/BlogCard";
import BlogCategories from "../component/blog-components/BlogCategories";
import BlogHero from "./BlogHero";
import BlogPagination from "../component/blog-components/BlogPagination";
import { blogData, categoryData } from "../data/blogData";
import { useState } from "react";
import { Footer } from "../component/Footer";


export const Blogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate indices for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Handle category selection
  const handleCategorySelect = (category) => {
    if (category === "All") {
      setFilteredBlogs(blogData);
    } else {
      setFilteredBlogs(blogData.filter((blog) => blog.category === category));
    }
    setCurrentPage(1); // Reset to page 1 when category changes
    console.log("Selected category:", category);

  };

  return (
    <>
      {/* Hero Section */}
      <BlogHero />

      {/* Category Filters */}
      <section className="blog__categories">
        <BlogCategories
          categories={["All", ...categoryData]}
          onSelectCategory={handleCategorySelect}
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
      <Footer />
      

    </>
  );
};
