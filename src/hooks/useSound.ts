import { useState, useCallback, useRef } from "react";

const createAudioContext = () => {
  return new AudioContext();
};

export default function useSound() {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = sessionStorage.getItem("trilema-sound");
    return saved !== null ? saved === "true" : true;
  });
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = createAudioContext();
    }
    return audioCtxRef.current;
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      sessionStorage.setItem("trilema-sound", String(next));
      return next;
    });
  }, []);

  const playFailSound = useCallback(() => {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const notes = [
      { freq: 392, start: 0, dur: 0.25 },
      { freq: 370, start: 0.25, dur: 0.25 },
      { freq: 349, start: 0.5, dur: 0.25 },
      { freq: 311, start: 0.75, dur: 0.6 },
    ];

    notes.forEach(({ freq, start, dur }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + start);
      if (start === 0.75) {
        osc.frequency.setValueAtTime(freq, now + start);
        osc.frequency.linearRampToValueAtTime(freq - 20, now + start + dur);
      }
      gain.gain.setValueAtTime(0.3, now + start);
      gain.gain.exponentialRampToValueAtTime(0.01, now + start + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + start);
      osc.stop(now + start + dur + 0.05);
    });
  }, [soundEnabled, getAudioContext]);

  const playClickSound = useCallback(() => {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  }, [soundEnabled, getAudioContext]);

  return {
    soundEnabled,
    toggleSound,
    playFailSound,
    playClickSound,
  };
}
