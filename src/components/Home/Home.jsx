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
import Blog from "../Blog/Blog";
import Clients from "../Components/Clients/Clients";
import Slider from "../Components/Slider/Slider";

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 }, // start off-screen to the right
  visible: {
    opacity: 1,
    x: 0, // slide to normal position
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


const Home = () => {
  return (
    <div>


<section id="banner">
        <Banner />
      </section>
<section id="banner">
        <Slider />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      {/* <section id="counts">
        <Counts />
      </section> */}

      {/* <section id="skills">
        <SkillsSection />
      </section> */}

      {/* <section id="resume">
        <Resume />
      </section> */}

      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="portfolio">
        <Clients />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* <section id="blog">
        <Blog />
      </section> */}

      {/* <section id="contact">
        <Contact />
      </section> */}

      <Footer />










      {/* <motion.section
        id="banner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <Banner />
      </motion.section> */}

      {/* <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <About />
      </motion.section> */}

         {/* <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <Services />
      </motion.section> */}

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

      {/* <motion.section
        id="portfolio"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <Portfolio />
      </motion.section> */}

      {/* <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <TestimonialsSection />
      </motion.section> */}

     {/* <motion.section
  id="blog"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeInFromRight}
>
  <Blog />
</motion.section> */}


      {/* <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromBottom}
      >
        <Contact />
      </motion.section> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
