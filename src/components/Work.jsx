import React from "react";

export const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#2d2e32] bg-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-[#147EFB] pr-2">
            Work
          </p>
          <p className="py-6">/ /Check out my latest project</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bgImage shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative">
            <p className="sm:block hidden text-white bg-image group-hover:opacity-0 text-2xl absolute top-0 text-center py-2 w-full">Hover Me</p>  
            <div className="sm:opacity-0 group-hover:opacity-100 opacity-100 bg-image w-full h-full rounded-md text-center pt-12">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bgImage shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative">
            <p className="sm:block hidden text-white bg-image group-hover:opacity-0 text-2xl absolute top-0 text-center py-2 w-full">Hover Me</p>
            <div className="sm:opacity-0 group-hover:opacity-100 opacity-100 bg-image w-full h-full rounded-md text-center pt-12">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bgImage shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative">
            <p className="sm:block hidden text-white bg-image group-hover:opacity-0 text-2xl absolute top-0 text-center py-2 w-full">Hover Me</p>
            <div className="sm:opacity-0 group-hover:opacity-100 opacity-100 bg-image w-full h-full rounded-md text-center pt-12">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
