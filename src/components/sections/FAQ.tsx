import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useFAQ } from '@/hooks/useFAQ';

export default function FAQ() {
    const { faqs, openIndex, toggleFAQ } = useFAQ();

    return (
        <section
            id="faq"
            className="py-16"
        >
            <div className="mx-auto max-w-3xl px-4">
                <h2 className="mb-10 text-center text-3xl font-bold text-cursale-blue-900 md:text-4xl">
                    Frequently Asked <span className="text-cursale-orange-900">Questions</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="overflow-hidden rounded-xl bg-white shadow-md"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between p-4 text-left focus:outline-none"
                            >
                                <span className="text-base font-semibold text-cursale-blue-900 md:text-lg">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-cursale-blue-700"
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
                                        className="px-4 pb-4 text-sm text-cursale-blue-700 md:text-base"
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
