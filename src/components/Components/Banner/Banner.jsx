import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // control strength
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-black overflow-hidden"
      style={{
        backgroundImage: 'url(https://i.postimg.cc/j5RrLy22/image.png)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div
          className="text-white space-y-6 z-10 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        >
          <h2 className="text-2xl font-medium">HELLO, I'M</h2>
          <h1 className="text-6xl md:text-5xl font-extrabold tracking-wide">
            ALEX SMITH
          </h1>
         <div className="border mx-auto border-white w-56"></div>
          <p className="w-2/4 mx-auto leading-loose">
I'm a software developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user.          </p>
          <button className="mt-10 font-semibold cursor-pointer flex mx-auto items-center gap-2">
            CONTACT ME <FaArrowRightLong className="text-blue-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
