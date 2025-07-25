import { useState, useEffect } from "react";
import LogoHeader from "../assets/images/logo-header.png";
import LogoHeaderLight from "../assets/images/logo-light.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-cursale-blue-900 shadow-md" : "bg-cursale-blue-100"
        }`}
    >
      <div className="max-w-full w-full mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src={scrolled ? LogoHeaderLight : LogoHeader}
            alt="Cursale Logo"
            className="
                h-8          /* Mobile padrão (32px) */
                md:h-12      /* Tablets e laptops (48px) */
                lg:h-14      /* Desktops grandes (56px) */
                2xl:h-16     /* Telas ultra grandes (64px) */
                w-auto
                transition-all duration-500"
          />
        </a>

        {/* NAV - DESKTOP */}
        <nav
          className={`hidden md:flex flex-grow justify-center space-x-6 lg:space-x-8 font-rubik transition-colors duration-500 ${scrolled ? "text-cursale-blue-100" : "text-cursale-blue-900"
            }`}
        >
          {["About", "Features", "Pricing", "FAQs"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm md:text-base lg:text-lg 2xl:text-xl font-semibold hover:underline hover:text-cursale-blue-300 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* BOTÕES - DESKTOP */}
        <div className="hidden md:flex space-x-3">
          {!scrolled ? (
            <>
              {/* Fundo CLARO */}
              <button className="text-sm md:text-base lg:text-lg 2xl:text-xl font-bold bg-cursale-blue-900 text-cursale-white px-4 py-2 rounded-md hover:bg-cursale-white hover:text-cursale-blue-900 transition">
                Sign In
              </button>
              <button className="text-sm md:text-base lg:text-lg 2xl:text-xl font-bold bg-cursale-orange-300 text-cursale-white px-4 py-2 rounded-md hover:bg-cursale-white hover:text-cursale-orange-300 transition">
                Sign Up
              </button>
            </>
          ) : (
            <>
              {/* Fundo ESCURO */}
              <button className="text-sm md:text-base lg:text-lg 2xl:text-xl font-bold bg-cursale-blue-100 text-cursale-blue-900 px-4 py-2 rounded-md hover:bg-cursale-orange-300 hover:text-white transition">
                Sign In
              </button>
              <button className="text-sm md:text-base lg:text-lg 2xl:text-xl font-bold bg-cursale-orange-300 text-white px-4 py-2 rounded-md hover:bg-cursale-blue-100 hover:text-cursale-blue-900 transition">
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* HAMBURGER - MOBILE */}
        <button
          className={`md:hidden focus:outline-none transition-colors ${scrolled ? "text-white" : "text-cursale-blue-900"
            }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-4 py-4 font-rubik transition-all duration-500 ${scrolled
              ? "bg-cursale-blue-900 text-white"
              : "bg-cursale-blue-100 text-cursale-blue-900"
            } max-h-screen overflow-y-auto`}
          style={{ minHeight: "calc(100vh - 64px)" }}
        >
          {["About", "Features", "Pricing", "FAQs"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-base font-semibold hover:underline hover:text-cursale-blue-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col space-y-2">
            <button
              className={`w-40 px-4 py-2 rounded-md font-bold transition ${scrolled
                  ? "bg-cursale-blue-300 text-cursale-blue-900 hover:bg-cursale-orange-300 hover:text-white"
                  : "bg-white text-cursale-blue-900 hover:bg-cursale-blue-300 hover:text-white"
                }`}
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </button>
            <button
              className={`w-40 px-4 py-2 rounded-md font-bold transition ${scrolled
                  ? "bg-cursale-orange-300 text-white hover:bg-cursale-blue-300 hover:text-cursale-blue-900"
                  : "bg-cursale-orange-300 text-white hover:bg-cursale-blue-700"
                }`}
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
