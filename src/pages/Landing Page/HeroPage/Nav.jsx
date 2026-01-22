// // // import React from 'react'

// // // const Nav = () => {
// // //   return (
// // //     <div className="sticky top-6 z-50 w-full flex justify-center">
// // //       {/* Rounded navbar background */}
// // //       <div className="bg-white/90 backdrop-blur-md shadow-md rounded-full px-6 md:px-12 py-3 flex items-center justify-between w-[95%] max-w-5xl">
// // //         <div className="text-lg md:text-xl font-bold text-gray-800">Growdex</div>

// // //         <div className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
// // //           <a href="#">How It Works</a>
// // //           <a href="#">Integrations</a>
// // //           <a href="#">Pricing</a>
// // //         </div>

// // //         <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
// // //           Join Waitlist
// // //         </button>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Nav

// // import React, { useState, useEffect } from 'react'
// // import logo from "../../../assets/Frame 1686560934.png"
// // import { Link } from 'react-router-dom'

// // const Nav = () => {
// //   const [scrolled, setScrolled] = useState(false)

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10)
// //     }

// //     window.addEventListener('scroll', handleScroll)
// //     return () => window.removeEventListener('scroll', handleScroll)
// //   }, [])

// //   return (
// //     <div className={`w-full z-50 flex justify-center ${scrolled ? 'sticky top-6' : ''}`}>
// //       <div
// //         className={`transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4 w-[95%] max-w-5xl
// //         ${scrolled
// //           ? 'bg-white/90 backdrop-blur-md shadow-md rounded-full'
// //           : 'bg-transparent'}`
// //         }
// //       >

// //         <div className="flex justify-start gap-2">
// //   <img src={logo} alt="" />
// // <Link to="/">

// // <div className="text-lg md:text-xl font-bold text-gray-800">Growdex</div>
// //     {/* <img src={Azonto_Logo} alt="Azonto Logo" className="w-44 h-auto" /> */}
// //   </Link>
// // </div>
// //         <div className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
// //           <a href="#">How It Works</a>
// //           <a href="#">Integrations</a>
// //           <a href="#">Pricing</a>
// //         </div>
// //         <a href="#waitlist-banner">
// //         <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
// //           Join Waitlist

// //         </button>
// //         </a>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Nav

// // // Hambugger ADDED

// // import React, { useState, useEffect } from 'react'
// // import logo from "../../../assets/Frame 1686560934.png"
// // import { Link } from 'react-router-dom'

// // const Nav = () => {
// //   const [scrolled, setScrolled] = useState(false)
// //   const [isOpen, setIsOpen] = useState(false)

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10)
// //     }

// //     window.addEventListener('scroll', handleScroll)
// //     return () => window.removeEventListener('scroll', handleScroll)
// //   }, [])

// //   return (
// //     <div className={`w-full z-50 flex justify-center ${scrolled ? 'sticky top-6' : ''}`}>
// //       <div
// //         className={`transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4 w-[95%] max-w-5xl
// //         ${scrolled
// //           ? 'bg-white/90 backdrop-blur-md shadow-md rounded-full'
// //           : 'bg-transparent'}`}
// //       >
// //         <div className="flex justify-start gap-2 items-center">
// //           <img src={logo} alt="Logo" />
// //           <Link to="/">
// //             <div className="text-lg md:text-xl font-bold text-gray-800 cursor-pointer">Growdex</div>
// //           </Link>
// //         </div>

// //         {/* Desktop nav links */}
// //         <div className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
// //           <a href="#">How It Works</a>
// //           <a href="#">Integrations</a>
// //           <a href="#">Pricing</a>
// //         </div>

// //         {/* Join Waitlist button (desktop) */}
// //         <a href="#waitlist-banner" className="hidden md:block">
// //           <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
// //             Join Waitlist
// //           </button>
// //         </a>

// //         {/* Hamburger button (mobile) */}
// //         <button
// //           onClick={() => setIsOpen(true)}
// //           className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
// //           aria-label="Toggle menu"
// //         >
// //           <span className="block h-0.5 w-full bg-gray-800 rounded" />
// //           <span className="block h-0.5 w-full bg-gray-800 rounded" />
// //           <span className="block h-0.5 w-full bg-gray-800 rounded" />
// //         </button>
// //       </div>

