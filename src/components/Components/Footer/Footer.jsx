import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* --- Waves --- */}
      <div className="absolute bottom-0 left-0 w-full h-[80px] overflow-hidden">
        <style>
          {`
            @keyframes wave1 {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes wave2 {
              0% { transform: translateX(0); }
              100% { transform: translateX(-40%); }
            }
            @keyframes wave3 {
              0% { transform: translateX(0); }
              100% { transform: translateX(-30%); }
            }

            .wave-front {
              animation: wave1 2s linear infinite;
            }
            .wave-middle {
              animation: wave2 2s linear infinite;
            }
            .wave-back {
              animation: wave3 2s linear infinite;
            }
          `}
        </style>

        {/* Back Wave */}
        <div className="absolute bottom-0 w-[200%] h-full">
          <svg
            className="wave-back w-[180%] h-full"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Tighter wave: more peaks in same width */}
            <path
              d="M0,60 C150,20 300,100 450,60 C600,20 750,100 900,60 C1050,20 1200,100 1350,60 L1350,120 L0,120 Z"
              fill="#60a5fa"
              opacity="1.0"
            />
          </svg>
        </div>

        {/* Middle Wave */}
        <div className="absolute bottom-0 w-[200%] h-full">
          <svg
            className="wave-middle w-[180%] h-full"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,70 C120,30 240,110 360,70 C480,30 600,110 720,70 C840,30 960,110 1080,70 L1080,120 L0,120 Z"
              fill="#3b82f6"
              opacity="1.0"
            />
          </svg>
        </div>

        {/* Front Wave */}
        <div className="absolute bottom-0 w-[200%] h-full">
          <svg
            className="wave-front w-[150%] h-full"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C100,40 200,120 300,80 C400,40 500,120 600,80 C700,40 800,120 900,80 C1000,40 1100,120 1200,80 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* --- Footer Content --- */}
      <footer className="relative z-10 text-gray-800 text-center pt-5">
        <p>© Copyright iPortfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
