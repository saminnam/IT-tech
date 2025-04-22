import React from "react";
import courses from "../Data/Course";
import { Link } from "react-router-dom";

const OurCourses = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Courses Offered By Us
          </h2>
          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Explore our wide range of professional courses.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 lg:gap-6">
            {courses.map((course) => (
              <Link
                key={course.id}
                to={`/courseDetail/${encodeURIComponent(course.title)}`}
                className="flex flex-col gap-4 rounded-md border-none shadow-lg border-gray-300 p-6 hover:scale-105 ease-in-out"
              >
                <img
                  src={course.imgSrc}
                  alt={course.name}
                  className="h-60 object-cover rounded-sm"
                />
                <div className="py-4">
                  <p className="mb-4 text-sm font-semibold uppercase text-main-color">
                    {course.category}
                  </p>
                  <p className="mb-4 text-xl flex items-center justify-between font-semibold">
                    {course.title}
                    <svg
                      width="24"
                      height="28"
                      viewBox="0 0 24 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00006 21L17.0001 11M17.0001 11H7.00006M17.0001 11V21"
                        stroke="#101828"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                  <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                    {course.cardDescription}
                  </p>
                  <div className="flex justify-evenly items-center">
                    <p>{course.duration}</p>
                    <span className="text-main-horizontal-stroke">|</span>
                    <p>{course.hours}</p>
                    <span className="text-main-horizontal-stroke">|</span>
                    <p>{course.tools}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
