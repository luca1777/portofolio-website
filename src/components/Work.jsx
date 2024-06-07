import React from "react";

export const Work = () => {
  return (
    <div name="work" className="w-full text-[#2d2e32] bg-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-[#147EFB] pr-2">
            Work
          </p>
          <p className="py-6">/ /Check out my latest project</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm">
          <div className="w-full p-4 rounded-xl border shadow-lg shadow-[#040c16] lg:hover:scale-110 transition-transform duration-400">
            <div className="bgImage flex justify-center items-center mx-auto content-div"></div>
            <div className="w-full text-center">
              <p className="text-sm font font-semibold my-4">
                Basic React.js e-commerce with add-to-cart functionality,
                filters, categories, search.
              </p>
            </div>
            <div className="w-full flex justify-center gap-4">
              <a
                href="https://getwear.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg border-2 border-gray-300 px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                  View Site
                </button>
              </a>
              <a
                href="https://github.com/luca1777/simple-ecommerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 border-2 border-gray-300 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="w-full p-4 rounded-xl border shadow-lg shadow-[#040c16] lg:hover:scale-110 transition-transform duration-400">
            <div className="bgImagePro flex justify-center items-center mx-auto content-div"></div>
            <div className="w-full text-center">
              <p className="text-sm font font-semibold my-4">
                E-commerce built in Next.js. Server-side rendering, improving seo
                and loading page, using Wordpress as Headless CMS. For Routing I
                used App Router.
              </p>
            </div>
            <div className="w-full flex justify-center gap-4">
              <a
                href="https://pro-ecommerce.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg border-2 border-gray-300 px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                  View Site
                </button>
              </a>
              <a
                href="https://github.com/luca1777/pro-ecommerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 border-2 border-gray-300 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="w-full p-4 rounded-xl border shadow-lg shadow-[#040c16] lg:hover:scale-110 transition-transform duration-400">
            <div className="bgImageDeedit flex justify-center items-center mx-auto content-div"></div>
            <div className="w-full text-center">
              <p className="text-sm font font-semibold my-4">
                A fullstack social app in Next.js using MongoDB and server
                actions where users can share their daily experiences, whether
                funny, emotional, or romantic. Users can authenticates,
                comments, likes, etc.
              </p>
            </div>
            <div className="w-full flex justify-center gap-4">
              <a
                href="https://deedit-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg border-2 border-gray-300 px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                  View Site
                </button>
              </a>
              <a
                href="https://github.com/luca1777/deedit-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 border-2 border-gray-300 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="w-full p-4 rounded-xl border shadow-lg shadow-[#040c16] lg:hover:scale-110 transition-transform duration-400">
            <div className="bgImageDeseo flex justify-center items-center mx-auto content-div"></div>
            <div className="w-full text-center">
              <p className="text-sm font font-semibold my-4">
                I developed a bakery e-commerce for one of my clients using
                Next.js and Strapi. The website is optimized for seo and users
                can order and pay via Stripe.
              </p>
            </div>
            <div className="w-full flex justify-center gap-4">
              <a
                href="https://deseosweets.ro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg border-2 border-gray-300 px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg">
                  View Site
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
