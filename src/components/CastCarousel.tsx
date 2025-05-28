"use client";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { characters } from '@/data/characters';
import ArcaneCharacterCard from './ArcaneCharacterCard';
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardModal from "./CardModal"; // <-- This is the new file you’ll add!
import Image from "next/image";

function AutoplayPlugin(slider: any, { delay = 2500 } = {}) {
  let timeout: any;
  let mouseOver = false;
  function clearNextTimeout() { clearTimeout(timeout); }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => { slider.next(); }, delay);
  }
  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => { mouseOver = true; clearNextTimeout(); });
    slider.container.addEventListener("mouseout", () => { mouseOver = false; nextTimeout(); });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

export default function CastCarousel() {
  const [current, setCurrent] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 3, spacing: 20 },
      mode: "free-snap",
      breakpoints: {
        "(max-width: 900px)": { slides: { perView: 1.5, spacing: 12 }},
        "(max-width: 600px)": { slides: { perView: 1.1, spacing: 8 }},
      },
      slideChanged(slider) { setCurrent(slider.track.details.rel); },
    },
    [slider => AutoplayPlugin(slider, { delay: 2100 })]
  );

  const goPrev = () => instanceRef.current?.prev();
  const goNext = () => instanceRef.current?.next();

  return (
    <section className="flex flex-col items-center my-16">
      <h2 className="text-3xl font-bold text-violet-100 mb-8 drop-shadow-lg tracking-widest font-serif">
        Meet The Cast
      </h2>
      <div className="relative flex items-center max-w-4xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          className="absolute left-[-52px] z-20 bg-yellow-100/80 hover:bg-yellow-300/90 shadow-lg rounded-full p-2 border-2 border-yellow-400 focus:outline-none transition disabled:opacity-50"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-label="Previous character"
        >
          <ChevronLeft className="w-7 h-7 text-yellow-800 drop-shadow" />
        </button>
        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider py-8 w-full">
          {characters.map((member, i) => (
            <div
              className={`keen-slider__slide flex justify-center transition-transform duration-300 ${
                i === current ? "scale-105 z-10" : "scale-95 z-0"
              }`}
              key={member.name}
            >
              <button
                className="outline-none"
                onClick={() => setSelectedCard(member)}
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                aria-label={`Show details for ${member.name}`}
              >
                <ArcaneCharacterCard
                  name={member.name}
                  subtitle={member.subtitle}
                  characterImg={member.image}
                />
              </button>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={goNext}
          className="absolute right-[-52px] z-20 bg-yellow-100/80 hover:bg-yellow-300/90 shadow-lg rounded-full p-2 border-2 border-yellow-400 focus:outline-none transition disabled:opacity-50"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-label="Next character"
        >
          <ChevronRight className="w-7 h-7 text-yellow-800 drop-shadow" />
        </button>
      </div>
      {/* Animated Card Modal */}
      <CardModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </section>
  );
}
