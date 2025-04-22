import React from "react";
import PageHeader from "../Components/PageHeader";
import ConnectWithMentor from "../Components/ConnectWithMentor";
import Moto from "../Components/Moto";
import PopularCourse from "../Components/PopularCourse";
import Stats from "../Components/Stats";

const Aluminis = () => {
  const teamMembers = [
    {
      name: "Jackie Sanders",
      role: "UI/UX Designer",
      image:
        "https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-03.jpg",
    },
    {
      name: "Nikolas Brooten",
      role: "Sales Manager",
      image:
        "https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-04.jpg",
    },
    {
      name: "Eleanor Wood",
      role: "Project Manager",
      image:
        "https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-01.jpg",
    },
    {
      name: "James Duncan",
      role: "Software Engineer",
      image:
        "https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-02.jpg",
    },
  ];
  return (
    <main>
      <PageHeader title={"Our Aluminis"} pageinfo={"Alumini"} />
      <section className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="py-12 md:py-16 lg:py-20">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="text-dark  mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                  Our Awesome Team
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            {teamMembers.map((teamMember, index) => (
              <div className="w-full px-4 md:w-1/2 xl:w-1/4" key={index}>
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg group border-b">
                    <img
                      src={teamMember.image}
                      alt="image"
                      className="w-full group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute bottom-[-100px] group-hover:bottom-5 duration-300 transition-all ease-linear left-0 w-full text-center">
                      <div className="relative mx-5 overflow-hidden rounded-lg bg-white  py-5 px-3">
                        <h3 className="text-dark  text-base font-semibold">
                          {teamMember.name}
                        </h3>
                        <p className=" text-xs">{teamMember.role}</p>
                        <div>
                          <span className="absolute left-0 bottom-0">
                            <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="16"
                                cy="45"
                                r="45"
                                fill="#13C296"
                                fillOpacity="0.11"
                              />
                            </svg>
                          </span>
                          <span className="absolute top-0 right-0">
                            <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="0.706257"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 0.706257 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 6.39669 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 12.0881 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 17.7785 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 0.706257 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 6.39669 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 12.0881 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 17.7785 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 0.706257 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 6.39669 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 12.0881 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 17.7785 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 0.706257 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 6.39669 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 12.0881 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 17.7785 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 0.706257 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 6.39669 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 12.0881 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 17.7785 1.58989)"
                                fill="#3056D3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Moto />
      <PopularCourse />
      <Stats />
    </main>
  );
};

export default Aluminis;
