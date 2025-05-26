import Image from 'next/image';

const latestEpisode = {
  title: 'Episode 23: BARD To The Bone',
  description: 'The party faces their wildest challenge yet as Divad attempts to negotiate with a gelatinous cube... with music.',
  date: 'May 21, 2025',
  image: '/assets/episodes/ep23-cover.png', // Replace with your actual episode image!
  listenUrl: 'https://open.spotify.com/episode/2fDRrlHdpzQiL6OSWWBJRh', // Replace with your podcast link!
  platforms: [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/show/3p1qHYvfop6BJTeispqqQf',
      icon: '/assets/icons/spotify.svg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dungeonsdudesdragons',
      icon: '/assets/icons/instagram.svg'
    },
    {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@dungeonsdudesdragons',
        icon: '/assets/icons/tiktok.svg'
    }
    // Add more platforms if you want!
  ],
};

export default function LatestEpisodeSection() {
  return (
    <section className="my-12 flex flex-col items-center">
      <div className="glassmorphism flex flex-col md:flex-row items-center md:items-start p-6 md:p-8 rounded-2xl shadow-xl max-w-3xl w-full gap-8">
        {/* Episode Image */}
        <div className="w-40 h-40 relative flex-shrink-0 rounded-xl overflow-hidden border-4 border-yellow-300/40 shadow-lg">
          <Image
            src={latestEpisode.image}
            alt={latestEpisode.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* Episode Info */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{latestEpisode.title}</h2>
          <p className="text-yellow-200 text-sm mb-1">{latestEpisode.date}</p>
          <p className="text-gray-100 mb-4">{latestEpisode.description}</p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={latestEpisode.listenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400/80 hover:bg-yellow-300/90 text-black font-bold rounded-lg shadow transition"
            >
              Listen Now
            </a>
            {/* Platform icons/links */}
            {latestEpisode.platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 bg-black/50 hover:bg-yellow-400/40 rounded-md transition text-white"
              >
                <Image src={platform.icon} alt={platform.name} width={22} height={22} />
                <span className="text-sm">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
