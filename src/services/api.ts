import axios from "axios";
import type { TrilemaData } from "../types";
import { mockTrilemaData } from "./mock/data";

const api = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

export async function fetchTrilemaData(): Promise<TrilemaData> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // In the future, replace with: const { data } = await api.get<TrilemaData>("/trilema");
  // For now, return mock data
  void api; // reference to avoid unused warning
  return mockTrilemaData;
}
