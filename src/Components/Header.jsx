import React, { useState, useEffect } from "react";
import logo from "../assets/Inetz-logo.png";
import { Link } from "react-router-dom";
import courses from "../Data/Course";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 140);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };
  const WhyInetzLinks = [
    { label: "CAREER SERVICES", path: "/careerservice" },
    { label: "ALUMNI", path: "/alumini" },
  ];

  const MoreLinks = [
    { label: "BLOGS", path: "/blog" },
    { label: "BECOME A MENTOR", path: "/becomementor" },
    { label: "HIRE FROM Us", path: "/hirefromus" },
  ];
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsSidebarOpen(false);
  };

  return (
    <header
      className={`${
        isScrolled
          ? "fixed top-0  bg-white shadow-md py-2"
          : "lg:absolute top-0 fixed bg-white  lg:bg-transparent py-3"
      } inset-x-0 z-50 transition-all ease-linear`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <nav
          className={`flex items-center justify-between  transition ease-linear animate__animated animate__fadeInDownBig`}
        >
          <Link to={"/"} className="flex">
            <img className="w-28" src={logo} alt="Logo" />
          </Link>

          {/* Hamburger Button (Mobile) */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center gap-10">
            <Link
              to={"/"}
              className="text-base font-medium text-black transition-all duration-200 hover:text-main-color focus:text-main-color"
            >
              HOME
            </Link>
            <Link
              to={"/aboutus"}
              className="text-base font-medium text-black transition-all duration-200 hover:text-main-color focus:text-main-color"
            >
              ABOUT
            </Link>
            <div className="relative w-max mx-auto">
              <button
                type="button"
                onMouseEnter={() => toggleDropdown("courses")}
                onMouseLeave={() => toggleDropdown(null)}
                aria-expanded={activeDropdown === "courses"}
                aria-controls="courses-dropdown"
                className="text-base font-medium text-black transition-all duration-200 hover:text-main-color focus:text-main-color h-auto "
              >
                COURSES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-black inline ml-3"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul
                id="courses-dropdown"
                onMouseEnter={() => toggleDropdown("courses")}
                onMouseLeave={() => toggleDropdown(null)}
                className={`absolute ${
                  activeDropdown === "courses"
                    ? " opacity-100 translate-y-0"
                    : "top-0 opacity-0 translate-y-[-100%]"
                } shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-0 min-w-full transition-all duration-300 w-max divide-y max-h-96 overflow-auto`}
                aria-expanded={activeDropdown === "courses" ? "true" : "false"}
              >
                {courses.map((course, index) => (
                  <li
                    className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer"
                    key={index}
                  >
                    <Link
                      to={`/courseDetail/${encodeURIComponent(course.title)}`}
                    >
                      {" "}
                      {course.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-max mx-auto">
              <button
                type="button"
                onMouseEnter={() => toggleDropdown("whyInetz")}
                onMouseLeave={() => toggleDropdown(null)}
                aria-expanded={activeDropdown === "whyInetz"}
                aria-controls="whyInetz-dropdown"
                className="text-base font-medium text-black transition-all duration-200 hover:text-main-color focus:text-main-color h-auto"
              >
                WHY INETZ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-black inline ml-3"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul
                id="whyInetz-dropdown"
                onMouseEnter={() => toggleDropdown("whyInetz")}
                onMouseLeave={() => toggleDropdown(null)}
                className={`absolute ${
                  activeDropdown === "whyInetz"
                    ? "opacity-100 translate-y-0"
                    : "top-0 opacity-0 translate-y-[-100%]"
                } shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-0 min-w-full transition-all duration-300 w-max divide-y max-h-96 overflow-auto`}
                aria-expanded={activeDropdown === "whyInetz" ? "true" : "false"}
              >
                {WhyInetzLinks.map((item, index) => (
                  <li
                    key={index}
                    className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer"
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* MORE Dropdown */}
            <div className="relative w-max mx-auto">
              <button
                type="button"
                onMouseEnter={() => toggleDropdown("more")}
                onMouseLeave={() => toggleDropdown(null)}
                aria-expanded={activeDropdown === "more"}
                aria-controls="more-dropdown"
                className="text-base font-medium text-black transition-all duration-200 hover:text-main-color focus:text-main-color h-auto"
              >
                MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-black inline ml-3"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul
                id="more-dropdown"
                onMouseEnter={() => toggleDropdown("more")}
                onMouseLeave={() => toggleDropdown(null)}
                className={`absolute ${
                  activeDropdown === "more"
                    ? "opacity-100 translate-y-0"
                    : "top-0 opacity-0 translate-y-[-100%]"
                } shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-0 min-w-full transition-all duration-300 w-max divide-y max-h-96 overflow-auto`}
                aria-expanded={activeDropdown === "more" ? "true" : "false"}
              >
                {MoreLinks.map((item, index) => (
                  <li
                    key={index}
                    className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer"
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us and Sidebar Button */}
          <div className="lg:flex hidden  items-center gap-7">
            <Link
              to="contact"
              className="hidden lg:inline-flex items-center justify-center text-sm px-6 py-4  font-semibold  bg-main-color text-white rounded-full  transition-all duration-200 hover:scale-105"
            >
              CONTACT US{" "}
            </Link>
            <button
              onClick={toggleSidebar}
              className="hidden lg:inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isSidebarOpen
                      ? "M6 18L18 6M6 6l12 12" // Cross icon when the sidebar is open
                      : "M4 6h16M4 12h16M4 18h16" // Three horizontal lines with added spacing
                  }
                />
              </svg>
            </button>
          </div>
        </nav>

        <div
          className={`fixed top-0 right-0 z-50 hidden lg:grid h-full w-auto p-7 bg-white shadow-md transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="">
            <button
              onClick={toggleSidebar}
              className="self-end mb-4 text-gray-500 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-4xl font-semibold text-main-color mb-8">
              Contact Us
            </h2>
            <div className="mb-2 text-lg text-gray-700 flex gap-7 items-start">
              <div className="bg-main-color bg-opacity-25 text-main-color text-xl rounded-md flex items-center justify-center w-14 h-14">
                <i className="bi bi-geo-alt-fill text-xl" />
              </div>
              <p className="mb-2 text-base text-gray-700 w-80">
                2nd Floor, Landmark :, Bus Depot, D-2, Doshi Garden Shopping
                Mall, Arcot Rd, opposite Vadapalani, Vadapalani, Chennai, Tamil
                Nadu 600026
              </p>
            </div>

            <div className="mb-2 text-lg text-gray-700 flex gap-7 items-center">
              <div className="bg-main-color bg-opacity-25 text-main-color text-xl rounded-md flex items-center justify-center w-14 h-14">
                <i className="bi bi-telephone-x-fill text-xl" />
              </div>
              <p className="mb-2 text-base text-gray-700 w-60">
                9840234475/9884468682
              </p>
            </div>

            <div className="mb-2 text-lg text-gray-700 flex gap-7 items-center">
              <div className="bg-main-color bg-opacity-25 text-main-color text-xl rounded-md flex items-center justify-center w-14 h-14">
                <i className="bi bi-envelope-at-fill text-xl" />
              </div>
              <p className="mb-2 text-base text-gray-700 w-60">
                info@inetztech.com
              </p>
            </div>

            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.793546612263!2d80.20497007512417!3d13.048809387273707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c25466a091%3A0xa9fabaefc160ac8a!2sInetz%20Technologies%20Pvt%20Ltd%20-Vadapalani%20%7C%20Best%20Software%20Training%20Institute%20in%20Chennai%7C%20Free%20Placement%20%7C%20Internship%20training%20%7C!5e0!3m2!1sen!2sin!4v1733041603705!5m2!1sen!2sin"
                loading="lazy"
                className="w-full rounded-lg h-52"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-md transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div className="p-4">
            <button
              onClick={toggleMenu}
              className="self-end mb-4 text-gray-500 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {["HOME", "COURSES", "ABOUT US", "MORE"].map((item) => (
              <Link
                key={item}
                to="#"
                className="block py-2 text-base font-medium text-black transition-all duration-200 hover:text-main-color"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Backdrop when the sidebar/menu is open */}
        {(isSidebarOpen || isMenuOpen) && (
          <div
            onClick={closeMenus}
            className="fixed inset-0 bg-black opacity-50 z-30"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
