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
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4">
          <div className="md:text-right text-4xl font-bold text-center">
            <p>Hi. I'm Luca, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-center md:text-left">
              My goal is to help people turn their ideas into reality. I stand
              out by designing and managing responsive websites that provide a
              pleasant user experience. I am passionate and constantly strive to
              evolve in this field by learning new techniques/technologies and
              writing clean code. I enjoy working in teams that deliver results
              and create innovative web applications. I have the ability to be
              disciplined and persevering in achieving my goals or solving a
              problem. Beyond the screen, I recharge with mountain excursions
              and cherish moments spent with friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
