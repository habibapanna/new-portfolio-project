import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoArrowForward, IoArrowBack } from "react-icons/io5";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-[-45px] transform -translate-y-1/2 bg-blue-800 text-white p-2 rounded-full shadow-md hover:bg-blue-700 z-10 cursor-pointer"
  >
    <IoArrowForward className="text-xl" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-[-45px] transform -translate-y-1/2 bg-blue-800 text-white p-2 rounded-full shadow-md hover:bg-blue-700 z-10 cursor-pointer"
  >
    <IoArrowBack className="text-xl" />
  </button>
);


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
  const [openSlider, setOpenSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleOpenSlider = (index) => {
    setCurrentIndex(index);
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

  // Slick carousel settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  return (
    <section
      id="testimonials"
      className="bg-blue-50 py-16 px-6 overflow-hidden relative"
    >
      {/* Section Header */}
      <div className="text-left mb-8">
        <Fade direction="down"><h2 className="text-3xl font-bold mb-3 text-black">Testimonials</h2>
        <div className="border-2 border-blue-800 w-16 mb-5"></div></Fade>
       <Fade direction="up"> <p className="text-gray-800 mb-16 text-justify">
          Our clients are at the heart of everything we do. We take pride in
          delivering exceptional results, building strong relationships, and
          providing services that exceed expectations. Here, you can read
          genuine feedback from our valued clients and partners. Their stories
          highlight our commitment to quality, creativity, and reliability in
          every project we undertake. We believe that their experiences reflect
          the trust and confidence placed in our work, and we continuously
          strive to make every collaboration a success.
        </p></Fade>
      </div>

      {/* Slider Carousel */}
      <div className="relative w-full mx-auto px-8  ">
        <Slider {...sliderSettings}>
          {testimonialImages.map((img, index) => (
            <div
              key={index}
              className="px-2 cursor-pointer flex justify-center"
              onClick={() => handleOpenSlider(index)}
            >
              <img
                src={img}
                alt={`Testimonial ${index + 1}`}
                className="w-full shadow-lg shadow-blue-100 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </Slider>
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
