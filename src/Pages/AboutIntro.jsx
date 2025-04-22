import React from "react";
import aboutimg from "../assets/aboutus-img.png";

const AboutIntro = () => {
  return (
    <section className="overflow-hidden">
      <div className="py-12 md:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="animate__animated  animate__fadeInLeftBig animate__delay-1s">
              <h1 className="text-4xl flex gap-3 font-bold text-black sm:text-6xl lg:text-7xl">
                About
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-main-color"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    {" "}
                    Company.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                At Your Company Name, we are committed to delivering innovative
                solutions that empower businesses to thrive in the digital era.
                Our team specializes in providing tailored strategies and
                cutting-edge technology to help you achieve your goals.
              </p>

              <p className="mt-4 text-base text-black sm:text-xl">
                From web development to comprehensive digital transformation,
                Company is your trusted partner for growth and success.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-main-color"
                  role="button"
                >
                  {" "}
                  Learn More{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                >
                  <svg
                    className="w-10 h-10 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#FF7713"
                      stroke="#FF7713"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch Our Story
                </a>
              </div>
            </div>

            <div className="animate__animated  anim animate__fadeInBottomRight">
              <img className="w-full" src={aboutimg} alt="Inetz Team" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
