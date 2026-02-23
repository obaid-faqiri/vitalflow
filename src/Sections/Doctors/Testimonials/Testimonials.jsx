import Container from "../../../components/shared/Container";
import { testimonialsData } from "./testimonialsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-32 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm tracking-wide text-blue-600">
            • Testimonials
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            What our patients say
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div
                  className={`rounded-3xl p-10 h-full flex flex-col transition-all duration-500
                  ${
                    isActive
                      ? "bg-white shadow-2xl scale-105"
                      : "bg-white shadow-md opacity-90"
                  }`}
                >
                  {/* Quote */}
                  <div className="mb-6 text-6xl leading-none text-blue-600">
                    &ldquo;
                  </div>

                  {/* Review */}
                  <p className="flex-grow mb-8 leading-relaxed text-gray-600">
                    {item.review}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#facc15"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#facc15"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.75.75 0 011.04 0l2.244 2.21a.75.75 0 00.43.215l3.1.45a.75.75 0 01.416 1.279l-2.244 2.187a.75.75 0 00-.216.664l.53 3.086a.75.75 0 01-1.087.79L12 13.347l-2.77 1.455a.75.75 0 01-1.087-.79l.53-3.086a.75.75 0 00-.216-.664L6.213 7.653a.75.75 0 01.416-1.28l3.1-.449a.75.75 0 00.43-.216l2.244-2.21z"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* User */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover border-2 border-blue-600 rounded-full w-14 h-14"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
