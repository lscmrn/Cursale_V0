import { motion } from 'framer-motion';
import heroImage from '@/assets/images/hero.png';
import CountUp from 'react-countup';
import { Button } from '@/ui/Button';
import { useHero } from '@/hooks/useHero';

export default function Hero() {
    const { countUpStart, scrollToCta } = useHero();

    return (
        <section
            id="hero"
            className="w-full py-12 sm:py-16 md:py-20 lg:py-28"
        >
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
                    {/* Texto + Botão */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="px-4 text-left sm:px-6 md:px-8 lg:px-10 xl:pr-12"
                    >
                        <h2 className="font-jakarta text-3xl font-bold leading-tight text-[#0a0d4e] sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.5rem]">
                            Your real‑time sales copilot that makes every call a winning call.
                        </h2>
                        <p className="mt-5 text-base text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
                            Sell more with less effort. Cursale supports you on calls, suggests
                            questions, addresses objections, and generates follow-ups that actually
                            close deals.
                        </p>
                        <div className="mt-8">
                            <Button
                                variant="primary"
                                onClick={scrollToCta}
                                className="px-6 py-3 text-base sm:text-lg md:text-xl"
                            >
                                Get started for free
                            </Button>
                        </div>
                    </motion.div>

                    {/* Imagem + Texto abaixo */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full rounded-2xl object-contain px-4 shadow-[0_0_30px_#6C00FF66] transition-transform hover:scale-105 hover:shadow-[0_0_40px_#00C2FF99] sm:px-6 md:max-w-[1600px] lg:max-w-[1800px] xl:max-w-[2000px]">
                            <img
                                src={heroImage}
                                alt="Cursale hero"
                                className="mt-2 w-full"
                            />
                            <p className="mt-3 text-center text-sm text-gray-700 sm:text-base md:text-lg lg:text-xl">
                                The{' '}
                                <span className="text-ia.cyberpunk.darkBlue font-semibold">
                                    Cursale
                                </span>{' '}
                                accompanies you on calls, suggests questions, addresses objections,
                                and generates follow‑ups that actually close deals.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Estatística */}
                <div className="pt-20 text-center">
                    <div className="inline-flex items-baseline gap-3">
                        <p className="font-jakarta text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl">
                            {countUpStart && (
                                <CountUp
                                    end={50}
                                    duration={2}
                                />
                            )}
                            %
                        </p>
                        <p className="text-xl text-gray-600 sm:text-2xl md:text-3xl">
                            More sales conversions
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
