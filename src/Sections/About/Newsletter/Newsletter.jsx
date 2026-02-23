import Container from "../../../Components/shared/Container"
import { newsletterData } from "./newsletterData"

const Newsletter = () => {
  return (
    <section className="py-28 bg-gray-50">
      <Container>
        <div className="max-w-3xl px-8 py-16 mx-auto text-center bg-white border border-gray-100 shadow-xl rounded-3xl">

          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            {newsletterData.title}
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            {newsletterData.description}
          </p>

          {/* FORM */}
          <form className="flex flex-col justify-center gap-4 mt-10 sm:flex-row">
            <input
              type="email"
              placeholder={newsletterData.placeholder}
              className="flex-1 w-full px-5 py-3 border border-gray-300 sm:w-auto rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="px-6 py-3 font-medium text-white transition duration-300 bg-blue-600 hover:bg-blue-700 rounded-xl"
            >
              {newsletterData.buttonText}
            </button>
          </form>

        </div>
      </Container>
    </section>
  )
}

export default Newsletter
