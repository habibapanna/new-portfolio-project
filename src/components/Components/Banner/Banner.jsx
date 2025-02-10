import bannerImg from "../../../assets/bannerImg.jpg";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-black"
      style={{
        backgroundImage: 'url(https://i.postimg.cc/j5RrLy22/image.png)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="absolute inset-0 "></div>
      {/* Content Section */}
      <div className="absolute inset-0 flex items-center px-5">
        <div className="text-white space-y-4 z-10">
          <h1 className="text-7xl font-bold">Alex Smith</h1>
          <p className="text-3xl">
            I'm{" "}
            <span className="underline decoration-blue-500">
              <Typewriter
                words={["Photographer", "Freelancer", "Developer", "Designer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
