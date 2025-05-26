import Image from 'next/image';

interface Platform {
  name: string;
  url: string;
  icon: string;
}

export interface Episode {
  title: string;
  description: string;
  date: string;
  image: string;
  listenUrl: string;
  platforms: Platform[];
}

export default function LatestEpisodeSection({ episode }: { episode: Episode }) {
  return (
    <section className="my-12 flex flex-col items-center">
      <div className="glassmorphism flex flex-col md:flex-row items-center md:items-start p-6 md:p-8 rounded-2xl shadow-xl max-w-3xl w-full gap-8">
        {/* Episode Image */}
        <div className="w-40 h-40 relative flex-shrink-0 rounded-xl overflow-hidden border-4 border-yellow-300/40 shadow-lg">
          <Image
            src={episode.image}
            alt={episode.title}
            fill
            sizes="(max-width: 768px) 90vw, 160px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* Episode Info */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{episode.title}</h2>
          <p className="text-yellow-200 text-sm mb-1">{episode.date}</p>
          <p className="text-gray-100 mb-4">{episode.description}</p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={episode.listenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400/80 hover:bg-yellow-300/90 text-black font-bold rounded-lg shadow transition"
            >
              Listen Now
            </a>
            {/* Platform icons/links */}
            {episode.platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 bg-black/50 hover:bg-yellow-400/40 rounded-md transition text-white"
              >
                <Image src={platform.icon} alt={platform.name} width={22} height={22} sizes="22px" />
                <span className="text-sm">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
