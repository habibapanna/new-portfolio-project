import { useLocation, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state;

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <p>No blog details found. Please go back.</p>
      </div>
    );
  }

  return (
    <section className="bg-black text-white py-12 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Blog Image */}
        {blog.img && (
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
        )}

        {/* Blog Meta */}
        <div className="flex justify-between items-center mb-4 text-gray-400 text-sm">
          {blog.date && <span>{blog.date}</span>}
          <span>By {blog.author || "Admin"}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{blog.title}</h1>

        {/* Description / Content */}
        <p className="text-gray-300 leading-relaxed mb-6">{blog.content}</p>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-pink-500 px-5 py-2 rounded-lg hover:bg-blue-500 cursor-pointer"
        >
          ← Back to Blogs
        </button>
      </div>
    </section>
  );
};

export default BlogDetails;
