const BlogDetails = ({ title, image, author, date, content }) => {
  return (
    <div className="explore__section">
      {/* Blog Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>

      {/* Author and Date */}
      <p className="text-gray-600 mb-6">
        By <span className="font-semibold">{author}</span> on {date}
      </p>

      {/* Blog Content */}
      <div
        className="prose mt-4"
        dangerouslySetInnerHTML={{
          __html: content, // Be cautious with this to avoid XSS vulnerabilities
        }}
      ></div>
    </div>
  );
};

export default BlogDetails;
