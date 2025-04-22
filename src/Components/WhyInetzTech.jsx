import React from "react";
import whyUsImg1 from "../assets/why-intez-img-1.png";

const WhyInetzTech = () => {
  const content = [
    {
      title: "Made for Developers",
      icon: whyUsImg1, // Use the image for the first item
      description:
        "We follow a student-centered teaching methodology that includes personalized attention, unlimited lab hours, individual tasks & assessments, recorded class videos for reference, student presentation sessions to boost confidence, etc.",
      // Indicates this item uses an image instead of an SVG
    },
    {
      icon: whyUsImg1, // Use the image for the first item
      title: "Expert & Friendly trainers",
      description:
        "Besides being experts in their fields, all our trainers are friendly and helpful. They know that it's their responsibility to ensure that their students get good jobs, so they give them as much guidance as possible to improve their skills.",
      // Indicates this item uses an image instead of an SVG
    },

    {
      icon: whyUsImg1, // Use the image for the first item
      title: "SOAP",
      description: `We follow an academic system called SOAP
(Student Output Assessment Plan). All our courses
have 20+ student tasks in them, which are similar to
real-time projects. We make sure that our students
complete these tasks, and we also offer them
constructive feedback.`,
      // Indicates this item uses an image instead of an SVG
    },
    {
      icon: whyUsImg1, // Use the image for the first item
      title: "100% Placement record",
      description: `We have an exclusive career site and a specialized
HR team to assist our students in getting
placement. We continue to provide placement
support until a student secures a job.`,
      // Indicates this item uses an image instead of an SVG
    },
  ];

  return (
    <section className="bg-section-pattern bg-no-repeat bg-cover bg-opacity-100  py-12 md:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Why Your Company Name
          </h2>
          <p className="text-main-gray text-wrap pt-4">
            Listed below are some features that have made us the industry leader
            in the courses we offer.
          </p>
        </div>

        <div className="  mt-12  lg:mt-20">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
            {content.map((item, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-start"
              >
                <img src={item.icon} alt={item.title} className="w-56 h-52" />

                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInetzTech;
