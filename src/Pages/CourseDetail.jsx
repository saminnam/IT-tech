import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import courseimg from '../assets/courses_img_1.jpg.png';
import PageHeader from '../Components/PageHeader';
import Overview from '../Components/Overview';
import Syllabus from '../Components/Syllabus';
import CourseFeeCard from '../Components/CourseFeeCard';
import StudentsActivities from '../Components/StudentsActivities';
import courses from '../Data/Course';
import BookFreeDemo from '../Components/BookFreeDemo';
import CourseApplication from '../Components/CourseEnquiry';


const CourseDetail = () => {
  const [tab, setTab] = useState('overview');
  const { name } = useParams();
  const [isOpen , setIsOpen] = useState(false)
  const [isCourseopen , setIsCourseOpen] = useState(false)

  console.log('Course Name:', name); // Corrected to log course name
  const course = courses.find((c) => c.title === name); // Corrected to find the course

  if (!course) {
    return <div>Course not found</div>; // Handle case if course is not found
  }

  // Animation Variants
  const tabVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  const renderTabContent = (course) => {
    switch (tab) {
      case 'overview':
        return (
          <Overview
            whyChoose={course.additionalDetails.whyChoose}
            highlights={course.additionalDetails.courseHighlights}
            enroll={course.enroll}
            name={course.name}
          />
        );
      case 'syllabus':
        return <Syllabus syllabus={course.syllabus} />;
      default:
        return null;
    }
  };

  return (
    <main>
      <PageHeader title={course.title} pageinfo={'Course Details'} />
      <section className="mx-auto w-full max-w-7xl px-5 md:px-10 my-14 flex lg:flex-row flex-col justify-between">
        {/* Directly render the course object here */}
        <aside className="bg-white p-8 rounded-md shadow-md border border-gray-200 w-[72%]">
          <img src={courseimg} alt="Course" className="w-full rounded-sm" />
          <h2 className="text-3xl font-bold text-gray-900 mt-5">{course.title}</h2>
          <div className="tab-section flex items-center justify-between border border-gray-200 gap-0 my-5">
            <div className="w-auto rounded flex flex-col text-center cursor-pointer">
              <div
                className={`w-[390px] py-3 mx-auto transition-all duration-100 ${
                  tab === 'overview' ? 'shadow-chat-box border-gray-100 border' : 'bg-white'
                }`}
                onClick={() => setTab('overview')}
              >
                <h3
                  className={`text-lg font-semibold text-black cursor-pointer ${
                    tab === 'overview' ? 'text-main-color' : ''
                  }`}
                >
                  Overview
                </h3>
              </div>
              <div
                className={`py-0.5 bg-main-color transition-all duration-500 ${
                  tab === 'overview' ? 'w-full' : 'w-0'
                }`}
              ></div>
            </div>
            <div className="w-auto rounded flex flex-col text-center cursor-pointer">
              <div
                className={`w-[390px] py-3 mx-auto transition-all duration-100 ${
                  tab === 'syllabus' ? 'shadow-chat-box border-gray-100 border' : 'bg-white'
                }`}
                onClick={() => setTab('syllabus')}
              >
                <h3
                  className={`text-lg font-semibold text-black cursor-pointer ${
                    tab === 'syllabus' ? 'text-main-color' : ''
                  }`}
                >
                Syllabus
                </h3>
              </div>
              <div
                className={`py-0.5 bg-main-color transition-all duration-500 ${
                  tab === 'syllabus' ? 'w-full' : 'w-0'
                }`}
              ></div>
            </div>
          </div>

          <motion.div
            className="shadow-md border border-gray-200 mt-5 p-7 rounded-sm"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={tab}
          >
            {renderTabContent(course)}
          </motion.div>
        </aside>
        <aside className="w-[30%] ps-6">
          <CourseFeeCard  isOpen={isOpen} setIsOpen={setIsOpen} courseFees={course.courseFees}  isCourseopen={isCourseopen} setIsCourseOpen={setIsCourseOpen}/>
          <StudentsActivities />
        </aside>
      </section>
      <BookFreeDemo isOpen={isOpen} setIsOpen={setIsOpen}/>
      <CourseApplication isCourseopen={isCourseopen} setIsCourseOpen={setIsCourseOpen} CourseTitle={course.title}/>
    </main>
  );
};

export default CourseDetail;
