import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { agencyProcesses } from "../../../../data/processes"
import DiscoverImg from "../../../../assets/discover.png";
import LaunchImg from "../../../../assets/launch.png";
import ABImg from "../../../../assets/AB.png";
import PerformanceImg from "../../../../assets/performance.png";
import TrendUpImg from "../../../../assets/trend-up.png";

const DURATION = 3000;

export default function ProcessSection() {
  const [activeProcess, setActiveProcess] = useState(0);
  const processImgs = [DiscoverImg, LaunchImg, ABImg, PerformanceImg, TrendUpImg];

  // Reference to scroll container
  const [containerMeasureRef, containerBounds] = useMeasure();

  // Stable refs for each process item
  const scrollContainerRef = useRef(null);

  // refs for each item
  const refs = useRef([]);

  // ensure stable ref array
  useEffect(() => {
    refs.current = Array(agencyProcesses.length)
      .fill(null)
      .map((_, i) => refs.current[i] || null);
  }, []);

  // Auto advance every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveProcess((p) => (p + 1) % agencyProcesses.length);
    }, DURATION);

    return () => clearTimeout(timer);
  }, [activeProcess]);

  // Smooth scroll into the active process item
  useEffect(() => {
    const container = scrollContainerRef.current;
    const el = refs.current[activeProcess];

    if (!container || !el) return;

    container.scrollTo({
      top: el.offsetTop - containerBounds.height / 3,
      behavior: "smooth",
    });
  }, [activeProcess, containerBounds]);

  return (
    <section className="p-4 md:pb-16 lg:pb-32 backdrop-blur-3xl max-sm:pb-0">
        <div className="relative mx-auto w-full md:w-screen max-w-7xl">
          <div className="w-full flex flex-col md:flex-row gap-3 md:justify-between bg-[#333333]
          text-white rounded-t-xl px-4 md:px-8 py-8 md:pt-12 font-gilroy-regular ellipse806"
          >
            {/* first block */}
            <div className="relative max-w-6xl w-full">
              <h2 className="text-[#FFE95C] md:mt-4 text-3xl md:text-4xl lg:text-6xl xl:text-7xl
                  leading-14 tracking-tighter font-gilroy-medium">
                  Our
                  <p className="mt-2 md:mt-4">Process</p>
              </h2>
              {/* Scrollable Timeline */}
              <div className="hidden md:block mt-12 p-4 max-w-lg">
                {/* scroll container */}
                <div
                  ref={(el) => {
                    scrollContainerRef.current = el;
                    containerMeasureRef(el);
                  }}
                  className="relative w-full max-h-[500px] overflow-x-visible overflow-y-auto
                                p-3 md:px-12 z-0 hide-scrollbar">
                  {agencyProcesses.map((pro, index) => {
                    const isActive = index === activeProcess;
                    return (
                    <motion.div
                      key={index}
                      ref={(el) => (refs.current[index] = el)}
                      layout
                      className={`relative flex flex-col items-end border-0 border-l py-8 z-0
                                ${isActive ? "border-[#AD9D37]" : "border-gray-600"}`}
                      // initial={{ opacity: 0.5, y: 20 }}
                      animate={{
                        opacity: isActive ? 1 : 0.45,
                        y: isActive ? 0 : 16,
                        scaleY: isActive ? 1 : 0.98,
                      }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                    >
                      {/* glow circle */}
                      {isActive && (
                        <motion.div
                          layout // ensures it moves smoothly when its container changes
                          className="absolute -left-11 top-1/2 -translate-y-1/2 w-22 h-22
                                    z-20 glow-circle backdrop-blur-xl"
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                        />
                      )}
                      {/* content */}
                      <div className={`relative max-w-2xs p-3 ${
                          isActive ? "text-[#FFE95C]" : "text-gray-600"
                        }`}
                      >
                        <h4 className="text-2xl md:text-3xl">{pro.title}</h4>
                        <p className={`${isActive ? "text-white" : ""}`}>{pro.description}</p>
                      </div>
                    </motion.div>
                  )})}
                </div>
              </div>
            </div>

            {/* second block */}
            <div className="max-w-[600px] flex flex-col justify-between items-end text-right">
              <div>
                <p className="text-[#808080] uppercase">
                  {agencyProcesses[activeProcess].title}
                </p>

                <motion.h2
                  key={activeProcess} // triggers re-animation on change
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="md:mt-4 text-3xl md:text-4xl lg:text-5xl leading-14
                            bg-clip-text text-transparent animate-gradient"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #FFE95C 0%, #FFE95C 40%, white 60%)",
                    backgroundSize: "200% auto",
                    backgroundPosition: "0% 0%",
                  }}
                >
                  {agencyProcesses[activeProcess].description}
                </motion.h2>
              </div>

              <motion.img
                key={activeProcess}
                src={processImgs[activeProcess]}
                alt="process-img"
                className="object-contain w-full h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
    </section>
  )
}
