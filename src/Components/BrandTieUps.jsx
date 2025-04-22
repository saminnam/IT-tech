import React from 'react';

const BrandTieUps = () => {
  return (
    <section>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl mb-24">
            Companies that we have tie up with
          </h2>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {/* Updated Company Logos */}
            <img
              alt="Google"
              src="https://www.logodesign.net/logo-new/text-9364ld.png?nwm=1&nws=1&industry=text&txt_keyword=All"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Microsoft"
              src="https://www.logodesign.net/logo-new/text-9364ld.png?nwm=1&nws=1&industry=text&txt_keyword=All"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Amazon"
              src="https://www.logodesign.net/logo-new/text-9364ld.png?nwm=1&nws=1&industry=text&txt_keyword=All"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Infosys"
              src="https://www.logodesign.net/logo-new/text-9364ld.png?nwm=1&nws=1&industry=text&txt_keyword=All"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="TCS"
              src="https://www.logodesign.net/logo-new/text-9364ld.png?nwm=1&nws=1&industry=text&txt_keyword=All"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Capgemeni"
              src="https://www.logodesign.net/logo-new/text-9364ld.png?nwm=1&nws=1&industry=text&txt_keyword=All"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTieUps;
