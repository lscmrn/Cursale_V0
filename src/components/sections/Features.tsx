import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PersonaKey } from '@/hooks/useFeatures';
import { useFeatures } from '@/hooks/useFeatures';
import { useTranslation } from 'react-i18next';
import iconSeller from '@/assets/images/icons/cursale-ai.svg';
import iconManager from '@/assets/images/icons/cursale-task.svg';
import iconOperations from '@/assets/images/icons/cursale-sound.svg';

const classes = {
    heading: 'text-brand-purple800',
    title: 'text-brand-purple700',
    body: 'text-brand-body900',
    cardBase:
        'rounded-3xl bg-gradient-ia-card p-5 shadow-md ring-1 ring-black/5 backdrop-blur-sm hover:shadow-lg',
    heroBase: 'rounded-3xl bg-white/90 p-6 shadow-xl ring-1 ring-black/10 backdrop-blur-md md:p-8',
    tabsWrap:
        'mx-auto mt-6 flex w-full max-w-3xl items-center justify-center gap-2 rounded-2xl bg-white/90 p-1 shadow-sm ring-1 ring-black/5 backdrop-blur',
    tab: 'w-full rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-purple/30',
    tabOn: 'bg-gradient-ia-mirror text-white shadow-sm',
    tabOff: 'text-brand-purple hover:bg-brand-purple/10',
};

const heroIconByPersona: Record<PersonaKey, string> = {
    seller: iconSeller,
    manager: iconManager,
    operations: iconOperations,
};

export default function Features() {
    const personas = useFeatures();
    const [active, setActive] = useState<PersonaKey>('seller');
    const { t } = useTranslation();

    const { items, heroIndex } = personas[active];
    const hero = items[heroIndex];
    const others = items.filter((_, i) => i !== heroIndex);

    return (
        <section
            id="features"
            className="w-full bg-gradient-cursale-light py-8 font-poppins sm:py-12 md:py-16 lg:py-20"
            aria-labelledby="features-heading"
        >
            <div className="container mx-auto px-4">
                <h2
                    id="features-heading"
                    className={`text-center text-3xl font-bold sm:text-4xl lg:text-5xl ${classes.heading}`}
                >
                    {t('features.heading')}
                </h2>

                <div
                    role="tablist"
                    aria-label="Feature personas"
                    className={classes.tabsWrap}
                >
                    {(['seller', 'manager', 'operations'] as PersonaKey[]).map((key) => {
                        const selected = active === key;
                        return (
                            <button
                                key={key}
                                role="tab"
                                aria-selected={selected}
                                aria-controls={`panel-${key}`}
                                id={`tab-${key}`}
                                onClick={() => setActive(key)}
                                className={`${classes.tab} ${selected ? classes.tabOn : classes.tabOff}`}
                            >
                                {t(`features.tabs.${key}`)}
                            </button>
                        );
                    })}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        role="tabpanel"
                        id={`panel-${active}`}
                        aria-labelledby={`tab-${active}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="mt-10 grid grid-cols-1 items-center gap-6 md:mt-12 md:grid-cols-3"
                    >
                        <motion.article
                            layout
                            aria-labelledby={hero.titleId}
                            aria-describedby={hero.descId}
                            className={`order-1 md:order-none md:col-span-2 md:row-span-2 ${classes.heroBase}`}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35 }}
                        >
                            <div className="flex flex-col items-center gap-4 md:flex-row">
                                <img
                                    src={heroIconByPersona[active]}
                                    alt={`${active} hero icon`}
                                    className="h-40 w-40 object-contain"
                                />
                                <div>
                                    <h3
                                        id={hero.titleId}
                                        className={`text-center text-xl font-bold md:text-left md:text-2xl lg:text-3xl ${classes.title}`}
                                    >
                                        {t(hero.titleKey)}
                                    </h3>
                                    <p
                                        id={hero.descId}
                                        className={`mt-2 md:text-lg ${classes.body}`}
                                    >
                                        {t(hero.descKey)}
                                    </p>
                                </div>
                            </div>
                        </motion.article>

                        {others.map((f, i) => (
                            <motion.article
                                key={f.id}
                                aria-labelledby={f.titleId}
                                aria-describedby={f.descId}
                                className={classes.cardBase}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.05 * i }}
                            >
                                <h3
                                    className={`text-lg font-semibold md:text-xl ${classes.title}`}
                                    id={f.titleId}
                                >
                                    {t(f.titleKey)}
                                </h3>
                                <p
                                    className={`mt-2 ${classes.body}`}
                                    id={f.descId}
                                >
                                    {t(f.descKey)}
                                </p>
                            </motion.article>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
