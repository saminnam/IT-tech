import React, { useState } from "react";
import Moto from "../Components/Moto";
import contactimg from "../assets/contactimg.jpg";
import PageHeader from "../Components/PageHeader";

const Contact = () => {
  // States for inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // States for errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // Validation functions
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);

  const validateInput = (field, value) => {
    let error = "";
    if (field === "firstName" && value.trim() === "") {
      error = "First name is required";
    } else if (field === "lastName" && value.trim() === "") {
      error = "Last name is required";
    } else if (field === "email" && !validateEmail(value)) {
      error = "Invalid email format";
    } else if (field === "phoneNumber" && !validatePhoneNumber(value)) {
      error = "Invalid phone number";
    } else if (field === "message" && value.trim() === "") {
      error = "Message is required";
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // Handle input change
  const handleChange = (field, value) => {
    switch (field) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
    validateInput(field, value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: firstName.trim() === "" ? "First name is required" : "",
      lastName: lastName.trim() === "" ? "Last name is required" : "",
      email: !validateEmail(email) ? "Invalid email format" : "",
      phoneNumber: !validatePhoneNumber(phoneNumber)
        ? "Invalid phone number"
        : "",
      message: message.trim() === "" ? "Message is required" : "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("Form submitted successfully:", {
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      });
    }
  };

  return (
    <section>
      <PageHeader title={"CONTACT US"} />
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 items-center justify-between mt-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Form Section */}
        <div className="md:w-[500px] w-full">
          <div className="flex flex-col gap-3 mb-5">
            <h1 className="font-semibold text-4xl">Get in touch</h1>
            <p className="text-lg text-gray-600">
              Our friendly team would love to hear from you.
            </p>
          </div>
          <form
            className="flex flex-col items-center gap-4 w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center justify-between w-full lg:gap-6 gap-4 lg:flex-row flex-col">
              {/* First Name */}
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="firstName"
                  className="text-black font-medium text-sm"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="border border-main-gray rounded-md w-full py-2.5 ps-2 placeholder:font-medium placeholder:text-main-gray"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="lastName"
                  className="text-black font-medium text-sm"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="border border-main-gray rounded-md w-full py-2.5 ps-2 placeholder:font-medium placeholder:text-main-gray"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-black font-medium text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="border border-main-gray rounded-md w-full py-2.5 ps-2 placeholder:font-medium placeholder:text-main-gray"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            {/* Phone Number */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="phoneNumber"
                className="text-black font-medium text-sm"
              >
                Phone number
              </label>
              <input
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                className="border border-main-gray rounded-md w-full py-2.5 ps-2 placeholder:font-medium placeholder:text-main-gray"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              )}
            </div>
            {/* Message */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="message"
                className="text-black font-medium text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message..."
                value={message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="border border-main-gray rounded-md w-full py-2.5 ps-2 placeholder:font-medium placeholder:text-main-gray"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white font-medium bg-main-color rounded-md"
            >
              Send message
            </button>
          </form>
        </div>
        {/* Image Section */}
        <div>
          <img src={contactimg} alt="Contact" className="w-[550px] h-[650px]" />
        </div>
      </div>
      <Moto />
    </section>
  );
};

export default Contact;
