import { useState, useEffect } from "react";
import ProfileSection from "../Components/ProfileSection/ProfileSection";
import { GrGallery } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
import { RiDropdownList, RiHome2Line } from "react-icons/ri";
import { BsEnvelope, BsFileEarmarkText, BsHddStack } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { TbLogs } from "react-icons/tb";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#banner");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeepDropdownOpen, setIsDeepDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Handle scroll event to detect the current section in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "#banner"; // Default section
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSectionId = `#${section.id}`;
        }
      });
      setActiveLink(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Toggle Button for Medium and Small Screens */}
      <div className="fixed top-5 right-5 z-50 lg:hidden">
        <button
          onClick={toggleSidebar}
          className="text-white text-3xl bg-blue-400 rounded-full cursor-pointer p-2"
        >
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full bg-black text-gray-400 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-72 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col py-10 overflow-x-scroll h-full">
          <div className="items-center">
            <ProfileSection />
          </div>
          <nav className="space-y-4 ml-10">
            {/* Links */}
            {[
              { href: "#banner", icon: <RiHome2Line className="text-xl" />, label: "Home" },
              { href: "#about", icon: <HiOutlineUser className="text-xl" />, label: "About" },
              { href: "#services", icon: <BsHddStack className="text-xl" />, label: "Services" },
              { href: "#portfolio", icon: <GrGallery className="text-xl" />, label: "Portfolio" },
              // { href: "#blog", icon: <TbLogs className="text-xl" />, label: "Blog" },
              { href: "#contact", icon: <BsEnvelope className="text-xl" />, label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`p-2 rounded group flex items-center ${
                  activeLink === link.href ? "text-white bg-blue-400" : "hover:text-white"
                }`}
              >
                <span
                  className={`mr-3 ${
                    activeLink === link.href ? "text-white " : "group-hover:text-white "
                  }`}
                >
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
