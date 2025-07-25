import { motion } from 'framer-motion';
import { useFeatures } from '@/hooks/useFeatures';
export default function Features() {
    const { features } = useFeatures();
    return (
        <section
            id="features"
            className="relative w-full py-10 sm:py-14 md:py-20 lg:py-28"
        >
            <div className="container text-center">
                <h2 className="mb-3 font-jakarta text-[1.8rem] font-bold text-cursale-blue-900 sm:text-3xl md:text-4xl lg:text-5xl">
                    Main Features
                </h2>
                <p className="mb-8 text-base text-cursale-orange-800 sm:mb-10 sm:text-lg md:mb-12 md:text-xl lg:text-2xl">
                    Everything the seller needs. Where they need it most.
                </p>
                <div className="grid grid-cols-1 gap-4 text-left sm:gap-6 md:grid-cols-2 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex items-center space-x-3 rounded-2xl bg-gradient-blue-50 p-3 shadow-lg shadow-cursale-blue-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cursale-blue-300/50 sm:p-4 md:p-5"
                        >
                            <div className="flex h-36 w-36 items-center justify-center bg-transparent">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="h-28 w-36 shrink-0"
                                />
                            </div>
                            <div>
                                <h3 className="mb-1 text-lg font-bold text-cursale-blue-800 sm:text-xl md:text-2xl lg:text-3xl">
                                    {feature.title}
                                </h3>
                                <p className="font-rubik text-[0.75rem] leading-relaxed text-cursale-orange-900 sm:text-sm md:text-base lg:text-lg">
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
