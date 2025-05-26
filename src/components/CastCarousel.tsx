"use client";

import { useKeenSlider } from "keen-slider/react";
import { useRef } from "react";
import "keen-slider/keen-slider.min.css";
import { characters } from '@/data/characters';
import ArcaneCharacterCard from './ArcaneCharacterCard';

// ...[Paste AutoplayPlugin here]...

export default function CastCarousel() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderInstanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 3,
        spacing: 20,
      },
      mode: "free-snap",
      breakpoints: {
        "(max-width: 900px)": {
          slides: { perView: 1.5, spacing: 12 }
        },
        "(max-width: 600px)": {
          slides: { perView: 1.1, spacing: 8 }
        }
      }
    },
    [
      // Add the autoplay plugin here!
      (slider) => AutoplayPlugin(slider, { delay: 2100 })
    ]
  );

  return (
    <section className="flex flex-col items-center my-16">
      <h2 className="text-3xl font-bold text-violet-100 mb-8 drop-shadow-lg tracking-widest font-serif">
        Meet The Cast
      </h2>
      <div ref={sliderInstanceRef} className="keen-slider max-w-4xl mx-auto py-8">
        {characters.map((member) => (
          <div className="keen-slider__slide flex justify-center" key={member.name}>
            <ArcaneCharacterCard
              name={member.name}
              subtitle={member.subtitle}
              characterImg={member.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
