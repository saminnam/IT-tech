import React, { useState } from "react";
import heroimg from "../assets/hero-sec.png";
import realworld from "../assets/real-world-projects.png";
import industryleading from "../assets/industry-leading.png";
import excellenceteacing from "../assets/excellence-teaching.png";
// import WhatsAppIcon from "./WhatsAppIcon";
import "animate.css";
import BookFreeDemo from "./BookFreeDemo";
// import { motion } from "framer-motion";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative h-screen lg:pt-7 pt-11 overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full white [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div></div>
        </div>
      </div>

      <div className="relative bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="animate__animated animate__bounceInDown">
              <p className="text-base font-semibold tracking-wider text-main-color flex items-center gap-3 uppercase">
                {" "}
                <span className="material-symbols-outlined">trending_up</span>
                Discover a Life-Changing Learning Journey
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl md:text-7xl">
                Unlock Your Future with Tech Skills.
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                {" "}
                Discover a Life-Changing Learning Journey
              </p>

              <a
                href="#"
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold  bg-main-color text-white rounded-full lg:mt-10 transition-all duration-200 hover:scale-105"
                role="button"
                onClick={() => setIsOpen(true)}
              >
                BOOK FREE DEMO
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>

            <div>
              <img
                className="w-full animate__animated animate__bounceInRight animate__delay-1s"
                src={heroimg}
                alt=""
              />
              <div>
                <img
                  src={industryleading}
                  alt=""
                  className="absolute bottom-[180px] right-16 w-64 animate-bounceCustom"
                  style={{ animationDuration: "1s" }}
                />
                <img
                  src={realworld}
                  alt=""
                  className="absolute bottom-[550px] right-[380px] w-60 animate-bounceCustom"
                  style={{ animationDuration: "2s" }}
                />
                <img
                  src={excellenceteacing}
                  alt=""
                  className="absolute bottom-[180px] right-[550px] w-60 animate-bounceCustom"
                  style={{ animationDuration: "3s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookFreeDemo isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default Hero;
