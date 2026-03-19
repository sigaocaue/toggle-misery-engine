import { useCallback } from "react";
import { motion } from "framer-motion";
import Header from "../components/trilema/Header";
import Footer from "../components/trilema/Footer";
import ToggleList from "../components/trilema/ToggleList";
import SoundToggle from "../components/trilema/SoundToggle";
import BriefHappyFlash from "../components/trilema/BriefHappyFlash";
import LoadingSkeleton from "../components/trilema/LoadingSkeleton";
import ErrorState from "../components/trilema/ErrorState";
import useClubData from "../hooks/useClubData";
import useTrilema from "../hooks/useTrilema";
import useSound from "../hooks/useSound";
import { FAIL_MESSAGES } from "../services/mock/data";
import type { ToggleId } from "@/types";

export function Trilema() {
  const { toggleItems, isLoading, error, refetch } = useClubData();
  const {
    toggles,
    handleToggle,
    forcedOff,
    lastMessage,
    setLastMessage,
    showBriefHappy,
  } = useTrilema();
  const { soundEnabled, toggleSound, playFailSound, playClickSound } =
    useSound();

  const onToggle = useCallback(
    (id: ToggleId) => {
      playClickSound();
      handleToggle(id, () => {
        playFailSound();
        const msg =
          FAIL_MESSAGES[Math.floor(Math.random() * FAIL_MESSAGES.length)];
        setLastMessage(msg);
        setTimeout(() => setLastMessage(null), 3000);
      });
    },
    [handleToggle, playFailSound, playClickSound, setLastMessage]
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #000 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #000 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 px-4 py-8 md:py-16 max-w-2xl mx-auto">
        <Header />

        {isLoading && <LoadingSkeleton />}

        {error && <ErrorState message={error} onRetry={refetch} />}

        {!isLoading && !error && toggleItems && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ToggleList
              toggleItems={toggleItems}
              toggles={toggles}
              forcedOff={forcedOff}
              onToggle={onToggle}
              lastMessage={lastMessage}
            />
          </motion.div>
        )}

        <Footer />
      </div>

      <BriefHappyFlash show={showBriefHappy} />
      <SoundToggle soundEnabled={soundEnabled} onToggle={toggleSound} />
    </div>
  );
}
