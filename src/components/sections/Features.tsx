import { motion } from 'framer-motion';
import { useFeatures } from '@/hooks/useFeatures';

export default function Features() {
    const { features } = useFeatures();
    return (
        <section
            id="features"
            className="relative w-full bg-gradient-ia-landing-harmony py-10 sm:py-14 md:py-20 lg:py-28"
        >
            <div className="container text-center">
                <h2 className="mb-3 font-jakarta text-[1.8rem] font-bold text-[#6A00E6] sm:text-3xl md:text-4xl lg:text-5xl">
                    Main Features
                </h2>
                <p className="mb-8 text-base text-[#3d1a63] sm:mb-10 sm:text-lg md:mb-12 md:text-xl lg:text-2xl">
                    Everything the seller needs. Where they need it most.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="isolation-auto mx-auto flex max-w-[440px] flex-col items-center gap-y-3 overflow-hidden rounded-2xl bg-gradient-ia-card p-6 shadow-md ring-1 ring-white/20 ring-offset-0 backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-violet-300/30"
                        >
                            <div className="flex w-20 items-center justify-center drop-shadow-md sm:w-24 md:w-28 lg:w-32">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="h-auto w-full object-contain"
                                />
                            </div>

                            <div className="text-center">
                                <h3 className="mb-1 font-jakarta text-lg font-extrabold tracking-tight text-[#6A00E6] sm:text-xl md:text-2xl">
                                    {feature.title}
                                </h3>
                                <p className="font-rubik text-sm leading-relaxed text-[#1e1b3b] sm:text-base">
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
