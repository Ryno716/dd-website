// CardModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CardModal({ card, onClose }) {
  if (!card) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // close when clicking the backdrop
      >
        <motion.div
          className="relative w-96 bg-gradient-to-br from-yellow-100 to-zinc-900 rounded-2xl p-6 shadow-2xl"
          initial={{ scale: 0.7, rotateY: 90 }}
          animate={{ scale: 1, rotateY: 0 }}
          exit={{ scale: 0.7, rotateY: 90 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking the card
        >
          <button
            className="absolute top-4 right-4 text-yellow-800 hover:text-yellow-600"
            onClick={onClose}
          >✕</button>
          <Image
            src={card.image}
            alt={card.name}
            width={176}
            height={224}
            className="w-44 h-56 object-cover rounded-xl shadow-lg mb-4 border-4 border-yellow-400"
          />
          <div className="text-2xl font-bold mb-2">{card.name}</div>
          <div className="text-yellow-600 mb-2">{card.subtitle}</div>
          {/* Stats and more here */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
