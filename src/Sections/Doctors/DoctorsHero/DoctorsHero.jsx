import { doctorsHeroData } from "./doctorsHeroData";
import Container from "../../../components/shared/Container";

const DoctorsHero = () => {
  const { label, title } = doctorsHeroData;

  return (
    <section className="py-28 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">

          {/* Small Label */}
          <p className="mb-6 text-sm tracking-wide text-blue-600">
            • {label}
          </p>

          {/* Main Title */}
          <h1 className="text-[42px] font-semibold leading-tight text-gray-900">
            {title}
          </h1>

        </div>
      </Container>
    </section>
  );
};

export default DoctorsHero;
