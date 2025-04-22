import React from "react";

const CompanyGrowth = () => {
  return (
    <section>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex items-start flex-col gap-4 lg:w-7/12 w-full mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Company Growth</h2>
          <p className="text-gray-600 text-lg">
            For your company, Inetz is the one-stop shop for hiring skilled
            candidates with relevant experience. With just one click and no
            expense, hire the top candidates for positions in Web Development,
            digital marketing, full stack Java development, and other fields.
          </p>
        </div>
        {/* Component */}
        <div className="grid items-center justify-items-stretch gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-7xl text-main-color">
                <span className=""> 6+ </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Years in business
              </p>
              <p className="text-base mt-0.5 text-gray-500">
                We’ve helped over 4,000 amazing global companies.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-7xl text-main-color">
                <span className=""> 6+ </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Projects delivered
              </p>
              <p className="text-base mt-0.5 text-gray-500">
                Our customers have reported an average of ~600% ROI.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-7xl text-main-color">
                <span className=""> 6+ </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Team members
              </p>
              <p className="text-base mt-0.5 text-gray-500">
                WOur app has been downloaded over 10k times.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-7xl text-main-color">
                <span className=""> 6+ </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Team members
              </p>
              <p className="text-base mt-0.5 text-gray-500">
                We’re proud of our 5-star rating with over 200 reviews.
              </p>
            </div>
          </div>
          {/* Hero Image */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
            alt=""
            className="inline-block h-full w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyGrowth;
