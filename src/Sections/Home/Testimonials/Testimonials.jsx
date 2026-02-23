import { testimonialsData } from "./testimonialsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            {testimonialsData.subtitle}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            {testimonialsData.title}
          </h2>

          <p className="text-gray-600 mt-4">
            {testimonialsData.description}
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialsData.testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-md h-full flex flex-col justify-between">

                {/* Stars */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 mb-6">
                  "{testimonial.text}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;
