import { servicesData } from "./servicesGridData";

const ServicesGrid = () => {
  return (
    <section className="py-28 bg-[#f5f7fb]">
      <div className="max-w-6xl px-6 mx-auto">

        {/* Small Label */}
        <p className="mb-6 text-sm tracking-wide text-center text-blue-600">
          • Services
        </p>

        {/* Main Title */}
        <h2 className="text-[42px] font-semibold text-center leading-tight mb-20">
          Personalized solutions <br />
          for better oral health
        </h2>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-[#eef2f7] rounded-3xl p-10 text-center transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-xl text-blue-600 bg-blue-100 rounded-full">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-lg font-semibold">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Button */}
              <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 group">
                View Services
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
