import { useState } from "react";
import { faqData } from "./faqData";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-semibold tracking-wide text-blue-600 uppercase">
            {faqData.subtitle}
          </span>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            {faqData.title}
          </h2>

          <p className="mt-4 text-gray-600">{faqData.description}</p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 border rounded-xl"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-5 text-left transition bg-gray-50 hover:bg-gray-100"
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>

                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      isActive ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 text-gray-600 bg-white">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
