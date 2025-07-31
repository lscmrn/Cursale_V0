import { motion } from 'framer-motion';
import LogoFooter from '@/assets/images/icons/cursale-icon.png';
import ReactCountryFlag from 'react-country-flag';
import { useFooter } from '@/hooks/useFooter';
import { Translate } from '@/components/Translate';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { year, links, scrollToSection } = useFooter();
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

    return (
        <footer className="bg-gradient-ia-frost py-6 sm:py-8 md:py-10 lg:py-12">
            <div className="container space-y-4 sm:space-y-6">
                <nav className="flex flex-wrap justify-center gap-3 text-[0.7rem] font-medium text-ia-futurist-purple sm:gap-4 sm:text-xs md:text-sm lg:text-base">
                    {links.map((link) => (
                        <button
                            key={link.key}
                            onClick={() => scrollToSection(link.id)}
                            className="transition hover:text-ia-classic-deep"
                        >
                            <Translate k={`footer.links.${link.key}`} />
                        </button>
                    ))}
                </nav>

                <p
                    className="mx-auto max-w-3xl text-center text-[0.6rem] leading-relaxed text-ia-classic-deep sm:text-[0.7rem] md:text-xs lg:text-sm"
                    dangerouslySetInnerHTML={{ __html: t('footer.description') }}
                />

                <div className="flex flex-col items-center justify-between space-y-3 border-t border-ia-futurist-cyan pt-3 sm:space-y-4 sm:pt-4 md:flex-row md:space-y-0">
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
                        <h3 className="text-[0.65rem] font-bold text-ia-futurist-purple sm:text-xs md:text-sm lg:text-base">
                            <Translate k="footer.tagline" />
                        </h3>
                        <p className="text-[0.55rem] text-ia-cyberpunk-darkBlue sm:text-[0.65rem] md:text-xs lg:text-sm">
                            © {year} • <Translate k="footer.rights" />
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex gap-2 sm:gap-3 md:gap-4"
                    >
                        <button
                            onClick={() => changeLanguage('en')}
                            title="English"
                            className="transition hover:scale-110"
                        >
                            <ReactCountryFlag
                                countryCode="US"
                                svg
                                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-12 lg:w-12"
                            />
                        </button>
                        <button
                            onClick={() => changeLanguage('pt')}
                            title="Português"
                            className="transition hover:scale-110"
                        >
                            <ReactCountryFlag
                                countryCode="BR"
                                svg
                                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-12 lg:w-12"
                            />
                        </button>
                        <button
                            onClick={() => changeLanguage('es')}
                            title="Español"
                            className="transition hover:scale-110"
                        >
                            <ReactCountryFlag
                                countryCode="ES"
                                svg
                                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-12 lg:w-12"
                            />
                        </button>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
