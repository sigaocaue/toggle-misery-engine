import { motion } from "framer-motion";
import ToggleList from "../components/ToggleList/ToggleList";
import { useClubData } from "../hooks/useClubData";

function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-lg mx-auto px-4">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="h-20 w-full rounded-2xl bg-gray-200"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
        />
      ))}
      <motion.p
        className="text-gray-400 text-sm mt-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Carregando a sofrência...
      </motion.p>
    </div>
  );
}

function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-4 text-center px-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <span className="text-6xl">😵</span>
      <p className="text-gray-700 text-lg font-bold">{message}</p>
      <motion.button
        onClick={onRetry}
        className="rounded-full bg-gray-200 px-6 py-2 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Tentar de novo 🔄
      </motion.button>
    </motion.div>
  );
}

export default function Home() {
  const { data, loading, error, retry } = useClubData();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center px-4 py-12 md:py-20">
      {/* Header */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-black text-gray-900 uppercase italic leading-tight tracking-tight"
          whileHover={{ scale: 1.02 }}
        >
          O Trilema
          <br />
          <span className="ml-8">do Torcedor</span>
        </motion.h1>

        <motion.p
          className="text-gray-500 text-base mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Escolha dois. Só dois. A vida é assim. ⚽🤫
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2 mt-3 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>⚽</span>
          <span>📺</span>
          <span>😊</span>
        </motion.div>
      </motion.div>

      {/* Content */}
      {loading && <LoadingSkeleton />}
      {error && <ErrorState message={error} onRetry={retry} />}
      {data && !loading && !error && <ToggleList items={data.toggles} />}

      {/* Footer */}
      <motion.footer
        className="mt-auto pt-16 pb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-gray-500 text-sm">
          Feito com 🖤🤍 e sofrimento por um torcedor
        </p>
        <p className="text-gray-400 text-xs mt-1 italic">
          "Não é sobre futebol, é sobre sobrevivência emocional!"
        </p>
      </motion.footer>
    </main>
  );
}
