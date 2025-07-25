import { motion } from 'framer-motion';
import { useAdvantages } from '@/hooks/useAdvantages';

export default function Advantages() {
    const { items } = useAdvantages();

    return (
        <section
            id="advantages"
            className="relative overflow-hidden bg-gradient-to-br from-cursale-blue-50 to-cursale-blue-100 py-16"
        >
            <div className="mx-auto max-w-6xl px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-3xl font-bold text-cursale-blue-900 md:text-4xl"
                >
                    Real <span className="text-cursale-orange-900">advantages</span> for your team
                </motion.h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => {
                        const Icon = item.icon; // ✅ instanciando o ícone corretamente
                        return (
                            <motion.div
                                key={item.text}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                    type: 'spring',
                                    stiffness: 120,
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-cursale-blue-900 to-cursale-blue-700 
                           p-6 text-center text-cursale-blue-50 shadow-lg shadow-cursale-blue-500/30"
                            >
                                <motion.div
                                    whileHover={{ rotate: 5, scale: 1.2 }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                    className="mb-4 text-4xl text-cursale-blue-200"
                                >
                                    <Icon />
                                </motion.div>
                                <p className="text-base font-medium md:text-lg">{item.text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
