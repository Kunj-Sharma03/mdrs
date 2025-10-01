'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

const AUTO_PLAY_DELAY = 5000;

function clampIndex(index, length) {
  if (length === 0) return 0;
  return ((index % length) + length) % length;
}

export default function ClassroomCarousel({ images = [] }) {
  const slides = useMemo(() => images.filter((img) => img?.src), [images]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => clampIndex(prev + 1, slides.length));
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goTo = useCallback(
    (step) => {
      if (!slides.length) return;
      setCurrent((prev) => clampIndex(prev + step, slides.length));
    },
    [slides.length]
  );

  if (!slides.length) {
    return null;
  }

  const activeSlide = slides[current];

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full md:w-[90%] lg:w-[75%] h-[14rem] md:h-[18rem] lg:h-[20rem] overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_22px_52px_rgba(15,23,42,0.14)] bg-white/40 backdrop-blur-2xl">
        <Image
          src={activeSlide.src}
          alt={activeSlide.alt ?? 'Classroom view'}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/8 via-black/0 to-black/12" aria-hidden="true" />

        <button
          type="button"
          onClick={() => goTo(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/75 backdrop-blur-xl border border-white/60 shadow-lg text-slate-700 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>

        <button
          type="button"
          onClick={() => goTo(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/75 backdrop-blur-xl border border-white/60 shadow-lg text-slate-700 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? 'w-8 bg-blue-500/90'
                : 'w-3 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
