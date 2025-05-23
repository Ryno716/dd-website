import './globals.css'
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Dungeons, Dudes & Dragons',
  description: 'A D&D podcast website for chaos, comedy, and epic tales.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen font-sans">
        <Sidebar />
        <main className="ml-[10px]">{children}</main>
      </body>
    </html>
  )
}
