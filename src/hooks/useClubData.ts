import { useState, useEffect } from "react";
import { api } from "../services/api";
import type { Club } from "../types";

export default function useClubData() {
  const [toggleItems, setToggleItems] = useState<any[] | null>(null);
  const [club, setClub] = useState<Club | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [toggleData, clubData] = await Promise.all([
        api.getToggles(),
        api.getClub(),
      ]);
      setToggleItems(toggleData);
      setClub(clubData);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar dados");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { toggleItems, club, isLoading, error, refetch: fetchData };
}
