import { episodes } from '@/data/episodes';
import LatestEpisodeSection from '../components/LatestEpisodeSection';
import CastCarousel from '../components/CastCarousel'; // <-- new import!

export default function Home() {
  const latestEpisode = episodes[0];

  return (
    <main>
      {/* Latest Episode Section */}
      {latestEpisode && <LatestEpisodeSection episode={latestEpisode} />}

      {/* Carousel instead of card grid */}
      <CastCarousel />

      {/* Add more sections below if you want */}
    </main>
  );
}
