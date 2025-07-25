import { motion } from 'framer-motion';
import { Button } from '@/ui/Button';
import { useSecondaryCTA } from '@/hooks/useSecondaryCTA';

export default function SecondaryCTA() {
    const { scrollToSection } = useSecondaryCTA();

    return (
        <section
            id="secondary-cta"
            className="py-16"
        >
            <div className="mx-auto max-w-4xl px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 text-3xl font-bold text-cursale-blue-50 md:text-4xl"
                >
                    With or without CRM,{' '}
                    <span className="text-cursale-orange-900">you sell more with Cursale</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 text-base leading-relaxed text-cursale-blue-100 md:text-lg"
                >
                    Get AI-powered help based on your data — or simply tell us who the client is and
                    what you’re selling.{' '}
                    <span className="font-semibold text-cursale-blue-50">
                        Cursale adapts and acts in seconds.
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
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