// //       {/* Fullscreen mobile menu modal */}
// //       {isOpen && (
// //         <div className="fixed inset-0 bg-white z-50 flex flex-col">
// //           {/* Top bar with logo, Join button, close button */}
// //           <div className="flex items-center justify-between p-4 border-b border-gray-200">
// //             <div className="flex items-center gap-2">
// //               <img src={logo} alt="Logo" className="h-8" />
// //               <div className="text-lg font-bold text-gray-800">Growdex</div>
// //             </div>
// //             <a href="#waitlist-banner">
// //               <button
// //                 onClick={() => setIsOpen(false)}
// //                 className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
// //               >
// //                 Join Waitlist →
// //               </button>
// //             </a>
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               aria-label="Close menu"
// //               className="text-2xl font-bold text-gray-800 ml-4"
// //             >
// //               ×
// //             </button>
// //           </div>

// //           {/* Menu links centered vertically */}
// //           <nav className=" flex flex-col justify-start items-center space-y-10 text-2xl font-semibold text-gray-800">
// //             <a href="#" onClick={() => setIsOpen(false)}>How It Works</a>
// //             <a href="#" onClick={() => setIsOpen(false)}>Integrations</a>
// //             <a href="#" onClick={() => setIsOpen(false)}>Pricing</a>
// //           </nav>

// //           {/* Footer */}
// //           <footer className="p-4 text-center text-gray-500 border-t border-gray-200 text-sm">
// //             © Growdex 2025
// //           </footer>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default Nav

// import React, { useState, useEffect } from 'react'
// import logo from "../../../assets/Frame 1686560934.png"
// import { Link } from 'react-router-dom'
// import bytesize from "../../../assets/bytesize_close.png"
// import hambugger from "../../../assets/menu hamburger (1).png"

// const Nav = () => {
//   const [scrolled, setScrolled] = useState(false)
//   const [isOpen, setIsOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Lock body scroll when menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = ''
//     }

//     return () => {
//       document.body.style.overflow = ''
//     }
//   }, [isOpen])

//   return (
// <div className={`w-full z-50 flex justify-center ${scrolled && !isOpen ? 'sticky top-6' : ''}`}>

//       <div
//         className={`transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4 w-[95%] max-w-5xl
//           ${scrolled
//             ? 'bg-white/90 backdrop-blur-md shadow-md rounded-full'
{
  /* Left: Logo */
}
<div className="flex items-center gap-2">
  <img src={logo} alt="Logo" />
  <Link to="/">
    <div className="text-lg md:text-xl font-bold text-gray-800 cursor-pointer">
      Growdex
    </div>
  </Link>
</div>;

{
  /* Right: Desktop nav + CTA (single container), Mobile CTA + Hamburger */
}
<div className="flex items-center gap-3">
  {/* Desktop pill nav */}
  <div className="hidden md:flex items-center gap-2 bg-yellow-200 rounded-full px-3 py-2 text-sm font-medium text-gray-900">
    <a href="#" className="px-2 hover:opacity-80 transition-opacity">
      How it Works
    </a>
    <a href="#" className="px-2 hover:opacity-80 transition-opacity">
      Integration
    </a>
    <a href="#" className="px-2 hover:opacity-80 transition-opacity">
      Pricing
    </a>
    <Link to="/blog" className="px-2 hover:opacity-80 transition-opacity">
      Blog
    </Link>
    <Link to="/agency" className="px-2 hover:opacity-80 transition-opacity">
      Agency
    </Link>
  </div>

  {/* Desktop CTA */}
  <a href="#waitlist-banner" className="hidden md:inline-flex flex-shrink-0">
    <button className="bg-yellow-200 text-gray-900 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
      Sign up free
    </button>
  </a>

  {/* Mobile CTA (keeps your existing behavior) */}
  <a href="#waitlist-banner" className="md:hidden inline-flex flex-shrink-0">
    <button className="bg-black text-white px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap">
      Join Waitlist →
    </button>
  </a>

  {/* Hamburger (mobile only) */}
  <button
    onClick={() => setIsOpen(true)}
    className="md:hidden flex items-center justify-center w-8 h-8"
    aria-label="Toggle menu"
  >
    <img src={hambugger} alt="menu" />
  </button>
</div>;
//       </div>

