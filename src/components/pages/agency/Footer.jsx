import GoogleIcon from "../../../assets/devicon_google.png";
import FBLogo from "../../../assets/logos_facebook.png";
import EllipseImg from "../../../assets/ellipse808.png";

export default function Footer() {
  return (
    <section className="mt-8 md:my-16 p-4 md:p-6 lg:p-8 backdrop-blur-3xl max-sm:pb-0">
        <div className="relative mx-auto w-full md:w-screen max-w-7xl px-4 bg-[#333333] text-white
                        rounded md:rounded-xl bg-vector bg-center bg-cover overflow-hidden">
            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-0
                            md:justify-between py-4 md:py-0 px-6 md:px-12">
                <div className="flex flex-col gap-2 justify-center">
                    <h4 className="text-2xl md:text-4xl lg:text-5xl tracking-tight">
                        Growdex Agency
                    </h4>
                    <br />
                    <p>Full-service performance marketing agency.</p>
                    <p className="max-w-md max-sm:text-xs">
                        📍 Based in Nigeria | Working with brands globally
                    </p>
                    <small>© 2025 Growdex. All rights reserved.</small>
                </div>
                {/* logos */}
                <div className="flex max-sm:justify-end gap-3">
                    <img src={GoogleIcon} alt="google-icon" className="max-sm:w-8" />
                    <img src={FBLogo} alt="fb-logo" className="max-sm:w-8" />
                    <img className="absolute bottom-0 right-0 bg-center bg-contain w-1/2 h-full"
                        src={EllipseImg}
                        alt="ellipse"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
