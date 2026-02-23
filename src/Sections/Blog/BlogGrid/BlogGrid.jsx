import Container from "../../../Components/shared/Container";
import { blogGridData } from "./blogGridData";
import BlogCard from "./BlogCard";

const BlogGrid = () => {
  return (
    <section className="pb-32 bg-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogGridData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogGrid;
