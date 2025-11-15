import ArrowRightCircleIcon from "../../../assets/arrow-right-circle.svg";

export default function AgencyButton({ title, href = '#' }) {
  return (
    <a className="inline-flex items-center gap-2 group rounded-xl bg-black px-5 py-3 text-yellow-300 transition-colors"
        href={href}>
        <img src={ArrowRightCircleIcon} alt="arr" className="group-hover:rotate-45 transition-all" />
        {title}
    </a>
  )
}
