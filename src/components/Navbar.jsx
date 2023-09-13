import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="z-10 fixed bg-[#FFFFFF] w-full h-[80px] flex justify-between items-center px-4 text-[#2D2E32] shadow-custom">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <h3 className="text-[#2D2E32] text-xl font-bold mx-[1em] cursor-pointer">
            Luca.dev
          </h3>
        </Link>
      </div>
      {/* menu */}
      <ul className="hidden md:flex font-semibold">
        <li>
          <Link to="home" className="hover:text-[#147EFB]" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className="hover:text-[#147EFB]" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" className="hover:text-[#147EFB]" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" className="hover:text-[#147EFB]" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" className="hover:text-[#147EFB]" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer text-[#2D2E32] hover:text-blue-500 text-xl"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#FFFFFF] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" className="hover:text-[#147EFB]" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" className="hover:text-[#147EFB]" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            className="hover:text-[#147EFB]"
            smooth={true}
            duration={500}
            offset={-40}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            className="hover:text-[#147EFB]"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" className="hover:text-[#147EFB]" smooth={true} duration={500} offset={-80}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
