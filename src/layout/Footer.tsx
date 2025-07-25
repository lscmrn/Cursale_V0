import { motion } from 'framer-motion';
import LogoFooter from '@/assets/images/logo_icon.webp';
import ReactCountryFlag from 'react-country-flag';
import { useFooter } from '@/hooks/useFooter';
export default function Footer() {
    const { year, links, scrollToSection } = useFooter();
    return (
        <footer className="bg-gradient-to-r from-cursale-blue-50 via-cursale-gray-50 to-cursale-gray-100 py-6 sm:py-8 md:py-10 lg:py-12">
            <div className="container space-y-4 sm:space-y-6">
                <nav className="flex flex-wrap justify-center gap-3 text-[0.7rem] font-medium text-cursale-blue-800 sm:gap-4 sm:text-xs md:text-sm lg:text-base">
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
                <p className="mx-auto max-w-3xl text-center text-[0.6rem] leading-relaxed text-cursale-blue-400 sm:text-[0.7rem] md:text-xs lg:text-sm">
                    Cursale is your <strong>AI sales copilot</strong>. Boost{' '}
                    <strong>B2B sales conversion</strong>, handle{' '}
                    <strong>objections with AI</strong>, and get{' '}
                    <strong>real-time suggestions</strong> during calls. Works as an{' '}
                    <strong>AI-powered CRM assistant</strong>, a{' '}
                    <strong>GPT sales extension</strong>, and automates <strong>follow-ups</strong>{' '}
                    to improve inside sales performance.
                </p>
                <div className="flex flex-col items-center justify-between space-y-3 border-t border-cursale-gray-200 pt-3 sm:space-y-4 sm:pt-4 md:flex-row md:space-y-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-1 sm:space-x-2"
                    >
                        <img
                            src={LogoFooter}
                            alt="Cursale Logo"
                            className="h-4 w-auto sm:h-5 md:h-6 lg:h-8"
                        />
                        <h3 className="text-[0.65rem] font-bold text-cursale-blue-800 sm:text-xs md:text-sm lg:text-base">
                            Cursale - The AI Sales Copilot -
                        </h3>
                        <p className="text-[0.55rem] text-cursale-orange-400 sm:text-[0.65rem] md:text-xs lg:text-sm">
                            © {year} • All rights reserved
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex gap-2 sm:gap-3 md:gap-4"
                    >
                        {['US', 'BR', 'ES'].map((country) => (
                            <button
                                key={country}
                                className="transition hover:scale-110"
                                title={country}
                            >
                                <ReactCountryFlag
                                    countryCode={country}
                                    svg
                                    className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-12 lg:w-12"
                                />
                            </button>
                        ))}
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
