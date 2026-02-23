import { motion
  
 } from "framer-motion";
import Container from "../../../Components/shared/Container";
import { testimonialsData } from "./testimonialsData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BlogTestimonials = () => {
  return (
    <section className="py-24 overflow-hidden bg-gray-50">
      <Container>
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold text-gray-900 md:text-4xl">
            What Our Readers Say
          </h2>
          <p className="text-gray-600">
            Real experiences from readers who trust our health insights.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonialsData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="p-8 transition-all duration-500 bg-white shadow-sm rounded-2xl hover:shadow-xl hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, index) => (
                  <motion.svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <path d="M11.48 3.499a.75.75 0 011.04 0l2.26 2.29 3.17.46a.75.75 0 01.42 1.28l-2.29 2.23.54 3.15a.75.75 0 01-1.09.79L12 12.77l-2.83 1.49a.75.75 0 01-1.09-.79l.54-3.15-2.29-2.23a.75.75 0 01.42-1.28l3.17-.46 2.26-2.29z" />
                  </motion.svg>
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 leading-relaxed text-gray-600">
                "{item.text}"
              </p>

              {/* Author */}
              <div>
                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>
                <span className="text-sm text-gray-500">
                  {item.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default BlogTestimonials;
