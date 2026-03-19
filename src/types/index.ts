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
  club: Club;
}

export interface ToggleState {
  A: boolean;
  B: boolean;
  C: boolean;
}

export interface TrilemaData {
  toggles: ToggleItem[];
}
