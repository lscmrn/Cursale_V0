import { motion } from 'framer-motion';
import LogoFooter from '@/assets/images/icons/cursale-icon.png';
import ReactCountryFlag from 'react-country-flag';
import { useFooter } from '@/hooks/useFooter';
import { useHeader } from '@/hooks/useHeader';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { year, scrollToSection } = useFooter();
    const { mainNavItems } = useHeader();
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

    return (
        <footer className="py-8 font-poppins sm:py-10 md:py-12">
            <div className="container mx-auto max-w-7xl space-y-5 px-4 sm:space-y-6">
                <nav className="flex flex-wrap justify-center gap-3 text-sm font-medium text-cursale-blue-900 sm:text-sm md:text-base">
                    {mainNavItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => scrollToSection(item.id)}
                            className="rounded-md px-1 transition hover:text-ia-cyberpunk-neonBlue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/30"
                        >
                            {t(`header.nav.${item.key}`)}
                        </button>
                    ))}
                </nav>

                <p
                    className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-brand-body900/85 sm:text-sm md:text-sm"
                    dangerouslySetInnerHTML={{ __html: t('footer.description') }}
                />

                <div className="flex flex-col items-center justify-between gap-4 border-t border-brand-blue/25 pt-4 md:flex-row md:gap-0">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45 }}
                        className="flex items-center gap-2"
                    >
                        <img
                            src={LogoFooter}
                            alt="Cursale Logo"
                            className="h-6 w-auto sm:h-7 md:h-8"
                        />
                        <h3 className="text-sm font-bold text-brand-purple md:text-base">
                            {t('footer.tagline')}
                        </h3>
                        <p className="text-xs text-brand-body900/80 md:text-sm">
                            © {year} • {t('footer.rights')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="flex gap-3"
                    >
                        <button
                            onClick={() => changeLanguage('en')}
                            title="English"
                            className="rounded p-1 transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/30"
                        >
                            <ReactCountryFlag
                                countryCode="US"
                                svg
                                className="h-7 w-7 sm:h-8 sm:w-8"
                            />
                        </button>
                        <button
                            onClick={() => changeLanguage('pt')}
                            title="Português"
                            className="rounded p-1 transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/30"
                        >
                            <ReactCountryFlag
                                countryCode="BR"
                                svg
                                className="h-7 w-7 sm:h-8 sm:w-8"
                            />
                        </button>
                        <button
                            onClick={() => changeLanguage('es')}
                            title="Español"
                            className="rounded p-1 transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/30"
                        >
                            <ReactCountryFlag
                                countryCode="ES"
                                svg
                                className="h-7 w-7 sm:h-8 sm:w-8"
                            />
                        </button>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
