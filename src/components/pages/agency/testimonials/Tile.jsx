export default function Tile({ active = false }) {
  return (
    <div
      className={`
        rounded-xl
        transition-all
        duration-500
        ${active ? "bg-yellow-300 h-[220px] w-[35px]"
                 : "bg-gray-300 h-[160px] w-[30px] opacity-70"}
      `}
    />
  );
}
