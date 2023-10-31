export default function Button({
  label,
  iconUrl,
}: {
  label: string;
  iconUrl: string;
}) {
  const altVal = iconUrl.match(/(?<=[/])\w+[-]?\w+(?=[.]\w+)/gi) ?? "icon";
  return (
    <button className="group flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red hover:bg-coral-red/90 rounded-full text-white border-coral-red">
      {label}
      <img
        src={iconUrl}
        alt={altVal === "icon" ? "icon" : altVal[0]}
        className="ml-2 rounded-full w-5 h-5 group-hover:animate-bounce-x"
      />
    </button>
  );
}
