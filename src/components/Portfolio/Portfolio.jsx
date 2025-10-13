import { ZoomIn } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { ImLink } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxCross1 } from "react-icons/rx";
import Loader from "../Loader/Loader";

const portfolioData = [
  // 🧹 Cleaning Website (2)
  { id: 1, category: "Cleaning Website", name: "Cleaning Site 1", image: "/cleaning1.webp" },
  { id: 2, category: "Cleaning Website", name: "Cleaning Site 2", image: "/cleaning2.webp" },

  // 💼 Business Website (9)
  { id: 3, category: "Business Website", name: "Business Site 1", image: "/business1.webp" },
  { id: 4, category: "Business Website", name: "Business Site 2", image: "/business2.webp" },
  { id: 5, category: "Business Website", name: "Business Site 3", image: "/business3.webp" },
  { id: 6, category: "Business Website", name: "Business Site 4", image: "/business4.webp" },
  { id: 7, category: "Business Website", name: "Business Site 5", image: "/business5.webp" },
  { id: 8, category: "Business Website", name: "Business Site 6", image: "/business6.webp" },
  { id: 9, category: "Business Website", name: "Business Site 7", image: "/business7.webp" },
  { id: 10, category: "Business Website", name: "Business Site 8", image: "/business8.webp" },
  { id: 11, category: "Business Website", name: "Business Site 9", image: "/business9.webp" },

  // 🛒 Ecommerce Website (8)
  { id: 12, category: "Ecommerce Website", name: "Ecommerce Site 1", image: "/ecommerce1.webp" },
  { id: 13, category: "Ecommerce Website", name: "Ecommerce Site 2", image: "/ecommerce2.webp" },
  { id: 14, category: "Ecommerce Website", name: "Ecommerce Site 3", image: "/ecommerce3.webp" },
  { id: 15, category: "Ecommerce Website", name: "Ecommerce Site 4", image: "/ecommerce4.webp" },
  { id: 16, category: "Ecommerce Website", name: "Ecommerce Site 5", image: "/ecommerce5.webp" },
  { id: 17, category: "Ecommerce Website", name: "Ecommerce Site 6", image: "/ecommerce6.webp" },
  { id: 18, category: "Ecommerce Website", name: "Ecommerce Site 7", image: "/ecommerce7.webp" },
  { id: 19, category: "Car Website", name: "Car Site 7", image: "/car1.webp" },

  // 🏠 Real State Website (2)
  { id: 20, category: "Real State Website", name: "Real State Site 1", image: "/realState1.webp" },
  { id: 21, category: "Real State Website", name: "Real State Site 2", image: "/realState2.webp" },
];


const categories = ["All","Business Website", "Ecommerce Website", "Real State Website", "Cleaning Website" , "Car Website"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const navigate = useNavigate();

  // Filtering data
  const filteredData =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter(item => item.category === activeCategory);

  // Cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

 const handleClick = (id) => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    navigate(`/details/${id}`);
  }, 1000);
};


  const openCarousel = category => {
    const images = portfolioData
      .filter(item => item.category === category)
      .map(item => item.image);
    setCarouselImages(images);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => setIsCarouselOpen(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      {loading && <Loader />}
      <section className="py-16 px-6 bg-white relative min-h-screen">
         {/* Section Header */}
<div className="text-left mb-8">
  <h2 className="text-3xl font-bold mb-5 text-black">Portfolio</h2>
  <div className="border-2 border-blue-800 w-16 mb-5"></div>
  <p className="mb-16 text-gray-800 text-justify">
    Welcome to my personal portfolio! Here, you’ll find a curated collection of my projects, showcasing my skills in front-end development, design, and creative problem-solving. Each project reflects my passion for building engaging and user-friendly digital experiences.From responsive websites and interactive web applications to visually appealing UI/UX designs, my work demonstrates a blend of technical expertise and creative thinking. I strive to deliver solutions that not only meet requirements but also provide delightful user experiences.
  </p>
</div>


        <div className="mx-auto">
          {/* Category Filter Buttons */}
         {/* Category Filter Buttons (Responsive Scroll) */}
<div
  className="md:text-lg font-semibold flex justify-start gap-4 mb-8 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-gray-200 px-1 sm:px-2 "
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


          {/* Portfolio Grid with Animations */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredData.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden"
                  onMouseEnter={() => setCursor((prev) => ({ ...prev, visible: true }))}
                  onMouseLeave={() => setCursor((prev) => ({ ...prev, visible: false }))}
                >
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full md:h-[300px] h-[200px] lg:h-64 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  />

                  {/* Hover Overlay + Link */}
                  <div
  onClick={() => handleClick(item.id)}
  className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-50 transition-opacity duration-300 cursor-pointer"
>
  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
    <div className="bg-black/50 transform translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
    <div className="bg-black/50 transform translate-x-[100%] translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
    <div className="bg-black/50 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
    <div className="bg-black/50 transform translate-x-[100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
  </div>
</div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Image Carousel */}
        {isCarouselOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
            >
              <button
                onClick={closeCarousel}
                className="fixed top-5 right-5 z-50"
              >
                <RxCross1 className="lg:text-gray-300 text-2xl hover:text-white text-gray-50 cursor-pointer" />
              </button>

              <motion.div
                className="w-[90%] max-w-3xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Slider {...sliderSettings}>
                  {carouselImages.map((image, index) => (
                    <div key={index}>
                      <motion.img
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full h-[450px] lg:h-[500px] object-cover"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  ))}
                </Slider>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Hover Cursor Effect */}
        <div
          className={`fixed pointer-events-none flex items-center justify-center rounded-full text-center text-black font-semibold bg-white shadow-lg transition-all duration-150 ${
            cursor.visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          style={{
            left: cursor.x - 40,
            top: cursor.y - 40,
            width: "80px",
            height: "80px",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
          }}
        >
          View Project
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
