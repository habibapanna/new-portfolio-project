import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
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
    "Software Development",
    "Product Management",
    "Graphic Design",
    "Marketing",
  ];

  // Handle service click and scroll to the corresponding section
  const handleServiceClick = (service) => {
    setActiveService(service);
    if (serviceRefs.current[service]) {
      serviceRefs.current[service].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle Home navigation with loader
  const handleNavigateHome = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000); // Simulate a loading time
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
<div className="">
          <a className="text-2xl text-white font-bold">Service Details</a>
        </div>
        <div className="">
          <ul className="flex flex-row gap-2">
            <li>
              <button
                onClick={handleNavigateHome}
                className="text-white hover:text-blue-400 cursor-pointer"
              >
                Home
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

      {/* Main Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row max-w-4xl mx-auto py-5 lg:py-10 gap-8 px-5 lg:px-0"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        {/* Left Sidebar */}
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

          {/* Example Text Section */}
          <div className="mt-5">
            <h1 className="text-xl font-bold mb-2">Enim qui eos rerum in delectus</h1>
            <p className="mb-3">
              Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non
              occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div className="w-full" variants={fadeInVariants}>
          <div>
            {/* Image Section */}
            <div>
              <img
                src="https://i.postimg.cc/pr8LP0Zr/image.png"
                alt="Service Image"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Service Details Sections */}
            {services.map((service, index) => (
              <motion.div
                key={index}
                ref={(el) => (serviceRefs.current[service] = el)}
                className="mt-8"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <h2 className="text-3xl font-bold mb-4">
                  {service} Details - Temporibus et in vero dicta aut eius lidero
                </h2>
                <p className="mb-6">
                  Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et
                  doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga
                  doloribus vero.
                </p>
                <ul className="space-y-4">
                  {[
                    "Aut eum totam accusantium voluptatem.",
                    "Assumenda et porro nisi nihil nesciunt voluptatem.",
                    "Ullamco laboris nisi ut aliquip ex ea",
                  ].map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <BsCheckCircle className="text-blue-500 mr-2 text-xl" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6">
                  Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio
                  iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceDetails;
