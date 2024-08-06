import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-4 md:px-8 mt-4 md:mt-6 bg-transparent">
      <div className="flex items-center">
        <img className="h-10" src={logo} alt="logo" />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div className={`flex flex-col md:flex-row md:items-center md:gap-8 mt-4 md:mt-0 absolute md:static inset-0 md:inset-auto ${isOpen ? "flex" : "hidden"} md:flex`}>
        <a href="https://www.linkedin.com/in/muhammad-haseeb-tariq-29084a199/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl hover:text-blue-700">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Haseebtariq9" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl hover:text-gray-700">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/haseebtariq__/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl hover:text-pink-600">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100073363053040" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl hover:text-blue-600">
          <FaFacebook />
        </a>
        <a href="https://wa.me/+923261430007" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl hover:text-green-600">
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
