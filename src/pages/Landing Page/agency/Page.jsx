import CoreServices from "../../../components/pages/agency/core-services/CoreServices";
import FirstSection from "../../../components/pages/agency/FirstSection";
import Header from "../../../components/pages/agency/Header";
import OurPartners from "../../../components/pages/agency/OurPartners";


export default function AgencyPage() {
  return (
    <div className="font-gilroy-medium max-w-6xl lg:max-w-[1440px] mx-auto
          bg-vector bg-center bg-contain relative min-h-screen">
      <Header />
      <FirstSection />
      <br />
      <p className="max-w-[95%] py-5 md:py-8 lg:py-14 rounded-r-full bg-gray-100 -ml-4 my-16
          uppercase text-[#C8CBD7] text-xl md:text-4xl lg:text-6xl lg:tracking-widest
          font-gilroy-extrabold whitespace-nowrap">
        Le faster with less guesswork.
      </p>
      <br />
      <CoreServices />
      {/* last section */}
      <OurPartners />
    </div>
  )
}
