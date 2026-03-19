import { TOGGLE_ITEMS, SANTOS_CLUB } from "./mock/data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  async getClub() {
    await delay(800 + Math.random() * 700);
    if (Math.random() < 0.05) {
      throw new Error("O VAR deu problema! Tente novamente.");
    }
    return SANTOS_CLUB;
  },

  async getToggles() {
    await delay(1000 + Math.random() * 500);
    if (Math.random() < 0.05) {
      throw new Error("O árbitro expulsou a API! Tente novamente.");
    }
    return TOGGLE_ITEMS;
  },
};
