import { motion, AnimatePresence } from "framer-motion";

interface BriefHappyFlashProps {
  show: boolean;
}

export default function BriefHappyFlash({ show }: BriefHappyFlashProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className="text-7xl md:text-9xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1.5, rotate: 0 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            🎉
          </motion.div>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            style={{
              background: "radial-gradient(circle, gold 0%, transparent 70%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
