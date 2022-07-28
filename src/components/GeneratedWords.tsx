import { motion } from "framer-motion";

const GeneratedWords = ({ words }: { words: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-slate-500"
    >
      {words}
    </motion.div>
  );
};

export default GeneratedWords;
