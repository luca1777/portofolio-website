import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./home.css";
import Hand from "../assets/waving.png";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div name="home" className="w-full h-auto md:h-screen bg-[#F9F9F9]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto pt-28 px-8 flex flex-col sm:flex-row sm:pt-40 justify-center">
        <div className="order-2 sm:order-1 text-center sm:text-left mt-4">
          <h2 className="text-5xl sm:text-6xl leading-tight font-bold text-[#2d2e32] inline-block">
            Front-End
            <span className="inline-block align-middle">Developer</span>
            <img
              className="w-[45px] h-[45px] inline-block align-middle ml-2"
              src={Hand}
              alt="hand"
            />
          </h2>
          <p className="text-[#555] py-4 max-w-[700px]">
            Hi, I'm Luca Alexandru. A passionate Front-end React Developer who likes to turn ideas
            into pixels. 👨‍💻 
          </p>
          <div className="flex justify-between md:justify-normal items-center">
            <Link to="work" smooth={true} duration={500} offset={-80}>
              <button className="text-[#2d2e32] group border-2 rounded-xl md:mr-80 px-6 py-3 my-2 flex items-center hover:bg-[#147EFB] hover:border-[#147EFB] duration-300">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
            <span className="flex sm:pt-5 text-4xl">
              <a className="mr-5 hover:text-[#147EFB] duration-300" href="http://">
                <BsLinkedin />
              </a>
              <a className="hover:text-[#147EFB] duration-300" href="http://">
                <BsGithub />
              </a>
            </span>
          </div>
        </div>
        <div className="profile_img order-1 sm:order-2 mx-auto w-[280px] h-[280px] sm:h-[350px] sm:w-[350px] pl-12"></div>
      </div>
    </div>
  );
};
