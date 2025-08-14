import { motion } from 'framer-motion';
import cursaleInAction from '@/assets/images/cursale_em_acao.png';
import { Button } from '@/ui/Button';
import { useCursaleInAction } from '@/hooks/useCursaleInAction';
import { useTranslation } from 'react-i18next';

export default function CursaleInAction() {
    const { scrollToCta } = useCursaleInAction();
    const { t } = useTranslation();

    return (
        <section
            id="cursale-in-action"
            aria-labelledby="cursale-in-action-heading"
            className="relative w-full bg-white py-10 font-poppins sm:py-14 md:py-20 lg:py-28"
        >
            <div className="container mx-auto max-w-7xl px-4">
                <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-12 md:gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex w-full justify-center md:col-span-6 lg:col-span-7"
                    >
                        <img
                            src={cursaleInAction}
                            alt={t('cursaleInAction.imageAlt')}
                            className="w-full max-w-[760px] rounded-3xl object-contain shadow-lg ring-1 ring-ia-cyberpunk-darkBlue/10"
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full text-left md:col-span-6 lg:col-span-5"
                    >
                        <p
                            id="cursale-in-action-heading"
                            className="mb-2 text-[0.8rem] uppercase tracking-wide text-ia-cyberpunk-neonPurple sm:text-sm md:mb-3 md:text-base lg:text-lg"
                        >
                            {t('cursaleInAction.badge')}
                        </p>

                        <h2 className="mb-4 text-xl font-bold leading-snug text-brand-body900 sm:mb-6 sm:text-2xl md:mb-8 md:text-3xl lg:mb-10 lg:text-4xl xl:text-5xl">
                            {t('cursaleInAction.title')}
                        </h2>

                        <p className="mb-6 text-[0.9rem] leading-relaxed text-brand-body900 sm:mb-8 sm:text-base md:mb-10 md:text-lg lg:mb-12 lg:text-xl">
                            {t('cursaleInAction.copy.a')}{' '}
                            <span className="font-bold text-ia-cyberpunk-neonMagenta">
                                {t('cursaleInAction.copy.b')}
                            </span>{' '}
                            <span className="font-semibold">{t('cursaleInAction.copy.c')}</span>
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Button
                                variant="primary"
                                onClick={scrollToCta}
                                className="px-6 py-3 text-sm sm:text-sm md:text-base lg:text-lg"
                            >
                                {t('cursaleInAction.cta')}
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
