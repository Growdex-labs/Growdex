import { useState, useEffect } from 'react'
import logo from "../../../assets/Frame 1686560934.png"
import { Link } from 'react-router-dom'
import hambugger from "../../../assets/menu hamburger (1).png"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
      const [isOpen, setIsOpen] = useState(false)
      const [isMenu, setIsMenu] = useState(false)

      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }, [])

      // Lock body scroll when menu is open
      useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = ''
        }

        return () => {
          document.body.style.overflow = ''
        }
      }, [isOpen])

      return (
    <div className={`w-full z-50 flex justify-center ${scrolled && !isOpen ? 'sticky top-6' : 'mt-8'}`}>

          <div
            className={`transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4 w-[95%]
              ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-md rounded-full'
                : 'bg-transparent'}`}
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
                <div className={`flex items-center gap-4 rounded-lg
                    ${isMenu ? 'bg-yellow-400' : ''} transition-colors`}>
                    <div className={`
                        flex items-center gap-8 text-gray-700 py-2 px-3 rounded-lg
                        transition-all duration-300 origin-right
                        ${isMenu ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                        <a href='#why' className="hover:text-black transition">Why Growdex?</a>
                        <a href='#services' className="hover:text-black transition">Core Services</a>
                        <a href='#impact' className="hover:text-black transition">Our Impact</a>
                        <a href='#clientele' className="hover:text-black transition">Clientele</a>
                    </div>
                    {/* Open menu list */}
                    <button className={`
                        ${isMenu ? 'bg-yellow-400 text-black' : 'bg-neutral-900 text-white'}
                        px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-sm font-gilroy-medium whitespace-nowrap flex justify-center items-center gap-1 cursor-pointer transition-colors`} onClick={() => setIsMenu(!isMenu)}>
                        <span className={`${isMenu ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} transition-all`}>Menu</span>
                        {/*hamburger -> morph to X */}
                        <div className='relative ml-2 w-4 h-3 flex items-center justify-center'>
                            <span className={`absolute w-3 h-[1px] transform transition-all duration-300 origin-center ${isMenu ? 'rotate-45 bg-black' : '-translate-y-1 bg-[#D9D9D9]'}`}></span>
                            <span className={`absolute w-3 h-[1px] bg-[#D9D9D9] transform transition-all duration-300 origin-center ${isMenu ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
                            <span className={`absolute w-3 h-[1px] transform transition-all duration-300 origin-center ${isMenu ? '-rotate-45 bg-black' : 'translate-y-1 bg-[#D9D9D9]'}`}></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
