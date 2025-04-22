import React, { useState } from "react";
import faqimg from "../assets/Faq-img.png";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqs = [
    {
      question: "Can I cancel at any time?",
      answer:
        "Yes, you can cancel anytime. No questions are asked while you cancel, but we would highly appreciate it if you gave us some feedback.",
    },
    {
      question: "My team has credits. How do we use them?",
      answer:
        "Once your team signs up for a subscription plan, we can sit down, grab a cup of coffee, and dial in the details.",
    },
    {
      question: "How does Preline's pricing work?",
      answer:
        "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.",
    },
    {
      question: "How secure is Preline?",
      answer:
        "Protecting the data you trust to Preline is our first priority. This part is crucial in keeping the project in line with completion.",
    },
    {
      question: "How do I get access to a theme I purchased?",
      answer:
        "After purchasing a theme, you’ll receive an email with the access link. If you don’t see it, please check your spam folder.",
    },
  ];

  return (
    <section className="ed-faq py-[120px] xl:py-[80px] md:py-[60px]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[70px] xl:gap-x-[50px] lg:gap-x-[30px] gap-y-[40px] content-center">
          <div>
            <img
              src={faqimg}
              alt="FAQ Illustration"
              className="rounded-[8px] h-full object-cover"
            />
          </div>

          <div>
            <div className="mb-[22px]">
              <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="hs-accordion pt-6 pb-3"
                  id={`faq-${index}`}
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black"
                    aria-expanded={openIndex === index}
                    onClick={() => handleToggle(index)}
                  >
                    {faq.question}
                    <svg
                      className={`${
                        openIndex === index ? "block" : "hidden"
                      } shrink-0 size-5 text-black`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      className={`${
                        openIndex === index ? "hidden" : "block"
                      } shrink-0 size-5 text-black`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`hs-accordion-content ${
                      openIndex === index ? "block" : "hidden"
                    } w-full overflow-hidden transition-[height] duration-300`}
                  >
                    <p className="text-black">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
