import { Link } from "react-router-dom";
import { consultationData } from "./consultationData";

const Consultation = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="order-2 md:order-1 animate-[fadeInLeft_0.8s_ease-out]">
          <img
            src={consultationData.image}
            alt="Virtual Consultation"
            className="w-full max-w-lg mx-auto"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 order-1 md:order-2 animate-[fadeInRight_0.8s_ease-out]">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            {consultationData.subtitle}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {consultationData.title}
          </h2>

          <p className="text-gray-600 text-lg">
            {consultationData.description}
          </p>

          {/* Features List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {consultationData.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-gray-700"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>

          <Link
            to={consultationData.button.link}
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {consultationData.button.text}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Consultation;
