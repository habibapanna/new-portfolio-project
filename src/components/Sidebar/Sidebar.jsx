import { useState, useEffect } from "react";
import ProfileSection from "../Components/ProfileSection/ProfileSection";
import { GrGallery } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
import { RiDropdownList, RiHome2Line } from "react-icons/ri";
import { BsEnvelope, BsFileEarmarkText, BsHddStack } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";

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
          className="text-white text-3xl bg-blue-400 rounded-full p-2"
        >
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full bg-[#0a0b0d] text-gray-400 transform ${
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
              { href: "#resume", icon: <BsFileEarmarkText className="text-xl" />, label: "Resume" },
              { href: "#portfolio", icon: <GrGallery className="text-xl" />, label: "Portfolio" },
              { href: "#services", icon: <BsHddStack className="text-xl" />, label: "Services" },
              { href: "#contact", icon: <BsEnvelope className="text-xl" />, label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`p-2 rounded group flex items-center ${
                  activeLink === link.href ? "text-white" : "hover:text-white"
                }`}
              >
                <span
                  className={`mr-3 ${
                    activeLink === link.href ? "text-blue-400" : "group-hover:text-blue-400"
                  }`}
                >
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}

            {/* Dropdown Menu */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`p-2 rounded group flex items-center ${
                  isDropdownOpen ? "text-white" : "hover:text-white"
                }`}
              >
                <RiDropdownList
                  className={`mr-3 text-xl ${
                    isDropdownOpen ? "text-blue-400" : "group-hover:text-blue-400"
                  }`}
                />
                Dropdown
                <IoIosArrowDropdownCircle
                  className={`ml-20 text-4xl transition-transform ${
                    isDropdownOpen ? "rotate-180 text-blue-400" : "rotate-0 text-gray-900 hover:text-blue-400"
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <ul className="bg-[#0a0b0d] text-gray-400 p-2 space-y-2">
                  <li>
                    <a
                      href="#banner"
                      onClick={() => handleLinkClick("#banner")}
                      className={`p-2 rounded group flex items-center ${
                        activeLink === "#dropdown1"
                          ? "text-white"
                          : "hover:text-white"
                      }`}
                    >
                      Dropdown 1
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        setIsDeepDropdownOpen(!isDeepDropdownOpen)
                      }
                      className={`p-2 rounded flex items-center ${
                        isDeepDropdownOpen ? "text-white" : "hover:text-white"
                      }`}
                    >
                      Deep Dropdown
                      <IoIosArrowDropdownCircle
                        className={`ml-2 transition-transform ${
                          isDeepDropdownOpen ? "rotate-180 text-blue-400" : "rotate-0"
                        }`}
                      />
                    </button>
                    {isDeepDropdownOpen && (
                      <ul className="pl-4 space-y-2">
                        <li>
                          <a
                            href="#deepDropdown1"
                            onClick={() => handleLinkClick("#deepDropdown1")}
                            className={`p-2 rounded flex items-center ${
                              activeLink === "#deepDropdown1"
                                ? "text-white"
                                : "hover:text-white"
                            }`}
                          >
                            Deep Dropdown 1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#deepDropdown2"
                            onClick={() => handleLinkClick("#deepDropdown2")}
                            className={`p-2 rounded flex items-center ${
                              activeLink === "#deepDropdown2"
                                ? "text-white"
                                : "hover:text-white"
                            }`}
                          >
                            Deep Dropdown 2
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a
                      href="#dropdown2"
                      onClick={() => handleLinkClick("#dropdown2")}
                      className={`p-2 rounded flex items-center ${
                        activeLink === "#dropdown2"
                          ? "text-white"
                          : "hover:text-white"
                      }`}
                    >
                      Dropdown 2
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
