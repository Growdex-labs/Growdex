import { useState } from "react"
import { worksWith } from "../../../../data/work-with"
import WorkWithCard from "./WorkWithCard"

export default function WhoWeWorkWithSection() {
    const [activeWork, setActiveWork] = useState(1)
  return (
    <section className="p-4 py-20 md:py-24 backdrop-blur-3xl max-sm:pb-0 max-sm:mb-12">
        <div className="relative h-[350px] md:min-h-[745.7px] mx-auto w-full md:w-screen max-w-7xl
            flex justify-between gap-3">
            {/* block1 */}
            <div className="min-h-full flex flex-col justify-between">
                <h2 className="md:mt-4 text-3xl md:text-4xl lg:text-6xl xl:text-7xl
                    leading-14 tracking-tight">
                    Who we
                    <p>work with</p>
                </h2>
                <div className="space-y-4 py-4 font-gilroy-regular md:mb-16">
                    {worksWith.map((item, index) => (
                        <div
                        key={index}
                            onClick={() => setActiveWork(item.id)}
                            className="flex gap-3 items-center
                                cursor-pointer transition-colors"
                        >
                            <p className={`w-8
                                ${item.id === activeWork
                                    ? 'border border-[#FFE95C]'
                                    : ''
                                }`} />
                            <p className={`${item.id === activeWork
                                    ? 'text-[#333333]'
                                    : 'text-[#808080]'
                                }`}>
                                {item.brief}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* block2 */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-3 overflow-visible">
                {worksWith.map((ww, ii) => (
                    <WorkWithCard
                        {...ww}
                        index={ii}
                        key={ww.id}
                        activeWork={activeWork}
                        setActiveWork={setActiveWork}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}
