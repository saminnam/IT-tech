import React from "react";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, pageinfo }) => {
  const Navigate = useNavigate();
  return (
    <section className=" flex items-center justify-center bg-pageheader-pattern bg-cover py-24 mt-20 flex-col gap-4">
      <h2 className="text-3xl uppercase font-bold leading-tight text-black sm:text-4xl lg:text-6xl animate__animated animate__jackInTheBox">
        {title}
      </h2>
      <h3 className="uppercase text-xl font-semibold leading-tight">
        <span
          className="text-main-color cursor-pointer"
          onClick={() => Navigate("/")}
        >
          Home
        </span>
        <span> / </span>
        <span>{pageinfo}</span>
      </h3>
    </section>
  );
};

export default PageHeader;
