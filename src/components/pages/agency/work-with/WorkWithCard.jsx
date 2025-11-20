import { worksWith } from "../../../../data/work-with";

export default function WorkWithCard({
  id,
  index,
  brief,
  bgImage,
  textColor,
  activeWork,
  setActiveWork,
}) {
    const url = new URL(`/src/assets/${bgImage}`, import.meta.url).href;

    // detect desktop
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    const isActive = activeWork === id;

    // function to check if two indices are in the same row
    const sameRow = (i1, i2) =>
        Math.floor(i1 / 2) === Math.floor(i2 / 2);

    const isNextInRow =
        !isActive &&
        sameRow(index, index - 1) &&
        worksWith[index - 1]?.id === activeWork;

    const isPrevInRow =
        !isActive &&
        sameRow(index, index + 1) &&
        worksWith[index + 1]?.id === activeWork;

  return (
    <article
        onMouseEnter={() => isDesktop && setActiveWork(id)}
        onMouseLeave={() => isDesktop && setActiveWork(activeWork)} // keep clicked state
        className={`
            relative w-56 md:w-full lg:w-[420px] h-40 md:h-auto rounded-xl
            bg-cover bg-center font-gilroy-semibold pl-4 pb-4
            flex flex-col justify-end group transition-transform duration-300

            ${isActive ? "w-full lg:scale-x-105" : ""}
            ${isNextInRow || isPrevInRow ? "w-[85%]" : ""}
        `}
        style={{ backgroundImage: `url(${url})` }}
    >
        <h4 className={`transition-opacity
            ${activeWork === id
                ? "group-hover:opacity-100"
                : "opacity-0"}
                text-2xl tracking-tight md:w-2/3 bg-clip-text text-transparent`}
            style={{
                backgroundImage: `linear-gradient(to right,
                                ${textColor.from} 0%,
                                ${textColor.from} 40%,
                                ${textColor.to} 100%)`
            }}
        >
            {brief}
        </h4>
    </article>
  )
}
