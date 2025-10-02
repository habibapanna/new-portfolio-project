import { motion } from "framer-motion";
import About from "../About/About";
import Banner from "../Components/Banner/Banner";
import Counts from "../Components/Counts/Counts";
import Footer from "../Components/Footer/Footer";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import TestimonialsSection from "../Components/TestimonialsSection/TestimonialsSection";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <div>
      <motion.section
        id="banner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <Banner />
      </motion.section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <About />
      </motion.section>

         <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <Services />
      </motion.section>

      {/* <motion.section
        id="counts"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <Counts />
      </motion.section> */}

      {/* <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <SkillsSection />
      </motion.section> */}

      {/* <motion.section
        id="resume"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <Resume />
      </motion.section> */}

      <motion.section
        id="portfolio"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <Portfolio />
      </motion.section>

      <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <TestimonialsSection />
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <Contact />
      </motion.section>

      <Footer />
    </div>
  );
};

export default Home;
