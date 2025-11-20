import LikesImg from "../../../assets/likes.png";
import CommentsImg from "../../../assets/comments.png";
import AgencyButton from "./Button";

export default function EngineSection() {
  return (
    <section className="p-4 md:p-6 lg:p-8 backdrop-blur-3xl max-sm:pb-0">
        <div className="relative mx-auto w-full max-w-7xl px-4
                        flex flex-col gap-3 items-center">
            <div className="relative z-0">
                <img src={LikesImg} alt="likes-img" className="relative z-10" />
                <img
                    src={CommentsImg}
                    alt="comments-img"
                    className="
                    absolute top-5 left-8 z-0
                    [mask-image:linear-gradient(to_bottom,black_30%,transparent)]
                    [mask-size:100%_100%]
                    [mask-repeat:no-repeat]
                    "
                />
            </div>
            <div className="w-full flex justify-evenly">
                {/* block1 */}
                <div className="w-20 h-16 lg:w-40 lg:h-32 bg-[#D9D9D959] rounded-lg -rotate-[6.64deg]" />
                {/* text-content */}
                <div className="text-center text-[#333333] space-y-4">
                    <div className="space-y-6 lg:space-y-8">
                        <h4 className="whitespace-nowrap text-2xl md:text-4xl lg:text-6xl xl:text-7xl tracking-tight">
                            <p>Build a Performance</p>
                            <p>Engine That Scales</p>
                        </h4>
                        <p className="hidden md:block tracking-tight text-sm md:text-xl md:max-w-xl mx-auto">
                            Whether you want us to run your ads completely or partner with your team,
                            Growdex Agency delivers growth with precision.
                        </p>
                    </div>
                </div>
                {/* block2 */}
                <div className="w-20 h-16 lg:w-40 lg:h-32 bg-[#D9D9D959] rounded-lg rotate-[6.64deg]" />
            </div>
            <div className="text-center text-[#333333] space-y-4">
                <p className="md:hidden tracking-tight text-sm md:text-xl md:max-w-xl mx-auto">
                    Whether you want us to run your ads completely or partner with your team,
                    Growdex Agency delivers growth with precision.
                </p>
                <AgencyButton
                    title={"Book Your Free Strategy Call"}
                    href='https://e55lt4kfwau.typeform.com/to/OkqxcDp4'
                />
            </div>
        </div>
    </section>
  )
}
