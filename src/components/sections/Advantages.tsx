import { motion, type Variants } from 'framer-motion';
import { useAdvantages } from '@/hooks/useAdvantages';
import { useTranslation } from 'react-i18next';

const listVariants: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 120, damping: 18 },
    },
};

export default function Advantages() {
    const { items } = useAdvantages();
    const { t } = useTranslation();

    return (
        <section
            id="advantages"
            className="w-full bg-gradient-cursale-light py-8 font-poppins sm:py-12 md:py-16 lg:py-20"
            aria-labelledby="advantages-heading"
        >
            <div className="container mx-auto max-w-7xl px-4 text-center">
                <motion.h2
                    id="advantages-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3 text-3xl font-extrabold leading-tight text-brand-body900 sm:text-4xl md:text-5xl"
                >
                    {t('advantages.heading.pre')}{' '}
                    <span className="bg-gradient-to-r from-ia-futurist-purple via-ia-cyberpunk-neonPurple to-ia-futurist-magenta bg-clip-text text-transparent">
                        {t('advantages.heading.highlight')}
                    </span>{' '}
                    {t('advantages.heading.post')}
                </motion.h2>

                <p className="mx-auto mb-8 max-w-3xl text-sm text-brand-body900/80 sm:text-base md:mb-12">
                    {t('advantages.subcopy')}
                </p>

                <motion.ol
                    variants={listVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {items.map((adv, idx) => {
                        const Icon = adv.icon as React.ComponentType<{ className?: string }>;
                        return (
                            <motion.li
                                key={adv.textKey ?? idx}
                                variants={cardVariants}
                                className="group h-full rounded-3xl bg-gradient-ia-card p-6 text-left shadow-md ring-1 ring-black/5 backdrop-blur-sm transition focus-within:-translate-y-0.5 focus-within:shadow-lg hover:-translate-y-0.5 hover:shadow-lg"
                                tabIndex={0}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-ia-btn-hero text-cursale-white shadow-sm ring-1 ring-white/30 transition group-hover:brightness-110">
                                        {Icon ? <Icon className="h-6 w-6" /> : null}
                                    </div>
                                    <p className="mt-1 text-base font-semibold leading-snug text-brand-body900 sm:text-lg lg:text-xl">
                                        {t(adv.textKey)}
                                    </p>
                                </div>
                            </motion.li>
                        );
                    })}
                </motion.ol>
            </div>
        </section>
    );
}
