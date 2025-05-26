import Image from 'next/image';
import Link from 'next/link';

// Sample data—expand as needed
const cast = [
	{
		name: 'Divad Notaeb',
		role: 'Bard',
		tagline: 'Melodic Mischief-Maker',
		image: '/assets/characters/divad-notaeb.png',
		link: '/cast/divad-notaeb',
	},
	{
		name: 'Darrinious Wortinius',
		role: 'Wizard',
		tagline: 'Rage-First, Ask Later',
		image: '/assets/characters/darren.png', // fixed filename
		link: '/cast/darrinious',
	},
	{
		name: 'Sir Alex of Carrigan',
		role: 'Fighter',
		tagline: 'Rage-First, Ask Later',
		image: '/assets/characters/alex.png',
		link: '/cast/alex',
	},
	{
		name: 'Chuck Chaloozy',
		role: 'Halfling Rogue',
		tagline: 'Rage-First, Ask Later',
		image: '/assets/characters/david.png',
		link: '/cast/chuck',
	},
	// Add more members!
];

export default function CastPreviewSection() {
	return (
		<section className="my-12">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
					Meet the Party
				</h2>
				<div className="flex gap-6 overflow-x-auto pb-4 px-2 md:justify-center">
					{cast.map((member) => (
						<Link
							href={member.link}
							key={member.name}
							className="group flex-shrink-0 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 w-64 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 glassmorphism"
						>
							<div className="relative w-28 h-28 mb-3 rounded-xl overflow-hidden border-4 border-yellow-300/40 shadow-lg">
								<Image
									src={member.image}
									alt={member.name}
									fill
									style={{ objectFit: 'cover' }}
									className="group-hover:brightness-110 transition"
								/>
							</div>
							<h3 className="text-xl font-bold text-white mb-1">
								{member.name}
							</h3>
							<div className="text-yellow-300 font-medium">
								{member.role}
							</div>
							<div className="text-sm italic text-gray-200 mt-1">
								{member.tagline}
							</div>
							<span className="mt-3 inline-block text-blue-200 underline group-hover:text-yellow-300 transition">
								Full Profile &rarr;
							</span>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
