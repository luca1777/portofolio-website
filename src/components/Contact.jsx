import React from "react";
import { HiMail, HiPhone } from "react-icons/hi";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Contact = () => {
  return (
    <div name="contact" className="w-full h-full bg-[#F9F9F9]">
      <div className="max-w-[1000px] flex flex-col mx-auto my-8 py-[90px] justify-center items-center lg:items-start">
        <p className="text-4xl font-bold inline border-b-4 border-[#147EFB] pr-2 text-[#2d2e32]">
          Contact
        </p>
        <h3 className="text-[1.5rem] font-semibold mt-5">
          Don't be shy! Hit me up!👇
        </h3>
        <div className="lg:flex lg:gap-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start my-5">
          <HiMail className="text-[#147EFB] text-[4rem] my-5 py-3 rounded-full bg-white shadow-xl lg:mr-5" />
          <div className="flex flex-col items-center my-auto lg:items-start">
            <h3 className="text-[#2d2e32] font-bold">Mail</h3>
            <a href="mailto:luca.alexandru17@yahoo.com">
            <p className="text-[#767676] text-lg hover:text-[#147EFB]">luca.alexandru17@yahoo.com</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start mt-5">
          <HiPhone className="text-[#147EFB] text-[4rem] my-5 py-3 rounded-full bg-white shadow-xl lg:mr-5" />
          <div className="flex flex-col items-center my-auto lg:items-start">
            <h3 className="text-[#2d2e32] font-bold">Phone</h3>
            <p className="text-[#767676] text-lg">+40746680763</p>
          </div>
        </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row h-[100px] bg-[#2D2E32] text-white">
        <h3 className="my-auto mx-auto lg:mx-0 lg:ml-[250px] text-lg">Copyright © 2023. All rights are reserved</h3>
        <div className="flex mx-auto lg:mx-0 my-auto lg:ml-[500px] text-4xl">
        <a className="mx-7 transition-transform hover:scale-110 duration-300" href="https://www.linkedin.com/in/alexandru-luca-dev/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a className="transition-transform hover:scale-110 duration-300" href="https://github.com/luca1777" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        </div>
      </div>
    </div>
  );
};
