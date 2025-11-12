// src/components/PagePlaceholder.tsx
import { motion } from "framer-motion";

interface PagePlaceholderProps {
  title?: string; // opcional: nome da página
}

const PagePlaceholder = ({ title = "Página em desenvolvimento" }: PagePlaceholderProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 text-transparent bg-clip-text mb-4">
          {title}
        </h1>
        <p className="text-zinc-300 text-lg md:text-xl">
          Esta página ainda está sendo desenvolvida. Volte em breve!
        </p>
      </motion.div>
    </div>
  );
};

export default PagePlaceholder;
