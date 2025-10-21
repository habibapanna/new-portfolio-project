import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineSun } from "react-icons/ai";
import { TbBrush, TbCode, TbLayoutGrid, TbChartPie, TbSearch, TbSpeakerphone } from "react-icons/tb";
import Loader from "../Loader/Loader";
import { useInView } from "react-intersection-observer"; // 👈 install with `npm i react-intersection-observer`
import { Fade } from "react-awesome-reveal";
import { FaBullhorn, FaLaptopCode, FaLayerGroup, FaPaintBrush, FaSearch } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { MdCampaign } from "react-icons/md";

const Services = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  // Intersection Observer to detect when section is visible
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1, // 👈 lower threshold so mobile triggers earlier
    triggerOnce: false, // allow it to re-trigger when scrolled again
  });

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
    icon: <TbBrush />,
    title: "Web Design",
    description:
      "Crafting clean, modern, and responsive layouts that enhance user experience, maintain brand consistency, and look great on all devices.",
    percentage: 90,
  },
  {
    icon: <TbCode />,
    title: "Web Development",
    description:
      "Building fast, scalable, and interactive websites and applications using React, Node.js, and MongoDB, with optimized performance and maintainable code.",
    percentage: 95,
  },
  {
    icon: <TbLayoutGrid />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces with clear navigation, accessibility, and user-centered experiences that delight visitors.",
    percentage: 88,
  },
  {
    icon: <TbChartPie />,
    title: "Graphic Design",
    description:
      "Creating compelling visuals including logos, social media graphics, and marketing materials that communicate brand identity and attract attention.",
    percentage: 85,
  },
  {
    icon: <TbSearch />,
    title: "SEO Optimization",
    description:
      "Enhancing website visibility through effective on-page and off-page SEO strategies, keyword optimization, and performance improvements to increase organic traffic.",
    percentage: 82,
  },
  {
    icon: <TbSpeakerphone />,
    title: "Digital Marketing",
    description:
      "Promoting your brand with targeted campaigns across social media, email, and web platforms to boost reach, engagement, and conversions effectively.",
    percentage: 86,
  },
];


  return (
    <section
      id="services"
      ref={sectionRef} // 👈 attach observer here
      className="py-16 bg-neutral-50 relative overflow-x-hidden px-6"
    >
      {/* Section Header */}
      <div className="text-left mb-8">
        <Fade direction="down"><h2 className="text-3xl font-bold mb-3 text-black">Services</h2>
                <div className="border-2 border-blue-800 w-16 mb-5"></div></Fade>
        <Fade direction="up">
          <p className="mb-16 text-gray-800 text-justify">
I craft responsive, user-friendly websites that combine clean design, smooth functionality, and modern front-end technologies to bring ideas to life.
</p>

        </Fade>
      </div>

      {/* Services Grid */}
      <div className="mx-auto grid md:grid-cols-2 gap-12">
  {servicesData.map((service, index) => (
    <motion.div
      key={index}
      className="cursor-pointer flex flex-col justify-between group relative py-6 rounded-2xl h-full"
      whileHover={{ scale: 1.00 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Make inner content flex-grow to fill height */}
      <Fade>
        <div className="flex flex-col items-start text-left space-y-4 flex-grow w-full">
        {/* Icon */}
        <div className="text-4xl text-gray-400 group-hover:text-blue-800 transition-colors duration-300">
          {service.icon}
        </div>

        {/* Title */}
        <h4 className="text-xl font-semibold text-black group-hover:text-blue-800 transition-colors duration-300">
          {service.title}
        </h4>

        {/* Description */}
        <p className="text-gray-800 text-justify">{service.description}</p>

        {/* Linear Progress */}
        <div className="w-full h-1 bg-gray-300 rounded relative mt-auto">
          <motion.div
            className="h-1 bg-blue-800 rounded"
            initial={{ width: 0 }}
            animate={{ width: inView ? `${service.percentage}%` : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.div>

          {/* Blue circle at the end */}
          <motion.div
            className="w-4 h-4 bg-blue-800 rounded-full absolute top-1/2 -translate-y-1/2"
            initial={{ left: 0 }}
            animate={{ left: inView ? `calc(${service.percentage}% - 8px)` : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.div>
        </div>

        {/* Circular Progress */}
        <motion.div
          className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg mt-4"
          initial={{ rotate: 0 }}
          animate={{ rotate: inView ? 360 : 0 }}
          transition={{ duration: 2 }}
          style={{
            background: `conic-gradient(#1e40af ${
              inView ? service.percentage * 3.6 : 0
            }deg, #3b82f6 0deg)`,
          }}
        >
          {service.percentage}%
        </motion.div>
      </div>
      </Fade>
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
