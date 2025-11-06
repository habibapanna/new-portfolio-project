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
    url: "https://freshhomecleaning.example.com",
    description:
      "A responsive and modern cleaning service website designed to boost client bookings and online visibility. Built with smooth scroll animations and an easy-to-use service request form.",
  },
  {
    id: 2,
    category: "Cleaning Website",
    name: "Cleaning Site 2",
    image: "/cleaning2.webp",
    client: "FreshHome Cleaning Co.",
    url: "https://freshhomecleaning.example.com",
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
    url: "https://freshhomecleaning.example.com",
    description:
      "A corporate business website showcasing services, achievements, and leadership through a clean and modern design. Optimized for conversions and credibility.",
  },
  {
    id: 4,
    category: "Business Website",
    name: "Business Site 2",
    image: "/business2.webp",
    client: "ProAgency",
    url: "https://freshhomecleaning.example.com",
    description:
      "Professional landing page with dynamic testimonials, project showcases, and an integrated contact form to connect potential clients efficiently.",
  },
  {
    id: 5,
    category: "Business Website",
    name: "Business Site 3",
    image: "/business3.webp",
    client: "EliteVision",
    url: "https://freshhomecleaning.example.com",
    description:
      "Built for a corporate consulting firm with a focus on trust, clarity, and premium aesthetics. Includes animated statistics and team introduction sections.",
  },
  {
    id: 6,
    category: "Business Website",
    name: "Business Site 4",
    image: "/business4.webp",
    client: "NextStep Ltd.",
    url: "https://freshhomecleaning.example.com",
    description:
      "A smart and functional website for a business startup, highlighting their mission, achievements, and partnerships in a visually appealing layout.",
  },
  {
    id: 7,
    category: "Business Website",
    name: "Business Site 5",
    image: "/business5.webp",
    client: "PrimeEdge Group",
    url: "https://freshhomecleaning.example.com",
    description:
      "An engaging business platform showcasing multiple services and success stories. Features dark mode UI and smooth transition effects.",
  },
  {
    id: 8,
    category: "Business Website",
    name: "Business Site 6",
    image: "/business6.webp",
    client: "BrightFuture Consultancy",
    url: "https://freshhomecleaning.example.com",
    description:
      "A consultancy-focused website with interactive service cards and minimalistic branding. Designed for both mobile and desktop excellence.",
  },
  {
    id: 9,
    category: "Business Website",
    name: "Business Site 7",
    image: "/business7.webp",
    client: "InnovateX",
    url: "https://freshhomecleaning.example.com",
    description:
      "A creative portfolio and service site for a business innovation hub. Includes project galleries and animated counters.",
  },
  {
    id: 10,
    category: "Business Website",
    name: "Business Site 8",
    image: "/business8.webp",
    client: "TrustWave Partners",
    url: "https://freshhomecleaning.example.com",
    description:
      "A corporate site emphasizing client trust and professionalism. Built with a focus on minimalism and fast loading times.",
  },
  {
    id: 11,
    category: "Business Website",
    name: "Business Site 9",
    image: "/business9.webp",
    client: "BizSphere Solutions",
    url: "https://freshhomecleaning.example.com",
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
    url: "https://freshhomecleaning.example.com",
    description:
      "A full-featured e-commerce site with product filtering, cart functionality, and a clean shopping experience powered by React and Firebase.",
  },
  {
    id: 13,
    category: "Ecommerce Website",
    name: "Ecommerce Site 2",
    image: "/ecommerce2.webp",
    client: "FashionMart",
    url: "https://freshhomecleaning.example.com",
    description:
      "A stylish online fashion store with category-based filtering, hover animations, and modern product previews.",
  },
  {
    id: 14,
    category: "Ecommerce Website",
    name: "Ecommerce Site 3",
    image: "/ecommerce3.webp",
    client: "TechHive",
    url: "https://freshhomecleaning.example.com",
    description:
      "Built for a tech accessories brand, this site includes sleek UI, responsive grids, and optimized product galleries.",
  },
  {
    id: 15,
    category: "Ecommerce Website",
    name: "Ecommerce Site 4",
    image: "/ecommerce4.webp",
    client: "BeautyCart",
    url: "https://freshhomecleaning.example.com",
    description:
      "An elegant beauty and skincare store with a smooth checkout process and engaging UI for a delightful shopping experience.",
  },
  {
    id: 16,
    category: "Ecommerce Website",
    name: "Ecommerce Site 5",
    image: "/ecommerce5.webp",
    client: "GadgetHub",
    url: "https://freshhomecleaning.example.com",
    description:
      "A dynamic and mobile-first e-commerce platform with advanced sorting and wish-list functionality for a seamless experience.",
  },
  {
    id: 17,
    category: "Ecommerce Website",
    name: "Ecommerce Site 6",
    image: "/ecommerce6.webp",
    client: "GreenShop",
    url: "https://freshhomecleaning.example.com",
    description:
      "A clean and modern organic product store focused on eco-friendly branding and minimalistic product displays.",
  },
  {
    id: 18,
    category: "Ecommerce Website",
    name: "Ecommerce Site 7",
    image: "/ecommerce7.webp",
    client: "UrbanWear",
    url: "https://freshhomecleaning.example.com",
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
    url: "https://freshhomecleaning.example.com",
    description:
      "A premium car dealership website with detailed car listings, photo galleries, and filter options for models and price ranges.",
  },
  {
    id: 19,
    category: "Car Website",
    name: "Car Site 7",
    image: "/car1.webp",
    client: "AutoDrive BD",
    url: "https://freshhomecleaning.example.com",
    description:
      "A premium car dealership website with detailed car listings, photo galleries, and filter options for models and price ranges.",
  },
  {
    id: 19,
    category: "Car Website",
    name: "Car Site 7",
    image: "/car1.webp",
    client: "AutoDrive BD",
    url: "https://freshhomecleaning.example.com",
    description:
      "A premium car dealership website with detailed car listings, photo galleries, and filter options for models and price ranges.",
  },
  {
    id: 19,
    category: "Car Website",
    name: "Car Site 7",
    image: "/car1.webp",
    client: "AutoDrive BD",
    url: "https://freshhomecleaning.example.com",
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
    url: "https://freshhomecleaning.example.com",
    description:
      "A real estate website showcasing premium properties with interactive maps and modern property filtering system.",
  },
  {
    id: 21,
    category: "Real State Website",
    name: "Real State Site 2",
    image: "/realState2.webp",
    client: "Elite Properties",
    url: "https://freshhomecleaning.example.com",
    description:
      "A luxurious real estate listing platform featuring immersive image sliders, property booking form, and clean visual hierarchy.",
  },
];


const fadeInFromBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Details = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // ✨ Extract unique categories
  const categories = ["All", ...new Set(portfolioData.map((p) => p.category))];

  // 🧠 State for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🧮 Filter portfolio data by category
  const filteredData =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === selectedCategory);

  const handleBack = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      {/* Header */}
      <div className="text-center mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-black mb-3">
          All Projects Overview
        </h2>
        <button
          onClick={handleBack}
          className="mt-4 bg-blue-800 text-white px-5 py-2 rounded hover:bg-blue-900 transition-all hover:font-bold cursor-pointer"
        >
          ← Back to Home
        </button>
      </div>

      {/* 🔍 Category Filter Section */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-medium transition-all border cursor-pointer ${
              selectedCategory === category
                ? "bg-blue-800 text-white border-blue-800"
                : "bg-white text-blue-800 border-blue-400 hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInFromBottom}
      >
        {filteredData.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                {project.category}
              </h3>
              <p className="text-sm mb-2">
                <strong>Company:</strong> {project.client}
              </p>
              {project.url && (
                <p className="text-sm mb-2">
                  <strong>Website:</strong>{" "}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visit Site
                  </a>
                </p>
              )}
              <p className="text-gray-700 text-justify mt-3 text-sm">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* 🧾 Message when no projects found */}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No projects found in this category.
        </p>
      )}
    </div>
  );
};

export default Details;

