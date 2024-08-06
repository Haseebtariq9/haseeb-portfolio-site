import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent text-white py-4 px-4 md:px-8 border-t border-neutral-800">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Copyright text */}
        <div className="text-center md:text-left text-sm md:text-base">
          &copy; Haseeb Innovates - {currentYear}
        </div>

        {/* Right side: Social icons */}
        <div className="flex flex-row items-center justify-center gap-4 mt-4 md:mt-0 text-xl">
          <a href="https://www.linkedin.com/in/muhammad-haseeb-tariq-29084a199/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Haseebtariq9" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/haseebtariq__/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100073363053040" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://wa.me/+923261430007" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
