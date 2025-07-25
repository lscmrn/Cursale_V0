import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useFAQ } from '@/hooks/useFAQ';
export default function FAQ() {
    const { faqs, openIndex, toggleFAQ } = useFAQ();
    return (
        <section
            id="faq"
            className="relative w-full py-10 sm:py-14 md:py-20 lg:py-28"
        >
            <div className="container">
                <h2 className="mb-6 text-center text-2xl font-bold text-cursale-blue-900 sm:mb-8 sm:text-3xl md:mb-10 md:text-4xl lg:text-5xl">
                    Frequently Asked <span className="text-cursale-orange-900">Questions</span>
                </h2>
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="overflow-hidden rounded-xl bg-gradient-blue-50 shadow-md"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between p-3 text-left focus:outline-none sm:p-4 md:p-5"
                            >
                                <span className="text-sm font-semibold text-cursale-blue-900 sm:text-base md:text-lg lg:text-xl">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sm text-cursale-blue-700 sm:text-base md:text-lg"
                                >
                                    <FaChevronDown />
                                </motion.div>
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="px-3 pb-3 text-[0.8rem] text-cursale-blue-700 sm:px-4 sm:pb-4 sm:text-sm md:px-5 md:pb-5 md:text-base lg:text-lg"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
