import type { Club, ToggleItem } from "@/types";

// Mock data for O Trilema do Torcedor

export const SANTOS_CLUB: Club = {
  id: "santos-fc",
  name: "Santos Futebol Clube",
  shortName: "Santos",
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png",
  colors: {
    primary: "#000000",
    secondary: "#FFFFFF",
  },
};

export const TOGGLE_ITEMS: ToggleItem[] = [
  {
    id: "A",
    label: "torcer para o",
    emoji: "⚽",
    club: SANTOS_CLUB,
  },
  {
    id: "B",
    label: "assistir o",
    emoji: "📺",
    club: SANTOS_CLUB,
  },
  {
    id: "C",
    label: "ser feliz!",
    emoji: "😊",
    club: null,
  },
];

export const FAIL_MESSAGES = [
  "KKKKKKK não dá né, parceiro! 😂",
  "Torcedor sofre, mas não desiste! 💀",
  "Pra que ser feliz se tem futebol? 🤡",
  "A ilusão durou 0.001 segundos ⏱️",
  "O Santos te ama... de um jeito especial 🖤🤍",
  "Felicidade é overrated, o que importa é o Peixe! 🐟",
  "Tentou ser feliz? Que ousadia! 😤",
  "A vida do torcedor é assim mesmo... 😮‍💨",
  "Almeida Garret: 'Deus criou o futebol pra torcedor sofrer' 📖",
  "Seu psicólogo mandou um abraço 🫂",
];