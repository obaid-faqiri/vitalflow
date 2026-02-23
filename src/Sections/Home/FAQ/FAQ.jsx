import { useState } from "react";
import { faqData } from "./faqData";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            {faqData.subtitle}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            {faqData.title}
          </h2>

          <p className="text-gray-600 mt-4">
            {faqData.description}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="border rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition"
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
