import React from "react";
import PageHeader from "../Components/PageHeader";
import CompanyGrowth from "../Components/CompanyGrowth";
import Features from "../Components/Features";
import Faq from "../Components/Faq";
import Moto from "../Components/Moto";

const HireFromUs = () => {
  return (
    <section>
      <PageHeader title={"HIRE FROM US"} pageinfo={"Hire From Us"} />
      <CompanyGrowth />
      <Features />
      <Faq />
      <Moto />
    </section>
  );
};

export default HireFromUs;
