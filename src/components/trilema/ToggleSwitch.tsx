import { motion } from "framer-motion";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  isForcedOff: boolean;
}

export default function ToggleSwitch({ isOn, onToggle, isForcedOff }: ToggleSwitchProps) {
  return (
    <motion.button
      onClick={onToggle}
      className={`relative w-16 h-9 rounded-full p-1 cursor-pointer transition-colors duration-300 flex-shrink-0 ${
        isOn
          ? "bg-green-500 shadow-lg shadow-green-500/30"
          : "bg-gray-300"
      }`}
      whileTap={{ scale: 0.95 }}
      animate={
        isForcedOff
          ? { x: [0, -12, 8, -6, 4, 0] }
          : { x: 0 }
      }
      transition={
        isForcedOff
          ? { duration: 0.5, ease: "easeInOut" }
          : { duration: 0.2 }
      }
    >
      <motion.div
        className="w-7 h-7 rounded-full shadow-md bg-white"
        animate={{
          x: isOn ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
      {isOn && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
          }}
        />
      )}
    </motion.button>
  );
}
