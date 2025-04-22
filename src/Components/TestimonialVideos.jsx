import React from "react";

const TestimonialVideos = () => {
  return (
    // GALLERY SECTION START
    <div className="">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] lg:gap-[20px]">
          {/* Left Column */}
          <div className="space-y-[30px] lg:space-y-[20px]">
            <div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
              <img
                src="https://edutics.temptics.com/assets/img/gallery-img-3.jpg"
                alt="gallery image"
                className="w-full aspect-square object-cover"
              />
              <a
                data-fslightbox="gallery"
                className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-Blue"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
              <img
                src="https://edutics.temptics.com/assets/img/gallery-img-2.jpg"
                alt="gallery image"
                className="w-full aspect-square object-cover"
              />
              <a
                data-fslightbox="gallery"
                className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>

          {/* Middle Column */}
          <div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
            <img
              src="https://edutics.temptics.com/assets/img/gallery-img-big.jpg"
              alt="gallery image"
              className="w-full aspect-square object-cover" // Added aspect-square
            />
            <a
              data-fslightbox="gallery"
              className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue"
            >
              <i className="fa fa-play"></i>
            </a>
          </div>

          {/* Right Column */}
          <div className="space-y-[30px] lg:space-y-[20px]">
            <div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
              <img
                src="https://edutics.temptics.com/assets/img/gallery-img-1.jpg"
                alt="gallery image"
                className="w-full aspect-square object-cover"
              />
              <a
                data-fslightbox="gallery"
                className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
              <img
                src="https://edutics.temptics.com/assets/img/gallery-img-4.jpg"
                alt="gallery image"
                className="w-full aspect-square object-cover"
              />
              <a
                data-fslightbox="gallery"
                className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideos;
