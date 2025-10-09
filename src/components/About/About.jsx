import { TfiQuoteLeft , TfiQuoteRight } from "react-icons/tfi";


const About = () => {
    return (
<div className=" bg-black">
<div className="flex flex-col lg:flex-row gap-5">
    <div className="lg:w-1/2 hidden md:block">
        <img
  src="/myPhoto.jpg"
  alt="Profile"
  className="w-full h-full object-cover object-[50%]"
/>

    </div>

<section id="about" className="lg:w-1/2">
            <div className="container mx-auto text-left w-2/3 md:px-8">
  <h2 className="text-2xl font-bold mt-10 md:mt-0 mb-5">Hi i’m Sanwar Limon</h2>
  <h3 className="text-4xl font-semibold mb-6 lg:mt-0">I BELIEVE IN</h3>

  <div className="relative">
    {/* Left Quote */}
    <TfiQuoteLeft className="absolute -left-8 -top-4 text-2xl text-blue-500" />

    {/* Paragraph */}
    <p className="text-2xl leading-relaxed font-light">
      If you do good work for good clients, it will lead to other good work for
      other good clients. If you do bad work for bad clients, it will lead to
      other bad work for other bad clients.
    </p>

    {/* Right Quote */}
    <TfiQuoteRight className="absolute -right-0 -bottom-4 text-2xl text-blue-500" />
  </div>
</div>

        </section>
</div>
</div>
    );
};

export default About;