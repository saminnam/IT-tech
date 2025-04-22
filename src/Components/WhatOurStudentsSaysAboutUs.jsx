import React from "react";

const testimonials = [
  {
    id: 1,
    message:
      "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”",
    name: "Devon Lane",
    role: "President of Sales",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg",
  },
  {
    id: 2,
    message:
      "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”",
    name: "Ronald Richards",
    role: "Marketing Coordinator",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg",
  },
  {
    id: 3,
    message:
      "“This is a top quality product. No need to think twice before making it live on web.”",
    name: "Jane Cooper",
    role: "Dog Trainer",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg",
  },
  {
    id: 4,
    message:
      "“Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.”",
    name: "Theresa Webb",
    role: "Web Designer",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg",
  },
  {
    id: 5,
    message:
      "“My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”",
    name: "Darlene Robertson",
    role: "Medical Assistant",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg",
  },
  {
    id: 6,
    message:
      "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”",
    name: "Floyd Miles",
    role: "Nursing Assistant",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg",
  },
];

const WhatOurStudentsSaysAboutUs = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-11">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-center">
            What Our Students Says About Us
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map(({ id, message, name, role, avatar }) => (
            <div
              key={id}
              className="flex flex-col bg-white border border-gray-200 rounded-md"
            >
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">{message}</p>
                  </blockquote>
                </div>
                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src={avatar}
                      alt={name}
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        {name}
                      </p>
                      <p className="text-base text-gray-500 truncate">{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatOurStudentsSaysAboutUs;
