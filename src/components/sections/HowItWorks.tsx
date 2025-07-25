import { motion, AnimatePresence } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa';
import { useHowItWorks } from '@/hooks/useHowItWorks';
export default function HowItWorks() {
    const { steps } = useHowItWorks();
    return (
        <section
            id="how-it-works"
            className="relative w-full py-10 sm:py-14 md:py-20 lg:py-28"
        >
            <div className="container text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-3 text-[1.8rem] font-bold text-cursale-blue-900 sm:text-3xl md:text-4xl lg:text-5xl"
                >
                    Sell smarter.{' '}
                    <span className="text-cursale-orange-500">Less improvisation.</span>
                </motion.h2>
                <p className="mb-8 text-[0.9rem] text-cursale-blue-700 sm:mb-10 sm:text-base md:mb-12 md:text-lg lg:text-xl">
                    Getting started is simple. Fast results, no friction.
                </p>
                <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-10 sm:grid-cols-2 sm:gap-6 md:mb-12 md:gap-8 lg:grid-cols-3">
                    <AnimatePresence>
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    whileHover={{ scale: 1.07 }}
                                    className="mx-auto flex w-full max-w-[260px] flex-col items-center rounded-2xl bg-gradient-orange-100 p-4 text-center text-cursale-blue-50 shadow-lg shadow-cursale-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cursale-blue-300/50 sm:max-w-[300px] sm:p-5 md:max-w-[340px] md:p-6 lg:max-w-[380px]"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="mb-3 text-3xl text-cursale-blue-600 sm:text-4xl lg:text-5xl"
                                    >
                                        <Icon />
                                    </motion.div>
                                    <h3 className="text-base font-semibold text-cursale-gray-800 sm:text-lg md:text-xl">
                                        {step.title}
                                    </h3>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mx-auto max-w-lg rounded-xl bg-gradient-blue-700 p-4 sm:max-w-xl sm:p-5 md:max-w-2xl md:p-6"
                >
                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                        <FaChartLine className="text-3xl text-cursale-blue-100 sm:text-4xl md:text-5xl" />
                        <p className="text-sm leading-relaxed text-cursale-gray-50 sm:text-base md:text-lg lg:text-xl">
                            Up to{' '}
                            <span className="font-bold text-cursale-orange-100">
                                +50% conversion
                            </span>
                            . Training in minutes. Immediate ROI.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
