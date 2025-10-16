import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoArrowForward, IoArrowBack } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";

const clientImages = Array.from({ length: 20 }, (_, i) => `/client${i + 1}.png`);

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-0 md:right-[-30px] -translate-y-1/2 bg-blue-800 text-white p-1 rounded-full shadow-md hover:bg-blue-700 z-10 cursor-pointer"
  >
    <IoArrowForward className="text-lg" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 md:left-[-30px] -translate-y-1/2 bg-blue-800 text-white p-1 rounded-full shadow-md hover:bg-blue-700 z-10 cursor-pointer"
  >
    <IoArrowBack className="text-lg" />
  </button>
);

const Clients = () => {
  const [openSlider, setOpenSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenSlider = (index) => {
    setCurrentIndex(index);
    setOpenSlider(true);
  };
  const handleCloseSlider = () => setOpenSlider(false);

  // React Slick settings
  const sliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 6 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <section id="clients" className="py-16 px-4 md:px-8 overflow-hidden c">
      {/* Header */}
      <div className="text-left mb-8 mx-auto">
        <Fade direction="down"><h2 className="text-3xl font-bold mb-3 text-black">My Clients</h2>
                <div className="border-2 border-blue-800 w-16 mb-5"></div></Fade>
        <Fade direction="up">
          <p className="text-gray-800 mb-16 text-justify">
          Our clients are at the heart of everything we do. We take pride in
          delivering exceptional results, building strong relationships, and
          providing services that exceed expectations. Here, you can read
          genuine feedback from our valued clients and partners. Their stories
          highlight our commitment to quality, creativity, and reliability in
          every project we undertake. We believe that their experiences reflect
          the trust and confidence placed in our work, and we continuously
          strive to make every collaboration a success.
        </p>
        </Fade>
      </div>

      {/* Slick Carousel */}
      <div className=" mx-auto relative">
        <Slider {...sliderSettings}>
          {clientImages.map((img, index) => (
            <div
              key={index}
              className="flex justify-center cursor-pointer px-2"
              onClick={() => handleOpenSlider(index)}
            >
              <img
                src={img}
                alt={`Client ${index + 1}`}
                className="w-32 md:w-40 object-contain shadow-lg shadow-blue-100 hover:scale-105 transition-transform duration-300"
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
            <button
              onClick={handleCloseSlider}
              className="absolute top-5 right-5 text-blue-800 text-3xl md:text-5xl cursor-pointer z-50"
            >
              <IoClose />
            </button>

            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? clientImages.length - 1 : prev - 1
                )
              }
              className="absolute left-3 md:left-8 text-white md:text-4xl sm:text-5xl cursor-pointer z-0 hover:bg-white bg-blue-800 bg-opacity-60 p-2 rounded-full border hover:text-blue-800 border-blue-800"
            >
              <IoArrowBack />
            </button>

            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % clientImages.length)
              }
              className="absolute right-3 md:right-8 text-white md:text-4xl sm:text-5xl cursor-pointer z-50 hover:bg-white bg-blue-800 bg-opacity-60 p-2 rounded-full border hover:text-blue-800 border-blue-800"
            >
              <IoArrowForward />
            </button>

            <motion.img
              key={currentIndex}
              src={clientImages[currentIndex]}
              alt={`Client ${currentIndex + 1}`}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Clients;
