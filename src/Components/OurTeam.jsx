import React from "react";

const instructors = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    role: "Digital Expert",
    image:
      "https://i.pinimg.com/736x/28/58/57/2858572fb701553cd4b9be320e84736c.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "John Doe",
    role: "Web Developer",
    image:
      "https://i.pinimg.com/736x/28/58/57/2858572fb701553cd4b9be320e84736c.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3, // Unique ID
    name: "Jane Smith",
    role: "UI/UX Designer",
    image:
      "https://i.pinimg.com/736x/28/58/57/2858572fb701553cd4b9be320e84736c.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 4, // Unique ID
    name: "Alice Johnson",
    role: "Data Scientist",
    image:
      "https://i.pinimg.com/736x/28/58/57/2858572fb701553cd4b9be320e84736c.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

const OurTeam = () => {
  return (
    <section className="bg-testimonial-pattern bg-cover">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm text-main-color uppercase sm:text-xl">
            Our INSTRUCTORS
          </h2>
          <h6 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our Expert Instructors
          </h6>
        </div>
        {/* Instructor Grid */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-[30px] md:gap-[15px]">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="text-center group">
              <div className="relative mb-[18px] overflow-hidden rounded-[12px]">
                <img
                  src={instructor.image}
                  alt={`${instructor.name} profile`}
                  className="w-full aspect-[270/320] object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="et-member-socials absolute right-[20px] md:right-[15px] top-[20px] md:top-[15px] z-[1]">
                  <div className="et-member-socials__icon w-[40px] md:w-[35px] aspect-square rounded-full border border-white flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <i className="fa-solid fa-share-nodes text-white group-hover:text-edpurple"></i>
                  </div>
                  <div className="et-speaker__socials flex flex-col gap-[8px] absolute -z-[2] text-[14px] opacity-0 transition duration-[400ms] top-[calc(100%+8px)] -translate-y-[50px] group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href={instructor.socials.facebook}
                      aria-label="Facebook"
                      className="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent transition-colors duration-300"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href={instructor.socials.linkedin}
                      aria-label="LinkedIn"
                      className="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent transition-colors duration-300"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                      href={instructor.socials.instagram}
                      aria-label="Instagram"
                      className="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent transition-colors duration-300"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h6 className="font-semibold text-[18px] text-edblue mb-[12px]">
                  <a
                    href="teacher-details.html"
                    className="hover:text-edyellow transition-colors duration-300"
                  >
                    {instructor.name}
                  </a>
                </h6>
                <span className="text-edgray">{instructor.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
