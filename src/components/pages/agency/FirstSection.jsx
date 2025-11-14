import 'animate.css';
import ArrowRightCircleIcon from "../../../assets/arrow-right-circle.svg";
import PerfStrategyImg from "../../../assets/perf-strategy.png";
import MultiPlatformImg from "../../../assets/multi-platform.png";
import OptimizeCampaignImg from "../../../assets/optimize-campaign.png";
import SplitText from '../../ui/SplitText';

export default function FirstSection() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
  return (
    <section className="lg:grid lg:min-h-screen lg:place-content-center relative mb-3 md:mb-10">
        <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-[90ch] text-center">
                <h1 className="text-3xl font-semibold text-gray-900 sm:text-6xl animate__animated animate__fadeInDown">
                    <div className="flex gap-2 md:gap-4 justify-center items-center whitespace-nowrap">Unified Ad <p className="w-24 lg:w-48 h-12 md:h-22 bg-gray-300 rounded-xl animate__animated animate__rubberBand animate__delay-2s"></p> creation</div>
                    at <strong className="text-yellow-300">your fingertips</strong>
                </h1>

                <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                    {/* <p className="text-lg sm:text-xl/relaxed">We don't just run ads.</p> */}
                    <SplitText
                        text="We don't just run ads."
                        className="text-lg sm:text-xl/relaxed"
                        delay={100}
                        duration={0.3}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <br />
                    <p className='max-w-[55ch] mx-auto'>We build and manage marketing systems that perform-so your brand can scale faster with less guesswork.</p>
                </p>

                <div className="mt-4 flex justify-center sm:mt-6">
                    <a className="inline-flex items-center gap-2 group rounded-xl bg-black px-5 py-3 text-yellow-300 transition-colors"
                        href="#">
                        <img src={ArrowRightCircleIcon} alt="arr" className="group-hover:rotate-45 transition-all" />
                        Book Your Free Strategy Call
                    </a>
                </div>
            </div>
        </div>
            <div className="absolute left-10 top-1/5 -rotate-90 text-left w-fit font-gilroy-bold text-gray-600 hidden md:flex gap-1 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#333333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-icon lucide-mouse rotate-90"><rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/></svg>
                <p>Scroll Down</p>
            </div>
        <div className="absolute top-[30%] right-0 w-full bg-radiant-ellipse bg-center -z-40 min-h-screen" />
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 md:gap-3
                        min-h-screen backdrop-blur-lg">
            <div className="w-full h-[600px] rounded-lg md:mt-28 lg:mt-36 px-4 md:px-0">
                <img src={PerfStrategyImg} alt="img1" />
            </div>
            <div className="w-full h-[600px] rounded-lg">
                <img src={MultiPlatformImg} alt="img2" />
            </div>
            <div className="w-full h-[600px] rounded-lg md:mt-28 lg:mt-36">
                <img src={OptimizeCampaignImg} alt="img3" />
            </div>
        </div>
    </section>
  )
}
