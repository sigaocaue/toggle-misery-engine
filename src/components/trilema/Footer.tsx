import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="mt-12 md:mt-16 text-center pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <p className="text-sm font-inter text-muted-foreground">
        Feito com 🖤🤍 e sofrimento por um torcedor
      </p>
      <p className="text-xs font-inter text-muted-foreground/60 mt-1">
        "Não é sobre futebol, é sobre sobrevivência emocional"
      </p>
    </motion.footer>
  );
}
