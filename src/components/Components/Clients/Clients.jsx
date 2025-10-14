import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoArrowForward, IoArrowBack } from "react-icons/io5";

const clientImages = Array.from({ length: 20 }, (_, i) => `/client${i + 1}.png`);

const Clients = () => {
  const [page, setPage] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const itemsPerPage = 12; // total per page (2 rows × 5 cols)
  const totalPages = Math.ceil(clientImages.length / itemsPerPage);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const start = page * itemsPerPage;
  const currentClients = clientImages.slice(start, start + itemsPerPage);

  // Slider controls
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
    <section id="clients" className="py-16 px-6 relative overflow-hidden">
      {/* Section Header */}
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold mb-3 text-black">My Clients</h2>
        <div className="border-2 border-blue-800 w-16 mb-5"></div>
        <p className="text-gray-800 mb-16 text-justify">
        Our clients are at the heart of everything we do. We take pride in delivering exceptional results, building strong relationships, and providing services that exceed expectations.Here, you can read genuine feedback from our valued clients and partners. Their stories highlight our commitment to quality, creativity, and reliability in every project we undertake. We believe that their experiences reflect the trust and confidence placed in our work, and we continuously strive to make every collaboration a success.
        </p>
      </div>

      {/* Grid container (fixed height to prevent jump) */}
      <div className="relative h-[200px] md:h-[230px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full grid grid-cols-4 md:grid-cols-6 gap-6"
          >
            {currentClients.map((img, index) => (
              <motion.div
                key={index}
                className="flex justify-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleOpenSlider(index)}
              >
                <img
                  src={img}
                  alt={`Client ${index + start + 1}`}
                  className="w-32 md:w-40 object-contain shadow-lg"
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
            className="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={handleCloseSlider}
              className="absolute top-5 right-5 text-blue-800 text-3xl md:text-5xl hover:text-blue-900 cursor-pointer z-50"
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
              transition={{ duration: 0.6 }}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Clients;
