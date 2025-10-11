import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <CgSpinnerTwoAlt className="text-7xl text-blue-400 animate-spin" />
    </div>
  );
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ServiceDetails = () => {
  const [activeService, setActiveService] = useState("Web Design");
  const [loading, setLoading] = useState(false);
  const serviceRefs = useRef({});
  const navigate = useNavigate();

  const services = [
    "Web Design",
    "Web Development",
    "Graphic Design",
    "UI/UX Design",
    "SEO Optimization",
    "Marketing",
  ];

  const handleServiceClick = (service) => {
    setActiveService(service);
    if (serviceRefs.current[service]) {
      serviceRefs.current[service].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigateHome = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="bg-black">
      {/* Navbar */}
      <motion.div
        className="navbar bg-black py-4"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="flex flex-col lg:flex-row w-full lg:justify-between gap-2 px-2 py-2">
          <div>
            <a className="text-2xl text-white font-bold">Service Details</a>
          </div>
          <div>
            <ul className="flex flex-row gap-2">
              <li>
                <button
                  onClick={handleNavigateHome}
                  className="text-white hover:bg-blue-500 cursor-pointer rounded bg-blue-400 px-2"
                >
                  ← Back to Home
                </button>
              </li>
              <li>
                <p className="text-gray-500">/</p>
              </li>
              <li>
                <p className="text-blue-400">Service Details</p>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col lg:flex-row max-w-4xl mx-auto py-5 lg:py-10 gap-8 px-5 lg:px-0"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        {/* Sidebar */}
        <motion.div className="lg:w-3/5" variants={fadeInVariants}>
          <div className="bg-white border border-gray-300 p-6">
            <ul className="space-y-6">
              {services.map((service, index) => (
                <li
                  key={index}
                  className={`cursor-pointer hover:text-blue-500 pl-4 border-l-3 hover:border-blue-400 ${
                    activeService === service
                      ? "border-blue-500 text-black font-bold"
                      : "border-gray-300 text-gray-600"
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h1 className="text-xl font-bold mb-2 text-white">Empowering Brands Through Digital Solutions</h1>
            <p className="mb-3 text-gray-300">
              From design to deployment, our services are built to help businesses grow,
              engage audiences, and stand out in the digital world.
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div className="w-full text-white" variants={fadeInVariants}>
          <div>
            <img
              src="https://i.postimg.cc/pr8LP0Zr/image.png"
              alt="Service Image"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Service Details */}
          {services.map((service, index) => {
            let content = {};

            if (service === "Web Design") {
              content = {
                desc: `Our web design service focuses on creating visually captivating, user-friendly, and responsive websites that reflect your brand’s identity.`,
                points: [
                  "Custom layouts optimized for all screen sizes.",
                  "Elegant, brand-consistent design with clear structure.",
                  "Fast-loading, SEO-friendly, and accessible pages.",
                ],
                extra:
                  "We ensure your website not only looks great but also converts visitors into loyal customers.",
              };
            } else if (service === "Web Development") {
              content = {
                desc: `We build powerful, scalable, and high-performing web applications that meet modern business needs.`,
                points: [
                  "Front-end and back-end development with latest tech.",
                  "Responsive, secure, and cross-browser compatible websites.",
                  "Integration with APIs and cloud services.",
                ],
                extra:
                  "Our developers craft clean, maintainable code for long-term growth and flexibility.",
              };
            } else if (service === "Graphic Design") {
              content = {
                desc: `We bring creativity to life through visually stunning designs that tell your brand’s story effectively.`,
                points: [
                  "Logo, branding, and promotional materials.",
                  "Social media, print, and marketing graphics.",
                  "Creative visuals that boost recognition and appeal.",
                ],
                extra:
                  "Every design we craft helps your brand stand out and connect emotionally with your audience.",
              };
            } else if (service === "UI/UX Design") {
              content = {
                desc: `We design digital experiences that are intuitive, interactive, and centered around user satisfaction.`,
                points: [
                  "User research, wireframing, and prototyping.",
                  "Pixel-perfect UI design with smooth user flow.",
                  "Improved usability and enhanced product engagement.",
                ],
                extra:
                  "Our goal is to ensure every interaction your user has feels effortless and rewarding.",
              };
            } else if (service === "SEO Optimization") {
              content = {
                desc: `We help your website climb search rankings through effective SEO strategies that drive traffic and conversions.`,
                points: [
                  "On-page and off-page SEO optimization.",
                  "Keyword research and performance tracking.",
                  "Technical SEO for site speed and indexing.",
                ],
                extra:
                  "With our SEO service, your business gets the visibility it deserves on search engines.",
              };
            } else if (service === "Marketing") {
              content = {
                desc: `Our marketing services help you reach the right audience with creative and data-driven strategies.`,
                points: [
                  "Social media and digital ad campaigns.",
                  "Email, content, and influencer marketing.",
                  "Performance analysis and campaign optimization.",
                ],
                extra:
                  "We combine creativity with analytics to create marketing that inspires engagement and builds trust.",
              };
            }

            return (
              <motion.div
                key={index}
                ref={(el) => (serviceRefs.current[service] = el)}
                className="mt-8"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <h2 className="text-3xl font-bold mb-4 text-blue-400">
                  {service} Details
                </h2>
                <p className="mb-6 text-gray-300">{content.desc}</p>
                <ul className="space-y-4">
                  {content.points.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-200">
                      <BsCheckCircle className="text-blue-500 mr-2 text-xl" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-gray-300">{content.extra}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceDetails;
