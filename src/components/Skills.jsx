import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

export const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#F9F9F9] text-[#2d2e32]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center md:text-left">
          <p className=" text-4xl font-bold inline border-b-4 border-[#147EFB] pr-2">
            Tech Stack
          </p>
          <p className="py-4">
            / / These are the technologies I am specialized in
          </p>
        </div>
        <div className="w-full gap-[18px] grid grid-cols-2 sm:grid-cols-3 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl">
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl">
            <img className="w-20 mx-auto" src={CSS} alt="css icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl">
            <img
              className="w-[70px] mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl">
            <img className="w-20 mx-auto" src={ReactImg} alt="react icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl">
            <img className="w-20 mx-auto" src={GitHub} alt="github icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl">
            <img className="w-20 mx-auto" src={Tailwind} alt="tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};
