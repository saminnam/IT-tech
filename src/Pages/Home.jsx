import React from "react";
import Hero from "../Components/Hero";
import OurFeatures from "../Components/OurFeatures";
import OurCourses from "../Components/OurCourses";
import WhyInetzTech from "../Components/WhyInetzTech";
import Stats from "../Components/Stats";
import Moto from "../Components/Moto";
import Testimonial from "../Components/Testimonial";
// import { OurCommitment } from "../Components/OurCommitment";
import Offer from "../Components/Offer";
import Catagory from "../Components/Catagory";
// import ConnectWithMentor from "../Components/ConnectWithMentor";
// import NewDummy from "../Components/NewDummy";
// import Faq from "../Components/Faq";
import OurTeam from "../Components/OurTeam";
import TestimonialVideos from "../Components/TestimonialVideos";
import JobReady from "../Components/JobReady";
import BrandTieUps from "../Components/BrandTieUps";

const Home = () => {
  return (
    <main>
      <Hero />
      <Catagory/>
      <OurTeam />
      <OurFeatures />
      <Stats />
      <OurCourses />
      <WhyInetzTech />
      <TestimonialVideos />
      <Moto />
      <Offer />
      <JobReady />
      <Testimonial />
      <BrandTieUps />
      {/* <NewDummy/> */}
      {/* <Faq/> */}
    </main>
  );
};

export default Home;
