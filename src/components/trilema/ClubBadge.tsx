import { motion } from "framer-motion";
import type { Club } from "../../types";

interface ClubBadgeProps {
  club: Club | null;
  size?: number;
}

export default function ClubBadge({ club, size = 48 }: ClubBadgeProps) {
  if (!club) return null;

  return (
    <motion.div
      className="flex-shrink-0"
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <img
        src={club.iconUrl}
        alt={club.name}
        width={size}
        height={size}
        className="drop-shadow-lg object-contain"
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
}
