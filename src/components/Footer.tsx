import LogoHeaderLight from "../assets/images/logo-light.png";
import ReactCountryFlag from "react-country-flag";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-cursale-blue-900 to-cursale-blue-700 text-cursale-blue-50 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* ✅ LEFT SIDE - Links + SEO */}
        <div className="text-center md:text-left space-y-4 max-w-lg">
          <h3 className="text-lg font-bold text-white">
            Cursale — The AI Sales Copilot
          </h3>
          <p className="text-sm text-cursale-blue-200">
            © {year} • All rights reserved
          </p>

          {/* ✅ Useful Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            {["About", "Pricing", "Contact", "Login"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-cursale-orange-300 transition"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* ✅ SEO Optimized Keywords */}
          <p className="text-xs text-cursale-blue-300 leading-relaxed mt-4">
            Cursale is your <strong>AI sales copilot</strong>.  
            Boost <strong>B2B sales conversion</strong>, handle{" "}
            <strong>objections with AI</strong>, and get{" "}
            <strong>real-time suggestions</strong> during calls.  
            Works as an <strong>AI-powered CRM assistant</strong>, a{" "}
            <strong>GPT sales extension</strong>, and automates{" "}
            <strong>follow-ups</strong> to improve inside sales performance.
          </p>
        </div>

        {/* ✅ RIGHT SIDE - Logo + Language */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <img
            src={LogoHeaderLight}
            alt="Cursale Logo"
            className="h-8 md:h-12 lg:h-14 w-auto"
          />

          {/* ✅ Language Selector (default EN) */}
          <div className="flex gap-3">
            <button className="hover:scale-110 transition" title="English">
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
            </button>
            <button className="hover:scale-110 transition" title="Português">
              <ReactCountryFlag
                countryCode="BR"
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
            </button>
            <button className="hover:scale-110 transition" title="Español">
              <ReactCountryFlag
                countryCode="ES"
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
