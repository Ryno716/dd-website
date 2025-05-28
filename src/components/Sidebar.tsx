"use client";
import Link from "next/link";
import Image from "next/image";
import { Swords, Globe, Info, BookOpen } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-20 bg-black/80 backdrop-blur-lg flex flex-col items-center py-6 z-50 gap-6 shadow-2xl">
      {/* Logo at the top */}
      <Link href="/" className="mb-8">
        <Image
          src="/assets/logos/dnd-logo.png"
          alt="DDD Logo"
          width={40}
          height={40}
          className="rounded"
          priority
        />
      </Link>
      {/* Bestiary */}
      <SidebarIcon href="/bestiary" icon={<BookOpen size={32} />} label="Bestiary" />
      {/* Episodes (Tavern Tales) */}
      <SidebarIcon href="/episodes" icon={<Swords size={32} />} label="Tavern Tales" />
      {/* World (Atlas) */}
      <SidebarIcon href="/world" icon={<Globe size={32} />} label="The Realm" />
      {/* About (Scroll) */}
      <SidebarIcon href="/about" icon={<Info size={32} />} label="The Scroll" />
    </aside>
  );
}

// ---- Sidebar Icon with Tooltip ----
function SidebarIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link href={href} className="group flex flex-col items-center gap-1 relative my-1">
      <span className="text-yellow-200 group-hover:text-yellow-400 transition-colors">
        {icon}
      </span>
      <span className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-black/90 text-yellow-200 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
        {label}
      </span>
    </Link>
  );
}
