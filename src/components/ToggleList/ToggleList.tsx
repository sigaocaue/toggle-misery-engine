import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToggleItemComponent from "../ToggleItem/ToggleItem";
import type { ToggleItem } from "../../types";
import { useTrilema } from "../../hooks/useTrilema";
import { useSound } from "../../hooks/useSound";
import SoundToggle from "../SoundToggle/SoundToggle";

interface ToggleListProps {
  items: ToggleItem[];
}

export default function ToggleList({ items }: ToggleListProps) {
  const { toggles, toggle, forcedOff, miseryCount, setOnForceOff } =
    useTrilema();
  const { soundEnabled, toggleSound, playFailSound } = useSound();

  useEffect(() => {
    setOnForceOff(playFailSound);
  }, [setOnForceOff, playFailSound]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <SoundToggle enabled={soundEnabled} onToggle={toggleSound} />

      <motion.div
        className="flex flex-col gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <ToggleItemComponent
                item={item}
                isOn={toggles[item.id]}
                isForcedOff={forcedOff === item.id}
                onToggle={toggle}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Misery counter */}
      {miseryCount > 0 && (
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          key={miseryCount}
        >
          <p className="text-sm text-gray-400">
            Tentativas de ser feliz torcendo:{" "}
            <strong className="text-red-400 text-lg">{miseryCount}</strong>
          </p>
          {miseryCount >= 3 && (
            <motion.p
              className="mt-1 text-xs text-gray-400 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {miseryCount >= 10
                ? "Já aceitou que não dá, né? 🤡"
                : miseryCount >= 5
                  ? "Insistindo... típico de torcedor 😤"
                  : "Tá difícil, hein? 😅"}
            </motion.p>
          )}
        </motion.div>
      )}
    </div>
  );
}
