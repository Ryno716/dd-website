"use client";
import React, { useRef } from 'react';
import Image from 'next/image';

interface ArcaneCharacterCardProps {
  name: string;
  subtitle?: string;
  characterImg: string;
}

export default function ArcaneCharacterCard({ name, subtitle, characterImg }: ArcaneCharacterCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Parallax (optional)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const midX = rect.width / 2, midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 10;
    const rotateX = ((midY - y) / midY) * 10;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      className="relative w-[160px] h-[230px] rounded-xl overflow-hidden shadow-xl group bg-transparent transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        boxShadow: '0 4px 22px 0 rgba(80, 50, 20, 0.20), 0 1.5px 14px 0 #e8be6f99'
      }}
    >
      {/* Fantasy frame */}
      <Image
        src="/assets/frames/card.png"
        alt=""
        fill
        className="object-cover object-center pointer-events-none z-10"
        draggable={false}
        sizes="160px"
      />

      {/* Character Portrait */}
      <div className="absolute left-1/2 top-1/2 z-20 w-[110px] h-[150px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <Image
          src={characterImg}
          alt={name}
          fill
          className="object-cover object-center"
          style={{
            filter: 'brightness(0.98) contrast(1.05) sepia(0.10)',
            borderRadius: '8px'
          }}
          priority
          sizes="110px"
        />
      </div>

      {/* Quill Accent */}
      <div className="absolute left-2 bottom-2 z-30 w-9 h-9 animate-[wiggle_2.6s_ease-in-out_infinite] opacity-85">
        <Image
          src="/assets/quill.png"
          alt="Quill"
          fill
          className="object-contain"
          sizes="36px"
        />
      </div>

      {/* Card Info */}
      <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-gradient-to-t from-black/80 via-zinc-900/60 to-transparent z-40 rounded-b-xl">
        <h2 className="text-lg font-extrabold font-serif tracking-wide text-yellow-100 drop-shadow">{name}</h2>
        {subtitle && (
          <div className="text-xs font-mono tracking-wide text-yellow-200/80">{subtitle}</div>
        )}
      </div>
    </div>
  );
}
