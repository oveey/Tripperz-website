import React, { useState } from "react";
import "./blog.css";

const BlogCategories = ({ categories, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState(null); // State to track active category

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Set the clicked category as active
    onSelectCategory(category); // Trigger the callback for category selection
  };

  return (
    <div className="blog__categories">
      {/* Categories Heading */}
      {/* <h2 className="text-xl font-semibold mb-4 underline">Categories</h2> */}

      {/* Categories List */}
      <ul className="category__list">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              activeCategory === category ? "text-red-600 underline" : "text-blue-600"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategories;

