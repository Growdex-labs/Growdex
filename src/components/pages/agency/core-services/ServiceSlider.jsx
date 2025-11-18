import AgencyButton from "../Button";

export default function ServiceSlider({ title, description, img }) {
  return (
    <article className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-10">
      <div className="space-y-4 max-w-lg">
        <p className="text-[#C8CBD7] font-bold">SERVICES</p>
        <p className="text-xl md:text-4xl lg:text-5xl font-semibold text-[#333333] tracking-tight">{title}</p>
        <hr className="border-gray-500 my-2 md:my-12" />
        <small className="text-[#333333] md:text-base">{description}</small>
        <div className="mt-4 flex sm:mt-6">
          <AgencyButton title={"Join the waitlist"} />
        </div>
      </div>

      <div>
        <img
          src={img}
          alt="service-img"
          className="w-full max-w-xs md:max-w-xl md:h-[545px] object-contain lg:object-cover"
        />
      </div>
    </article>
  )
}
