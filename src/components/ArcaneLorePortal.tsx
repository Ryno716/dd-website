import Image from 'next/image';
import Link from 'next/link';

const featuredChar = {
  name: 'Divad Notaeb',
  tagline: 'The Melodic Mischief-Maker',
  image: '/assets/characters/divad-notaeb.png',
  link: '/cast/divad-notaeb',
};

export default function ArcaneLorePortal() {
  return (
    <section className="relative w-full max-w-6xl min-h-[450px] mx-auto my-12" style={{ height: 500 }}>
      {/* Portal (top right, for example) */}
      <div className="absolute right-20 top-2 z-60 flex flex-col items-center">
        {/* Portal */}
        <Image
          src="/assets/portal.png"
          alt="Arcane Portal"
          width={300}
          height={300}
          className="animate-spin-slow"
          style={{ filter: 'drop-shadow(0 0 56px #73e3fa88)' }}
        />
        {/* Portrait centered in portal */}
        <div className="absolute left-1 top-1/2 z-40"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image
            src={featuredChar.image}
            alt={featuredChar.name}
            width={130}
            height={130}
            className="rounded-full border-4 border-yellow-300 shadow-xl bg-[#222]"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      {/* Book (center bottom) */}
      <div className="absolute left-1/2 bottom-2 z-20"
        style={{
          transform: 'translateX(-50%)',
        }}
      >
        <Image
          src="/assets/book.png"
          alt="Book of Lore"
          width={410}
          height={210}
          className="drop-shadow-2xl"
        />
        {/* Text overlay on book */}
        <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center px-8 pt-10 z-30 pointer-events-none">
          <h3
            className="text-2xl md:text-3xl font-bold text-yellow-200 font-serif mb-1"
            style={{ textShadow: '0 2px 12px #2e2210, 0 0px 6px #000a' }}
          >
            {featuredChar.name}
          </h3>
          <div
            className="italic text-lg md:text-xl text-yellow-300 mb-2"
            style={{ textShadow: '0 2px 8px #000a' }}
          >
            {featuredChar.tagline}
          </div>
        </div>
      </div>
      {/* Quill (floating to the left of the book) */}
      <div className="absolute left-[15%] bottom-14 z-30">
        <Image
          src="/assets/quill.png"
          alt="Quill"
          width={85}
          height={85}
          className="animate-float"
          style={{
            rotate: '-20deg',
            filter: 'drop-shadow(0 6px 24px #e4b16577)',
          }}
        />
      </div>
      {/* Button (below book, centered) */}
      <div className="absolute left-1/2 bottom-[-42px] z-40" style={{ transform: 'translateX(-50%)' }}>
        <Link
          href={featuredChar.link}
          className="px-5 py-2 rounded-lg bg-yellow-400/90 hover:bg-yellow-300/90 text-black font-bold shadow transition"
        >
          Read Full Chronicle &rarr;
        </Link>
      </div>
    </section>
  );
}
