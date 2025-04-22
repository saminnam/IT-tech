import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import courses from "../Data/Course.jsx";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const PopularCourse = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-popular-pattern bg-cover bg-no-repeat">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center lg:text-left mb-10">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our Popular Courses
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>
        <div className="hidden lg:flex lg:items-center justify-end my-4 lg:space-x-3 ">
          <button
            type="button"
            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-main-color hover:text-white focus:bg-main-color focus:text-white"
            onClick={() => swiperRef.current?.slidePrev()}
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-main-color hover:text-white focus:bg-main-color focus:text-white"
            onClick={() => swiperRef.current?.slideNext()}
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="overflow-hidden bg-white rounded shadow ">
                <div className="relative">
                  <img
                    className="object-cover w-full h-64 group-hover:scale-125"
                    src={course.imgSrc}
                    alt={course.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x300";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-main-color rounded-3xl">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="block text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {course.date}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold">
                    <Link
                      key={course.id}
                      to={`/courseDetail/${encodeURIComponent(course.title)}`}
                      href="#"
                      className="text-black"
                    >
                      {course.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    {course.cardDescription}
                  </p>
                  <div className="flex justify-start mt-4 gap-5 items-center">
                    <p>{course.duration}</p>
                    <span className="text-main-horizontal-stroke">|</span>
                    <p>{course.hours}</p>
                    <span className="text-main-horizontal-stroke">|</span>
                    <p>{course.tools}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
          <button
            type="button"
            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-main-color hover:text-white focus:bg-main-color focus:text-white"
            onClick={() => swiperRef.current?.slidePrev()}
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-main-color hover:text-white focus:bg-main-color focus:text-white"
            onClick={() => swiperRef.current?.slideNext()}
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;
