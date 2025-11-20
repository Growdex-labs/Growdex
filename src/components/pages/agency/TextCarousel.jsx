
export default function TextCarousel() {
  return (
    <div className="marquee-container relative overflow-hidden max-w-[95%] py-5 md:py-8 lg:py-14 rounded-r-full
                bg-gray-100 -ml-4 my-8 lg:my-16">

        <div className="marquee whitespace-nowrap uppercase
                        text-[#C8CBD7] text-xl md:text-4xl lg:text-6xl
                        lg:tracking-widest font-gilroy-extrabold">
            <span className="mx-10">
            We build and manage marketing systems that perform—so your brand can scale faster with less guesswork.
            </span>

            {/* duplicate for seamless loop */}
            <span className="mx-10">
            We build and manage marketing systems that perform—so your brand can scale faster with less guesswork.
            </span>
        </div>

        </div>

  )
}
