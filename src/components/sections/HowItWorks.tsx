import { motion, AnimatePresence } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa';
import { useHowItWorks } from '@/hooks/useHowItWorks';

export default function HowItWorks() {
    const { steps } = useHowItWorks();

    return (
        <section
            id="how-it-works"
            className="relative w-full py-[100px] md:py-[120px]"
        >
            <div className="mx-auto max-w-7xl px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="mb-2 text-5xl font-bold text-cursale-blue-900 md:text-4xl"
                >
                    Sell smarter.{' '}
                    <span className="text-cursale-orange-500">Less improvisation.</span>
                </motion.h2>
                <p className="text-md mb-10 text-cursale-blue-700 md:text-lg">
                    Getting started is simple. Fast results, no friction.
                </p>

                <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence>
                        {steps.map((step, index) => {
                            const Icon = step.icon; // ✅ Instancia o componente do ícone aqui
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    whileHover={{ scale: 1.07 }}
                                    className={`mx-auto flex w-full max-w-sm flex-col items-center rounded-2xl 
                                        bg-gradient-orange-100
                                        p-6 text-center text-cursale-blue-50 shadow-lg shadow-cursale-blue-500/40 
                                        transition-all duration-300
                                        hover:-translate-y-1 hover:shadow-xl hover:shadow-cursale-blue-300/50`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="mb-4 text-4xl text-cursale-blue-600"
                                    >
                                        <Icon />
                                    </motion.div>
                                    <h3 className="text-lg font-semibold text-cursale-gray-800">
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
                    viewport={{ once: false, amount: 0.3 }}
                    className="mx-auto max-w-2xl rounded-xl bg-gradient-blue-700 p-6"
                >
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <FaChartLine className="text-4xl text-cursale-blue-100" />
                        <p className="text-lg leading-relaxed text-cursale-gray-50 md:text-xl">
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
