/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
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
            className="relative w-full py-10 sm:py-14 md:py-20 lg:py-28"
        >
            <div className="container text-center">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 4xl:gap-28">
                    {/* TEXTO + BOTÃO */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full px-4 sm:px-6 md:basis-1/3 md:px-8 lg:basis-[35%] lg:px-10 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-36"
                    >
                        <h2 className="my-8 font-jakarta text-[1.75rem] font-bold leading-snug text-gray-900 sm:text-[1.875rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] 3xl:text-[4rem] 4xl:text-[5rem]">
                            Your real-time sales copilot that makes every call a winning call.
                        </h2>
                        <p className="mb-10 text-sm text-gray-600 sm:text-base md:text-lg lg:text-xl">
                            Sell more with less effort. Cursale supports you on calls, suggests
                            questions, addresses objections, and generates follow-ups that actually
                            close deals.
                        </p>
                        <div className="mt-6">
                            <Button
                                variant="primary"
                                onClick={scrollToCta}
                                className="text-xs sm:text-sm md:text-base lg:text-lg"
                            >
                                Get started for free
                            </Button>
                        </div>
                    </motion.div>

                    {/* IMAGEM */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex w-full justify-center md:basis-1/3 lg:basis-[65%]"
                    >
                        <div className="relative flex w-full flex-col items-center justify-center">
                            <img
                                src={heroImage}
                                alt="hero"
                                className="
                                    w-full
                                    max-w-none
                                    rounded-2xl
                                    object-contain
                                    transition-transform
                                    hover:scale-105
                                    sm:w-[540px]
                                    md:w-[680px]
                                    lg:w-[780px]
                                    xl:w-[850px]
                                    2xl:w-[1015px]
                                    3xl:w-[1200px]
                                    4xl:w-[1440px]"
                            />
                            <div className="absolute -bottom-14 w-full pl-32 pr-16 text-center text-[0.7rem] sm:text-xs md:text-sm lg:text-base">
                                <p className="leading-relaxed text-gray-700">
                                    The{' '}
                                    <span className="text-cursale-blue-900 font-semibold">
                                        Cursale
                                    </span>{' '}
                                    accompanies you on calls, suggests questions, addresses
                                    objections, and generates follow-ups that actually close deals.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="mt-12 flex flex-row items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    <p className="font-bold text-gray-800">
                        {countUpStart && (
                            <CountUp
                                end={50}
                                duration={2}
                            />
                        )}
                        %
                    </p>
                    <p className="ml-2 text-center text-base text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
                        More sales conversions
                    </p>
                </div>
            </div>
        </section>
    );
}
