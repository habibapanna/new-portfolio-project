import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrGallery } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
import { RiHome2Line } from "react-icons/ri";
import { BsHddStack } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import ProfileSection from "../Components/ProfileSection/ProfileSection";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#banner");
  const [progress, setProgress] = useState(0);
  const [showSpread, setShowSpread] = useState(false);
  const [menuListOpen, setMenuListOpen] = useState(false);

  const lastActiveRef = useRef("#banner");
  const spreadTimeoutRef = useRef(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const target = document.querySelector(link);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 1024) setIsOpen(false);
  };

  // Scroll detection and spreading circle
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "#banner";
      let activeIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = `#${section.id}`;
          activeIndex = index;
        }
      });

      setProgress(((activeIndex + 1) / sections.length) * 100);

      if (current !== lastActiveRef.current) {
        setActiveLink(current);
        setShowSpread(true);
        lastActiveRef.current = current;

        if (spreadTimeoutRef.current) clearTimeout(spreadTimeoutRef.current);
        spreadTimeoutRef.current = setTimeout(() => {
          setShowSpread(false);
        }, 1000); // 1s pulse
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (spreadTimeoutRef.current) clearTimeout(spreadTimeoutRef.current);
    };
  }, []);

  const links = [
    { href: "#banner", icon: <RiHome2Line />, label: "Home" },
    { href: "#about", icon: <HiOutlineUser />, label: "About" },
    { href: "#services", icon: <BsHddStack />, label: "Services" },
    { href: "#portfolio", icon: <GrGallery />, label: "Portfolio" },
  ];

  return (
    <>
      {/* --- Top Progress Bar --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-1 bg-pink-500 transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* --- Mobile Toggle Button --- */}
      <div className="fixed top-5 right-5 z-50 lg:hidden">
        <button
          onClick={toggleSidebar}
          className="text-white text-3xl bg-pink-500 rounded-full p-2 shadow-lg hover:scale-110 transition-transform cursor-pointer"
        >
          {isOpen ? <AiOutlineClose size={20} /> : <TfiMenuAlt size={20} />}
        </button>
      </div>

      {/* --- Sidebar --- */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 z-[60] h-full w-72 bg-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Header Section (Desktop Only) */}
        <div className="hidden md:flex flex-col mt-12 relative">
          {/* Top Row */}
          <div className="flex justify-between items-center">
         <div className="text-2xl font-semibold uppercase text-center ml-6 flex justify-center items-center">
  <span>L</span>
  <span>I</span>
  <motion.span
    className="text-pink-500 inline-block"
    animate={{
      y: [0, -60, -60, 0, -10, 0],   // jump up, stay, come down with bounce
      rotateY: [0, 0, 360, 0, 0, 0], // flip horizontally while at the top
    }}
    transition={{
      duration: 8, // full cycle duration
      times: [0, 0.25, 0.625, 0.8, 0.9, 1], // timing keyframes
      ease: "easeInOut",
      repeat: Infinity,
    }}
    style={{ transformOrigin: "center" }}
  >
    M
  </motion.span>
  <span>O</span>
  <span>N</span>
</div>




            <motion.div
              className="cursor-pointer bg-stone-100 p-4 text-white"
              onClick={() => setMenuListOpen(!menuListOpen)}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {menuListOpen ? (
                <AiOutlineClose size={22} className="text-pink-500" />
              ) : (
                <TfiMenuAlt size={25} className="text-pink-500" />
              )}
            </motion.div>
          </div>

          {/* Dropdown menu (Animated) */}
          <AnimatePresence>
            {menuListOpen && (
              <motion.div
                className="absolute top-13 right-0 w-28 bg-stone-100 shadow-lg overflow-hidden z-[90]"
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="">
                  {links.map((link) => (
                    <motion.button
                      key={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`w-full text-left py-2 px-1 flex items-center gap-2 transition-all duration-300 cursor-pointer
                        ${
                          activeLink === link.href
                            ? "text-white bg-pink-500 shadow-md"
                            : "hover:text-gray-800 hover:bg-pink-500/20 text-gray-800"
                        }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span className="font-medium text-sm">{link.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile + Menu (Mobile Only) */}
        <div className="md:hidden flex flex-col items-center mt-10">
          <ProfileSection />
          <div className="w-full mt-6 px-6">
            {links.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`w-full text-left py-2 px-3 rounded-md flex items-center gap-3 transition-all duration-300 cursor-pointer
                  ${
                    activeLink === link.href
                      ? "text-white bg-pink-500 shadow-md"
                      : "hover:text-gray-800 hover:bg-pink-500/20 text-gray-800"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Desktop Animated Circle + Line */}
        <div className="hidden lg:flex items-center justify-start absolute left-0 top-1/2 transform -translate-y-1/2 z-[70]">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <motion.div
              className="absolute w-8 h-8 rounded-full bg-pink-500"
              layoutId="active-circle"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            {/* Spreading Rings */}
            <motion.div
              className="absolute w-8 h-8 rounded-full border-2 border-blue-400 opacity-40"
              animate={
                showSpread
                  ? { scale: [1, 2.8], opacity: [0.5, 0] }
                  : { scale: 0, opacity: 0 }
              }
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
            <motion.div
              className="absolute w-8 h-8 rounded-full border-2 border-blue-400 opacity-25"
              animate={
                showSpread
                  ? { scale: [1, 3.5], opacity: [0.3, 0] }
                  : { scale: 0, opacity: 0 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          <motion.span
            className="text-black font-semibold ml-3"
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            key={activeLink}
            transition={{ duration: 0.4 }}
          >
            {links.find((l) => l.href === activeLink)?.label}
          </motion.span>

          <motion.span
  className="absolute left-45 w-48 h-[1px] bg-pink-500 z-[70]"
  animate={
    showSpread
      ? {
          scaleX: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
          boxShadow: [
            "0px 0px 4px rgba(96, 165, 250, 0.6)",
            "0px 0px 12px rgba(96, 165, 250, 0.9)",
            "0px 0px 4px rgba(96, 165, 250, 0.6)",
          ],
        }
      : { scaleX: 1, opacity: 1, boxShadow: "0px 0px 4px rgba(96, 165, 250, 0.6)" }
  }
  transition={{ duration: 1, ease: "easeOut" }}
/>

        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
