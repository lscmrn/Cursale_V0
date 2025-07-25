/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */ import { motion } from 'framer-motion';
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
            <div className="container">
                <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-10 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="mb-4 font-jakarta text-[1.75rem] font-bold leading-snug text-gray-900 sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
                            Your real-time sales copilot that makes every call a winning call.
                        </h2>
                        <p className="mb-6 text-sm text-gray-600 sm:text-base md:text-lg lg:mb-6 lg:text-xl">
                            Sell more with less effort. Cursale supports you on calls, suggests
                            questions, addresses objections, and generates follow-ups that actually
                            close deals.
                        </p>
                        <Button
                            variant="gradient"
                            onClick={scrollToCta}
                            className="text-xs sm:text-sm md:text-base lg:text-lg"
                        >
                            Get started for free
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex w-full justify-center md:w-1/2"
                    >
                        <div className="relative flex flex-col justify-center">
                            <img
                                src={heroImage}
                                alt="hero"
                                className="w-full max-w-[300px] rounded-2xl shadow-lg sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[580px]"
                            />
                            <div className="mx-auto mt-4 max-w-md text-center text-[0.7rem] sm:text-xs md:text-sm lg:text-base">
                                <p className="leading-relaxed text-gray-700">
                                    The{' '}
                                    <span className="font-semibold text-cursale-blue-900">
                                        Cursale
                                    </span>{' '}
                                    accompanies you on calls, suggests questions, addresses
                                    objections, and generates follow-ups that actually close deals.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="mt-8 flex flex-row items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
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
