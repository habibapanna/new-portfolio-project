import { FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ProfileSection = () => {
  return (
    <div className="bg-bla flex flex-col justify-center items-center text-black">
      {/* Profile Image */}
      <div className="rounded-full overflow-hidden w-32 h-32 border-8 border-gray-200">
        <img
  src="/myPhoto.jpg"
  alt="Profile"
  className="w-full h-full object-cover object-[50%]"
/>

      </div>

      {/* Name */}
      <h2 className="text-2xl text-center font-semibold mt-4 upper">Sanwar Hossen Limon</h2>

      {/* Social Icons */}
      {/* <div className="flex space-x-2 mt-4">
        <div
          className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 cursor-pointer"
          title="Twitter"
        >
          <FaTwitter />
        </div>
        <div
          className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 cursor-pointer"
          title="Facebook"
        >
          <FaFacebookF />
        </div>
        <div
          className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 cursor-pointer"
          title="Instagram"
        >
          <FaInstagram />
        </div>
        <div
          className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 cursor-pointer"
          title="Skype"
        >
          <FaSkype />
        </div>
        <div
          className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 cursor-pointer"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </div>
      </div> */}
    </div>
  );
};

export default ProfileSection;
