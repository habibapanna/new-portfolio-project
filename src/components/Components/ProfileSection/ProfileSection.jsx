import { FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ProfileSection = () => {
  return (
    <div className="bg-[#0a0b0d] flex flex-col justify-center items-center text-white mb-5">
      {/* Profile Image */}
      <div className="rounded-full overflow-hidden w-32 h-32 border-8 border-gray-800">
        <img
          src="https://i.postimg.cc/C5FLTWkv/image.png"
          alt="Profile"
          className="w-full h-full object-cover object-[50%]"
        />
      </div>

      {/* Name */}
      <h2 className="text-3xl font-semibold mt-4">Alex Smith</h2>

      {/* Social Icons */}
      <div className="flex space-x-2 mt-4">
        <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 cursor-pointer">
          <FaTwitter />
        </div>
        <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 cursor-pointer">
          <FaFacebookF />
        </div>
        <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 cursor-pointer">
          <FaInstagram />
        </div>
        <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 cursor-pointer">
          <FaSkype />
        </div>
        <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 cursor-pointer">
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
