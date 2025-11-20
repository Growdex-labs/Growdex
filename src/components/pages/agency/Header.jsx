import { useState, useEffect } from 'react'
import logo from "../../../assets/Frame 1686560934.png"
import { Link } from 'react-router-dom'

export default function Header() {
      const [isMenu, setIsMenu] = useState(false)
      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
          const scrollTop = window.scrollY;

          if (!ticking) {
            window.requestAnimationFrame(() => {
              setIsScrolled(scrollTop > 50);
              ticking = false;
            });
            ticking = true;
          }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      return (
    <header className="w-full z-50 flex justify-center sticky top-6 mt-8" id='header'>

          <section
            className={`
              transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4 w-[95%]
              ${isScrolled ? "bg-white/50 backdrop-blur-md shadow-md rounded-full" : ""}
            `}
          >
            <div className="flex items-center justify-between gap-4 px-4 md:px-0 w-full max-w-5xl mx-auto md:max-w-none">
                {/* Left: Logo */}
                <div className="flex items-center text- gap-2 -ml-6 md:ml-0">
                    <img src={logo} alt="Logo" />
                    <Link to="/">
                    <div className="text-lg md:text-xl font-gilroy text-gray-800 cursor-pointer">Growdex</div>
                    </Link>
                </div>

                {/* Middle: Desktop Navigation */}


                {/* Right: Menu + Hamburger */}
                <div className={`flex items-center gap-4 rounded-lg transition-colors duration-300
                    ${isMenu ? 'bg-[#FFE95C]' : ''}`}>

                    {/* Desktop Menu */}
                    <div className={`
                        hidden md:flex items-center gap-8 text-gray-700 py-2 px-3 rounded-lg
                        transition-all duration-300 ease-out origin-right whitespace-nowrap
                        ${isMenu
                            ? 'opacity-100 scale-100 max-w-[500px]'
                            : 'opacity-0 scale-95 max-w-0 pointer-events-none'
                        }`}
                        style={{ overflow: "hidden" }}
                    >
                        <a href='#why' className="hover:text-black transition">Why Growdex?</a>
                        <a href='#services' className="hover:text-black transition">Core Services</a>
                        <a href='#impact' className="hover:text-black transition">Our Impact</a>
                        <a href='https://e55lt4kfwau.typeform.com/to/i41nq0ec' target='_blank' className="hover:text-black transition">Get Started</a>
                    </div>

                    {/* Open menu list button */}
                    <button
                        className={`hidden
                            ${isMenu ? 'bg-[#FFE95C] text-black' : 'bg-neutral-900 text-white'}
                            px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-sm font-gilroy-medium
                            whitespace-nowrap md:flex justify-center items-center gap-1 cursor-pointer
                            transition-colors duration-300`}
                        onClick={() => setIsMenu(!isMenu)}
                    >
                        <span className={`${isMenu ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                            transition-all duration-300 ease-out`}>
                            Menu
                        </span>

                        {/* Hamburger → X */}
                        <div className='relative ml-2 w-4 h-3 flex items-center justify-center'>

                            {/* Top line */}
                            <span className={`
                                absolute w-3 h-[1px] transition-all duration-300 ease-out origin-center
                                ${isMenu
                                    ? 'rotate-45 bg-black'
                                    : '-translate-y-1 bg-[#D9D9D9]'
                                }`}>
                            </span>

                            {/* Middle line */}
                            <span className={`
                                absolute w-3 h-[1px] bg-[#D9D9D9] transition-all duration-300 origin-center
                                ${isMenu ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
                            `}></span>

                            {/* Bottom line */}
                            <span className={`
                                absolute w-3 h-[1px] transition-all duration-300 ease-out origin-center
                                ${isMenu
                                    ? '-rotate-45 bg-black'
                                    : 'translate-y-1 bg-[#D9D9D9]'
                                }`}>
                            </span>

                        </div>
                    </button>

                </div>

            </div>
        </section>
    </header>
  )
}
