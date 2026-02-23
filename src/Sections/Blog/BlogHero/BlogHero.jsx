import Container from "../../../components/shared/Container";
import { blogHeroData } from "./blogHeroData";

const BlogHero = () => {
  const { badge, title } = blogHeroData;

  return (
    <section className="pt-32 pb-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <p className="flex items-center justify-center gap-2 mb-6 text-sm text-blue-600">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            {badge}
          </p>

          {/* Title */}
          <h1 className="text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
            {title}
          </h1>

        </div>
      </Container>
    </section>
  );
};

export default BlogHero;
