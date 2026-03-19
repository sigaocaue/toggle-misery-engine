import {useState, useEffect} from "react";
import {api} from "../services/api";
import type {Club, ToggleItem} from "@/types";

export default function useClubData() {
    const [toggleItems, setToggleItems] = useState<ToggleItem[] | null>(null);
    const [club, setClub] = useState<Club | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData: () => Promise<void> = async (): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            const [toggleData, clubData] = await Promise.all([
                api.getToggles(),
                api.getClub(),
            ]);
            setToggleItems(toggleData);
            setClub(clubData);
        } catch (err: unknown) {
            const message = (
                err instanceof Error ||
                (
                    typeof err === "object" &&
                    err !== null &&
                    Object.hasOwn(err, "message")
                ) ?
                    (err as Error)?.message :
                    "Erro ao carregar dados"
            );
            setError(message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        void fetchData();
    }, []);

    return {toggleItems, club, isLoading, error, refetch: fetchData};
}
