import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { portfolioData } from "../Portfolio/Portfolio";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = ["All","Business Website", "Ecommerce Website", "Real State Website", "Cleaning Website" , "Car Website"];

const AllPortfolio = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  // Filtered projects based on category
  const filteredData =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter(item => item.category === activeCategory);

  // Cursor effect
  const handleMouseMove = (e) => {
    setCursor(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  const handleMouseEnter = () => {
    setCursor(prev => ({ ...prev, visible: true }));
  };

  const handleMouseLeave = () => {
    setCursor(prev => ({ ...prev, visible: false }));
  };

  return (
    <section 
      className="py-16 px-6 bg-white min-h-screen"
      onMouseMove={handleMouseMove}
    >
   <div className="text-left mb-8">
  <h2 className="text-3xl font-bold mb-5 text-black">All Projects</h2>
  <div className="border-2 border-blue-800 w-16 mb-5"></div>
  <p className="mb-16 text-gray-800 text-justify">
    Explore all of my completed projects — from business and ecommerce websites to creative UI designs. 
    Each project reflects my passion for building modern, user-friendly, and responsive digital experiences.
    I’ve worked with a wide range of clients and concepts — transforming ideas into powerful, visually appealing, 
    and performance-driven web solutions. Whether it’s a clean business portfolio, an interactive ecommerce site, 
    or a dynamic landing page, every project showcases my commitment to design precision and functionality.Take a closer look at my work below to see how I blend creativity with technology to deliver meaningful 
    and impactful user experiences.
  </p>
</div>


      <div className="mx-auto">
        {/* Category Filter Buttons */}
        <div className="relative mb-8">
          <button
            onClick={() => (scrollRef.current.scrollLeft -= 150)}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white shadow-md rounded-full p-1 cursor-pointer bg-blue-800 md:hidden z-10"
          >
            <FaChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="md:text-lg font-semibold flex justify-start gap-4 overflow-x-auto whitespace-nowrap scroll-smooth px-6 sm:px-8 no-scrollbar"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "text-blue-800 border-b-2 border-blue-800"
                    : "text-black"
                } hover:text-blue-800 px-2 sm:px-3 py-1 text-sm sm:text-base cursor-pointer transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>

          <button
            onClick={() => (scrollRef.current.scrollLeft += 150)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white shadow-md rounded-full p-1 bg-blue-800 cursor-pointer md:hidden z-10"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredData.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden cursor-pointer"
                onClick={() => navigate(`/details/${item.id}`)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full md:h-[300px] h-[200px] lg:h-48 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-70 bg-black transition-opacity duration-300 text-white font-semibold text-lg text-center p-2">
                  <div>{item.name}</div>
                  <div className="text-sm mt-1">{item.category}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Back Home button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 cursor-pointer"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* View Project Circle */}
      <div
        className={`fixed pointer-events-none flex items-center justify-center rounded-full text-center text-black font-semibold bg-white shadow-lg transition-all duration-150 w-20 h-20 ${
          cursor.visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      >
        View Project
      </div>
    </section>
  );
};

export default AllPortfolio;
