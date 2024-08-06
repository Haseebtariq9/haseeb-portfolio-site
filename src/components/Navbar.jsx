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
    <nav className="mb-20 flex items-center justify-between py-6 px-4 md:px-8">
      <div className="flex items-center">
        <img className="h-10" src={logo} alt="logo" />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div className={`m-8 md:m-0 flex flex-col md:flex-row md:items-center justify-center gap-4 text-2xl ${isOpen ? "block" : "hidden"} md:flex`}>
        <a href="https://www.linkedin.com/in/muhammad-haseeb-tariq-29084a199/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Haseebtariq9" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/haseebtariq__/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100073363053040" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://wa.me/+923261430007" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
