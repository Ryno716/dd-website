// src/components/Header.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Users2, Swords, Globe, Info } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 shadow-lg border-b border-white/10">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-3">
          <Image
            src="/assets/logos/dnd-logo.png"
            alt="Dungeons, Dudes and Dragons Logo"
            width={48}
            height={48}
            className="rounded-full shadow-md"
            priority
          />
          <span className="font-bold text-2xl md:text-3xl tracking-tight text-white drop-shadow-lg font-serif">
            Dungeons, Dudes and Dragons
          </span>
        </div>

        {/* Navigation Links (hidden on mobile) */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold text-lg">
          <li>
            <Link href="/cast" className="hover:text-yellow-300 transition">Cast</Link>
          </li>
          <li>
            <Link href="/episodes" className="hover:text-yellow-300 transition">Episodes</Link>
          </li>
          <li>
            <Link href="/world" className="hover:text-yellow-300 transition">World</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
          </li>
        </ul>

       
              <nav
                className="flex flex-col gap-6 text-yellow-200 font-bold text-lg"
                aria-label="Main navigation"
              >
                <Link
                  href="/cast"
                  className="flex items-center gap-2 px-3 py-2 rounded hover:bg-yellow-400/10 transition"
                  onClick={() => setOpen(false)}
                >
                  <Users2 size={22} /> Cast
                </Link>
                <Link
                  href="/episodes"
                  className="flex items-center gap-2 px-3 py-2 rounded hover:bg-yellow-400/10 transition"
                  onClick={() => setOpen(false)}
                >
                  <Swords size={22} /> Episodes
                </Link>
                <Link
                  href="/world"
                  className="flex items-center gap-2 px-3 py-2 rounded hover:bg-yellow-400/10 transition"
                  onClick={() => setOpen(false)}
                >
                  <Globe size={22} /> World
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-2 px-3 py-2 rounded hover:bg-yellow-400/10 transition"
                  onClick={() => setOpen(false)}
                >
                  <Info size={22} /> About
                </Link>
              </nav>
      </nav>
    </header>
  );
}
