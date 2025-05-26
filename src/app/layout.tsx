import './globals.css';
import Header from '../components/Header'; // Adjust path if needed
import Image from 'next/image';

export const metadata = {
  title: 'Dungeons, Dudes and Dragons',
  description: 'An epic D&D podcast adventure with unforgettable heroes and chaotic tales.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background image - always behind everything */}
        <div className="fixed inset-0 -z-10 w-full h-full">
          <Image
            src="/assets/backgrounds/dnd-home-V2.png"
            alt="Dungeon Portal Background"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'blur(6px) brightness(0.6)', // adjust blur and brightness as you like
            }}
            quality={100}
            priority
            className="pointer-events-none select-none"
            draggable={false}
          />
          {/* Optional: dark overlay for mood/contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Main site content */}
        <Header />
        <main className="relative pt-24 pb-10 px-2 md:px-0 max-w-6xl mx-auto">
          {children}
        </main>
        {/* Footer will go here in future */}
      </body>
    </html>
  );
}
