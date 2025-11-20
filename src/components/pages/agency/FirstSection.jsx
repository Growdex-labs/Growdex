import 'animate.css';
import PerfStrategyImg from "../../../assets/perf-strategy.png";
import MultiPlatformImg from "../../../assets/multi-platform.png";
import OptimizeCampaignImg from "../../../assets/optimize-campaign.png";
import SplitText from '../../ui/SplitText';
import AgencyButton from './Button';

export default function FirstSection() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
  return (
    <section className="lg:grid lg:min-h-screen lg:place-content-center relative mb-3 md:mb-10">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-[90ch] text-center">
                <h1 className="text-3xl font-semibold text-gray-900 sm:text-6xl animate__animated animate__fadeInDown">
                    <div className="flex gap-2 md:gap-4 justify-center items-center whitespace-nowrap">
                        Scaling
                        <p className="p-4 bg-gray-300 rounded-xl animate__animated animate__rubberBand animate__delay-2s">Brands</p> With</div>
                    Results-Driven <strong className="text-yellow-300">Performance Marketing.</strong>
                </h1>

                <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                    {/* <p className="text-lg sm:text-xl/relaxed">We don't just run ads.</p> */}
                    <p className='max-w-[55ch] mx-auto'>
                        We help ambitious brands scale with paid media, strategy, creative, and
                        data-driven execution.
                    </p>
                </p>

                <div className="mt-4 flex flex-col md:flex-row justify-center gap-3 sm:mt-6">
                    <AgencyButton
                        title={"Book Your Free Strategy Call"}
                        href='https://e55lt4kfwau.typeform.com/to/OkqxcDp4'
                    />
                    <a href="https://e55lt4kfwau.typeform.com/to/i41nq0ec" target="_blank"
                        rel="noopener noreferrer"
                        className='border border-black px-5 py-3 rounded-xl hover:bg-white'
                    >
                        Let's work together
                    </a>
                </div>
            </div>
        </div>

        {/* scroll down info */}
        <div className="absolute left-1 xl:left-10 top-1/5 -rotate-90 text-left w-fit
            font-gilroy-bold text-gray-600 hidden md:flex gap-1 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#333333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-icon lucide-mouse rotate-90"><rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/></svg>
            <p>Scroll Down</p>
        </div>

        <div className="absolute top-[30%] max-lg:top-[10%] right-0 w-full bg-radiant-ellipse
                bg-center -z-40 min-h-screen" />

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 md:gap-3
                        xl:min-h-screen backdrop-blur-lg">
            <div className="w-full h-[350px] md:h-[550px] lg:h-[600px] rounded-lg md:mt-28 lg:mt-36 px-4 md:px-0">
                <img src={PerfStrategyImg} alt="img1" />
            </div>
            <div className="w-full h-[350px] md:h-[550px] lg:h-[600px] rounded-lg">
                <img src={MultiPlatformImg} alt="img2" />
            </div>
            <div className="w-full h-[350px] md:h-[550px] lg:h-[600px] rounded-lg md:mt-28 lg:mt-36">
                <img src={OptimizeCampaignImg} alt="img3" />
            </div>
        </div>
    </section>
  )
}
