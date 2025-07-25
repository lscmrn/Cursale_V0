import { motion } from 'framer-motion';
import { useFeatures } from '@/hooks/useFeatures';

export default function Features() {
    const { features } = useFeatures();

    return (
        <section
            id="features"
            className="py-16"
        >
            <div className="mx-auto max-w-6xl px-4 text-center">
                <h2 className="mb-3 font-jakarta text-4xl font-bold text-cursale-blue-900 md:text-5xl">
                    Main Features
                </h2>
                <p className="mb-12 text-2xl text-cursale-blue-700">
                    Everything the seller needs. Where they need it most.
                </p>
                <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: 'easeOut',
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex items-center space-x-3 rounded-2xl bg-gradient-to-br from-cursale-blue-900 to-cursale-blue-500 p-2 shadow-lg shadow-cursale-blue-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cursale-blue-300/50"
                        >
                            <div className="flex h-36 w-36 items-center justify-center bg-transparent">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="h-28 w-36 shrink-0"
                                />
                            </div>
                            <div>
                                <h3 className="mb-1 text-2xl font-bold text-cursale-blue-100">
                                    {feature.title}
                                </h3>
                                <p className="font-rubik text-sm leading-relaxed text-cursale-blue-50">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
