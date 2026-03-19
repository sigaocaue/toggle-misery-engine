import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <motion.div
      className="w-full max-w-lg mx-auto text-center py-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <motion.div
        className="text-7xl mb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🟨
      </motion.div>
      <h2 className="text-2xl font-bangers text-foreground mb-2">
        CARTÃO AMARELO!
      </h2>
      <p className="text-muted-foreground font-inter mb-6">
        {message || "Algo deu errado... igual o time em dia ruim."}
      </p>
      <Button
        onClick={onRetry}
        className="gap-2 bg-foreground text-background hover:bg-foreground/90 font-inter font-semibold rounded-xl px-6 py-3"
      >
        <RefreshCw className="w-4 h-4" />
        Tentar de novo
      </Button>
    </motion.div>
  );
}
