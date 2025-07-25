import { motion } from 'framer-motion';
import cursaleInAction from '@/assets/images/cursale_em_acao.png';
import { Button } from '@/ui/Button';
import { useCursaleInAction } from '@/hooks/useCursaleInAction';

export default function CursaleInAction() {
    const { scrollToCta } = useCursaleInAction();

    return (
        <section
            id="cursale-in-action"
            className="bg-cursale-white py-12 md:py-16"
        >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative flex items-center justify-center md:w-1/2"
                >
                    <img
                        src={cursaleInAction}
                        alt="Cursale in action"
                        className="relative z-10 w-full max-w-sm rounded-lg shadow-lg sm:max-w-md md:max-w-full"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="p-2 text-left md:w-1/2 md:p-4"
                >
                    <p className="md:text-md mb-2 text-sm uppercase tracking-wide text-cursale-orange-900 md:mb-3">
                        Cursale in action
                    </p>
                    <h2 className="mb-6 text-2xl font-bold leading-snug text-cursale-blue-900 sm:text-3xl md:mb-8 md:text-4xl lg:mb-12">
                        You speak. Cursale listens, understands, and gives you the next best step to
                        close.
                    </h2>
                    <div className="text-justify text-base leading-relaxed md:text-lg lg:text-xl">
                        <p className="mb-8 text-cursale-blue-900 md:mb-12 lg:mb-16">
                            While other AIs make generic analyses or only work after the call is
                            recorded,{' '}
                            <span className="font-bold text-cursale-blue-900">
                                Cursale steps in when you need it most:
                            </span>{' '}
                            <span className="font-semibold text-cursale-blue-500">
                                during the real conversation with your client.
                            </span>
                        </p>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="primary"
                            onClick={scrollToCta}
                        >
                            Get started for free
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
