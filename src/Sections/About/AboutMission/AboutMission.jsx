import Container from "../../../Components/shared/Container"
import { aboutMissionData } from "./aboutMissionData"

const AboutMission = () => {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={aboutMissionData.image}
              alt="Mission"
              className="w-full max-w-[520px] h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              {aboutMissionData.label}
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
              {aboutMissionData.title}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {aboutMissionData.description}
            </p>

            {/* FEATURES */}
            <div className="mt-8 space-y-4">
              {aboutMissionData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-700">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}

export default AboutMission
