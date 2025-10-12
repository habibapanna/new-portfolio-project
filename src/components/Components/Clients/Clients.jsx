import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoArrowForward, IoArrowBack } from "react-icons/io5";

const clientImages = Array.from({ length: 20 }, (_, i) => `/client${i + 1}.png`);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: -200,
    y: i % 2 === 0 ? -50 : 50, // alternate top/bottom
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  exit: (i) => ({
    opacity: 0,
    x: 200,
    y: i % 2 === 0 ? -50 : 50,
    transition: { duration: 0.7 },
  }),
};

const Clients = () => {
  const [page, setPage] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev
  const itemsPerPage = 5; // 5 clients per row
  const totalPages = Math.ceil(clientImages.length / itemsPerPage);

  // Auto-slide for grid
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const start = page * itemsPerPage;
  const currentClients = clientImages.slice(start, start + itemsPerPage);

  const handleOpenSlider = (index) => {
    setCurrentIndex(index + start);
    setOpenSlider(true);
  };
  const handleCloseSlider = () => setOpenSlider(false);
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % clientImages.length);
  };
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? clientImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 px-6 overflow-hidden relative min-h-screen">
      {/* Section Header */}
      <div className="text-left mb-8">
  <h2 className="text-3xl font-bold mb-3 text-black">Our Clients</h2>
  <div className="border-2 border-blue-800 w-16 mb-5 "></div>
  <p className="text-gray-800 mb-16 text-justify">
    We are proud to have partnered with a diverse range of clients, from innovative startups to established global brands. Each collaboration reflects our dedication to delivering exceptional results and creating meaningful impact. Over the years, we have helped our clients achieve their goals through creative solutions, strategic insights, and a commitment to excellence. Their success stories inspire us to continuously improve and push the boundaries of what we can achieve together.Explore the companies and brands we’ve had the privilege to work with and see how we’ve helped them grow, innovate, and stand out in their industries.
  </p>
</div>


      {/* Grid of Images */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {currentClients.map((img, index) => (
              <motion.div
                key={index}
                className="flex justify-center cursor-pointer"
                onClick={() => handleOpenSlider(index)}
                custom={index}
                variants={itemVariants}
              >
                <motion.img
                  src={img}
                  alt={`Client ${index + start + 1}`}
                  className="w-full max-w-sm shadow-2xl hover:scale-105 transition-transform duration-300 round"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fullscreen Slider */}
      <AnimatePresence>
        {openSlider && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-95 z-80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={handleCloseSlider}
              className="absolute top-5 right-5 text-blue-800 text-3xl md:text-5xl hover:text-blue-800 cursor-pointer z-50"
            >
              <IoClose />
            </button>

            {/* Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-8 text-white md:text-4xl sm:text-5xl hover:text-blue-800 cursor-pointer z-50 hover:bg-white bg-blue-800 bg-opacity-60 p-2 rounded-full border border-blue-800"
            >
              <IoArrowBack />
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-8 text-white md:text-4xl sm:text-5xl hover:text-blue-800 cursor-pointer z-50 hover:bg-white bg-blue-800 bg-opacity-60 border border-blue-800 p-2 rounded-full"
            >
              <IoArrowForward />
            </button>

            {/* Image */}
            <motion.img
              key={currentIndex}
              src={clientImages[currentIndex]}
              alt={`Client ${currentIndex + 1}`}
              initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
              transition={{ duration: 0.7 }}
              className="max-w-full max-h-[80vh] shadow-2xl object-contain rounde"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Clients;
