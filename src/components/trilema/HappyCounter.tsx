import { motion, AnimatePresence } from "framer-motion";
import { HAPPY_ATTEMPT_MILESTONES } from "../../services/mock/data";

interface HappyCounterProps {
  count: number;
}

export default function HappyCounter({ count }: HappyCounterProps) {
  if (count === 0) return null;

  const milestone = HAPPY_ATTEMPT_MILESTONES[count as keyof typeof HAPPY_ATTEMPT_MILESTONES];

  return (
    <motion.div
      className="text-center mt-8 space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.p
        className="text-sm font-inter text-muted-foreground"
        key={count}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Tentativas de ser feliz:{" "}
        <span className="font-bold text-foreground text-base">{count}</span>
      </motion.p>

      <AnimatePresence mode="wait">
        {milestone && (
          <motion.div
            key={milestone}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-amber-50 border-2 border-amber-200 rounded-xl px-4 py-2 inline-block shadow-md"
          >
            <p className="text-sm font-inter font-semibold text-amber-700">
              🏅 {milestone}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
