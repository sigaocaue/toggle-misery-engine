import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-8xl block mb-4">😵</span>
        <h1 className="text-4xl font-black text-gray-900 mb-2">404</h1>
        <p className="text-gray-500 mb-6">
          Essa página sumiu igual gol do seu time em final.
        </p>
        <Link to="/">
          <motion.button
            className="rounded-full bg-gray-900 px-6 py-3 text-white font-semibold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voltar pro sofrimento ⚽
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
