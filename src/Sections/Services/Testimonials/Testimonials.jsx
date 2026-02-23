"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { testimonialsData } from "./testimonialsData";

const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

  return (
    <section className="py-28 bg-[#f5f7fb]">
      <div className="max-w-6xl px-6 mx-auto">

        {/* Label */}
        <p className="mb-6 text-sm tracking-wide text-center text-blue-600">
          • Testimonials
        </p>

        {/* Title */}
        <h2 className="text-[42px] font-semibold text-center leading-tight mb-20">
          What our patients say <br />
          about our services
        </h2>

        {/* Slider */}
        <div className="relative">

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute z-10 flex items-center justify-center w-10 h-10 transition -translate-y-1/2 bg-white rounded-full shadow-md -left-6 top-1/2 hover:shadow-lg"
          >
            ←
          </button>

          <button
            onClick={scrollNext}
            className="absolute z-10 flex items-center justify-center w-10 h-10 transition -translate-y-1/2 bg-white rounded-full shadow-md -right-6 top-1/2 hover:shadow-lg"
          >
            →
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonialsData.map((item, index) => (
                <div
                  key={item.id}
                  className="flex-[0_0_80%] md:flex-[0_0_33%] px-4"
                >
                  <div
                    className={`p-10 rounded-3xl transition duration-500 ${
                      index === selectedIndex
                        ? "bg-white shadow-xl scale-105"
                        : "bg-white/70 shadow-sm"
                    }`}
                  >
                    {/* Quote */}
                    <div className="mb-6 text-5xl text-blue-100">“</div>

                    {/* Stars */}
                    <div className="flex mb-4 text-lg text-yellow-400">
                      ★★★★★
                    </div>

                    {/* Review */}
                    <p className="mb-8 text-sm leading-relaxed text-gray-600">
                      {item.review}
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="text-sm font-semibold">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {item.role}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === selectedIndex
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
