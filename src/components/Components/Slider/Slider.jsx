import { motion } from "framer-motion";

const stats = [
  { number: "5+", label: "Years of Experience" },
  { number: "441+", label: "Satisfied Clients" },
  { number: "550+", label: "Projects Finished" },
];

const Slider = () => {
  return (
    <section className="relative py-10 bg-amber-50 overflow-hidden w-full">
      {/* Make sure this wrapper isolates animation and hides overflow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="flex space-x-16 whitespace-nowrap absolute left-0 top-1/2 -translate-y-1/2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {stats.concat(stats).map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 text-black text-xl font-semibold"
            >
              <span className="text-blue-800 text-4xl">*</span>
              <span className="text-blue-800 text-4xl">{stat.number} /</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Optional: Add a solid background overlay to separate visually */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl text-white font-bold"></h2>
      </div>
    </section>
  );
};

export default Slider;
