import Container from "../../../Components/shared/Container"
import { aboutVisionData } from "./aboutVisionData"

const Vision = () => {
  return (
    <section className="py-28 bg-gray-50">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* TEXT LEFT */}
          <div>
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              {aboutVisionData.label}
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
              {aboutVisionData.title}
            </h2>

            <p className="max-w-xl mt-6 text-lg leading-relaxed text-gray-600">
              {aboutVisionData.description}
            </p>
          </div>

          {/* IMAGE RIGHT */}
          <div className="flex justify-end">
            <img
              src={aboutVisionData.image}
              alt="Vision"
              className="w-full max-w-[520px] h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Vision
