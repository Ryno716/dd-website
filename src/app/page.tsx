import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/assets/dnd-home-V2.png"
        alt="Dungeon Portal"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'blur(0px) brightness(1)', // Set blur to 0 for a sharp background
        }}
        quality={100}
        priority
        className="z-0 pointer-events-none select-none"
      />
    </main>
  );
}
