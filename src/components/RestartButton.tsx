import { MdRefresh } from "react-icons/md";

const RestartButton = ({
  onClick: handleClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 outline-none ${className}`}
      onClick={handleClick}
    >
      <MdRefresh className="w-6 h-6 cursor-pointer" />
    </button>
  );
};

export default RestartButton;
