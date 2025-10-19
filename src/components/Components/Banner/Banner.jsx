import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [bgImage, setBgImage] = useState("/myPhoto1.png");

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  useEffect(() => {
    // Particles
    const newParticles = Array.from({ length: 12 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 5 + 2,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    // Set background based on screen width
    const handleResize = () => {
      setBgImage(window.innerWidth < 768 ? "/myPhoto2.png" : "/myPhoto1.png");
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-center overflow-hidden"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Floating particles */}
      {particles.map((p, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-blue-800/40 blur-[3px]"
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

      {/* Content */}
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
            className="text-2xl md:text-3xl font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            HELLO, I'M
          </motion.h2>

          {/* Name with typewriter */}
          <motion.h1
            className="text-2xl md:text-5xl font-extrabold uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Typewriter
              words={["Sanwar Hosen Limon"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h1>

          {/* Underline */}
          <Fade direction="left">
            <motion.div
              className="border mx-auto border-white w-64"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            ></motion.div>
          </Fade>

          {/* Paragraph */}
          <motion.p
            className="w-4/5 md:w-4/5 mx-auto leading-loose text-white justify-center text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            I'm a web developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;



