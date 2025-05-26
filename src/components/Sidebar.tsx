"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Users2, Swords, Globe, Info } from "lucide-react";
import { motion } from "framer-motion";

// Dummy cast data
const characters = [
  { name: "Alice", img: "/assets/cast/alice.png", href: "/cast/alice" },
  { name: "Bob", img: "/assets/cast/bob.png", href: "/cast/bob" },
  { name: "Charlie", img: "/assets/cast/charlie.png", href: "/cast/charlie" },
  { name: "David", img: "/assets/cast/david.png", href: "/cast/david" },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-20 bg-black/80 backdrop-blur-lg flex flex-col items-center py-6 z-50 gap-6 shadow-2xl">
      {/* Logo at top */}
      <Link href="/" className="mb-8">
        <Image
          src="/assets/logos/dnd-logo.png" // corrected filename
          alt="DDD Logo"
          width={40}
          height={40}
          className="rounded"
          priority
        />
      </Link>
      {/* Cast Popout */}
      <CastPopout />
      {/* Other icons */}
      <SidebarIcon href="/episodes" icon={<Swords size={32} />} label="Episodes" />
      <SidebarIcon href="/world" icon={<Globe size={32} />} label="World" />
      <SidebarIcon href="/about" icon={<Info size={32} />} label="About" />
    </aside>
  );
}

// ---- Cast Popout as a "scroll" ----
function CastPopout() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="group flex flex-col items-center gap-1 relative focus:outline-none"
          aria-label="Show cast list"
        >
          <span className="text-yellow-200 group-hover:text-yellow-400 transition-colors">
            <Users2 size={32} />
          </span>
          {/* Tooltip */}
          <span className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-black/90 text-yellow-200 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
            Cast
          </span>
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        titleText="Meet the Cast"
        descriptionText="List of all cast members in the campaign."
        className="w-[340px] max-w-[90vw] bg-gradient-to-b from-yellow-100 via-yellow-50 to-yellow-200 border-l-4 border-yellow-700 flex flex-col gap-6 pt-8 rounded-r-3xl shadow-2xl"
      >
        <motion.div
          initial={{ scaleX: 0.6, opacity: 0, x: -60 }}
          animate={{ scaleX: 1, opacity: 1, x: 0 }}
          exit={{ scaleX: 0.6, opacity: 0, x: -60 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="origin-left"
        >
          {/* Visually hidden heading for a11y (handled by SheetContent's titleText) */}
          <SheetTitle asChild>
            <h2 className="text-2xl text-yellow-900 font-bold mb-4 flex items-center gap-2 drop-shadow">
              <Users2 /> Meet the Cast
            </h2>
          </SheetTitle>
          <ul className="flex flex-col gap-4">
            {characters.map((c) => (
              <li key={c.name} className="flex items-center gap-4">
                <Image
                  src={c.img}
                  alt={c.name}
                  width={48}
                  height={48}
                  className="rounded-xl border-2 border-yellow-900 shadow"
                />
                <Link
                  href={c.href}
                  className="text-yellow-900 hover:text-yellow-700 font-bold text-lg transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </SheetContent>
    </Sheet>
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
    <Link href={href} className="group flex flex-col items-center gap-1 relative">
      <span className="text-yellow-200 group-hover:text-yellow-400 transition-colors">
        {icon}
      </span>
      <span className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-black/90 text-yellow-200 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
        {label}
      </span>
    </Link>
  );
}
