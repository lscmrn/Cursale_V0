import { motion } from 'framer-motion';
import { useAdvantages } from '@/hooks/useAdvantages';
export default function Advantages() {
    const { items } = useAdvantages();
    return (
        <section
            id="advantages"
            className="relative w-full py-10 sm:py-14 md:py-20 lg:py-28"
        >
            <div className="container text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 text-2xl font-bold text-cursale-blue-900 sm:mb-8 sm:text-3xl md:mb-10 md:text-4xl lg:text-5xl"
                >
                    Real <span className="text-cursale-orange-500">advantages</span> for your team
                </motion.h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
                    {items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.text}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                    type: 'spring',
                                    stiffness: 120,
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center rounded-2xl bg-gradient-blue-50 p-4 text-center text-cursale-orange-600 shadow-lg shadow-cursale-blue-800/30 sm:p-5 md:p-6 lg:p-8"
                            >
                                <motion.div
                                    whileHover={{ rotate: 5, scale: 1.2 }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                    className="mb-3 text-3xl text-cursale-blue-700 sm:mb-4 sm:text-4xl md:text-5xl"
                                >
                                    <Icon />
                                </motion.div>
                                <p className="text-sm font-medium sm:text-base md:text-lg lg:text-xl">
                                    {item.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
