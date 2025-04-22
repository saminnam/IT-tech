
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';

const courses = [
  {
   title: "Full Stack Development",
    category: 'Web Development',
    courseFees: 20000,
    cardDescription:
      'Master frontend and backend technologies to build dynamic web applications.',
    duration: '6 Months',
    hours: '120 Hours',
    tools: '10 Tools',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074',
    description:
      "This Full Stack Development course by Company Name Tech is designed to equip you with the skills and knowledge needed to build dynamic, scalable, and efficient web applications. Covering both front-end and back-end technologies, this comprehensive course ensures you are ready to tackle real-world development challenges. Learn how to seamlessly integrate user interfaces with powerful server-side logic, manage databases efficiently, and deploy robust applications.",
    additionalDetails: {
      whyChoose: [
        "Staggering Demand",
        "Job Security",
        "Freelancing",
        "Well Paid Career Option",
        "Minimum Qualification",
        "Creative & Fun",
        "Easy to Learn",
        "Stay Market Trend",
        "Growing Opportunities",
        "Everlasting Domain"
      ],
      courseHighlights: [
        "Comprehensive curriculum tailored to industry demands.",
        "Live coding sessions and project-based learning.",
        "Access to a dedicated mentor for personalized guidance.",
        "Hands-on projects to build your professional portfolio.",
        "Flexible schedule to accommodate your learning pace.",
        "Job assistance and interview preparation support."
      ],
      callToAction: "Enroll now in Company Name Tech's Full Stack Development course and transform your passion for coding into a thriving career. Step into the world of technology with confidence and expertise."
    },
    syllabus: [
      {
        tool: "HTML & CSS",
        icon: FaHtml5,
        iconClassName: "text-orange-500 mr-2",
        categories: [
          {
            category: "Introduction to HTML",
            topics: ["What is HTML?", "Basic Structure of a Web Page", "HTML Tags Overview"]
          },
          {
            category: "Working with Tags",
            topics: ["Heading Tags", "Paragraph Tags", "Formatting Tags", "Quotations & Comments"]
          },
          {
            category: "Inserting Images & Image Attributes",
            topics: ["<img> Tag", "Attributes like src and alt", "Image Optimization"]
          },
          {
            category: "Introduction to CSS",
            topics: ["CSS Selectors", "Colors and Backgrounds", "Box Model Basics"]
          },
          {
            category: "Advanced CSS",
            topics: ["Flexbox", "CSS Grid", "Transitions and Animations"]
          }
        ]
      },
      {
        tool: "JavaScript",
        icon: FaJs,
        iconClassName: "text-yellow-500 mr-2",
        categories: [
          {
            category: "JavaScript Basics",
            topics: ["Variables and Constants", "Data Types", "Functions and Scope", "Operators"]
          },
          {
            category: "DOM Manipulation",
            topics: ["Selecting Elements", "Event Listeners", "Creating and Modifying Elements"]
          }
        ]
      },
      {
        tool: "React",
        icon: FaReact,
        iconClassName: "text-blue-500 mr-2",
        categories: [
          {
            category: "Introduction to React",
            topics: ["What is React?", "JSX Basics", "Components", "Props and State"]
          },
          {
            category: "Advanced React",
            topics: ["React Hooks", "React Router", "Context API"]
          }
        ]
      },
      {
        tool: "Node.js",
        icon: FaNodeJs,
        iconClassName: "text-green-500 mr-2",
        categories: [
          {
            category: "Node.js Basics",
            topics: ["Introduction to Node.js", "Modules", "Creating a Server"]
          }
        ]
      },
      {
        tool: "Express.js",
        icon: SiExpress,
        iconClassName: "text-gray-500 mr-2",
        categories: [
          {
            category: "RESTful APIs with Express",
            topics: ["API Architecture", "Building Endpoints", "Middleware"]
          }
        ]
      },
      {
        tool: "MongoDB",
        icon: DiMongodb,
        iconClassName: "text-green-700 mr-2",
        categories: [
          {
            category: "Database Integration",
            topics: ["Connecting to MongoDB", "CRUD Operations", "Using Mongoose"]
          }
        ]
      }
    ],
    enroll:
      "Enroll now in Company Name Tech's Full Stack Development course and transform your passion for coding into a thriving career. Step into the world of technology with confidence and expertise."
  },

  // UI/UX Design Course
  {
    title: "UI/UX Design",
    category: 'Design',
    courseFees: 20000,
      cardDescription:
        'Explore user-centric design principles to create visually appealing interfaces.',
      duration: '3 Months',
      hours: '75 Hours',
      tools: '5 Tools',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074',
 
    description:
      "The UI/UX Design course at Company Name Tech focuses on the principles of user-centered design and creative strategies for building aesthetically pleasing and intuitive user interfaces. Learn how to create seamless experiences, design interactive prototypes, and develop a deep understanding of user behavior to deliver optimal designs for various platforms.",
    additionalDetails: {
      whyChoose: [
        "High Demand for Designers",
        "Creative Expression",
        "Job Opportunities in Tech and Design",
        "Well Paid Career Option",
        "Opportunity to Work in Various Industries",
        "User-Centered Design Focus",
        "Design Thinking Approach",
        "Real-World Applications",
        "Growing Scope in Digital Product Design"
      ],
      courseHighlights: [
        "Introduction to Design Thinking and User Research.",
        "UI/UX principles, wireframing, and prototyping.",
        "Hands-on experience using tools like Figma and Adobe XD.",
        "Real-world projects that build your design portfolio.",
        "Job assistance and interview preparation support.",
        "Mentor-led live sessions and personalized guidance."
      ],
      callToAction: "Enroll now in Company Name Tech's UI/UX Design course and kick-start your journey in the world of creative design. Build beautiful, functional, and user-friendly interfaces!"
    },
    syllabus: [
      {
        tool: "Design Fundamentals",
        icon: FaCss3Alt,
        iconClassName: "text-blue-500 mr-2",
        categories: [
          {
            category: "Introduction to UI/UX",
            topics: ["What is UI/UX?", "User-Centered Design", "Design Thinking Process"]
          },
          {
            category: "Design Principles",
            topics: ["Hierarchy and Contrast", "Alignment and Spacing", "Color Theory and Typography"]
          },
          {
            category: "Wireframing and Prototyping",
            topics: ["Low-Fidelity vs. High-Fidelity Wireframes", "Interactive Prototypes", "Tools like Figma and Adobe XD"]
          }
        ]
      },
      {
        tool: "User Research",
        icon: FaJs,
        iconClassName: "text-yellow-500 mr-2",
        categories: [
          {
            category: "User Research Techniques",
            topics: ["Interviews and Surveys", "Personas and User Flows", "Usability Testing"]
          }
        ]
      }
    ],
    enroll:
      "Start your UI/UX design career today! Enroll in Company Name Tech's UI/UX Design course and learn the art of creating visually stunning and user-friendly interfaces."
  },

  // Digital Marketing Course
  {
    title: "Digital Marketing",
    category: 'Marketing',
    courseFees: 20000,
    cardDescription:
      'Learn strategies to enhance online presence and drive marketing campaigns.',
    duration: '3 Months',
    hours: '60 Hours',
    tools: '6 Tools',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074',

    description:
      "The Digital Marketing course at Company Name Tech offers a deep dive into various online marketing techniques and strategies, including SEO, SEM, social media marketing, content marketing, and email marketing. Learn how to drive traffic, engage audiences, and convert leads into loyal customers with actionable digital marketing skills.",
    additionalDetails: {
      whyChoose: [
        "Booming Industry",
        "High Demand for Digital Marketers",
        "Remote Working Opportunities",
        "Freelancing Potential",
        "Well Paid Career Option",
        "Diverse Skill Set",
        "Measurable Results and Analytics",
        "Growing Market for Digital Content",
        "Global Career Opportunities"
      ],
      courseHighlights: [
        "Comprehensive curriculum covering SEO, SEM, and SMM.",
        "Practical knowledge of content creation and strategy.",
        "Hands-on experience in running live campaigns.",
        "Access to industry insights and trends.",
        "Job assistance and interview preparation support."
      ],
      callToAction: "Enroll in Company Name Tech's Digital Marketing course today and master the skills to drive online business success!"
    },
    syllabus: [
      {
        tool: "SEO & SEM",
        icon: FaReact,
        iconClassName: "text-blue-500 mr-2",
        categories: [
          {
            category: "SEO Basics",
            topics: ["On-Page SEO", "Off-Page SEO", "Keyword Research", "SEO Tools"]
          },
          {
            category: "SEM Campaigns",
            topics: ["Google Ads", "PPC Campaigns", "Targeting & Bidding Strategies"]
          }
        ]
      },
      {
        tool: "Social Media Marketing",
        icon: FaNodeJs,
        iconClassName: "text-green-500 mr-2",
        categories: [
          {
            category: "Social Media Strategies",
            topics: ["Building a Social Media Strategy", "Content Creation", "Targeting and Analytics"]
          }
        ]
      },
      {
        tool: "Content Marketing",
        icon: SiExpress,
        iconClassName: "text-gray-500 mr-2",
        categories: [
          {
            category: "Content Strategy",
            topics: ["Creating Engaging Content", "Blogging, Video, and Social Posts", "SEO-Optimized Content"]
          }
        ]
      }
    ],
    enroll:
      "Ready to take your digital marketing career to the next level? Enroll in Company Name Tech's Digital Marketing course and learn to drive business growth through effective online strategies."
  }
];

export default courses; 