import React, { useState } from "react";

const Syllabus = ({ syllabus }) => {
  const [openTool, setOpenTool] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleTool = (toolIndex) => {
    setOpenTool(openTool === toolIndex ? null : toolIndex);
    setOpenCategory(null); // Close categories when switching tools
  };

  const toggleCategory = (categoryIndex) => {
    setOpenCategory(openCategory === categoryIndex ? null : categoryIndex);
  };

  return (
    <div>
      <div className="mb-5">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          What You'll Learn
        </h3>
        <p className="w-full text-main-gray text-base">
          In Full Stack Development, you'll learn to build dynamic and
          interactive web applications from front-end to back-end. This includes
          mastering languages such as HTML, CSS, and JavaScript for the user
          interface, as well as server-side technologies like Node.js.
          Understanding databases and APIs, along with frameworks like React,
          are also key components. Additionally, proficiency in version control
          systems like Git and deployment processes are essential for full stack
          developers.
        </p>
      </div>
      <div className="w-full bg-main-color h-[1px]"></div>
      <div className="space-y-4 mt-5">
        {syllabus.map((toolItem, toolIndex) => (
          <div
            key={toolIndex}
            className="border border-gray-300  rounded-md p-4"
          >
            <h2
              className="text-xl font-semibold cursor-pointer flex justify-between items-center"
              onClick={() => toggleTool(toolIndex)}
            >
              <div className="flex items-center">
                <toolItem.icon className={toolItem.iconClassName} />
                {toolItem.tool}
              </div>
              <span>{openTool === toolIndex ? "-" : "+"}</span>
            </h2>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openTool === toolIndex
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-4 pl-4">
                {toolItem.categories.map((categoryItem, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="border border-gray-300 rounded-md p-2 mb-2"
                  >
                    <h3
                      className="text-lg font-medium cursor-pointer flex justify-between items-center"
                      onClick={() => toggleCategory(categoryIndex)}
                    >
                      {categoryItem.category}
                      <span>{openCategory === categoryIndex ? "-" : "+"}</span>
                    </h3>
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        openCategory === categoryIndex
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="mt-2 pl-4 list-disc">
                        {categoryItem.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="text-gray-700">
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
