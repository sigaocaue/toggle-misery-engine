import { motion } from "framer-motion";

interface SoundToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export default function SoundToggle({ enabled, onToggle }: SoundToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={enabled ? "Desativar sons" : "Ativar sons"}
    >
      <motion.span
        className="text-xl"
        key={enabled ? "on" : "off"}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      >
        {enabled ? "🔊" : "🔇"}
      </motion.span>
    </motion.button>
  );
}
