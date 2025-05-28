"use client";
import Image from "next/image";
import { Star, User } from "lucide-react";

// Example Episodes Data
const episodes = [
	{
		id: 1,
		title: "Episode 23: BARD To The Bone",
		date: "May 21, 2025",
		description:
			"The party faces their wildest challenge yet as Divad attempts to negotiate with a gelatinous cube... with music.",
		image: "/assets/episodes/ep23-bardtothebone.jpg",
		featured: true,
		guests: ["Divad Notaeb"],
		platforms: {
			spotify: "#",
			apple: "#",
			youtube: "#",
			tiktok: "#",
		},
	},
	{
		id: 2,
		title: "Episode 22: Shadow Over Saltmarsh",
		date: "May 7, 2025",
		description:
			"A new ally emerges, but trust is hard to come by in the foggy alleys of Saltmarsh.",
		image: "/assets/episodes/ep22-shadow.jpg",
		guests: [],
		platforms: {
			spotify: "#",
			apple: "#",
		},
	},
	// ...more episodes
];

export default function EpisodesPage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-zinc-900/90 to-yellow-100/40 py-12 px-4 flex flex-col items-center font-serif">
			<h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-yellow-100 drop-shadow-lg tracking-wider">
				Tavern Tales
			</h1>
			<p className="text-lg mb-10 text-yellow-200 max-w-2xl text-center italic">
				Cozy up by the fire and listen to the legendary adventures, mishaps, and
				stories of the Dungeons, Dudes & Dragons party.
			</p>
			<div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl w-full">
				{episodes.map((ep) => (
					<EpisodeCard key={ep.id} episode={ep} />
				))}
			</div>
		</main>
	);
}

type Episode = typeof episodes[0];

type EpisodeCardProps = {
	episode: Episode;
};

function EpisodeCard({ episode }: EpisodeCardProps) {
	return (
		<div
			className={`bg-yellow-100/95 rounded-2xl shadow-xl p-6 border-4 ${
				episode.featured ? "border-yellow-400" : "border-zinc-300"
			} flex flex-col gap-3 relative group hover:scale-105 transition duration-200`}
		>
			{/* Feature Badge */}
			{episode.featured && (
				<div className="absolute top-3 right-3 bg-yellow-700/90 text-yellow-100 px-3 py-1 rounded-xl flex items-center gap-1 text-xs font-bold shadow-lg">
					<Star className="w-4 h-4" /> Featured
				</div>
			)}
			{/* Image */}
			<Image
				src={episode.image}
				alt={episode.title}
				width={400}
				height={225}
				className="rounded-lg shadow mb-3 object-cover border-2 border-yellow-300"
			/>
			{/* Title */}
			<div className="text-2xl font-bold text-yellow-900">
				{episode.title}
			</div>
			<div className="text-sm text-zinc-600 mb-2">{episode.date}</div>
			{/* Description */}
			<div className="mb-3 text-zinc-800">{episode.description}</div>
			{/* Guests */}
			{episode.guests && episode.guests.length > 0 && (
				<div className="mb-2 flex items-center gap-2">
					<User className="w-4 h-4 text-yellow-700" />
					<span className="text-xs text-yellow-800 font-semibold">
						Featuring: {episode.guests.join(", ")}
					</span>
				</div>
			)}
			{/* Platform Links */}
			<div className="flex gap-3 mt-auto">
				{episode.platforms.spotify && (
					<a
						href={episode.platforms.spotify}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-green-600 hover:bg-green-700 text-white rounded px-3 py-1 text-xs font-bold transition"
					>
						Spotify
					</a>
				)}
				{episode.platforms.apple && (
					<a
						href={episode.platforms.apple}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-gray-900 hover:bg-gray-800 text-white rounded px-3 py-1 text-xs font-bold transition"
					>
						Apple
					</a>
				)}
				{episode.platforms.youtube && (
					<a
						href={episode.platforms.youtube}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1 text-xs font-bold transition"
					>
						YouTube
					</a>
				)}
				{episode.platforms.tiktok && (
					<a
						href={episode.platforms.tiktok}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-black hover:bg-gray-800 text-white rounded px-3 py-1 text-xs font-bold transition"
					>
						TikTok
					</a>
				)}
			</div>
		</div>
	);
}
