import Container from "../../../Components/shared/Container"
import { teamData } from "./teamData"

const Team = () => {
  return (
    <section className="bg-white py-28">
      <Container>

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            {teamData.label}
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            {teamData.title}
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            {teamData.description}
          </p>
        </div>

        {/* DOCTOR CARDS */}
        <div className="grid gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {teamData.members.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden transition duration-300 bg-white shadow-lg rounded-3xl hover:shadow-2xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-72"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 font-medium text-blue-600">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Team
