import React from "react";

const Stats = () => {
  return (
    <section className="py-10 bg-hero-pattern bg-no-repeat bg-cover bg-fixed sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8  text-center sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-main-color">
                {" "}
                6+{" "}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-white">
              Years in business
            </p>
            <p className="text-base mt-0.5 text-white">
              Creating the successful path
            </p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-main-color">
                {" "}
                4821{" "}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-white">
              Projects delivered
            </p>
            <p className="text-base mt-0.5 text-white">In last 6 years</p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-main-color">
                {" "}
                37+{" "}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-white">Team members</p>
            <p className="text-base mt-0.5 text-white">
              Working for your success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
