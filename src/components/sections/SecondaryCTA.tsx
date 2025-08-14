import { motion } from 'framer-motion';
import { Button } from '@/ui/Button';
import { useSecondaryCTA } from '@/hooks/useSecondaryCTA';
import { useTranslation } from 'react-i18next';

export default function SecondaryCTA() {
    const { scrollToSection } = useSecondaryCTA();
    const { t } = useTranslation();

    return (
        <section
            id="secondary-cta"
            aria-labelledby="secondary-cta-heading"
            className="relative w-full bg-white py-10 font-poppins sm:py-14 md:py-20 lg:py-28"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cursale-blue-50 via-transparent to-transparent"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ia-futurist-magenta/10 via-transparent to-transparent"
            />

            <div className="container mx-auto max-w-5xl px-4 text-center">
                <motion.h2
                    id="secondary-cta-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 text-3xl font-extrabold leading-tight text-brand-body900 sm:mb-6 sm:text-4xl md:mb-8 md:text-5xl"
                >
                    {t('secondaryCta.heading.pre')}{' '}
                    <span className="bg-gradient-to-r from-ia-futurist-purple via-ia-cyberpunk-neonPurple to-ia-futurist-magenta bg-clip-text text-transparent">
                        {t('secondaryCta.heading.highlight')}
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mx-auto mb-6 max-w-3xl text-[0.9rem] leading-relaxed text-brand-body900/85 sm:mb-8 sm:text-base md:mb-10 md:text-lg lg:text-xl"
                >
                    {t('secondaryCta.copy.before')}{' '}
                    <span className="font-semibold text-ia-futurist-magenta">
                        {t('secondaryCta.copy.highlight')}
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center justify-center"
                >
                    <Button
                        variant="secondary"
                        onClick={() => scrollToSection('signup')}
                        className="px-6 py-3 text-sm sm:text-sm md:text-base lg:text-lg"
                    >
                        {t('secondaryCta.cta')}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
