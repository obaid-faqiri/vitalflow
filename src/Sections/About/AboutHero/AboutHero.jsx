import { aboutHeroData } from "./aboutHeroData"
import Button from "../../../Components/UI/Button/Button"
import Container from "../../../Components/shared/Container"

const AboutHero = () => {
  return (
    <section className="pb-20 bg-gray-100 pt-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              {aboutHeroData.label}
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              {aboutHeroData.title}
            </h1>

            <p className="max-w-lg mt-5 text-lg leading-relaxed text-gray-600">
              {aboutHeroData.description}
            </p>

            <div className="mt-6">
              <Button>
                {aboutHeroData.buttonText}
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-end">
            <img
              src={aboutHeroData.image}
              alt="About Hero"
              className="w-full max-w-[520px] h-[420px] object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </Container>
    </section>
  )
}

export default AboutHero
