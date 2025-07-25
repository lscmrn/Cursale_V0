import { motion } from 'framer-motion';
import LogoHeaderLight from '@/assets/images/logo-light.png';
import ReactCountryFlag from 'react-country-flag';
import { useFooter } from '@/hooks/useFooter';

export default function Footer() {
    const { year, links, scrollToSection } = useFooter();

    return (
        <footer className="bg-gradient-to-br from-cursale-blue-900 to-cursale-blue-700 py-10 text-cursale-blue-50">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
                {/* ✅ LEFT SIDE - Links + SEO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-lg space-y-4 text-center md:text-left"
                >
                    <h3 className="text-lg font-bold text-white">Cursale — The AI Sales Copilot</h3>
                    <p className="text-sm text-cursale-blue-200">© {year} • All rights reserved</p>

                    <nav className="flex flex-wrap justify-center gap-4 text-sm md:justify-start">
                        {links.map((link) => (
                            <button
                                key={link}
                                onClick={() => scrollToSection(link.toLowerCase())}
                                className="transition hover:text-cursale-orange-300"
                            >
                                {link}
                            </button>
                        ))}
                    </nav>

                    <p className="mt-4 text-xs leading-relaxed text-cursale-blue-300">
                        Cursale is your <strong>AI sales copilot</strong>. Boost{' '}
                        <strong>B2B sales conversion</strong>, handle{' '}
                        <strong>objections with AI</strong>, and get{' '}
                        <strong>real-time suggestions</strong> during calls. Works as an{' '}
                        <strong>AI-powered CRM assistant</strong>, a{' '}
                        <strong>GPT sales extension</strong>, and automates{' '}
                        <strong>follow-ups</strong> to improve inside sales performance.
                    </p>
                </motion.div>

                {/* ✅ RIGHT SIDE - Logo + Language */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col items-center space-y-4 md:items-end"
                >
                    <img
                        src={LogoHeaderLight}
                        alt="Cursale Logo"
                        className="h-8 w-auto md:h-12 lg:h-14"
                    />
                    <div className="flex gap-3">
                        <button
                            className="transition hover:scale-110"
                            title="English"
                        >
                            <ReactCountryFlag
                                countryCode="US"
                                svg
                                style={{ width: '1.5em', height: '1.5em' }}
                            />
                        </button>
                        <button
                            className="transition hover:scale-110"
                            title="Português"
                        >
                            <ReactCountryFlag
                                countryCode="BR"
                                svg
                                style={{ width: '1.5em', height: '1.5em' }}
                            />
                        </button>
                        <button
                            className="transition hover:scale-110"
                            title="Español"
                        >
                            <ReactCountryFlag
                                countryCode="ES"
                                svg
                                style={{ width: '1.5em', height: '1.5em' }}
                            />
                        </button>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
