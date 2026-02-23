import { Link } from "react-router-dom";
import { heroData } from "./heroData";

const Hero = () => {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <div className="space-y-6 animate-[fadeInLeft_0.8s_ease-out]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {heroData.title}{" "}
            <span className="text-blue-600">
              {heroData.highlight}
            </span>
          </h1>

          <p className="text-gray-600 text-lg">
            {heroData.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to={heroData.primaryButton.link}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {heroData.primaryButton.text}
            </Link>

            <Link
              to={heroData.secondaryButton.link}
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
            >
              {heroData.secondaryButton.text}
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="animate-[fadeInRight_0.8s_ease-out]">
          <img
            src={heroData.image}
            alt="Healthcare Illustration"
            className="w-full max-w-lg mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
