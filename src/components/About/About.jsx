import { TfiQuoteLeft, TfiQuoteRight } from "react-icons/tfi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="bg-white text-black overflow-hidden relative">
      <div className="flex flex-col lg:flex-row items-stretch min-h-screen">
        {/* --- Left Full Image Section --- */}
        <motion.div
          className="lg:w-1/2 w-full relative"
          initial={{ opacity: 0, scale: 0.95, filter: "grayscale(100%)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "grayscale(0%)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/myPhoto2.png"
            alt="Profile"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </motion.div>

        {/* --- Right Content Section --- */}
        <section className="lg:w-1/2 flex items-center justify-center p-8 md:p-12 relative z-10 bg-white">
          <div className="w-full md:w-3/4">
            {/* Greeting */}
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-5 tracking-wide"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Hi, I’m <span className="text-blue-800">Sanwar</span>
            </motion.h2>

            {/* BELIEVE Section with glowing underline */}
            <motion.h3
              className="text-3xl md:text-4xl font-extrabold mb-4 text-black bg-clip-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I BELIEVE IN
            </motion.h3>

            <motion.div
              className="h-[3px] bg-gradient-to-r to-blue-800 rounded-full w-0"
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            {/* Quote Paragraph */}
            <div className="relative mt-8">
              {/* Floating Quote Icons */}
              <motion.span
                className="absolute -left-8 -top-4 text-3xl text-blue-800"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <TfiQuoteLeft />
              </motion.span>

              <motion.p
                className="text-lg md:text-2xl leading-relaxed font-light text-gray-800"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                If you do good work for good clients, it will lead to other good
                work for other good clients. If you do bad work for bad clients,
                it will lead to other bad work for other bad clients.
              </motion.p>

              <motion.span
                className="absolute -right-0 -bottom-4 text-3xl text-blue-800"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <TfiQuoteRight />
              </motion.span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
