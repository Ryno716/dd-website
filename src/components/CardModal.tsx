// CardModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Type for a character (from data/characters.ts)
type Character = {
  name: string;
  tagline: string;
  role: string;
  subtitle: string;
  image: string;
  link: string;
  stats: { label: string; value: string }[];
};

type CardModalProps = {
  card: Character;
  onClose: () => void;
};

export default function CardModal({ card, onClose }: CardModalProps) {
  if (!card) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-96 bg-gradient-to-br from-yellow-100 to-zinc-900 rounded-2xl p-6 shadow-2xl"
          initial={{ scale: 0.7, rotateY: 90 }}
          animate={{ scale: 1, rotateY: 0 }}
          exit={{ scale: 0.7, rotateY: 90 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-yellow-800 hover:text-yellow-600"
            onClick={onClose}
          >✕</button>
          {card.image && (
            <Image
              src={card.image}
              alt={card.name}
              width={176}
              height={224}
              className="w-44 h-56 object-cover rounded-xl shadow-lg mb-4 border-4 border-yellow-400"
            />
          )}
          <div className="text-2xl font-bold mb-2">{card.name}</div>
          <div className="text-yellow-600 mb-2">{card.subtitle}</div>
          <div className="text-yellow-700 mb-2 italic">{card.tagline}</div>
          <div className="mb-2 text-yellow-700 font-semibold">{card.role}</div>
          <div className="flex flex-col gap-1 mt-2">
            {card.stats.map((stat, i) => (
              <div key={i} className="flex justify-between text-sm text-yellow-900">
                <span className="font-bold">{stat.label}:</span> <span>{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
