import React, { useState, useEffect } from "react";
import logo from "../../../assets/Frame 1686560934.png";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeKey, setActiveKey] = useState("home");
  const location = useLocation();

  const navItems = [
    { key: "home", label: "Home", type: "hash", href: "#home" },
    {
      key: "who-we-are",
      label: "Who we are",
      type: "hash",
      href: "#who-we-are",
    },
    { key: "features", label: "Features", type: "hash", href: "#features" },
    { key: "faqs", label: "FAQs", type: "hash", href: "#faqs" },
    { key: "/blog", label: "Blog", type: "route", to: "/blog" },
    { key: "/agency", label: "Agency", type: "route", to: "/agency" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active nav item (route + hash + scroll position on landing)
  useEffect(() => {
    // Non-landing pages: highlight by pathname
    if (location.pathname !== "/") {
      setActiveKey(location.pathname);
      return;
    }

    // Landing page: initialize from hash if present
    const hash = (location.hash || "").replace("#", "");
    if (hash) setActiveKey(hash);

    const ids = navItems.filter((i) => i.type === "hash").map((i) => i.key);

    const onScroll = () => {
      const scrollPos = window.scrollY + 140; // account for sticky header height

      let current = ids[0] || "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= scrollPos) current = id;
      }
      setActiveKey(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  const ActiveUnderline = () => (
    <span className="pointer-events-none absolute left-1/2 top-full mt-0 h-[2px] w-1/2 -translate-x-1/2 rounded-full bg-[#AD9D37]" />
  );

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
      <div className="w-full py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" />
            <Link to="/" className="text-lg md:text-xl font-bold text-gray-900">
              Growdex
            </Link>
          </div>

          {/* Desktop: links + CTA */}
          <div className="hidden md:flex border-2 p-px border-[#DFDFDF] rounded-lg">
            <nav className="flex items-center px-6 py-2 text-sm font-medium text-gray-900">
              {navItems.map((item) => {
                const isActive = activeKey === item.key;
                const commonClass =
                  "relative px-3 py-1 hover:opacity-80 transition-opacity";

                if (item.type === "route") {
                  return (
                    <Link
                      key={item.key}
                      to={item.to}
                      className={commonClass}
                      onClick={() => setActiveKey(item.key)}
                    >
                      {item.label}
                      {isActive ? <ActiveUnderline /> : null}
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className={commonClass}
                    onClick={() => setActiveKey(item.key)}
                  >
                    {item.label}
                    {isActive ? <ActiveUnderline /> : null}
                  </a>
                );
              })}
            </nav>

            {/* Right: Desktop CTA + Mobile Controls */}
            <div className="flex items-center justify-end gap-4">
              {/* Desktop CTA */}
              <a
                href="#waitlist-banner"
                className="inline-flex items-center rounded-lg bg-yellow-200 px-4 py-3 text-sm font-semibold text-gray-900 hover:opacity-80 transition-opacity"
              >
                Join the waitlist
              </a>
            </div>
          </div>

          {/* Mobile: Menu button only (matches screenshot) */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden inline-flex items-center gap-2 rounded-lg bg-[#2B2B2B] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
            aria-label="Open menu"
          >
            Menu <span className="text-white/80">+</span>
          </button>
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
                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Join Waitlist →
              </button>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-2xl font-bold text-gray-800 ml-4"
            >
              <X aria-hidden="true" size={22} />
            </button>
          </div>

          {/* Menu links centered vertically */}
          <nav className="flex flex-col justify-start mt-6 items-center space-y-10 text-2xl font-semibold text-gray-800 flex-grow">
            {navItems.map((item) => {
              const isActive = activeKey === item.key;
              const commonClass = "relative";

              if (item.type === "route") {
                return (
                  <Link
                    key={item.key}
                    to={item.to}
                    className={commonClass}
                    onClick={() => {
                      setActiveKey(item.key);
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="pointer-events-none absolute left-1/2 top-full mt-2 h-[3px] w-1/2 -translate-x-1/2 rounded-full bg-gray-900" />
                    ) : null}
                  </Link>
                );
              }

              return (
                <a
                  key={item.key}
                  href={item.href}
                  className={commonClass}
                  onClick={() => {
                    setActiveKey(item.key);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                  {isActive ? (
                    <span className="pointer-events-none absolute left-1/2 top-full mt-2 h-[3px] w-1/2 -translate-x-1/2 rounded-full bg-gray-900" />
                  ) : null}
                </a>
              );
            })}
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
