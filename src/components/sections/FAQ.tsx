import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useFAQ } from '@/hooks/useFAQ';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
    const { faqs, openIndex, toggleFAQ } = useFAQ();
    const { t } = useTranslation();

    return (
        <section
            id="faq"
            className="w-full bg-gradient-cursale-light py-8 font-poppins sm:py-12 md:py-16 lg:py-20"
            aria-labelledby="faq-heading"
        >
            <div className="container mx-auto max-w-4xl px-4">
                <h2
                    id="faq-heading"
                    className="mb-6 text-center text-3xl font-extrabold leading-tight text-brand-body900 sm:mb-8 sm:text-4xl md:mb-10 md:text-5xl"
                >
                    {t('faq.heading.pre')}{' '}
                    <span className="bg-gradient-to-r from-ia-futurist-purple via-ia-cyberpunk-neonPurple to-ia-futurist-magenta bg-clip-text text-transparent">
                        {t('faq.heading.highlight')}
                    </span>{' '}
                    {t('faq.heading.post')}
                </h2>

                <dl className="space-y-3 sm:space-y-4 md:space-y-5">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const panelId = `faq-panel-${index}`;
                        const buttonId = `faq-trigger-${index}`;
                        return (
                            <motion.div
                                key={faq.qKey}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.35, delay: index * 0.06 }}
                                className="overflow-hidden rounded-2xl bg-gradient-ia-card shadow-md ring-1 ring-black/5"
                            >
                                <dt>
                                    <button
                                        id={buttonId}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => toggleFAQ(index)}
                                        className="flex w-full items-center justify-between gap-4 p-4 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-purple/25 sm:p-5"
                                    >
                                        <span className="text-base font-semibold text-brand-body900 sm:text-lg md:text-xl">
                                            {t(faq.qKey)}
                                        </span>
                                        <motion.span
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="text-brand-body900/70"
                                            aria-hidden
                                        >
                                            <FaChevronDown />
                                        </motion.span>
                                    </button>
                                </dt>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.dd
                                            key="content"
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={buttonId}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-4 pb-4 text-sm text-brand-body900/85 sm:px-5 sm:pb-5 sm:text-base"
                                        >
                                            <div className="pt-0.5">{t(faq.aKey)}</div>
                                        </motion.dd>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </dl>
            </div>
        </section>
    );
}
