import { motion } from "framer-motion";

function SkeletonToggle({ delay }: { delay: number }) {
  return (
    <motion.div
      className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-white/60 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="w-16 h-9 rounded-full bg-gray-200 animate-pulse" />
      <div className="flex-1 h-6 rounded-lg bg-gray-200 animate-pulse" />
      <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
    </motion.div>
  );
}

export default function LoadingSkeleton() {
  return (
    <div className="w-full max-w-lg mx-auto space-y-4 md:space-y-5">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="text-5xl mb-4"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ⚽
        </motion.div>
        <p className="text-lg font-inter text-muted-foreground animate-pulse">
          Preparando o campo...
        </p>
      </motion.div>
      <SkeletonToggle delay={0.1} />
      <SkeletonToggle delay={0.2} />
      <SkeletonToggle delay={0.3} />
    </div>
  );
}
