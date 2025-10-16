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
import { useInView } from "react-intersection-observer"; // 👈 install with `npm i react-intersection-observer`
import { Fade } from "react-awesome-reveal";

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
      icon: <BsBriefcase />,
      title: "Web Design",
      description:
        "Crafting responsive, visually stunning, and user-centered website layouts that balance aesthetics with functionality. I focus on typography, color schemes, and layouts that enhance user experience while representing your brand identity effectively. Every design is optimized for accessibility and cross-device compatibility.",
      percentage: 90,
    },
    {
      icon: <BsCardChecklist />,
      title: "Web Development",
      description:
        "Developing high-performance, scalable, and secure web applications using modern technologies such as React, Node.js, Express, and MongoDB. I write clean, maintainable code and implement best practices for performance, SEO, and security. Each website is tested rigorously for responsiveness, speed, and cross-browser compatibility.",
      percentage: 95,
    },
    {
      icon: <BsBarChart />,
      title: "Graphic Design",
      description:
        "Designing creative and visually appealing graphics including logos, posters, banners, social media content, and branding materials. I ensure that all designs communicate your brand’s message clearly while standing out in a competitive marketplace. Tools like Adobe Illustrator, Photoshop, and Figma are used to bring ideas to life.",
      percentage: 85,
    },
    {
      icon: <BsBinoculars />,
      title: "UI/UX Design",
      description:
        "Building intuitive, user-friendly interfaces backed by research and usability principles. I create wireframes, prototypes, and interactive designs that prioritize clarity, accessibility, and engagement. Every UI/UX design is focused on reducing friction and enhancing the overall user journey.",
      percentage: 88,
    },
    {
      icon: <AiOutlineSun />,
      title: "SEO Optimization",
      description:
        "Improving website visibility and search engine ranking through on-page and off-page SEO strategies. This includes keyword research, meta tag optimization, content structuring, link building, and site performance improvements. The goal is to increase organic traffic and improve your website’s reach to the right audience.",
      percentage: 80,
    },
    {
      icon: <BsCalendar4Week />,
      title: "Digital Marketing",
      description:
        "Planning and executing data-driven digital marketing campaigns across social media, email, and web platforms. I focus on audience targeting, engagement analysis, content strategy, and conversion tracking to maximize your online presence and achieve measurable results. Campaigns are tailored to your brand goals and metrics.",
      percentage: 85,
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
        <Fade direction="up"><h2 className="text-3xl font-bold mb-3 text-black">Services</h2>
                <div className="border-2 border-blue-800 w-16 mb-5"></div></Fade>
        <Fade direction="down">
          <p className="mb-16 text-gray-800 text-justify">
          I offer a wide range of services designed to bring your digital ideas
          to life and help your business or personal projects succeed online. My
          expertise lies in creating responsive, modern, and engaging websites
          that deliver a seamless user experience across all devices. My core
          services include front-end development, responsive web design, UI/UX
          design, and building interactive web applications. I focus on clean,
          maintainable code and intuitive design to ensure your users enjoy a
          smooth and memorable experience.
        </p>
        </Fade>
      </div>

      {/* Services Grid */}
      <div className="mx-auto grid md:grid-cols-2 gap-12">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="cursor-pointer flex flex-col justify-between space-y-6 group relative p-6 rounded-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Icon + Title + Description */}
            <div className="flex-1 flex items-start space-x-4">
              <div className="text-3xl text-gray-400 group-hover:text-blue-800 transition-colors duration-300">
                {service.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-800 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-800 text-justify">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Linear Progress Bar */}
            <div className="w-full h-1 bg-gray-300 rounded mt-4 relative">
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
                animate={{
                  left: inView ? `calc(${service.percentage}% - 8px)` : 0,
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              ></motion.div>
            </div>

            {/* Circular Progress */}
            <motion.div
              className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-xl mt-4"
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
