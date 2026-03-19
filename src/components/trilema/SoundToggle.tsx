import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface SoundToggleProps {
  soundEnabled: boolean;
  onToggle: () => void;
}

export default function SoundToggle({ soundEnabled, onToggle }: SoundToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-border flex items-center justify-center hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={soundEnabled ? "Desativar sons" : "Ativar sons"}
    >
      {soundEnabled ? (
        <Volume2 className="w-5 h-5 text-foreground" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </motion.button>
  );
}
