import { doctorsData } from "./doctorsData";

const Doctors = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            {doctorsData.subtitle}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            {doctorsData.title}
          </h2>

          <p className="text-gray-600 mt-4">
            {doctorsData.description}
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsData.doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Wrapper */}
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {doctor.socials.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.link}
                        className="w-10 h-10 flex items-center justify-center bg-white text-blue-600 rounded-full hover:bg-blue-100 transition"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 text-sm mt-1">
                  {doctor.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Doctors;
