import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../Loader/Loader";
import { useState } from "react";
import { motion } from "framer-motion";

// 🧩 Same portfolio data (you can later move it to a separate file)
const portfolioData = [
  // 🧹 Cleaning Website (2)
  {
    id: 1,
    category: "Cleaning Website",
    name: "Cleaning Site 1",
    image: "/cleaning1.webp",
    client: "SparkClean Ltd.",
    date: "05 Jan, 2024",
    description:
      "A responsive and modern cleaning service website designed to boost client bookings and online visibility. Built with smooth scroll animations and an easy-to-use service request form.",
  },
  {
    id: 2,
    category: "Cleaning Website",
    name: "Cleaning Site 2",
    image: "/cleaning2.webp",
    client: "FreshHome Cleaning Co.",
    date: "12 Mar, 2024",
    description:
      "Elegant UI with booking form integration and modern transitions for a seamless user experience. Focused on lead generation and brand credibility.",
  },

  // 💼 Business Website (9)
  {
    id: 3,
    category: "Business Website",
    name: "Business Site 1",
    image: "/business1.webp",
    client: "GlobalCorp Ltd.",
    date: "02 Apr, 2024",
    description:
      "A corporate business website showcasing services, achievements, and leadership through a clean and modern design. Optimized for conversions and credibility.",
  },
  {
    id: 4,
    category: "Business Website",
    name: "Business Site 2",
    image: "/business2.webp",
    client: "ProAgency",
    date: "15 Apr, 2024",
    description:
      "Professional landing page with dynamic testimonials, project showcases, and an integrated contact form to connect potential clients efficiently.",
  },
  {
    id: 5,
    category: "Business Website",
    name: "Business Site 3",
    image: "/business3.webp",
    client: "EliteVision",
    date: "25 Apr, 2024",
    description:
      "Built for a corporate consulting firm with a focus on trust, clarity, and premium aesthetics. Includes animated statistics and team introduction sections.",
  },
  {
    id: 6,
    category: "Business Website",
    name: "Business Site 4",
    image: "/business4.webp",
    client: "NextStep Ltd.",
    date: "10 May, 2024",
    description:
      "A smart and functional website for a business startup, highlighting their mission, achievements, and partnerships in a visually appealing layout.",
  },
  {
    id: 7,
    category: "Business Website",
    name: "Business Site 5",
    image: "/business5.webp",
    client: "PrimeEdge Group",
    date: "18 May, 2024",
    description:
      "An engaging business platform showcasing multiple services and success stories. Features dark mode UI and smooth transition effects.",
  },
  {
    id: 8,
    category: "Business Website",
    name: "Business Site 6",
    image: "/business6.webp",
    client: "BrightFuture Consultancy",
    date: "29 May, 2024",
    description:
      "A consultancy-focused website with interactive service cards and minimalistic branding. Designed for both mobile and desktop excellence.",
  },
  {
    id: 9,
    category: "Business Website",
    name: "Business Site 7",
    image: "/business7.webp",
    client: "InnovateX",
    date: "10 Jun, 2024",
    description:
      "A creative portfolio and service site for a business innovation hub. Includes project galleries and animated counters.",
  },
  {
    id: 10,
    category: "Business Website",
    name: "Business Site 8",
    image: "/business8.webp",
    client: "TrustWave Partners",
    date: "25 Jun, 2024",
    description:
      "A corporate site emphasizing client trust and professionalism. Built with a focus on minimalism and fast loading times.",
  },
  {
    id: 11,
    category: "Business Website",
    name: "Business Site 9",
    image: "/business9.webp",
    client: "BizSphere Solutions",
    date: "02 Jul, 2024",
    description:
      "An enterprise-level website integrating advanced features like client testimonials, service filtering, and responsive design.",
  },

  // 🛒 Ecommerce Website (7)
  {
    id: 12,
    category: "Ecommerce Website",
    name: "Ecommerce Site 1",
    image: "/ecommerce1.webp",
    client: "ShopEase",
    date: "10 Jul, 2024",
    description:
      "A full-featured e-commerce site with product filtering, cart functionality, and a clean shopping experience powered by React and Firebase.",
  },
  {
    id: 13,
    category: "Ecommerce Website",
    name: "Ecommerce Site 2",
    image: "/ecommerce2.webp",
    client: "FashionMart",
    date: "18 Jul, 2024",
    description:
      "A stylish online fashion store with category-based filtering, hover animations, and modern product previews.",
  },
  {
    id: 14,
    category: "Ecommerce Website",
    name: "Ecommerce Site 3",
    image: "/ecommerce3.webp",
    client: "TechHive",
    date: "28 Jul, 2024",
    description:
      "Built for a tech accessories brand, this site includes sleek UI, responsive grids, and optimized product galleries.",
  },
  {
    id: 15,
    category: "Ecommerce Website",
    name: "Ecommerce Site 4",
    image: "/ecommerce4.webp",
    client: "BeautyCart",
    date: "04 Aug, 2024",
    description:
      "An elegant beauty and skincare store with a smooth checkout process and engaging UI for a delightful shopping experience.",
  },
  {
    id: 16,
    category: "Ecommerce Website",
    name: "Ecommerce Site 5",
    image: "/ecommerce5.webp",
    client: "GadgetHub",
    date: "12 Aug, 2024",
    description:
      "A dynamic and mobile-first e-commerce platform with advanced sorting and wish-list functionality for a seamless experience.",
  },
  {
    id: 17,
    category: "Ecommerce Website",
    name: "Ecommerce Site 6",
    image: "/ecommerce6.webp",
    client: "GreenShop",
    date: "21 Aug, 2024",
    description:
      "A clean and modern organic product store focused on eco-friendly branding and minimalistic product displays.",
  },
  {
    id: 18,
    category: "Ecommerce Website",
    name: "Ecommerce Site 7",
    image: "/ecommerce7.webp",
    client: "UrbanWear",
    date: "30 Aug, 2024",
    description:
      "A clothing store with modern hover animations, discount displays, and fully responsive product layouts.",
  },

  // 🚗 Car Website (1)
  {
    id: 19,
    category: "Car Website",
    name: "Car Site 7",
    image: "/car1.webp",
    client: "AutoDrive BD",
    date: "10 Sep, 2024",
    description:
      "A premium car dealership website with detailed car listings, photo galleries, and filter options for models and price ranges.",
  },

  // 🏠 Real State Website (2)
  {
    id: 20,
    category: "Real State Website",
    name: "Real State Site 1",
    image: "/realState1.webp",
    client: "DreamHomes Ltd.",
    date: "22 Sep, 2024",
    description:
      "A real estate website showcasing premium properties with interactive maps and modern property filtering system.",
  },
  {
    id: 21,
    category: "Real State Website",
    name: "Real State Site 2",
    image: "/realState2.webp",
    client: "Elite Properties",
    date: "05 Oct, 2024",
    description:
      "A luxurious real estate listing platform featuring immersive image sliders, property booking form, and clean visual hierarchy.",
  },
];

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const project = portfolioData.find((item) => item.id === parseInt(id));

  const handleBack = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (loading) return <Loader />;

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">Project not found!</h2>
        <button
          onClick={handleBack}
          className="mt-4 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Navbar */}
      <motion.div
        className="navbar bg-white py-4 shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInFromBottom}
      >
        <div className="flex flex-col gap-2 lg:flex-row w-full lg:justify-between py-2 px-4">
          <a className="text-2xl text-black font-bold">{project.name}</a>
          <ul className="flex gap-2">
            <li>
              <button
                onClick={handleBack}
                className="text-white bg-blue-800 px-3 py-1 hover:bg-blue-500 cursor-pointer"
              >
                ← Back to Home
              </button>
            </li>
            <li className="text-gray-800">/</li>
            <li className="text-blue-800">Project Details</li>
          </ul>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row mx-auto py-10 gap-8 px-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInFromBottom}
      >
       {/* Image */}
       <div className="lg:w-2/3">
  <div className="overflow-hidden shadow-lg">
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>
</div>


        {/* Info Section */}
        <div className="lg:w-1/3">
          <div className="bg-black text-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Project Information</h3>
            <div className="border border-gray-600 mb-3"></div>
            <ul className="space-y-2">
              <li><strong>Category:</strong> {project.category}</li>
              <li><strong>Client:</strong> {project.client}</li>
              <li><strong>Date:</strong> {project.date}</li>
              {/* <li>
                <strong>URL:</strong>{" "}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {project.url}
                </a>
              </li> */}
            </ul>
          </div>

          <div className="py-8">
            <h4 className="text-2xl font-bold mb-3 text-black">
              Project Overview
            </h4>
            <p className="text-gray-800 text-justify">
              {project.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Details;
