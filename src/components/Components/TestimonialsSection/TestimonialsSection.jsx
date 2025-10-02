import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Matt Brandon",
    role: "Freelancer",
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
  },
  {
    name: "Saul Goodman",
    role: "CEO & Founder",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
  },
  {
    name: "Sarah Johnson",
    role: "Designer",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
  {
    name: "William Smith",
    role: "Marketer",
    text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.",
  },
  {
    name: "Emily Davis",
    role: "Developer",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
  },
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000); // Wait 5 seconds
    return () => clearInterval(interval);
  }, [totalPages]);

  const start = page * itemsPerPage;
  const currentTestimonials = testimonials.slice(start, start + itemsPerPage);

  return (
    <section className="bg-black py-16 px-5 lg:px-6 overflow-hidden">
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold mb-5 text-white">Testimonials</h2>
        <div className="border-2 border-blue-400 w-16 mb-5"></div>
        <p className="mb-16 text-gray-300">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {currentTestimonials.map((t, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-stone-900 rounded-lg lg:h-[200px] relative p-5 shadow-lg w-full max-w-sm">
                  <p className="italic text-sm font-light mb-6 text-center text-gray-200">
                    <FaQuoteLeft className="text-blue-400 mb-2 inline-block mr-2" />
                    {t.text}
                    <FaQuoteRight className="text-blue-400 inline-block ml-2" />
                  </p>
                  <p className="font-semibold text-white text-right">{t.name}</p>
                  <p className="text-sm text-gray-400 text-right">{t.role}</p>
                   <div className="">
                  
                </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "0",
                      borderLeft: "35px solid transparent",
                      borderRight: "35px solid transparent",
                      borderTop: "35px solid #1c1917",
                    }}
                  ></div>
                </div>

               
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialsSection;
