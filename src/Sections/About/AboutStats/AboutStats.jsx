import Container from "../../../Components/shared/Container"
import { aboutStatsData } from "./aboutStatsData"

const AboutStats = () => {
  return (
    <section className="relative pb-24 -mt-10">
      <Container>
        <div className="px-8 py-16 bg-white border border-gray-100 shadow-xl rounded-3xl">
          
          <div className="grid grid-cols-2 gap-12 text-center md:grid-cols-4">
            {aboutStatsData.map((item, index) => (
              <div key={index} className="relative">
                
                <h3 className="text-4xl font-bold text-blue-600">
                  {item.number}
                </h3>

                <p className="mt-3 text-lg text-gray-600">
                  {item.label}
                </p>

              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default AboutStats
