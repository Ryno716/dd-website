import HeroSection from '../components/HeroSection';
import LatestEpisodeSection from '../components/LatestEpisodeSection';
import ArcaneCharacterCard from '../components/ArcaneCharacterCard';

const cast = [
  {
    name: 'Divad Notaeb',
    subtitle: 'Human Bard • Level 7',
    characterImg: '/assets/characters/divad.png'
  },
  {
    name: 'Darrinious Wortinius',
    subtitle: 'Human Wizard • Level 7',
    characterImg: '/assets/characters/darrinious.png'
  },
  // Add more characters as needed
];

export default function Home() {
  return (
    <main>
    
      <LatestEpisodeSection />

      {/* --- New Ancient Character Cards Grid --- */}
      <section className="flex flex-col items-center my-16">
        <h2 className="text-3xl font-bold text-violet-100 mb-8 drop-shadow-lg tracking-widest font-serif">
          Meet The Cast
        </h2>
        <div className="flex flex-wrap gap-10 justify-center">
          {cast.map((member) => (
            <ArcaneCharacterCard
              key={member.name}
              name={member.name}
              subtitle={member.subtitle}
              characterImg={member.characterImg}
            />
          ))}
        </div>
      </section>
      {/* Add more sections below if you want */}
    </main>
  );
}
