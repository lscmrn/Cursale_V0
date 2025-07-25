import { motion } from 'framer-motion';
import { Button } from '@/ui/Button';
import { useSecondaryCTA } from '@/hooks/useSecondaryCTA';

export default function SecondaryCTA() {
    const { scrollToSection } = useSecondaryCTA();

    return (
        <section
            id="secondary-cta"
            className="relative w-full py-[100px] md:py-[120px]"
        >
            <div className="mx-auto max-w-7xl px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 text-3xl font-bold text-cursale-orange-500 md:text-4xl"
                >
                    With or without CRM,{' '}
                    <span className="text-cursale-blue-900">you sell more with Cursale</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-8 text-base leading-relaxed text-cursale-orange-900 md:text-lg"
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
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center justify-center gap-4 p-16 sm:flex-row"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="primary"
                            onClick={() => scrollToSection('signup')}
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
                        >
                            See Cursale in action
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
