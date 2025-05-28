"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swords, Users2, Globe, Info } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black/70 backdrop-blur-md p-3 flex gap-6 items-center shadow-lg">
      <Link href="/" className="flex items-center gap-2 group">
        <Image
          src="/assets/dd-logo.png"
          alt="Dungeons, Dudes & Dragons Logo"
          width={44}
          height={44}
          className="rounded drop-shadow-lg transition-transform duration-150 group-hover:scale-110"
          priority
        />
      </Link>
      <NavLink href="/cast" icon={<Users2 size={20} />} text="Cast" />
      <NavLink href="/episodes" icon={<Swords size={20} />} text="Episodes" />
      <NavLink href="/world" icon={<Globe size={20} />} text="World" />
      <NavLink href="/about" icon={<Info size={20} />} text="About" />
    </nav>
  );
}


function NavLink({ href, icon, text }: { href: string; icon?: React.ReactNode; text: string }) {
  return (
    <Link href={href} className="relative flex items-center gap-2 px-3 py-1 font-bold group">
      {icon}
      <span className="tracking-wide">{text}</span>
      {/* Animated underline */}
      <motion.span
        layoutId="nav-underline"
        className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-yellow-400/80 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
}

