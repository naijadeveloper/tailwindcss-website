import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function Switcher({
  mode,
  handleUpdateMode,
}: {
  mode: string;
  handleUpdateMode: () => void;
}) {
  return (
    <button
      onClick={handleUpdateMode}
      className="fixed z-30 bottom-2 right-2 p-2 rounded bg-coral-red text-gray-100"
    >
      {mode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
}
