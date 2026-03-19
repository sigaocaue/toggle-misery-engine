export interface Club {
  id: string;
  name: string;
  shortName: string;
  iconUrl: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

export type ToggleId = "A" | "B" | "C";

export interface ToggleItem {
  id: ToggleId;
  label: string;
  emoji: string;
  club: Club | null;
}

export interface ToggleState {
  A: boolean;
  B: boolean;
  C: boolean;
}