import MaskImg from "../../../../assets/mask-group.png";
import TestimonialSliderContainer from "./TestimonialSliderContainer";

export default function TestimonialSection() {
  return (
    <section className="p-4 backdrop-blur-3xl max-sm:mb-12" id="impact">
        <div className="relative md:h-[50vh] lg:min-h-svh mx-auto w-full max-w-7xl flex justify-center">
            <img src={MaskImg} alt="mask-vector" className="absolute inset-x-0 top-0" />
            <TestimonialSliderContainer />
        </div>
    </section>
  )
}
