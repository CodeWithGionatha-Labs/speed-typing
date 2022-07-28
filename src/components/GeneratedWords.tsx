const GeneratedWords = ({ words }: { words: string }) => {
  return (
    <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, transition: { duration: 0.01 } }}
      // exit={{ opacity: 0 }}
      className="text-slate-500"
    >
      {words}
    </div>
  );
};

export default GeneratedWords;
