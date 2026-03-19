import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import ClubBadge from "../ClubBadge/ClubBadge";
import type { ToggleItem as ToggleItemType, ToggleId } from "../../types";

interface ToggleItemProps {
  item: ToggleItemType;
  isOn: boolean;
  isForcedOff: boolean;
  onToggle: (id: ToggleId) => void;
}

const EMOJI_REACTIONS = ["😭", "💀", "😤", "🤡", "😩", "🫠"];

function getRandomEmoji() {
  return EMOJI_REACTIONS[Math.floor(Math.random() * EMOJI_REACTIONS.length)];
}

export default function ToggleItem({
  item,
  isOn,
  isForcedOff,
  onToggle,
}: ToggleItemProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (isForcedOff) {
      controls.start({
        x: [-0, -60, -30, 0],
        opacity: [1, 0.4, 0.7, 1],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [isForcedOff, controls]);

  const isHappy = item.id === "C";

  return (
    <motion.div
      animate={controls}
      className="relative"
      layout
    >
      <motion.div
        className={`flex items-center gap-5 rounded-2xl px-6 py-5 shadow-sm border transition-all duration-300 ${
          isOn
            ? "bg-white border-green-300 shadow-green-100 shadow-md"
            : "bg-white border-gray-200"
        }`}
        whileHover={{ scale: 1.01, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
        whileTap={{ scale: 0.99 }}
      >
        {/* Toggle switch */}
        <button
          onClick={() => onToggle(item.id)}
          className={`relative h-8 w-14 shrink-0 rounded-full transition-colors duration-300 cursor-pointer ${
            isOn ? "bg-green-500" : "bg-gray-300"
          }`}
          aria-label={`Toggle ${item.label}`}
        >
          <motion.div
            className="absolute top-1 h-6 w-6 rounded-full bg-white shadow-md"
            animate={{ left: isOn ? "1.75rem" : "0.25rem" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>

        {/* Label */}
        <span className="flex-1 text-lg font-bold text-gray-800">
          {item.label}
        </span>

        {/* Club badge or emoji */}
        {isHappy ? (
          <motion.span
            className="text-4xl"
            animate={isOn ? { rotate: [0, 10, -10, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            😊
          </motion.span>
        ) : (
          <ClubBadge club={item.club} size={48} />
        )}

        {/* Forced off reaction emoji */}
        {isForcedOff && (
          <motion.span
            className="absolute -right-3 -top-3 text-3xl"
            initial={{ scale: 0, y: 0 }}
            animate={{ scale: [0, 1.5, 1], y: [0, -15, -25] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {getRandomEmoji()}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
