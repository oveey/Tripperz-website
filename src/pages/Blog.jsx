import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from '../component/blog-components/BlogDetails';
import  {blogData}  from '../data/blogData';

const Blog = () => {
  const { id } = useParams(); // Extract `id` from the route parameters
  const blog = blogData.find((item) => item.id === parseInt(id || '', 10)); // Find the blog by ID

  if (!blog) {
    return (
      <div className="Error__blog">
        <h2>Blog Not Found</h2>
        <p>The blog you are looking for does not exist. Please check the URL or go back to the blog list.</p>
        <a href="/blogs">Go Back to Blogs</a>
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

