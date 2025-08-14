import { motion } from 'framer-motion';
import heroImage from '@/assets/images/hero.png';
import CountUp from 'react-countup';
import { Button } from '@/ui/Button';
import { useHero } from '@/hooks/useHero';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { countUpStart, scrollToCta } = useHero();
    const { t } = useTranslation();

    return (
        <section
            id="hero"
            className="w-full bg-white py-12 font-poppins sm:py-16 md:py-20 lg:py-28 xl:py-32"
        >
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="px-4 text-left sm:px-6 md:px-8 lg:px-10 xl:pr-12"
                    >
                        <h2 className="text-4xl font-bold text-brand-body900 sm:text-5xl lg:text-6xl">
                            {t('hero.title')}
                        </h2>
                        <p className="mt-5 text-base text-brand-body900/90 sm:text-lg md:text-xl">
                            {t('hero.subtitle')}
                        </p>
                        <div className="mt-8">
                            <Button
                                variant="primary"
                                onClick={scrollToCta}
                                className="px-6 py-3"
                            >
                                {t('hero.cta')}
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="w-full object-contain">
                            <img
                                src={heroImage}
                                alt={t('hero.imageAlt')}
                                className="mt-2 w-full"
                            />
                            <p className="mt-3 text-center text-sm text-brand-body900/90 sm:text-base md:text-lg">
                                <span className="font-semibold text-brand-purple">Cursale</span>{' '}
                                {t('hero.imageCaption')}
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="pt-16 text-center">
                    <div className="inline-flex items-baseline gap-3">
                        <p className="text-3xl font-bold text-brand-purple sm:text-4xl md:text-5xl">
                            {countUpStart && (
                                <CountUp
                                    end={50}
                                    duration={2}
                                />
                            )}
                            %
                        </p>
                        <p className="text-lg text-brand-body900 sm:text-xl md:text-2xl">
                            {t('hero.stat.label')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
