import { motion } from "framer-motion";

interface FailMessageProps {
  message: string;
}

export default function FailMessage({ message }: FailMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="text-center mt-6"
    >
      <div className="inline-block bg-red-50 border-2 border-red-200 rounded-2xl px-6 py-3 shadow-lg">
        <p className="text-base md:text-lg font-inter font-semibold text-red-600">
          {message}
        </p>
      </div>
    </motion.div>
  );
}
