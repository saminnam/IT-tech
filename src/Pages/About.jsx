import React from "react";
import PageHeader from "../Components/PageHeader";
import AboutFeature from "../Components/AboutFeature";
import PopularCourse from "../Components/PopularCourse";
import OurTeaching from "../Components/OurTeaching";
import Moto from "../Components/Moto";
import Offer from "../Components/Offer";
import WhatOurStudentsSaysAboutUs from "../Components/WhatOurStudentsSaysAboutUs";
import Faq from "../Components/Faq";
import { OurCommitment } from "../Components/OurCommitment";
import AboutIntro from "./AboutIntro";

const About = () => {
  return (
    <main>
      <PageHeader title={"About Us"} pageinfo={"about"} />
      <AboutIntro />
      <AboutFeature />
      <PopularCourse />
      <Moto />
      <OurTeaching />
      <OurCommitment />
      <Offer />
      <WhatOurStudentsSaysAboutUs />
      <Faq />
    </main>
  );
};

export default About;
