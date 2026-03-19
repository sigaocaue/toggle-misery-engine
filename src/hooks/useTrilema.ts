import { useState, useCallback, useRef } from "react";
import type { ToggleId, ToggleState } from "@/types";

const FORCED_OFF_EMOJIS = ["💀", "😭", "🤡", "😱", "🫠", "😵", "🥲"];

const FORCE_OFF_MAP: Record<ToggleId, ToggleId> = {
  C: "B",
  B: "A",
  A: "C",
};

export default function useTrilema() {
  const [toggles, setToggles] = useState<ToggleState>({ A: false, B: false, C: false });
  const [forcedOff, setForcedOff] = useState<ToggleId | null>(null);
  const [forcedOffEmoji, setForcedOffEmoji] = useState<string | null>(null);
  const [happyAttempts, setHappyAttempts] = useState(0);
  const [lastMessage, setLastMessage] = useState<string | null>(null);
  const [showBriefHappy, setShowBriefHappy] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleToggle = useCallback(
    (id: ToggleId, onForceOff?: (victimId: ToggleId) => void) => {
      setToggles((prev) => {
        const newState = { ...prev };

        if (prev[id]) {
          newState[id] = false;
          setForcedOff(null);
          setLastMessage(null);
          return newState;
        }

        newState[id] = true;

        const onCount = Object.values(newState).filter(Boolean).length;

        if (onCount <= 2) {
          setForcedOff(null);
          return newState;
        }

        const victimId = FORCE_OFF_MAP[id];

        setShowBriefHappy(true);

        if (id === "C") {
          setHappyAttempts((c) => c + 1);
        }

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setToggles((current) => ({
            ...current,
            [victimId]: false,
          }));
          setForcedOff(victimId);
          setForcedOffEmoji(FORCED_OFF_EMOJIS[Math.floor(Math.random() * FORCED_OFF_EMOJIS.length)]);
          setShowBriefHappy(false);
          if (onForceOff) onForceOff(victimId);

          setTimeout(() => {
            setForcedOff(null);
            setForcedOffEmoji(null);
          }, 1500);
        }, 150);

        return newState;
      });
    },
    []
  );

  return {
    toggles,
    handleToggle,
    forcedOff,
    forcedOffEmoji,
    happyAttempts,
    lastMessage,
    setLastMessage,
    showBriefHappy,
  };
}
