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
  { id: 1, category: "App", name: "App 1", image: "https://i.postimg.cc/wv2WNnvN/abillion-Nf5f-Sq-Hm-i-Y-unsplash.jpg" },
  { id: 2, category: "Product", name: "Product 1", image: "https://i.postimg.cc/rmx24v0x/pexels-laryssa-suaid-798122-1667071.jpg" },
  { id: 3, category: "Branding", name: "Branding 1", image: "https://i.postimg.cc/D0KBtFMR/pexels-karolina-grabowska-4194864.jpg" },
  { id: 4, category: "Books", name: "Books 1", image: "https://i.postimg.cc/5NQ2PJVf/pexels-pixabay-256450.jpg" },
  { id: 5, category: "App", name: "App 2", image: "https://i.postimg.cc/nhm02Xrp/balazs-ketyi-L0nipfx-Ry4-unsplash.jpg" },
  { id: 6, category: "Product", name: "Product 2", image: "https://i.postimg.cc/Lsqp9qmy/pexels-craytive-2720447.jpg" },
  { id: 7, category: "Branding", name: "Branding 2", image: "https://i.postimg.cc/FHnGh06y/daniel-korpai-Qh-F3-YGs-Dr-Yk-unsplash.jpg" },
  { id: 8, category: "Books", name: "Books 2", image: "https://i.postimg.cc/DZz21k6k/pexels-thought-catalog-317580-904620.jpg" },
  { id: 9, category: "App", name: "App 3", image: "https://i.postimg.cc/vmz72fsF/pexels-pixabay-33488.jpg" },
  { id: 10, category: "Product", name: "Product 3", image: "https://i.postimg.cc/4xxG0LqR/pexels-suzyhazelwood-2537930.jpg" },
  { id: 11, category: "Branding", name: "Branding 3", image: "https://i.postimg.cc/HsN7x3pk/pexels-ekaterina-bolovtsova-6192127.jpg" },
  { id: 12, category: "Books", name: "Books 3", image: "https://i.postimg.cc/Y2sSf9TX/sincerely-media-CXYPfveiuis-unsplash.jpg" },
];

const categories = ["All", "App", "Product", "Branding", "Books"];

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

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/details");
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
      <section className="py-16 px-6 bg-white relative">
        <div className="mx-auto">
          {/* Category Filter Buttons */}
          <div className="text-lg font-semibold flex justify-left space-x-2 md:space-x-4 mb-8 gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "text-blue-400 "
                    : "text-black cursor-pointer"
                } hover:text-blue-400`}
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
                    onClick={handleClick}
                    className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                  >
                    {/* Puzzle Animation */}
                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                      <div className="bg-black/50 transform translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                      <div className="bg-black/50 transform translate-x-[100%] translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                      <div className="bg-black/50 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                      <div className="bg-black/50 transform translate-x-[100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                    </div>

                    {/* Center Icon */}
                    {/* <div className="relative z-10 flex flex-col items-center">
                      <ImLink className="text-white text-3xl cursor-pointer hover:text-blue-400" />
                    </div> */}
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
          View Details
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
