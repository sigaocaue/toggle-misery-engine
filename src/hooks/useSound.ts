import { useState, useCallback, useRef } from "react";

const SOUNDS = [
  { frequency: 200, duration: 0.3, type: "sawtooth" as OscillatorType },
  { frequency: 150, duration: 0.4, type: "square" as OscillatorType },
  { frequency: 180, duration: 0.35, type: "triangle" as OscillatorType },
];

function playSadSound(audioCtx: AudioContext) {
  const sound = SOUNDS[Math.floor(Math.random() * SOUNDS.length)];

  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.type = sound.type;
  oscillator.frequency.setValueAtTime(sound.frequency, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    80,
    audioCtx.currentTime + sound.duration
  );

  gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.01,
    audioCtx.currentTime + sound.duration
  );

  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + sound.duration);
}

export function useSound() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    return audioCtxRef.current;
  }, []);

  const playFailSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      playSadSound(ctx);
    } catch {
      // Audio not supported, silently ignore
    }
  }, [soundEnabled, getAudioContext]);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  return { soundEnabled, toggleSound, playFailSound };
}
