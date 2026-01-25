import React from "react";
import { useNavigate } from "react-router-dom";
import "./blog.css";
import PropTypes from "prop-types";

const BlogCard = ({
  id,
  image,
  title,
  description,
  author,
  date,
  category,
}) => {
  const navigate = useNavigate();

  return (
    <div className="blog__container" onClick={() => navigate(`/blog/${id}`)}>
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="blog__image"
        loading="lazy" // Optimized for performance
      />

      {/* Content Section */}
      <div className="blog__content">
        <h2>{title}</h2>
        <p>{description}</p>

        {/* Author and Date */}
        <div className="blog__author">
          <span>By {author}</span>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>

        {/* Category */}
        <div className="blog__category">{category}</div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  category: PropTypes.string.isRequired,
};

export default BlogCard;
