import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useTestimonials } from '@/hooks/useTestimonials';

export default function Testimonials() {
    const { testimonials } = useTestimonials();

    return (
        <section
            id="testimonials"
            className="py-16"
        >
            <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="mb-10 text-3xl font-bold text-cursale-blue-900 md:text-4xl"
                >
                    Who uses it,{' '}
                    <span className="text-cursale-orange-900">never sells without it again</span>
                </motion.h2>

                <motion.div
                    drag="x"
                    dragConstraints={{ left: -300, right: 0 }}
                    className="flex cursor-grab gap-6 active:cursor-grabbing"
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                type: 'spring',
                                stiffness: 120,
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            className="min-w-[280px] rounded-2xl bg-gradient-to-br from-cursale-blue-900 
                         to-cursale-blue-700 p-6 text-left text-cursale-blue-50 shadow-lg 
                         shadow-cursale-blue-700/40 sm:min-w-[320px] md:min-w-[350px]"
                        >
                            <div className="mb-3 flex text-yellow-400">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                            </div>
                            <p className="mb-4 text-base italic leading-relaxed md:text-lg">
                                {item.text}
                            </p>
                            <div className="text-sm text-cursale-blue-200 md:text-base">
                                <span className="font-bold text-cursale-blue-50">{item.name}</span>,{' '}
                                {item.role}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
