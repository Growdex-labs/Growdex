import MaskImg from "../../../../assets/mask-group.png";
import TestimonialSliderContainer from "./TestimonialSliderContainer";

export default function TestimonialSection() {
  return (
    <section className="p-4 backdrop-blur-3xl max-sm:pb-0">
        <div className="relative min-h-svh mx-auto w-full md:w-screen max-w-7xl flex justify-center">
            <img src={MaskImg} alt="mask-vector" className="absolute inset-x-0 top-0" />
            <TestimonialSliderContainer />
        </div>
    </section>
  )
}
