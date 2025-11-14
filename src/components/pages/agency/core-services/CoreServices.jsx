import ServiceSliderContainer from "./ServiceSliderContainer";

export default function CoreServices() {
  return (
    <section className="my-8 md:my-16 px-4 md:px-6 lg:px-8">
        <h4 className="text-2xl md:text-4xl lg:text-7xl
            text-[#333333] tracking-tight text-center">
            Our Core Services
        </h4>
        {/* auto slider for each service */}
        <div className="mx-auto w-screen max-w-7xl px-2 py-16 sm:py-20">
            <ServiceSliderContainer />
        </div>
    </section>
  )
}
