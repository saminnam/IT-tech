import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg",
    reviewImg:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg",
    reviewAlt: "lineicon",
    details:
      "Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!",
    name: "Larry Diamond",
    position: "Chief Executive Officer.",
  },
  {
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg",
    reviewImg:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg",
    reviewAlt: "lineicon",
    details:
      "Magnam deleniti aliquid quaerat fuga corporis rerum voluptatem tempore. Nulla facere cupiditate accusamus laboriosam itaque animi dolor deserunt reprehenderit!",
    name: "Stella Johnson",
    position: "Software Engineer.",
  },
  {
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg",
    reviewImg:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg",
    reviewAlt: "lineicon",
    details:
      "Eveniet, unde. Similique rem necessitatibus distinctio velit totam suscipit officia ullam minus earum illum impedit ratione accusantium, cum repellat ab?",
    name: "John Doe",
    position: "Product Manager.",
  },
  {
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg",
    reviewImg:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg",
    reviewAlt: "lineicon",
    details:
      "Quisquam reprehenderit quidem odit labore nostrum eaque voluptatum doloribus. Libero distinctio culpa fuga exercitationem excepturi autem sequi officia.",
    name: "Anna Lee",
    position: "UX Designer.",
  },
  {
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg",
    reviewImg:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg",
    reviewAlt: "lineicon",
    details:
      "Aliquam quaerat explicabo atque quisquam molestias quibusdam necessitatibus delectus! Modi reprehenderit doloribus dolorum accusamus autem voluptatem laudantium harum beatae.",
    name: "Mike Ross",
    position: "Legal Consultant.",
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="py-10 bg-testimonial-pattern bg-no-repeat bg-cover sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-11">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            What Our Students Say About Us
          </h2>
        </div>
        <Swiper slidesPerView={1} ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <SingleTestimonial {...testimonial} />
            </SwiperSlide>
          ))}
          <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-5 sm:bottom-0">
            <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
              <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke  text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial bg-main-color  dark:hover:drop-shadow-none">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M17.5 9.5H4.15625L9.46875 4.09375C9.75 3.8125 9.75 3.375 9.46875 3.09375C9.1875 2.8125 8.75 2.8125 8.46875 3.09375L2 9.65625C1.71875 9.9375 1.71875 10.375 2 10.6562L8.46875 17.2188C8.59375 17.3438 8.78125 17.4375 8.96875 17.4375C9.15625 17.4375 9.3125 17.375 9.46875 17.25C9.75 16.9687 9.75 16.5313 9.46875 16.25L4.1875 10.9062H17.5C17.875 10.9062 18.1875 10.5937 18.1875 10.2187C18.1875 9.8125 17.875 9.5 17.5 9.5Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
            <div className="next-arrow cursor-pointer" onClick={handleNext}>
              <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke  text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial bg-main-color  dark:hover:drop-shadow-none">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M18 9.6875L11.5312 3.125C11.25 2.84375 10.8125 2.84375 10.5312 3.125C10.25 3.40625 10.25 3.84375 10.5312 4.125L15.7812 9.46875H2.5C2.125 9.46875 1.8125 9.78125 1.8125 10.1562C1.8125 10.5312 2.125 10.875 2.5 10.875H15.8437L10.5312 16.2813C10.25 16.5625 10.25 17 10.5312 17.2813C10.6562 17.4063 10.8437 17.4688 11.0312 17.4688C11.2187 17.4688 11.4062 17.4062 11.5312 17.25L18 10.6875C18.2812 10.4062 18.2812 9.96875 18 9.6875Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

const SingleTestimonial = ({
  image,
  reviewImg,
  reviewAlt,
  details,
  name,
  position,
}) => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12">
        <div className="w-full items-center md:flex">
          <div className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
            <img src={image} alt="image" className="w-full" />
          </div>
          <div className="w-full">
            <div>
              <div className="mb-7">
                <img src={reviewImg} alt={reviewAlt} />
              </div>
              <p className="mb-11 text-base font-normal italic leading-[1.81] text-black sm:text-[22px]">
                {details}
              </p>
              <h4 className="mb-2 text-[22px] font-semibold leading-[27px] ">
                {name}
              </h4>
              <p className="text-base text-black">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
