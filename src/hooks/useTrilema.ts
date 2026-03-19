import { useState, useCallback, useRef } from "react";
import type { ToggleId, ToggleState } from "../types";

// Rules: when turning on the third toggle, one must be forced OFF
// Ligar C quando A+B ON → B OFF
// Ligar B quando A+C ON → A OFF
// Ligar A quando B+C ON → C OFF
const FORCE_OFF_MAP: Record<ToggleId, { requires: [ToggleId, ToggleId]; victim: ToggleId }> = {
  C: { requires: ["A", "B"], victim: "B" },
  B: { requires: ["A", "C"], victim: "A" },
  A: { requires: ["B", "C"], victim: "C" },
};

export function useTrilema() {
  const [toggles, setToggles] = useState<ToggleState>({
    A: false,
    B: false,
    C: false,
  });

  const [forcedOff, setForcedOff] = useState<ToggleId | null>(null);
  const [miseryCount, setMiseryCount] = useState(0);
  const onForceOffRef = useRef<(() => void) | null>(null);

  const setOnForceOff = useCallback((cb: () => void) => {
    onForceOffRef.current = cb;
  }, []);

  const toggle = useCallback((id: ToggleId) => {
    setToggles((prev) => {
      const newValue = !prev[id];

      if (!newValue) {
        // Turning OFF manually — just do it
        return { ...prev, [id]: false };
      }

      // Turning ON — check trilema
      const rule = FORCE_OFF_MAP[id];
      const [req1, req2] = rule.requires;

      if (prev[req1] && prev[req2]) {
        // All three would be ON — force one OFF
        setForcedOff(rule.victim);
        if (id === "C" || rule.victim === "C") {
          setMiseryCount((c) => c + 1);
        }
        onForceOffRef.current?.();

        // Clear forcedOff after animation
        setTimeout(() => setForcedOff(null), 600);

        return { ...prev, [id]: true, [rule.victim]: false };
      }

      return { ...prev, [id]: true };
    });
  }, []);

  return { toggles, toggle, forcedOff, miseryCount, setOnForceOff };
}
