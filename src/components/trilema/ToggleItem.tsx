import { motion, AnimatePresence } from "framer-motion";
import ToggleSwitch from "./ToggleSwitch";
import ClubBadge from "./ClubBadge";
import type { ToggleItem as ToggleItemType } from "../../types";

interface ToggleItemProps {
  item: ToggleItemType;
  isOn: boolean;
  isForcedOff: boolean;
  forcedOffEmoji: string | null;
  onToggle: () => void;
}

export default function ToggleItem({ item, isOn, isForcedOff, forcedOffEmoji, onToggle }: ToggleItemProps) {

  return (
    <motion.div
      layout
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <motion.div
        className={`flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl transition-all duration-300 ${
          isOn
            ? "bg-white shadow-xl shadow-black/5 border-2 border-green-200"
            : "bg-white/60 shadow-md border-2 border-transparent"
        }`}
        animate={
          isForcedOff
            ? {
                x: [0, -80, 0],
                backgroundColor: [
                  "rgba(255,255,255,1)",
                  "rgba(254,202,202,1)",
                  "rgba(255,255,255,0.6)",
                ],
              }
            : {}
        }
        transition={
          isForcedOff
            ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            : {}
        }
      >
        <ToggleSwitch isOn={isOn} onToggle={onToggle} isForcedOff={isForcedOff} />

        <motion.span
          className="text-xl md:text-2xl font-inter font-bold text-foreground flex-1"
          animate={
            isForcedOff
              ? { opacity: [1, 0.3, 1] }
              : { opacity: 1 }
          }
        >
          {item.label}
        </motion.span>

        {item.club && <ClubBadge club={item.club} size={52} />}

        {!item.club && (
          <motion.span
            className="text-4xl"
            animate={
              isOn
                ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }
                : { scale: 1 }
            }
            transition={{ duration: 0.5 }}
          >
            {item.emoji}
          </motion.span>
        )}

        <AnimatePresence>
          {isForcedOff && (
            <motion.div
              className="absolute -top-3 -right-2 text-3xl"
              initial={{ opacity: 0, scale: 0, y: 10 }}
              animate={{ opacity: 1, scale: 1.2, y: -10 }}
              exit={{ opacity: 0, scale: 0, y: -30 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {forcedOffEmoji}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
