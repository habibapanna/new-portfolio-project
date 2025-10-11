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
        "Crafting responsive, visually stunning, and user-centered website designs that bring brands to life online.",
      percentage: 90,
    },
    {
      icon: <BsCardChecklist />,
      title: "Web Development",
      description:
        "Building powerful and scalable web applications using React, Node.js, and MongoDB with clean, maintainable code.",
      percentage: 95,
    },
    {
      icon: <BsBarChart />,
      title: "Graphic Design",
      description:
        "Designing captivating visuals, from social media posts to full branding packages, using Adobe Illustrator & Photoshop.",
      percentage: 85,
    },
    {
      icon: <BsBinoculars />,
      title: "UI/UX Design",
      description:
        "Designing engaging and intuitive digital experiences through research-driven layouts and modern interface trends.",
      percentage: 88,
    },
    {
      icon: <AiOutlineSun />,
      title: "SEO Optimization",
      description:
        "Improving website visibility on search engines through keyword optimization, backlinks, and performance tuning.",
      percentage: 80,
    },
    {
      icon: <BsCalendar4Week />,
      title: "Marketing",
      description:
        "Creating data-driven digital marketing strategies to grow engagement and conversion across multiple platforms.",
      percentage: 85,
    },
  ];

  // ✨ Fade-in + Hover Zoom Animations
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25, // Each appears with a delay
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="services"
      className="py-8 md:py-16 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 p-16 md:px-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="cursor-pointer flex flex-col space-y-6 group relative  p-6 rounded-2xl  "
              variants={itemVariants}
              whileHover={{ scale: 1.05 }} // ✨ smooth zoom on hover
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={handleClick}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Icon + Title + Description */}
              <div className="flex items-center space-x-4">
                <div className="text-3xl text-blue-400 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full">
                <div className="h-1 bg-gray-700 rounded">
                  <div
                    className="h-1 bg-blue-400 rounded group-hover:bg-white transition-all duration-500"
                    style={{ width: `${service.percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Circular Percentage */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{
                  background: `conic-gradient(#60a5fa ${service.percentage * 3.6}deg, #93c5fd 0deg)`,
                }}
              >
                {service.percentage}%
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Loader */}
        {loading && <Loader />}
      </div>

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
        }}
      >
        View Details
      </div>
    </section>
  );
};

export default Services;
