import Image from 'next/image';
import Link from 'next/link';

// Example character data (replace with real data or map from a file later)
const characters = [
  {
    name: 'Divad Notaeb',
    tagline: 'The Melodic Mischief-Maker',
    image: '/assets/characters/divad-notaeb.png', // update with your actual image paths
    link: '/cast/divad-notaeb',
    stats: [
      { label: 'Class', value: 'Bard' },
      { label: 'Level', value: '6' },
      { label: 'Race', value: 'Tiefling' },
      { label: 'Alignment', value: 'Chaotic Good' },
    ],
  },
  // Add more characters here!
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] mt-6 mb-12">
      {/* Title & Tagline */}
      <div className="z-10 text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white drop-shadow-lg mb-2">
          Dungeons, Dudes and Dragons
        </h1>
        <p className="text-xl md:text-2xl text-yellow-300 font-semibold drop-shadow-md">
          Epic chaos. Legendary fails. Unforgettable heroes.
        </p>
        <p className="text-lg text-gray-200 mt-3 max-w-2xl mx-auto">
          A wild, hilarious D&D podcast adventure. Meet the cast below and dive into the madness!
        </p>
      </div>

      {/* Poster-Style Character Cards */}
      <div className="relative flex flex-row flex-wrap gap-8 justify-center z-10">
        {characters.map((char) => (
          <div
            key={char.name}
            className="group bg-white/10 backdrop-blur-lg border border-yellow-300/20 rounded-2xl shadow-xl p-4 w-72 flex flex-col items-center
              hover:scale-105 hover:shadow-2xl transition-all duration-300
              cursor-pointer glassmorphism"
          >
            <div className="relative w-32 h-32 mb-3 rounded-xl overflow-hidden border-4 border-yellow-300/40 shadow-lg">
              <Image
                src={char.image}
                alt={char.name}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:brightness-110 transition"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{char.name}</h3>
            <div className="text-yellow-300 text-lg font-medium mb-2 italic">{char.tagline}</div>
            {/* Stats in a scroll-like dropdown on hover */}
            <div className="w-full mt-1">
              <details className="bg-black/60 rounded-xl p-2 text-sm text-gray-100 outline-none">
                <summary className="cursor-pointer text-yellow-100 font-semibold">
                  View Stats
                </summary>
                <ul className="mt-2 space-y-1">
                  {char.stats.map((stat) => (
                    <li key={stat.label}>
                      <span className="font-bold">{stat.label}:</span> {stat.value}
                    </li>
                  ))}
                </ul>
                <Link href={char.link} className="inline-block mt-3 text-blue-200 underline hover:text-yellow-300 transition">
                  Full character page →
                </Link>
              </details>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
