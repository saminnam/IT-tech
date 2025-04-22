// import { h1 } from "framer-motion/client";
import React from "react";

const Overview = ({ whyChoose, highlights, enroll, name }) => {
  const midIndex = Math.ceil(whyChoose.length / 2);
  const firstHalf = whyChoose.slice(0, midIndex);
  const secondHalf = whyChoose.slice(midIndex);
  return (
    <div>
      <div className="">
        <h3 className="text-[21px] font-bold text-gray-900 mb-4 ">
          Course Description
        </h3>
        <p className="w-full text-main-gray text-base">
          This Full Stack Development course by InetZ Tech is designed to equip
          you with the skills and knowledge needed to build dynamic, scalable,
          and efficient web applications. Covering both front-end and back-end
          technologies, this comprehensive course ensures you are ready to
          tackle real-world development challenges. Learn how to seamlessly
          integrate user interfaces with powerful server-side logic, manage
          databases efficiently, and deploy robust applications.
        </p>
      </div>
      <div className="w-full bg-main-color h-[1px] my-4"></div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mt-5 mb-4">
          Why {name} Is Top Among Other Courses?
        </h3>
        <ul className="flex justify-start gap-28  flex-wrap gap-y-4 mb-2 text-[main-dark-gray] text-[16px]">
          <div className="flex flex-col gap-3">
            {firstHalf.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="bg-main-color w-5 h-5 flex items-center justify-center rounded-full">
                  <i className="fa-solid fa-check-double text-white text-[11px]"></i>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <div className="bg-main-color w-5 h-5 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-check-double text-white text-[11px]"></i>
              </div>
              <span>Creative & Fun</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-main-color w-5 h-5 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-check-double text-white text-[11px]"></i>
              </div>
              <span>Easy to learn</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-main-color w-5 h-5 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-check-double text-white text-[11px]"></i>
              </div>
              <span>Stay Market Trend</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-main-color w-5 h-5 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-check-double text-white text-[11px]"></i>
              </div>
              <span>Growing opportunities</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-main-color w-5 h-5 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-check-double text-white text-[11px]"></i>
              </div>
              <span>Everlasting domain</span>
            </li>
          </div>
        </ul>
      </div>

      <p className="w-full text-main-gray text-base mt-4">
        InetZ Tech's Full Stack Development course provides hands-on projects,
        ensuring that you gain practical experience while learning. With expert
        instructors guiding you through every step, you'll emerge as a confident
        and job-ready developer.
      </p>
      <div className="w-full bg-main-color h-[1px] my-4"></div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mt-5 mb-4">
          Course Features:
        </h3>
        <ul className="flex flex-col justify-between flex-wrap gap-y-4   text-main-dark-gray text-[16px]">
          {highlights.map((items) => (
            <li className="flex items-center gap-3">
              <div className="bg-main-color w-5 h-5 flex  items-center justify-center rounded-full">
                <i className="fa-solid fa-check-double text-white text-[11px]"></i>
              </div>
              <span>{items}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="w-full text-main-gray text-base mt-4">{enroll}</p>
    </div>
  );
};

export default Overview;
