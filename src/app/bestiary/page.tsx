"use client";
import Image from "next/image";
import { useState } from "react";
import { Sparkles } from "lucide-react";

// Example Bestiary Data
const bestiaryEntries = [
	{
		id: 1,
		name: "Ryno the Dungeon Bard",
		type: "Cast Member",
		image: "/assets/bestiary/ryno.png",
		description:
			"Spins tales, drops dice, and sings of epic fails and glorious crits.",
		tags: ["Bard", "DM", "Lorekeeper"],
		mediaType: "image",
	},
	{
		id: 2,
		name: "Critical Miss",
		type: "Adventure Moment",
		image: "/assets/bestiary/crit-miss.gif",
		description: "That time the party’s plan... did not go as planned.",
		tags: ["Meme", "Party Fumble"],
		mediaType: "gif",
	},
	{
		id: 3,
		name: "The Owlbear Hug",
		type: "Fan Art",
		image: "/assets/bestiary/owlbear.jpg",
		description:
			"Submitted by legendary fan @DiceGoblin. Who’s a good beastie?",
		tags: ["Owlbear", "Fan Art"],
		mediaType: "image",
	},
	{
		id: 4,
		name: "Epic Showdown",
		type: "Campaign Clip",
		video: "/assets/bestiary/epic-showdown.mp4",
		description: "The final fight—no one expected the plot twist.",
		tags: ["Boss Fight", "Clip"],
		mediaType: "video",
	},
];

export default function BestiaryPage() {
	// Optional: State for expanding a card or viewing media
	const [selected, setSelected] = useState<typeof bestiaryEntries[0] | null>(
		null
	);

	return (
		<main className="min-h-screen bg-gradient-to-br from-yellow-100/60 to-zinc-900/80 py-12 px-4 flex flex-col items-center font-serif">
			<h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-yellow-900 drop-shadow-lg tracking-wider">
				The Bestiary of Dungeons, Dudes & Dragons
			</h1>
			<p className="text-lg mb-10 text-zinc-800 max-w-2xl text-center italic">
				A living tome of heroes, creatures, legendary blunders, and magical
				moments from our campaign and community.
			</p>
			<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl w-full">
				{bestiaryEntries.map((entry) => (
					<BestiaryCard
						key={entry.id}
						entry={entry}
						onClick={() => setSelected(entry)}
					/>
				))}
			</div>
			{/* Optional: Modal or expanded card view */}
			{selected && (
				<BestiaryModal entry={selected} onClose={() => setSelected(null)} />
			)}
		</main>
	);
}

type BestiaryEntry = typeof bestiaryEntries[0];

type BestiaryCardProps = {
	entry: BestiaryEntry;
	onClick: () => void;
};

function BestiaryCard({ entry, onClick }: BestiaryCardProps) {
	return (
		<div
			className="bg-yellow-100/90 hover:bg-yellow-200/90 transition rounded-2xl p-4 shadow-lg flex flex-col items-center cursor-pointer border-4 border-yellow-400 hover:scale-105 duration-200 relative"
			onClick={onClick}
		>
			{/* Badge */}
			<div className="absolute top-3 left-3 flex items-center gap-1 text-xs bg-yellow-700/80 text-yellow-100 px-2 py-1 rounded-xl shadow">
				<Sparkles className="w-4 h-4" /> {entry.type}
			</div>
			{/* Media */}
			{entry.mediaType === "image" || entry.mediaType === "gif" ? (
				entry.image ? (
					<Image
						src={entry.image}
						alt={entry.name}
						width={220}
						height={220}
						className="rounded-xl shadow-md object-cover mb-3 border-2 border-yellow-300"
					/>
				) : null
			) : entry.mediaType === "video" && entry.video ? (
				<video
					src={entry.video}
					controls
					className="rounded-xl shadow-md mb-3 border-2 border-yellow-300"
					width={220}
					height={220}
				/>
			) : null}
			<div className="text-xl font-bold text-yellow-800 mb-1 text-center">
				{entry.name}
			</div>
			<div className="text-zinc-800 text-sm mb-2 text-center">
				{entry.description}
			</div>
			<div className="flex gap-2 flex-wrap justify-center">
				{entry.tags.map((tag: string, i: number) => (
					<span
						key={i}
						className="bg-yellow-300/70 text-yellow-900 rounded px-2 py-0.5 text-xs font-semibold"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
}

// Optional: Modal for expanded bestiary entry view
type BestiaryModalProps = {
	entry: BestiaryEntry;
	onClose: () => void;
};

function BestiaryModal({ entry, onClose }: BestiaryModalProps) {
	return (
		<div
			className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
			onClick={onClose}
		>
			<div
				className="bg-yellow-100 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative border-4 border-yellow-400"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					className="absolute top-4 right-4 text-yellow-700 hover:text-yellow-900 text-2xl"
					onClick={onClose}
					aria-label="Close"
				>
					✕
				</button>
				<div className="flex flex-col items-center">
					{entry.mediaType === "image" || entry.mediaType === "gif" ? (
						entry.image ? (
							<Image
								src={entry.image}
								alt={entry.name}
								width={280}
								height={280}
								className="rounded-xl shadow-md object-cover mb-4 border-2 border-yellow-300"
							/>
						) : null
					) : entry.mediaType === "video" && entry.video ? (
						<video
							src={entry.video}
							controls
							className="rounded-xl shadow-md mb-4 border-2 border-yellow-300"
							width={280}
							height={280}
						/>
					) : null}
					<div className="text-2xl font-bold text-yellow-900 mb-2">
						{entry.name}
					</div>
					<div className="mb-2 text-yellow-700 font-semibold">
						{entry.type}
					</div>
					<div className="text-zinc-800 mb-3 text-center">
						{entry.description}
					</div>
					<div className="flex gap-2 flex-wrap justify-center">
						{entry.tags.map((tag: string, i: number) => (
							<span
								key={i}
								className="bg-yellow-300/70 text-yellow-900 rounded px-2 py-0.5 text-xs font-semibold"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
