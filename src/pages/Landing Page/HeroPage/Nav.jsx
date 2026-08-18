import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/Frame 1686560934.png";

const links = [
  { label: "Home", href: "/", route: "/" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { pathname } = useLocation();
  // Anchor links belong to the landing page, so they only read as active
  // while we're actually on "/".
  const isActive = (link) => (link.to ?? link.route) === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: reduceMotion ? 0 : -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 md:px-8 ${scrolled ? "pt-3" : "pt-5 md:pt-7"}`}
      >
        <div
          className={`mx-auto flex max-w-[1344px] items-center justify-between rounded-[15px] border border-white/10 bg-[#101010] px-4 py-2.5 text-white transition-shadow duration-300 md:px-5 ${scrolled ? "shadow-[0_14px_36px_rgba(0,0,0,.2)]" : ""}`}
        >
          <Link to="/" className="flex items-center gap-2 text-white">
            <img
              src={logo}
              alt=""
              className="h-7 w-7 object-contain brightness-0 invert"
            />
            <span className="font-gilroy-bold text-xl">Growdex</span>
          </Link>
          <nav className="hidden items-center gap-8 text-[12px] text-white/65 md:flex">
            {links.map((link) => {
              const cls = `transition-colors hover:text-white ${isActive(link) ? "text-white" : ""}`;
              return link.to ? (
                <Link key={link.label} to={link.to} className={cls}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className={cls}>
                  {link.label}
                </a>
              );
            })}
          </nav>
          <a
            href="https://app.growdex.ai"
            className="hidden rounded-[10px] bg-white px-5 py-3 text-[12px] font-semibold text-[#161616] transition-transform hover:-translate-y-0.5 md:block"
          >
            Start for free
          </a>
          <button
            type="button"
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center !border-0 !bg-white !p-0 text-black md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#101010] px-6 py-6 text-white md:hidden"
          >
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center gap-2 text-white"
                onClick={() => setOpen(false)}
              >
                <img
                  src={logo}
                  alt=""
                  className="h-7 w-7 brightness-0 invert"
                />
                <span className="font-gilroy-bold text-xl">Growdex</span>
              </Link>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center !border-0 !bg-white !p-0 text-black"
              >
                <X size={20} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.07 },
                },
              }}
              className="mt-20 flex flex-col"
            >
              {links.map((link) => {
                const item = (
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="block border-b border-white/15 py-5 font-gilroy-semibold text-4xl"
                  >
                    {link.label}
                  </motion.span>
                );
                return link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
