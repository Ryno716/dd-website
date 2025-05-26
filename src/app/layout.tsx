import './globals.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';  // <-- Import Sidebar
import Image from 'next/image';

export const metadata = {
  title: 'Dungeons, Dudes and Dragons',
  description: 'An epic D&D podcast adventure with unforgettable heroes and chaotic tales.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background image */}
        <div className="fixed inset-0 -z-10 w-full h-full">
          <Image
            src="/assets/backgrounds/dnd-home-V2.png"
            alt="Dungeon Portal Background"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'blur(6px) brightness(0.6)',
            }}
            quality={100}
            priority
            className="pointer-events-none select-none"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Desktop Sidebar (hidden on mobile) */}
        <div className="hidden md:block fixed top-0 left-0 h-full z-50">
          <Sidebar />
        </div>

        {/* Mobile Header (hidden on desktop) */}
        <div className="block md:hidden">
          <Header />
        </div>

        {/* Main Content: Add margin on desktop to avoid content under sidebar */}
        <main className="relative pt-24 pb-10 px-2 md:px-0 max-w-6xl mx-auto md:ml-24">
          {children}
        </main>
        {/* Footer to be added later */}
      </body>
    </html>
  );
}
