import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useTestimonials } from '@/hooks/useTestimonials';
export default function Testimonials() {
    const { testimonials } = useTestimonials();
    return (
        <section
            id="testimonials"
            className="relative w-full py-10 sm:py-14 md:py-20 lg:py-28"
        >
            <div className="container text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-6 text-2xl font-bold text-cursale-orange-500 sm:mb-8 sm:text-3xl md:mb-10 md:text-4xl lg:text-5xl"
                >
                    Who uses it,{' '}
                    <span className="text-cursale-blue-900">never sells without it again</span>
                </motion.h2>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -400, right: 0 }}
                    className="flex cursor-grab gap-4 overflow-x-auto p-4 active:cursor-grabbing sm:gap-6 sm:p-6 md:p-8 lg:p-10"
                >
                    <div className="flex gap-4 sm:gap-6">
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
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                className="min-w-[240px] rounded-2xl bg-gradient-to-br from-cursale-blue-900 to-cursale-blue-700 p-4 text-left text-cursale-blue-50 shadow-lg shadow-cursale-blue-700/40 sm:min-w-[280px] sm:p-5 md:min-w-[320px] md:p-6 lg:min-w-[360px]"
                            >
                                <div className="mb-2 flex text-sm text-yellow-400 sm:text-base lg:text-lg">
                                    {Array(5)
                                        .fill(0)
                                        .map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                </div>
                                <p className="mb-3 text-[0.8rem] italic leading-relaxed sm:text-base md:text-lg">
                                    {item.text}
                                </p>
                                <div className="text-[0.7rem] text-cursale-blue-200 sm:text-sm md:text-base">
                                    <span className="font-bold text-cursale-blue-50">
                                        {item.name}
                                    </span>
                                    , {item.role}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
