import { motion, AnimatePresence } from "framer-motion";
import ToggleItem from "./ToggleItem";
import FailMessage from "./FailMessage";
import type { ToggleItem as ToggleItemType, ToggleId, ToggleState } from "../../types";

interface ToggleListProps {
  toggleItems: ToggleItemType[];
  toggles: ToggleState;
  forcedOff: ToggleId | null;
  onToggle: (id: ToggleId) => void;
  lastMessage: string | null;
}

export default function ToggleList({
  toggleItems,
  toggles,
  forcedOff,
  onToggle,
  lastMessage,
}: ToggleListProps) {
  return (
    <div className="w-full max-w-lg mx-auto space-y-4 md:space-y-5">
      {toggleItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
        >
          <ToggleItem
            item={item}
            isOn={toggles[item.id]}
            isForcedOff={forcedOff === item.id}
            onToggle={() => onToggle(item.id)}
          />
        </motion.div>
      ))}

      <AnimatePresence>
        {lastMessage && <FailMessage message={lastMessage} />}
      </AnimatePresence>
    </div>
  );
}
