import React from "react";
import spiral from "../assets/spiral.png";
import offerimg from "../assets/Offer-img.png";

const Offer = () => {
  return (
    <section className="bg-offer-pattern bg-no-repeat bg-cover overflow-hidden bg-inherit bg-opacity-30">
      <div className="flex justify-between items-center mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-start gap-4 lg:w-[650px] w-full">
          <h3 className=" text-3xl font-bold  sm:text-[40px]/[48px] text-white ">
            15% Offer For All Categories Courses
          </h3>
          <div className="flex items-end gap-5">
            <button className=" px-4 py-3 text-base font-semibold text-white bg-[#F8BC24] rounded-md transition-all duration-200 hover:scale-105">
              Join Courses
            </button>
            <img src={spiral} alt="" className="w-14" />
          </div>
        </div>
        <img src={offerimg} alt="" className="w-[380px] relative top-5" />
      </div>
    </section>
  );
};

export default Offer;
