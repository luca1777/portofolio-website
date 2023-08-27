import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[white] text-[#2d2e32]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8 pl-4 lg:pr-[52.5rem]">
          <p className="text-4xl font-bold  inline border-b-4 border-[#147EFB]">
            About
          </p>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8"></div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Luca, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
