import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useTestimonials } from '@/hooks/useTestimonials';
import { useTranslation } from 'react-i18next';

const gradients = [
    'bg-gradient-ia-card',
    'bg-gradient-ia-peach-cyan',
    'bg-gradient-ia-glow-light',
    'bg-gradient-ia-softblue-glow',
    'bg-gradient-ia-light',
];

export default function Testimonials() {
    const { testimonials } = useTestimonials();
    const { t } = useTranslation();

    return (
        <section
            id="testimonials"
            aria-labelledby="testimonials-heading"
            className="relative w-full bg-white py-10 font-poppins sm:py-14 md:py-20 lg:py-28"
        >
            <div className="container mx-auto max-w-7xl px-4 text-center">
                <motion.h2
                    id="testimonials-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-6 text-3xl font-bold text-brand-purple sm:mb-8 sm:text-4xl md:mb-10 md:text-5xl"
                >
                    {t('testimonials.heading.pre')}{' '}
                    <span className="text-ia-classic-deep">
                        {t('testimonials.heading.highlight')}
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.textKey}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                            viewport={{ once: true, amount: 0.25 }}
                            whileHover={{ scale: 1.02 }}
                            className={`rounded-3xl p-5 text-left shadow-lg ring-1 ring-black/5 sm:p-6 ${gradients[index % gradients.length]}`}
                        >
                            <div className="mb-2 flex text-brand-purple">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <FaStar
                                            key={i}
                                            aria-hidden
                                            className="h-4 w-4 sm:h-5 sm:w-5"
                                        />
                                    ))}
                            </div>

                            <p className="mb-3 text-[0.9rem] italic leading-relaxed text-brand-body900 sm:text-base md:text-lg">
                                {t(item.textKey)}
                            </p>

                            <div className="text-[0.8rem] text-brand-body900/80 sm:text-sm md:text-base">
                                <span className="font-bold text-ia-cyberpunk-neonMagenta">
                                    {t(item.nameKey)}
                                </span>
                                , {t(item.roleKey)}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
