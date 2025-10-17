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
    slidesToShow: 4,
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

           {/* Section Image Slider (not fullscreen) */}
      <AnimatePresence>
              {/* Section Image Slider (with slick carousel instead of motion) */}
      {openSlider && (
        <div className="absolute inset-0 bg-blue-800 flex flex-col items-center justify-center z-40 py-10">
          {/* Close Button */}
          <button
            onClick={handleCloseSlider}
            className="absolute top-3 right-5 text-white text-3xl md:text-4xl hover:text-blue-100 cursor-pointer"
          >
            <IoClose />
          </button>

          {/* Slick Slider for modal */}
          <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              initialSlide={currentIndex}
              nextArrow={
                <button className="absolute right-[-45px] top-1/2 transform -translate-y-1/2 bg-blue-800 text-white p-2 rounded-full shadow-md hover:bg-white hover:text-blue-800 border border-blue-800 z-10">
                  <IoArrowForward className="text-2xl" />
                </button>
              }
              prevArrow={
                <button className="absolute left-[-45px] top-1/2 transform -translate-y-1/2 bg-blue-800 text-white p-2 rounded-full shadow-md hover:bg-white hover:text-blue-800 border border-blue-800 z-10">
                  <IoArrowBack className="text-2xl" />
                </button>
              }
            >
              {testimonialImages.map((img, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={img}
                    alt={`Testimonial ${index + 1}`}
                    className="md:w-screen max-h-[70vh] object-contain shadow-lg border border-blue-100"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      </AnimatePresence>

    </section>
  );
};

export default TestimonialsSection;
