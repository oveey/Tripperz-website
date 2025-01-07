import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from '../component/blog-components/BlogDetails';
import  {blogData}  from '../data/blogData';

const Blog = () => {
  const { id } = useParams(); // Extract `id` from the route parameters
  const blog = blogData.find((item) => item.id === parseInt(id || '', 10)); // Find the blog by ID

  if (!blog) {
    return (
      <div className="max-w-screen-lg mx-auto px-6 py-12 text-center font-poppins">
        <h2 className="text-2xl font-semibold text-gray-800">Blog Not Found</h2>
      </div>
    );
  }

  return (
    <BlogDetails
      title={blog.title}
      image={blog.image}
      author={blog.author}
      date={blog.date}
      content={blog.content}
    />
  );
};

export default Blog;

