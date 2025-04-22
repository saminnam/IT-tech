import React, { useState, useCallback } from "react";
import Moto from "../Components/Moto";
import contactimg from "../assets/contactimg.jpg";
import PageHeader from "../Components/PageHeader";
import PopularCourse from "../Components/PopularCourse";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  // Validation functions
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);

  const validateInput = useCallback((field, value) => {
    let error = "";
    switch (field) {
      case "firstName":
        if (!value.trim()) error = "First name is required";
        break;
      case "lastName":
        if (!value.trim()) error = "Last name is required";
        break;
      case "email":
        if (!validateEmail(value)) error = "Invalid email format";
        break;
      case "phoneNumber":
        if (!validatePhoneNumber(value)) error = "Invalid phone number";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateInput(name, value);
  }, [validateInput]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: formData.firstName.trim() === "" ? "First name is required" : "",
      lastName: formData.lastName.trim() === "" ? "Last name is required" : "",
      email: !validateEmail(formData.email) ? "Invalid email format" : "",
      phoneNumber: !validatePhoneNumber(formData.phoneNumber) ? "Invalid phone number" : "",
      message: formData.message.trim() === "" ? "Message is required" : "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      setIsSubmitting(true);
      setApiError("");

      try {
        await axios.post("http://localhost:3000/api/contact", formData);
        console.log("Form submitted successfully");

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        setApiError("Failed to send message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section>
      <PageHeader title="CONTACT US" pageinfo="Contact" />
      <div className="flex lg:flex-row flex-col gap-6 items-center justify-between mt-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Form Section */}
        <div className="md:w-[500px] w-full">
          <div className="flex flex-col gap-3 mb-5">
            <h1 className="font-semibold text-4xl">Get in touch</h1>
            <p className="text-lg text-gray-600">Our friendly team would love to hear from you.</p>
          </div>

          <form className="flex flex-col items-center gap-4 w-full" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between w-full gap-4 lg:flex-row flex-col">
              {/* First Name */}
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="firstName" className="text-black font-medium text-sm">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`border rounded-md w-full py-2.5 ps-2 placeholder:font-medium ${
                    errors.firstName ? "border-red-500" : "border-main-gray"
                  }`}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="lastName" className="text-black font-medium text-sm">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`border rounded-md w-full py-2.5 ps-2 placeholder:font-medium ${
                    errors.lastName ? "border-red-500" : "border-main-gray"
                  }`}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
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
                value={formData.email}
                onChange={handleChange}
                className={`border rounded-md w-full py-2.5 ps-2 placeholder:font-medium ${
                  errors.email ? "border-red-500" : "border-main-gray"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="phoneNumber" className="text-black font-medium text-sm">
                Phone number
              </label>
              <input
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`border rounded-md w-full py-2.5 ps-2 placeholder:font-medium ${
                  errors.phoneNumber ? "border-red-500" : "border-main-gray"
                }`}
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message" className="text-black font-medium text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
                className={`border rounded-md w-full py-2.5 ps-2 placeholder:font-medium ${
                  errors.message ? "border-red-500" : "border-main-gray"
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* API Error Message */}
            {apiError && <p className="text-red-500 text-sm">{apiError}</p>}

            <button type="submit" className="w-full py-3 text-white font-medium bg-main-color rounded-md" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Send message"}
            </button>
          </form>
        </div>

        <div>
          <img src={contactimg} alt="Contact" className="w-[550px] h-[650px]" />
        </div>
      </div>
      <Moto />
      <PopularCourse />
    </section>
  );
};

export default Contact;
