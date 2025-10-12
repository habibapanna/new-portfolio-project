import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";



const Banner = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Create glowing floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 12 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 5 + 2,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div
  className="relative min-h-screen bg-center bg-gray-100 overflow-hidden"
  style={{
    backgroundImage: "url('/myPhoto1.png')",
    backgroundSize: "contain", // ✅ shows full image
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
  onMouseMove={handleMouseMove}
>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Floating glowing particles */}
      {particles.map((p, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-blue-400/40 blur-[3px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content Section */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.div
          className="text-white space-y-6 z-10 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <motion.h2
            className="text-2xl font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            HELLO, I'M
          </motion.h2>

          {/* Name with glowing sweep */}
          <motion.h1
            className="relative inline-block text-3xl md:text-5xl font-extrabold uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="relative text-white tracking-wider">
              Sanwar Hosen Limon
              {/* Light sweep animation */}
              <motion.span
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                  delay: 1,
                }}
                style={{
                  mixBlendMode: "overlay",
                }}
              />
            </span>
          </motion.h1>

          {/* Underline */}
          <motion.div
            className="border mx-auto border-white w-56"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          ></motion.div>

          {/* Paragraph */}
          <motion.p
            className="w-3/4 md:w-2/4 mx-auto leading-loose text-gray-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            I'm a software developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user.
          </motion.p>

          {/* Contact Button */}
          {/* <motion.button
            onClick={handleScrollToContact}
            className="mt-10 font-semibold cursor-pointer flex mx-auto items-center gap-2 text-white border border-blue-400 px-6 py-3 rounded-full hover:bg-blue-500/20 transition-all"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgba(59,130,246,0.8)",
              boxShadow: "0px 0px 12px rgba(59,130,246,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            CONTACT ME <FaArrowRightLong className="text-blue-400" />
          </motion.button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
