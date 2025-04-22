import React, { useState } from "react";
import contactimg from "../assets/contact-img (1).png";

const ConnectWithMentor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [youAre, setYouAre] = useState("");
  const [course, setCourse] = useState("");
  const [data, setData] = useState([]);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!/^\d{10}$/.test(contactNumber)) {
      newErrors.contactNumber = "Please enter a valid 10-digit phone number.";
    }
    if (!youAre) newErrors.youAre = "Please select your background.";
    if (!course) newErrors.course = "Please select a course.";
    return newErrors;
  };
  

  const handleSubmit = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    setData([
      ...data,
      {
        name: name,
        email: email,
        contactNumber: contactNumber,
        background: youAre,
        course: course,
      },
    ]);
    alert("Your request has been submitted!");
    setName("");
    setEmail("");
    setContactNumber("");
    setYouAre("");
    setCourse("");
  };

  return (
    <section className=" bg-opacity-20">
      <div className="me-auto flex lg:flex-row-reverse flex-col lg:gap-10 gap-10 lg:w-[90%] w-full items-center lg:justify-between justify-center lg:py-0 py-10 px-6 lg:px-0">
        <div className="flex flex-col gap-6">
          <div className="mb-5">
            <p className="text-sm flex items-center gap-2 text-main-color uppercase sm:text-xl">
              <i className="bi bi-journal-text"></i> Connect With Mentor
            </p>
            <h1 className="mb-6 text-4xl font-bold md:text-4xl lg:mt-3 lg:mb-3">
              Get your queries sorted out with our Tech Expert
            </h1>
            <p className="lg:text-[17px] text-gray-500 sm:text-xl">
              Feel free to reach out to our technology experts and get your
              queries sorted out!
            </p>
          </div>

          <div className="flex lg:w-[600px] w-full flex-wrap gap-6 lg:gap-0 justify-between items-center">
            <div className="w-full lg:w-[290px]">
              <input
                type="text"
                placeholder="Your Name*"
                className={`w-full shadow-md bg-white  placeholder:text-black py-4 ps-4 rounded-md focus:ring-2 ${
                  errors.name ? "border-red-500" : "focus:ring-main-color"
                } focus:outline-none`}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="w-full lg:w-[290px]">
              <input
                type="email"
                placeholder="Email-Id*"
                className={`w-full shadow-md bg-white  placeholder:text-black py-4 ps-4 rounded-md focus:ring-2 ${
                  errors.email ? "border-red-500" : "focus:ring-main-color"
                } focus:outline-none`}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="flex lg:w-[600px] w-full flex-wrap gap-6 lg:gap-0 justify-between items-center">
            <div className="w-full lg:w-[290px]">
              <input
                type="text"
                placeholder="Your Contact Number"
                className={`w-full shadow-md bg-white  placeholder:text-black py-4 ps-4 rounded-md focus:ring-2 ${
                  errors.contactNumber
                    ? "border-red-500"
                    : "focus:ring-main-color"
                } focus:outline-none`}
                onChange={(e) => setContactNumber(e.target.value)}
                value={contactNumber}
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactNumber}
                </p>
              )}
            </div>
            <div className="w-full lg:w-[290px]">
              <select
                className={`w-full shadow-md bg-white  py-4 px-4 rounded-md focus:ring-2 ${
                  errors.youAre ? "border-red-500" : "focus:ring-main-color"
                } focus:outline-none`}
                onChange={(e) => setYouAre(e.target.value)}
                value={youAre}
              >
                <option value="" disabled>
                  You are?
                </option>
                <option value="Student">Student</option>
                <option value="Working Professional">
                  Working Professional
                </option>
                <option value="Passed Out">Passed Out</option>
              </select>
              {errors.youAre && (
                <p className="text-red-500 text-sm mt-1">{errors.youAre}</p>
              )}
            </div>
          </div>

          <div>
            <select
              className={`lg:w-[290px] w-full bg-white  shadow-md py-4 ps-4 rounded-md focus:ring-2 ${
                errors.course ? "border-red-500" : "focus:ring-main-color"
              } focus:outline-none`}
              onChange={(e) => setCourse(e.target.value)}
              value={course}
            >
              <option value="" disabled>
                Select a Course
              </option>
              <option value="Full Stack Development">
                Full Stack Development
              </option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="UI/UX Designing">UI/UX Designing</option>
              <option value="Frontend Development">
                Frontend Development
              </option>
              <option value="Backend Development">Backend Development</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
            </select>
            {errors.course && (
              <p className="text-red-500 text-sm mt-1">{errors.course}</p>
            )}
          </div>

          <div>
            <button
              onClick={handleSubmit}
              className="w-[200px] bg-main-color font-semibold py-4 rounded-md shadow-md hover:bg-opacity-90 transition duration-200"
            >
              Request a Call Back
            </button>
          </div>
        </div>

        <img src={contactimg} alt="Contact" className="lg:w-[700px] w-full" />
      </div>
    </section>
  );
};

export default ConnectWithMentor;
