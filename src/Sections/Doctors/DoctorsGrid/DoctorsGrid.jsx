import Container from "../../../components/shared/Container";
import { doctorsGridData } from "./doctorsGridData";

const DoctorsGrid = () => {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">

          {doctorsGridData.map((doctor) => (
            <div key={doctor.id} className="group">

              {/* Image */}
              <div className="mb-6 overflow-hidden bg-gray-100 rounded-3xl">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Name + Arrow */}
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {doctor.name}
                </h3>

                <button className="flex items-center justify-center w-8 h-8 text-sm transition border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600">
                  →
                </button>
              </div>

              {/* Specialty */}
              <p className="text-sm text-gray-500">
                {doctor.specialty}
              </p>

            </div>
          ))}

        </div>
      </Container>
    </section>
  );
};

export default DoctorsGrid;
