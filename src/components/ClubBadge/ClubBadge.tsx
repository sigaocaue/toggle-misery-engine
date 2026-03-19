import { motion } from "framer-motion";
import type { Club } from "../../types";

interface ClubBadgeProps {
  club: Club;
  size?: number;
}

export default function ClubBadge({ club, size = 40 }: ClubBadgeProps) {
  return (
    <motion.img
      src={club.iconUrl}
      alt={club.name}
      width={size}
      height={size}
      className="object-contain drop-shadow-md"
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    />
  );
}
