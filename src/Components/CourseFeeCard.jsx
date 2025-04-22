import React from "react";
import courseimg from "../assets/side-logo-img.jpg.png";

const CourseFeeCard = ({
  isOpen,
  setIsOpen,
  courseFees,
  isCourseopen,
  setIsCourseOpen,
}) => {
  return (
    <div>
      <div className="w-full shadow-md border border-gray-200 rounded-md px-12 py-9 flex flex-col gap-2  items-center">
        <div className="w-full text-center flex flex-col gap-2">
          <h4 className="text-xl font-semibold">Course Fee</h4>
          <div className="outer rounded-md">
            <div className="inner bg-main-color border-none rounded-md"></div>
          </div>
        </div>

        <img src={courseimg} alt="" className="w-full" />
        <div>
          <h1 className="text-main-color text-lg font-semibold">
            {courseFees} <span className="text-black text-xs">(incl gst)</span>
          </h1>
        </div>
        <button
          className="w-full bg-main-color py-4 text-[16px] text-white rounded-md cursor-pointer"
          onClick={() => setIsCourseOpen(true)}
        >
          Course Enquiry
        </button>
        <button
          className="w-full bg-main-color py-4 text-[16px] text-white rounded-md cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default CourseFeeCard;
