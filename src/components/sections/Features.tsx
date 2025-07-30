import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFeatures } from '@/hooks/useFeatures';
import CursaleFeatures from '@/assets/images/icons/cursale-features.svg';

export default function Features() {
    const { features } = useFeatures();
    const [activeIndex, setActiveIndex] = useState(0);
    const activeFeature = features[activeIndex];

    return (
        <section
            id="features"
            className="w-full py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20"
        >
            <div className="container flex flex-col items-center justify-center">
                <h2 className="pb-4 font-poppins text-3xl font-bold text-[#6A00E6] sm:text-4xl md:text-[2.75rem] lg:text-[3rem] xl:text-[3.5rem]">
                    Main Features
                </h2>
                <p className="py-8 text-base text-[#3d1a63] sm:mb-10 sm:text-lg md:mb-12 md:text-xl lg:text-2xl">
                    Everything the seller needs. Where they need it most.
                </p>

                {/* Layout em abas (mobile only) */}
                <div className="w-full px-4 sm:hidden">
                    {/* Abas */}
                    <div className="mb-6 flex flex-wrap justify-center gap-2">
                        {features.map((feature, idx) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveIndex(idx)}
                                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                                    idx === activeIndex
                                        ? 'bg-[#6A00E6] text-white'
                                        : 'bg-gray-100 text-[#6A00E6]'
                                }`}
                            >
                                {feature.title}
                            </button>
                        ))}
                    </div>

                    {/* Conteúdo da aba ativa */}
                    <motion.div
                        key={activeFeature.id}
                        className="rounded-2xl bg-gradient-ia-card p-6 text-center shadow-md ring-1 ring-white/20 backdrop-blur-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="mb-2 text-lg font-bold text-[#6A00E6]">
                            {activeFeature.title}
                        </h3>
                        <p className="text-sm text-[#1e1b3b]">{activeFeature.description}</p>
                    </motion.div>
                </div>

                {/* Layout circular (desktop) */}
                <div className="relative mx-auto hidden h-[720px] w-full max-w-7xl sm:block">
                    {/* Mascot */}
                    <div className="absolute left-1/2 top-1/2 z-10 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2">
                        <img
                            src={CursaleFeatures}
                            alt="Features Mascot"
                            className="h-full w-full animate-pulse object-contain"
                        />
                    </div>

                    {/* Connection lines */}
                    {Array(6)
                        .fill(null)
                        .map((_, i) => (
                            <div
                                key={i}
                                className="absolute left-1/2 top-1/2 h-[2px] w-[120px] origin-left bg-gradient-to-r from-[#6A00E6] to-transparent opacity-40"
                                style={{
                                    transform: `rotate(${i * 60}deg) translateX(90px)`,
                                    transformOrigin: 'left center',
                                }}
                            />
                        ))}

                    {/* Features (desktop) */}
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            id={feature.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`absolute w-72 rounded-2xl bg-gradient-ia-card p-1 text-center shadow-md ring-1 ring-white/20 backdrop-blur-md ${feature.position}`}
                        >
                            <h3
                                id={feature.titleId}
                                className="text-md md:text-md mb-2 font-bold text-[#6A00E6] sm:text-sm lg:text-lg xl:text-xl"
                            >
                                {feature.title}
                            </h3>
                            <p
                                id={feature.descId}
                                className="text-[#1e1b3b] sm:text-xs md:text-sm lg:text-base xl:text-[0.95rem]"
                            >
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
