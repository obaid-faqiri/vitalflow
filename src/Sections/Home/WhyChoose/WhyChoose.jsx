import { whyChooseData } from "./whyChooseData";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative">
          <img
            src={whyChooseData.image}
            alt="Why Choose Us"
            className="rounded-3xl shadow-xl"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 bg-white px-6 py-4 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold text-blue-600">15+</h4>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            {whyChooseData.subtitle}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
            {whyChooseData.title}
          </h2>

          <p className="text-gray-600 mt-6">
            {whyChooseData.description}
          </p>

          {/* Features */}
          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            {whyChooseData.features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
