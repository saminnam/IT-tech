import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import jobreadyimg from '../assets/jobreadybg.png'

const features = [
  {
    title: "MERN Stack Development",
    description:
      "Master MongoDB, Express.js, React.js, and Node.js to build full-stack web applications and become job-ready.",
    icon: faCode, // Correctly from free-solid-svg-icons
  },
  {
    title: "Python Full Stack",
    description:
      "Learn Python, Django, and front-end technologies to create dynamic, responsive applications for the modern web.",
    icon: faPython, // Correctly from free-brands-svg-icons
  },
  {
    title: "Java Full Stack",
    description:
      "Gain expertise in Java, Spring Boot, and front-end frameworks to excel in full-stack development.",
    icon: faJava, // Correctly from free-brands-svg-icons
  },
];

const JobReady = () => {
  return (
    <section className="bg-gray-50  py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Job-Ready Courses by Your Company Name
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Upskill with industry-relevant courses tailored to make you job-ready in the tech world.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-[230px] flex flex-col justify-center relative overflow-hidden group  ease-linear"
            >
           <div className='bg-transparent z-10 px-6'>
           <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-main-color group-hover:bg-transparent rounded-full duration-300 transition-all ease-linear">
                <FontAwesomeIcon icon={feature.icon} size="2x" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-800 group-hover:text-white text-center duration-300 transition-all ease-linear">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm text-gray-600  group-hover:text-white text-center duration-300 transition-all ease-linear">
                {feature.description}
              </p>
           </div>
           <div>
            <img src={jobreadyimg} alt="" className='w-full h-full absolute -bottom-64 group-hover:bottom-0 duration-300 transition-all ease-linear' />
           </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobReady;
