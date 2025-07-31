import { motion } from 'framer-motion';
import cursaleInAction from '@/assets/images/cursale_em_acao.png';
import { Button } from '@/ui/Button';
import { useCursaleInAction } from '@/hooks/useCursaleInAction';
export default function CursaleInAction() {
    const { scrollToCta } = useCursaleInAction();
    return (
        <section
            id="cursale-in-action"
            className="relative w-full py-10 sm:py-14 md:py-20 lg:py-28"
        >
            <div className="container flex flex-col items-center gap-8 md:flex-row md:gap-10 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative flex w-full justify-center md:w-1/2"
                >
                    <img
                        src={cursaleInAction}
                        alt="Cursale in action"
                        className="relative z-10 w-full max-w-[280px] rounded-lg object-contain shadow-lg sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px] xl:max-w-[600px]"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full text-left md:w-1/2"
                >
                    <p className="mb-2 text-[0.8rem] uppercase tracking-wide text-ia-cyberpunk-neonPurple sm:text-sm md:mb-3 md:text-base lg:text-lg">
                        Cursale in action
                    </p>
                    <h2 className="mb-4 text-xl font-bold leading-snug text-ia-cyberpunk-darkBlue sm:mb-6 sm:text-2xl md:mb-8 md:text-3xl lg:mb-10 lg:text-4xl xl:text-5xl">
                        You speak. Cursale listens, understands, and gives you the next best step to
                        close.
                    </h2>
                    <p className="mb-6 text-[0.9rem] leading-relaxed text-ia-cyberpunk-darkBlue sm:mb-8 sm:text-base md:mb-10 md:text-lg lg:mb-12 lg:text-xl">
                        While other AIs make generic analyses or only work after the call is
                        recorded,{' '}
                        <span className="font-bold text-ia-cyberpunk-neonMagenta">
                            Cursale steps in when you need it most:
                        </span>{' '}
                        <span className="text-ia-cyberpunk font-semibold">
                            during the real conversation with your client.
                        </span>
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="tertiary"
                            onClick={scrollToCta}
                            className="text-xs sm:text-sm md:text-base lg:text-lg"
                        >
                            Get started for free
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
