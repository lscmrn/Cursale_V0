import { motion } from 'framer-motion';
import { Button } from '@/ui/Button';
import { useSecondaryCTA } from '@/hooks/useSecondaryCTA';
export default function SecondaryCTA() {
    const { scrollToSection } = useSecondaryCTA();
    return (
        <section
            id="secondary-cta"
            className="relative w-full py-10 sm:py-14 md:py-20 lg:py-28"
        >
            <div className="container text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 text-2xl font-bold text-cursale-orange-500 sm:mb-6 sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl"
                >
                    With or without CRM,{' '}
                    <span className="text-cursale-blue-900">you sell more with Cursale</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mb-6 max-w-xl text-[0.9rem] leading-relaxed text-cursale-orange-900 sm:mb-8 sm:max-w-2xl sm:text-base md:mb-10 md:max-w-3xl md:text-lg lg:text-xl"
                >
                    Get AI-powered help based on your data — or simply tell us who the client is and
                    what you’re selling.{' '}
                    <span className="font-semibold text-cursale-orange-400">
                        Cursale adapts and acts in seconds.
                    </span>
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:gap-6 lg:gap-8"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="primary"
                            onClick={() => scrollToSection('signup')}
                            className="px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:text-lg"
                        >
                            Start free now
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="outline"
                            onClick={() => scrollToSection('demo')}
                            className="px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:text-lg"
                        >
                            See Cursale in action
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
