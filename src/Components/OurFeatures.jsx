import React from "react";
import moreimg from "../assets/more-img (2).png";

const OurFeatures = () => {
  const list1 = [
    { id: 1, description: "Expert Trainers" },
    { id: 2, description: "Live & Interactive" },
    { id: 3, description: "Recorded session videos" },
    { id: 4, description: "Project-based training" },
  ];

  const list2 = [
    { id: 5, description: "Regular contests" },
    { id: 6, description: "Student presentations" },
    { id: 7, description: "Creative projects" },
    { id: 8, description: "Soft skills training" },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Image */}
          <div className="min-h-[530px] overflow-hidden rounded-md">
            <img
              src={moreimg}
              alt="More Info"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm text-main-color uppercase sm:text-xl">
              our features
            </p>

            <h1 className="mb-6 text-4xl font-bold md:text-2xl lg:mt-3 lg:mb-3">
              What Makes{" "}
              <span className="text-main-color">Your Company Name</span> the
              Leading Choice Among IT Training Institutes
            </h1>

            <p className="lg:text-[16px] text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>

            <div className="mb-3 mt-8 h-px w-full bg-black"></div>

            <div className="mb-3 ml-5 flex gap-16 flex-wrap text-sm text-gray-500 sm:text-base lg:mb-3">
              <ul>
                {list1.map((item) => (
                  <li key={item.id} className="list-disc mb-2">
                    {item.description}
                  </li>
                ))}
              </ul>
              <ul>
                {list2.map((item) => (
                  <li key={item.id} className="list-disc mb-2">
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <a
              href="#"
              title="More About Us"
              className="inline-flex items-center px-6 py-4 font-semibold bg-main-color text-white rounded-full transition-all duration-200 hover:scale-105"
              role="button"
            >
              MORE ABOUT US
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
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
