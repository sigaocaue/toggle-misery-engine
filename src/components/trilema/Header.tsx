import {motion} from "framer-motion";

export default function Header() {
    return (
        <motion.header
            className="text-center mb-8 md:mb-12"
            initial={{opacity: 0, y: -30}}
            animate={{opacity: 1, y: 0}}
            transition={{type: "spring", stiffness: 200, damping: 20}}
        >
            <motion.h1
                className="text-5xl md:text-7xl font-bangers text-foreground tracking-wide leading-tight"
                whileHover={{scale: 1.02}}
            >
                O Trilema
                <br/>
                <span className="text-4xl md:text-6xl">do Torcedor</span>
            </motion.h1>
            <motion.p
                className="mt-4 text-base md:text-lg font-inter text-muted-foreground max-w-md mx-auto leading-relaxed"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.3}}
            >
                Vá em frente, e ative o que você deseja
            </motion.p>

            <motion.div
                className="mt-4 flex justify-center gap-2"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5}}
            >
                {["⚽", "📺", "😊"].map((emoji, i) => (
                    <motion.span
                        key={i}
                        className="text-2xl"
                        animate={{y: [0, -8, 0]}}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                    >
                        {emoji}
                    </motion.span>
                ))}
            </motion.div>
        </motion.header>
    );
}
