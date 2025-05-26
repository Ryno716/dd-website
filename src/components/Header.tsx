// src/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
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
        {/* Navigation Links */}
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
        {/* Mobile Hamburger (optional, basic) */}
        <div className="md:hidden flex items-center">
          <button className="p-2 rounded hover:bg-white/20">
            {/* Simple Hamburger Icon */}
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
