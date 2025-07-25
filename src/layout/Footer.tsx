import { motion } from 'framer-motion';
import LogoFooter from '@/assets/images/logo_icon.webp';
import ReactCountryFlag from 'react-country-flag';
import { useFooter } from '@/hooks/useFooter';

export default function Footer() {
    const { year, links, scrollToSection } = useFooter();

    return (
        <footer className="bg-gradient-to-r from-cursale-blue-50/80 via-cursale-gray-50/60 to-cursale-gray-100/70 py-10 shadow-md">
            <div className="mx-auto max-w-7xl space-y-8 px-4">
                <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-cursale-blue-800">
                    {links.map((link) => (
                        <button
                            key={link}
                            onClick={() => scrollToSection(link.toLowerCase())}
                            className="transition hover:text-cursale-orange-400"
                        >
                            {link}
                        </button>
                    ))}
                </nav>
                <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-cursale-blue-400">
                    Cursale is your <strong>AI sales copilot</strong>. Boost{' '}
                    <strong>B2B sales conversion</strong>, handle{' '}
                    <strong>objections with AI</strong>, and get{' '}
                    <strong>real-time suggestions</strong> during calls. Works as an{' '}
                    <strong>AI-powered CRM assistant</strong>, a{' '}
                    <strong>GPT sales extension</strong>, and automates <strong>follow-ups</strong>{' '}
                    to improve inside sales performance.
                </p>
                <div className="flex items-center justify-between border-t border-cursale-gray-200 pt-6">
                    {/* LOGO E COPYRIGHT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-2"
                    >
                        <img
                            src={LogoFooter}
                            alt="Cursale Logo"
                            className="h-6 w-auto md:h-8 lg:h-10"
                        />
                        <h3 className="text-sm font-bold text-cursale-blue-800">
                            Cursale - The AI Sales Copilot -
                        </h3>
                        <p className="text-xs text-cursale-orange-400">
                            © {year} • All rights reserved
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex gap-3"
                    >
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
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
