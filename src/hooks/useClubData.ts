import { useState, useEffect } from "react";
import type { TrilemaData } from "../types";
import { fetchTrilemaData } from "../services/api";

export function useClubData() {
  const [data, setData] = useState<TrilemaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchTrilemaData();
        if (!cancelled) {
          setData(result);
        }
      } catch {
        if (!cancelled) {
          setError("Ih, a API deu ruim... Igual o time em dia de clássico!");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const retry = () => {
    setData(null);
    setLoading(true);
    setError(null);
    fetchTrilemaData()
      .then(setData)
      .catch(() =>
        setError("Ih, a API deu ruim... Igual o time em dia de clássico!")
      )
      .finally(() => setLoading(false));
  };

  return { data, loading, error, retry };
}
