import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoClose, IoArrowForward, IoArrowBack } from "react-icons/io5";

const testimonials = [
  {
    name: "Matt Brandon",
    role: "Freelancer",
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
  },
  {
    name: "Saul Goodman",
    role: "CEO & Founder",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
  },
  {
    name: "Sarah Johnson",
    role: "Designer",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
  {
    name: "William Smith",
    role: "Marketer",
    text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.",
  },
  {
    name: "Emily Davis",
    role: "Developer",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
  },
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Auto-slide for small testimonial grid
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const start = page * itemsPerPage;
  const currentTestimonials = testimonials.slice(start, start + itemsPerPage);

  const handleOpenSlider = (index) => {
    setCurrentIndex(index + start);
    setOpenSlider(true);
  };

  const handleCloseSlider = () => {
    setOpenSlider(false);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-pink-50 py-16 px-6 overflow-hidden relative">
      {/* Section Header */}
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold mb-5 text-black">Testimonials</h2>
        <div className="border-2 border-pink-500 w-16 mb-5"></div>
        <p className="mb-16 text-gray-800">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="relative w-full mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {currentTestimonials.map((t, index) => (
              <div
                key={index}
                className="flex justify-center"
                onClick={() => handleOpenSlider(index)}
              >
                <div className="bg-white roun relative p-5 shadow-xl w-full max-w-sm cursor-pointer hover:scale-105 transition-transform duration-300">
                  <p className="italic text-sm font-light mb-6 text-center text-black">
                    <FaQuoteLeft className="text-pink-500 mb-2 inline-block mr-2" />
                    {t.text}
                    <FaQuoteRight className="text-pink-500 inline-block ml-2" />
                  </p>
                  <p className="font-semibold text-white text-right">{t.name}</p>
                  <p className="text-sm text-gray-400 text-right">{t.role}</p>

                  {/* Triangle design */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "0",
                      borderLeft: "35px solid transparent",
                      borderRight: "35px solid transparent",
                      borderTop: "35px solid #ffffff",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔵 Fullscreen Slider Modal */}
      <AnimatePresence>
        {openSlider && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-90 z-80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseSlider}
              className="absolute top-5 right-5 text-pink-500 text-3xl md:text-5xl hover:text-pink-500 cursor-pointer z-50"
            >
              <IoClose />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-8 text-white md:text-4xl sm:text-5xl hover:text-pink-500 cursor-pointer z-50 hover:bg-white bg-pink-500 border border-blue-400 bg-opacity-60 p-2 rounded-full"
            >
              <IoArrowBack />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-8 text-white md:text-4xl sm:text-5xl hover:text-pink-500 cursor-pointer z-50 border border-blue-400 hover:bg-white bg-pink-500 bg-opacity-60 p-2 rounded-full"
            >
              <IoArrowForward />
            </button>

            {/* Testimonial Slide */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
              transition={{ duration: 0.7 }}
              className="bg-stone-900 max-w-lg sm:max-w-2xl mx-4 sm:mx-6 roun p-6 sm:p-8 shadow-lg text-center relative"
            >
              <p className="italic text-base sm:text-lg text-gray-200 mb-6 leading-relaxed">
                <FaQuoteLeft className="text-pink-500 inline-block mr-2" />
                {testimonials[currentIndex].text}
                <FaQuoteRight className="text-pink-500 inline-block ml-2" />
              </p>
              <h3 className="text-white font-semibold text-lg sm:text-xl">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {testimonials[currentIndex].role}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsSection;
