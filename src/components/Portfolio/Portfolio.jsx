import { ZoomIn } from "@mui/icons-material";
import { useState } from "react";
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
  const navigate = useNavigate();

  const filteredData =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter(item => item.category === activeCategory);

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
      <section className="py-12 px px-3 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-left mb-5">Portfolio</h2>
          <div className="border-2 border-blue-400 w-16 mb-5"></div>
          <p className="text-left mb-16">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-8 gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "text-blue-400"
                    : "text-black"
                } hover:text-blue-400`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid with Animations */}
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
                  className="group relative overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full md:h-[300px] h-[200px] lg:h-64 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="flex gap-5 mt-24">
                        <ZoomIn
                          className="text-white hover:text-blue-500 cursor-pointer"
                          fontSize="large"
                          onClick={() => openCarousel(item.category)}
                        />
                        <ImLink onClick={handleClick} className="text-white text-2xl hover:text-blue-500"></ImLink>
                      </div>
                      <p className="text-gray-300 md:font-semibold md:mt-16 mt-5 text-center mb-8">Lorem ipsum, dolor amit consectetur</p>
                    </div>
                    <span className="absolute top-4 left-4 bg-blue-400 text-white px-2 py-1 text-sm font-semibold">
                      {item.name}
                    </span>
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
              className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center"
            >
              {/* Cross Icon at Top Right */}
              <button
                onClick={closeCarousel}
                className="fixed top-5 right-5 z-50"
              >
                <RxCross1 className="lg:text-gray-400 text-2xl hover:text-white text-gray-50" />
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
      </section>
    </div>
  );
};

export default Portfolio;
