"use client";

import React, { useRef } from 'react';
import Image from 'next/image';

interface ArcaneCharacterCardProps {
  name: string;
  subtitle?: string;
  characterImg: string; // Path to character image
}
export default function ArcaneCharacterCard({ name, subtitle, characterImg }: ArcaneCharacterCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Parallax Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 12; // max 12deg
    const rotateX = ((midY - y) / midY) * 12;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      className="relative w-[340px] h-[480px] bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden group transition-transform duration-300"
      style={{
        boxShadow: '0 8px 40px 0 rgba(0,0,0,0.85), 0 1.5px 20px 0 #4f46e5'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Book background */}
      <Image
        src="/assets/book.png"
        alt="Ancient Book"
        fill
        className="object-cover object-center opacity-80"
        priority
      />

      {/* Portal effect, perfectly centered and spinning in place */}
      <div className="absolute left-1/2 top-1/2 z-20 w-52 h-52 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="relative w-full h-full animate-[spin_12s_linear_infinite] group-hover:animate-[spin_5s_linear_infinite]">
          <Image
            src="/assets/portal.png"
            alt="Arcane Portal"
            fill
            className="object-contain object-center"
            priority
          />
          {/* Holographic shine overlay */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none opacity-60"
            style={{
              background:
                'conic-gradient(from 45deg at 50% 50%, rgba(200,200,255,0.12), rgba(150,255,255,0.15), rgba(200,100,255,0.11), rgba(0,0,0,0.08), rgba(200,200,255,0.12))',
              mixBlendMode: 'lighten'
            }}
          />
        </div>
      </div>

      {/* Character Portrait, perfectly centered */}
      <div className="absolute left-1/2 top-1/2 z-30 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-2xl overflow-hidden border-4 border-violet-800">
        <Image
          src={characterImg}
          alt={name}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Quill Accent, floating in bottom left */}
      <div className="absolute left-7 bottom-8 z-40 w-16 h-16 animate-[wiggle_2.6s_ease-in-out_infinite] opacity-90">
        <Image
          src="/assets/quill.png"
          alt="Quill"
          fill
          className="object-contain"
        />
      </div>

      {/* Text / Info */}
      <div className="absolute bottom-0 left-0 w-full px-6 py-5 bg-gradient-to-t from-black/90 via-zinc-900/70 to-transparent z-50 rounded-b-2xl">
        <h2 className="text-2xl font-extrabold font-serif tracking-wider text-violet-200 drop-shadow-md">{name}</h2>
        {subtitle && (
          <div className="text-md font-mono tracking-wide text-violet-300/80">{subtitle}</div>
        )}
      </div>

      {/* Extra border for ancient look */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-violet-900/40 shadow-[0_0_20px_2px_rgba(80,60,150,0.45)]"></div>
    </div>
  );
}
