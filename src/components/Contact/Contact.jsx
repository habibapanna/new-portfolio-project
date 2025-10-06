import { BsEnvelope } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuPhone } from 'react-icons/lu';
import { SlLocationPin } from 'react-icons/sl';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="container mx-auto flex flex-col lg:flex-row">

        {/* LEFT SIDE */}
        <div className="bg-stone-900 py-16 px-10 md:px-20 lg:w-1/2 h-full shadow-lg">
          {/* Heading */}
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            If You Like Inovative Work For Your Own Site
SO, Drop Us a Line
          </h2>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
          </p>

          {/* Info Section */}
          <div className="mb-6 space-y-3 text-gray-300">
            <div className="flex items-center gap-3">
              <SlLocationPin className="text-blue-400 text-lg" />
              <span>Lulabbi city hippo, Road 12/1 Jerk community, Japan</span>
            </div>
            <div className="flex items-center gap-3">
              <LuPhone className="text-blue-400 text-lg" />
              <span>00012345</span>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-transparent border-0 border-b border-gray-600 
focus:border-blue-400 focus:ring-0 text-white placeholder:text-gray-400 
py-2 outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-transparent border-0 border-b border-gray-600 
focus:border-blue-400 focus:ring-0 text-white placeholder:text-gray-400 
py-2 outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-400 mb-1">Phone Number</label>
              <input
                type="text"
                id="phone"
                className="w-full bg-transparent border-0 border-b border-gray-600 
focus:border-blue-400 focus:ring-0 text-white placeholder:text-gray-400 
py-2 outline-none"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-400 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-transparent border-0 border-b border-gray-600 
focus:border-blue-400 focus:ring-0 text-white placeholder:text-gray-400 
py-2 outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-400 mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-transparent border-0 border-b border-gray-600 
focus:border-blue-400 focus:ring-0 text-white placeholder:text-gray-400 
py-2 outline-none"
              ></textarea>
            </div>
<div className="flex justify-end">
    <button
      type="submit"
      className="mt-5 font-semibold cursor-pointer flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
    >
      CONTACT ME <FaArrowRightLong className="text-blue-400" />
    </button>
  </div>
          </form>
        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="lg:w-1/2 h-[400px] md:h-[1046px] relative">
          {/* Map */}
          <iframe
            className="w-full h-full grayscale brightness-75"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.743968057053!2d90.72118241498285!3d24.88328928404396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757a6f1e18b46b9%3A0x89f7d527969b5cb5!2sBilpar%2C%20Shatpai%2C%20Netrokona!5e0!3m2!1sen!2sbd!4v1696587602987!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* Bouncing Location Icon */}
          <div className="absolute inset-0 flex justify-center items-center">
            <SlLocationPin className="text-white text-4xl animate-bounce drop-shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
