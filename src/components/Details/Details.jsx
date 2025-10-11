import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../Loader/Loader";
import { useState } from "react";
import { motion } from "framer-motion";

const portfolioData = [
  { id: 1, category: "App", image: "https://i.postimg.cc/wv2WNnvN/abillion-Nf5f-Sq-Hm-i-Y-unsplash.jpg" },
  { id: 2, category: "Product", image: "https://i.postimg.cc/rmx24v0x/pexels-laryssa-suaid-798122-1667071.jpg" },
  { id: 3, category: "Branding", image: "https://i.postimg.cc/D0KBtFMR/pexels-karolina-grabowska-4194864.jpg" },
  { id: 4, category: "Books", image: "https://i.postimg.cc/5NQ2PJVf/pexels-pixabay-256450.jpg" },
];

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Details = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000); // Simulate loading time
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="bg-black">
      {/* Navbar */}
      <motion.div
        className="navbar bg-black py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
<div className="flex flex-col gap-2 lg:flex-row w-full lg:justify-between py-2 px-2 bg-black">
<div className="">
          <a className="text-2xl text-white font-bold">Portfolio Details</a>
        </div>
        <div className="">
          <ul className="flex flex-row gap-2 px-1">
            <li>
              <button onClick={handleClick} className="text-white hover:bg-blue-500 cursor-pointer rounded bg-blue-400 px-2">
                ← Back to Home
              </button>
            </li>
            <li>
              <p className="text-gray-500">/</p>
            </li>
            <li>
              <p className="text-blue-400">Portfolio Details</p>
            </li>
          </ul>
        </div>
</div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row max-w-4xl mx-auto py-5 gap-8 px-5 lg:py-10 lg:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        {/* Carousel Section */}
        <motion.div
          className="lg:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInFromBottom}
        >
          <Slider {...sliderSettings}>
            {portfolioData.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Project Information Section */}
        <motion.div
          className="lg:w-1/3 py-5 lg:py-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInFromBottom}
        >
          {/* Project Info Card */}
          <div style={{
            boxShadow: '0 4px 8px 5px rgba(0, 0, 0, 0.1)',
          }} className="bg-white p-6">
            <h3 className="text-xl text-black font-bold mb-4">Project Information</h3>
            <div className="border border-gray-400 mb-3 "></div>
            <ul className="space-y-2 text-black">
              <li><strong>Category:</strong> Web Design</li>
              <li><strong>Client:</strong> ASU Company</li>
              <li><strong>Project Date:</strong> 01 March, 2020</li>
              <li><strong>Project URL:</strong> <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.examp.com</a></li>
            </ul>
          </div>

          {/* Additional Project Details */}
          <div className="py-8">
            <h4 className="text-2xl font-bold mb-3">Exercitationem repudiandae officiis neque suscipit</h4>
            <p>
            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Details;
