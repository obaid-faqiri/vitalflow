import Container from "../../../Components/shared/Container"
import { servicesHeroData } from "./servicesHeroData"

const ServicesHero = () => {
  return (
    <section className="pb-16 text-center bg-gray-100 pt-28">
      <Container>
        <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
          {servicesHeroData.label}
        </span>

        <h1 className="max-w-3xl mx-auto mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
          {servicesHeroData.title}
        </h1>
      </Container>
    </section>
  )
}

export default ServicesHero
