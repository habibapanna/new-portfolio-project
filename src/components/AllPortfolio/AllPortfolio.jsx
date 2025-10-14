import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { portfolioData } from "../Portfolio/Portfolio";


// ✅ make sure to export portfolioData from Portfolio.jsx

const AllPortfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 bg-white min-h-screen">
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold mb-5 text-black">All Projects</h2>
        <div className="border-2 border-blue-800 w-16 mb-5"></div>
        <p className="mb-10 text-gray-800">
          Explore all of my completed projects — from business and ecommerce websites to creative UI designs.
        </p>
      </div>

      {/* Grid of all projects */}
      <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map(item => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.category}
              className="w-full md:h-[300px] h-[200px] lg:h-48 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 bg-black transition-opacity duration-300 text-white font-semibold text-lg">
              {item.name}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ Back Home button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 cursor-pointer"
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
};

export default AllPortfolio;