//       {/* Fullscreen mobile menu modal */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-white z-50 flex flex-col h-screen overflow-auto">
//           {/* Top bar with logo, Join button, close button */}
//           <div className="flex items-center justify-between p-4 border-b border-gray-200">
//             <div className="flex items-center gap-2">
//               <img src={logo} alt="Logo" className="h-8" />
//               <div className="text-lg font-bold text-gray-800">Growdex</div>
//             </div>
//             <a href="#waitlist-banner">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
//               >
//                 Join Waitlist →
//               </button>
//             </a>
//             <button
//               onClick={() => setIsOpen(false)}
//               aria-label="Close menu"
//               className="text-2xl font-bold text-gray-800 ml-4"
//             >
//               <img src={bytesize} alt="" />
//             </button>
//           </div>

//           {/* Menu links centered vertically */}
//           <nav className="flex flex-col justify-start mt-24 items-center space-y-10 text-2xl font-semibold text-gray-800 flex-grow">
//             <a href="#" onClick={() => setIsOpen(false)}>How It Works</a>
//             <a href="#" onClick={() => setIsOpen(false)}>Integrations</a>
//             <a href="#" onClick={() => setIsOpen(false)}>Pricing</a>
//           </nav>

//           {/* Footer */}
//           <footer className="p-4 text-center text-gray-500 border-t border-gray-200 text-sm">
//             © Growdex 2025
//           </footer>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Nav

import React, { useState, useEffect } from "react";
import logo from "../../../assets/Frame 1686560934.png";
import { Link } from "react-router-dom";
import bytesize from "../../../assets/bytesize_close.png";
import hambugger from "../../../assets/menu hamburger (1).png";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={`w-full z-50 ${scrolled && !isOpen ? "sticky top-0" : ""}`}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" />
            <Link to="/" className="text-lg md:text-xl font-bold text-gray-900">
              Growdex
            </Link>
          </div>

          <div className="flex">
            {/* Middle: Desktop Navigation (Figma pill) */}
            <nav className="hidden md:flex items-center rounded-full bg-yellow-200 px-6 py-2 text-sm font-medium text-gray-900">
              <a
                href="#pricing"
                className="px-3 py-1 hover:opacity-80 transition-opacity"
              >
                Pricing
              </a>
              <a
                href="#who-we-are"
                className="px-3 py-1 hover:opacity-80 transition-opacity"
              >
                Who we are
              </a>
              <a
                href="#our-impact"
                className="px-3 py-1 hover:opacity-80 transition-opacity"
              >
                Our Impact
              </a>
              <a
                href="#client"
                className="px-3 py-1 hover:opacity-80 transition-opacity"
              >
                Client
              </a>
            </nav>

            {/* Right: Desktop CTA + Mobile Controls */}
            <div className="flex items-center justify-end gap-4">
              {/* Desktop CTA */}
              <a
                href="#waitlist-banner"
                className="hidden md:inline-flex items-center rounded-full bg-yellow-200 px-5 py-3 text-sm font-semibold text-gray-900 hover:opacity-80 transition-opacity"
              >
                Sign up free
              </a>

              {/* Mobile CTA */}
              <a href="#waitlist-banner" className="md:hidden flex-shrink-0">
                <button className="bg-black text-white px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                  Join Waitlist →
                </button>
              </a>

              {/* Hamburger (mobile only) */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden flex items-center justify-center w-8 h-8"
                aria-label="Toggle menu"
              >
                <img src={hambugger} alt="menu" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen mobile menu modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col h-screen overflow-auto">
          {/* Top bar with logo, Join button, close button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8" />
              <div className="text-lg font-bold text-gray-800">Growdex</div>
            </div>
            <a href="#waitlist-banner">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                Join Waitlist →
              </button>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-2xl font-bold text-gray-800 ml-4"
            >
              <img src={bytesize} alt="" />
            </button>
          </div>

          {/* Menu links centered vertically */}
          <nav className="flex flex-col justify-start mt-6 items-center space-y-10 text-2xl font-semibold text-gray-800 flex-grow">
            <a href="#pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </a>
            <a href="#who-we-are" onClick={() => setIsOpen(false)}>
              Who we are
            </a>
            <a href="#our-impact" onClick={() => setIsOpen(false)}>
              Our Impact
            </a>
            <a href="#clientele" onClick={() => setIsOpen(false)}>
              Clientele
            </a>
          </nav>

          {/* Footer */}
          <footer className="p-4 text-center text-gray-500 border-t border-gray-200 text-sm">
            © Growdex 2025
          </footer>
        </div>
      )}
    </div>
  );
};

export default Nav;
