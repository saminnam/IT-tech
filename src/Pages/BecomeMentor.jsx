import React from 'react';
import PageHeader from '../Components/PageHeader';

const BecomeMentor = () => {
  return (
    <main>
      <PageHeader title={'Become A Mentor'} pageinfo={'Become A Mentor'} />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-10 py-10">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-center w-full lg:w-2xl mx-auto">
          Apply to Become a Mentor at Intex Technologies
        </h2>

        <form className="bg-white shadow-xl rounded-lg p-10 space-y-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-lg font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-main-color"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-main-color"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-semibold text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-main-color"
                required
              />
            </div>

            {/* Experience */}
            <div>
              <label
                htmlFor="experience"
                className="block text-lg font-semibold text-gray-700"
              >
                Years of Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                placeholder="Enter your years of experience"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-main-color"
                required
              />
            </div>

            {/* Expertise */}
            <div className="col-span-2">
              <label
                htmlFor="expertise"
                className="block text-lg font-semibold text-gray-700"
              >
                Areas of Expertise
              </label>
              <textarea
                id="expertise"
                name="expertise"
                rows="4"
                placeholder="List your areas of expertise"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-main-color"
                required
              ></textarea>
            </div>

            {/* Interested Position */}
            <div>
              <label
                htmlFor="position"
                className="block text-lg font-semibold text-gray-700"
              >
                Interested Position/Tech Stack
              </label>
              <input
                type="text"
                id="position"
                name="position"
                placeholder="Enter the position or tech stack you want to teach"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-main-color"
                required
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label
                htmlFor="resume"
                className="block text-lg font-semibold text-gray-700"
              >
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-main-color"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-mainring-main-color bg-main-color text-white text-lg font-medium rounded-lg shadow-lg hover:from-main-color hover:to-main-color transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default BecomeMentor;
