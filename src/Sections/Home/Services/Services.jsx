import { servicesData } from "./servicesData";

const Services = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            {servicesData.subtitle}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            {servicesData.title}
          </h2>

          <p className="text-gray-600 mt-4">
            {servicesData.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-6 text-2xl">
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
