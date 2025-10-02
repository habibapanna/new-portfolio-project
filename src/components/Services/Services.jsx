import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("service-details");
    }, 1000); // Simulate loading time
  };

  const servicesData = [
    {
      icon: <BsBriefcase />,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag.",
      percentage: 80,
    },
    {
      icon: <BsCardChecklist />,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag.",
      percentage: 80,
    },
    {
      icon: <BsBarChart />,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag.",
      percentage: 80,
    },
    {
      icon: <BsBinoculars />,
      title: "Branding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag.",
      percentage: 80,
    },
    {
      icon: <AiOutlineSun />,
      title: "SEO Optimization",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
      percentage: 75,
    },
    {
      icon: <BsCalendar4Week />,
      title: "Marketing",
      description:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.",
      percentage: 85,
    },
  ];

  return (
    <section id="services" className="p-16 bg-black">
      <div className="container mx-auto">
        {/* Section Heading */}
        

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 p-20">
          {servicesData.map((service, index) => (
           <div
  key={index}
  className="cursor-pointer flex flex-col space-y-6 group" // added group
  onClick={handleClick}
>
  {/* Icon + Title + Description */}
  <div className="flex items-center space-x-4">
    <div className="text-3xl text-blue-400 group-hover:text-white transition">
      {service.icon}
    </div>
    <div>
      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition">
        {service.title}
      </h4>
      <p className="text-gray-400">{service.description}</p>
    </div>
  </div>

  {/* Progress bar */}
  <div className="w-full">
    <div className="h-1 bg-gray-700 rounded">
      <div
        className="h-1 bg-blue-400 rounded group-hover:bg-white transition-all"
        style={{ width: `${service.percentage}%` }}
      ></div>
    </div>
  </div>

  {/* Circular Percentage */}
<div
  className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg"
  style={{
    background: `conic-gradient(#60a5fa ${service.percentage * 3.6}deg, #93c5fd 0deg)`,
  }}
>
  {service.percentage}%
</div>

</div>

          ))}
        </div>

        {/* Loader */}
        {loading && <Loader />}
      </div>
    </section>
  );
};

export default Services;
