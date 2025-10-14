import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoArrowForward, IoArrowBack } from "react-icons/io5";

const testimonialImages = [
  "/test1.png",
  "/test2.png",
  "/test3.png",
  "/test4.png",
  "/test5.png",
  "/test6.png",
  "/test7.png",
  "/test8.png",
  "/test9.png",
  "/test10.png",
  "/test11.png",
  "/test12.png",
  "/test13.png",
  "/test14.png",
  "/test15.png",
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // ✅ Responsive: change itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // show 1 image for small screens
      } else {
        setItemsPerPage(3); // show 3 for large screens
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonialImages.length / itemsPerPage);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const start = page * itemsPerPage;
  const currentTestimonials = testimonialImages.slice(
    start,
    start + itemsPerPage
  );

  const handleOpenSlider = (index) => {
    setCurrentIndex(index + start);
    setOpenSlider(true);
  };

  const handleCloseSlider = () => setOpenSlider(false);
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
  };
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialImages.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="bg-blue-50 py-16 px-6 overflow-hidden relative"
    >
      {/* Section Header */}
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold mb-3 text-black">Testimonials</h2>
        <div className="border-2 border-blue-800 w-16 mb-5"></div>
        <p className="text-gray-800 mb-16 text-justify">
          Our clients are at the heart of everything we do. We take pride in delivering exceptional results, building strong relationships, and providing services that exceed expectations.Here, you can read genuine feedback from our valued clients and partners. Their stories highlight our commitment to quality, creativity, and reliability in every project we undertake. We believe that their experiences reflect the trust and confidence placed in our work, and we continuously strive to make every collaboration a success.
        </p>
      </div>

      {/* Grid of Images */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 1 }}
            className={`grid gap-8 ${
              itemsPerPage === 1
                ? "grid-cols-1"
                : "grid-cols-1 lg:grid-cols-3"
            }`}
          >
            {currentTestimonials.map((img, index) => (
              <div
                key={index}
                className="flex justify-center cursor-pointer"
                onClick={() => handleOpenSlider(index)}
              >
                <motion.img
                  src={img}
                  alt={`Testimonial ${index + start + 1}`}
                  className="w-full max-w-sm shadow-2xl hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
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
              src={testimonialImages[currentIndex]}
              alt={`Testimonial ${currentIndex + 1}`}
              initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
              transition={{ duration: 0.7 }}
              className="max-w-full max-h-[80vh] shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsSection;
