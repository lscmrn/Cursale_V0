import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cursale-blue-900 shadow-md"
          : "bg-cursale-blue-500"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* ✅ Logo */}
        <a href="/" className="flex items-center space-x-2">
          {!scrolled ? (
            <img
              src="/src/assets/images/logo_cursale_transparente.webp"
              alt="Cursale Logo"
              className="h-10 w-auto transition-all duration-500"
            />
          ) : (
            <img
              src="/src/assets/images/logo_cursale_transparente.webp"
              alt="Cursale Logo Scrolled"
              className="h-10 w-auto brightness-200 transition-all duration-500"
            />
          )}
          <span className="text-white font-jakarta text-lg font-semibold">
            Cursale
          </span>
        </a>

        {/* ✅ Navegação Desktop */}
        <nav className="hidden md:flex space-x-6 text-white font-rubik">
          <a href="#about" className="hover:text-cursale-blue-300">
            About
          </a>
          <a href="#features" className="hover:text-cursale-blue-300">
            Features
          </a>
          <a href="#pricing" className="hover:text-cursale-blue-300">
            Pricing
          </a>
          <a href="#faqs" className="hover:text-cursale-blue-300">
            FAQs
          </a>
          <button className="bg-white text-cursale-blue-900 px-4 py-2 rounded hover:bg-cursale-blue-300 hover:text-white transition">
            Sign Up
          </button>
        </nav>

        {/* ✅ Botão Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => alert("Abrir menu mobile futuramente")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
