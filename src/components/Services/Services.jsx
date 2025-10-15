import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineSun } from "react-icons/ai";
import {
  BsCalendar4Week,
  BsBinoculars,
  BsBarChart,
  BsCardChecklist,
  BsBriefcase,
} from "react-icons/bs";
import Loader from "../Loader/Loader";

const Services = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("service-details");
    }, 1000);
  };

  const handleMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY, visible: true });
  };

  const handleMouseLeave = () => {
    setCursor((prev) => ({ ...prev, visible: false }));
  };

const servicesData = [
  {
    icon: <BsBriefcase />,
    title: "Web Design",
    description:
      "Crafting responsive, visually stunning, and user-centered website layouts that blend aesthetics with functionality. I focus on creating modern designs that adapt seamlessly across all devices, ensuring a smooth and engaging user experience that strengthens brand identity.",
    percentage: 90,
  },
  {
    icon: <BsCardChecklist />,
    title: "Web Development",
    description:
      "Developing high-performance, scalable, and secure web applications using React, Node.js, Express, and MongoDB. I emphasize writing clean, reusable code and building feature-rich websites that deliver smooth interactivity and excellent performance across browsers.",
    percentage: 95,
  },
  {
    icon: <BsBarChart />,
    title: "Graphic Design",
    description:
      "Designing creative, visually appealing graphics that align with your brand’s identity and message. From logos, posters, and banners to complete visual branding systems — I use tools like Adobe Illustrator and Photoshop to turn ideas into eye-catching designs.",
    percentage: 85,
  },
  {
    icon: <BsBinoculars />,
    title: "UI/UX Design",
    description:
      "Building intuitive user interfaces backed by user research and interaction design principles. I create engaging prototypes, wireframes, and layouts that focus on clarity, accessibility, and user delight, following modern design systems and usability standards.",
    percentage: 88,
  },
  {
    icon: <AiOutlineSun />,
    title: "SEO Optimization",
    description:
      "Boosting website visibility and ranking by applying both on-page and off-page SEO strategies. From keyword research and meta optimization to improving site speed and structure — I ensure your site reaches the right audience and performs effectively on search engines.",
    percentage: 80,
  },
  {
    icon: <BsCalendar4Week />,
    title: "Digital Marketing",
    description:
      "Planning and executing data-driven marketing campaigns across social media, email, and web channels. I focus on audience targeting, engagement analysis, and conversion tracking to maximize your online reach and brand presence effectively.",
    percentage: 85,
  },
];


  return (
    <section
      id="services"
      className="py-16 bg-neutral-50 relative overflow-hidden px-6"
    >
      {/* Section Header */}
      <div className="text-left mb-8">
  <h2 className="text-3xl font-bold mb-5 text-black">My Services</h2>
  <div className="border-2 border-blue-800 w-16 mb-5"></div>
  <p className="mb-16 text-gray-800 text-justify">
    I offer a wide range of services designed to bring your digital ideas to life and help your business or personal projects succeed online. My expertise lies in creating responsive, modern, and engaging websites that deliver a seamless user experience across all devices. My core services include front-end development, responsive web design, UI/UX design, and building interactive web applications. I focus on clean, maintainable code and intuitive design to ensure your users enjoy a smooth and memorable experience.
  </p>
</div>


      <div className="mx-auto grid md:grid-cols-2 gap-12">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="cursor-pointer flex flex-col space-y-6 group relative p-6 rounded-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Icon + Title + Description */}
            <div className="flex items-center space-x-4">
              <div className="text-3xl text-gray-400 group-hover:text-blue-800 transition-colors duration-300">
                {service.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-800 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-800 text-justify">{service.description}</p>
              </div>
            </div>

            {/* Linear Progress Bar */}
            <div className="w-full h-1 bg-gray-300 rounded">
              <motion.div
                className="h-1 bg-blue-800 rounded"
                initial={{ width: 0 }}
                animate={{ width: `${service.percentage}%` }}
                transition={{ duration: 2, ease: "easeInOut" }} // slow 2s animation
              ></motion.div>
            </div>

            {/* Circular Progress */}
            <motion.div
              className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-xl"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: 0 }}
              style={{
                background: `conic-gradient(#1e40af ${service.percentage * 3.6}deg, #3b82f6 0deg)`,
              }}
            >
              {service.percentage}%
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Loader */}
      {loading && <Loader />}

      {/* Hover Cursor */}
      <div
        className={`fixed pointer-events-none flex items-center justify-center rounded-full text-center bg-black font-semibold text-white shadow-lg transition-all duration-150 ${
          cursor.visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          left: cursor.x - 40,
          top: cursor.y - 40,
          width: "80px",
          height: "80px",
          transform: "translate(-50%, -50%)",
        }}
      >
        View Details
      </div>
    </section>
  );
};

export default Services;
