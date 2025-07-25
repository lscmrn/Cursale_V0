/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import { motion } from 'framer-motion';
import heroImage from '@/assets/images/hero.png';
import CountUp from 'react-countup';
import { Button } from '@/ui/Button';
import { useHero } from '@/hooks/useHero';

export default function Hero() {
    const { countUpStart, scrollToCta } = useHero();

    return (
        <>
            <section
                id="hero"
                className="relative w-full py-[100px] md:py-[120px]"
            >
                <div className="mx-auto max-w-7xl px-4">
                    <div className="-mx-3 flex flex-wrap items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="w-full px-3 md:w-6/12 lg:w-6/12 xl:w-6/12"
                        >
                            <h2 className="mb-4 font-jakarta text-[2.0625rem] font-bold leading-[1.3] text-gray-900 sm:text-[2.5rem] md:mb-[20px] md:text-[3.08823rem] lg:mb-[20px] lg:text-[3.375rem] xl:mb-[25px] xl:text-[3.625rem]">
                                Your real-time sales copilot that makes every call a winning call.
                            </h2>
                            <p className="mb-6 pr-0 text-lg text-gray-600 lg:mb-[25px] lg:pr-[10%] xl:mb-[30px]">
                                Sell more with less effort. Cursale supports you on calls, suggests
                                questions, addresses objections, and generates follow-ups that
                                actually close deals.
                            </p>
                            <Button
                                variant="gradient"
                                onClick={scrollToCta}
                            >
                                Get started for free
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="mt-10 w-full px-3 md:mt-0 md:w-6/12 lg:w-6/12 xl:w-6/12"
                        >
                            <div className="relative flex flex-col justify-center">
                                <img
                                    src={heroImage}
                                    alt="hero"
                                    className="h-auto max-w-full rounded-2xl shadow-lg"
                                />
                                <div className="mx-auto mt-4 max-w-3xl text-center text-sm">
                                    <p className="leading-relaxed text-gray-700">
                                        The{' '}
                                        <span className="font-semibold text-cursale-blue-900">
                                            Cursale
                                        </span>{' '}
                                        accompanies you on calls, suggests questions, addresses
                                        objections, and generates follow-ups that actually close
                                        deals.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center text-6xl">
                    <p className="font-bold text-gray-800">
                        {countUpStart && (
                            <CountUp
                                end={50}
                                duration={2}
                            />
                        )}
                        %
                    </p>
                    <p className="ml-2 text-center text-2xl text-gray-600">
                        More sales conversions
                    </p>
                </div>
            </section>
        </>
    );
}
