import SearchResultIcon from "../../../assets/stash_search-results-solid.png";
import AwardIcon from "../../../assets/flowbite_award-solid.png";
import NoteIcon from "../../../assets/si_ai-note-fill.png";
import TeamIcon from "../../../assets/ri_team-line.png";

export default function WhySection() {
    const whyChooseUs = [
        {
            brief: "Real results, not vanity metrics",
            img: SearchResultIcon,
        },
        {
            brief: "Fast execution + strategy under one roof",
            img: AwardIcon,
        },
        {
            brief: "AI-powered insights for smarter scaling",
            img: NoteIcon,
        },
        {
            brief: "Dedicated performance marketing team",
            img: TeamIcon,
        },
    ];
  return (
    <section className="p-4 md:p-6 lg:p-8 backdrop-blur-3xl max-sm:pb-0">
        <div className="relative mx-auto w-full md:w-screen max-w-7xl px-4">
            <h4 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl tracking-tight text-center">
                Why Brands Choose Us
            </h4>
            <div className="my-9 lg:mt-19 w-full px-4 py-8 md:px-6 md:py-12 bg-[#FFE95C26] rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-evenly
                                font-gilroy-semibold text-sm md:text-base">
                    {whyChooseUs.map((why, index) => (
                        <div key={index}
                            className="max-w-[250px] flex flex-col items-center text-center gap-3 p-4">
                            <div className="w-40 h-40 flex justify-center items-center
                                            rounded-full bg-[#FFE95C]">
                                <img src={why.img} alt="icon" className="-mt-16 object-center" />
                            </div>
                            <p className="w-full">{why.brief}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
