import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
    const testimonials = [
        {
            text: "“Cursale became my right hand. Today, I close more deals with less effort.”",
            name: "João G.",
            role: "Closer at NuvemData",
        },
        {
            text: "“I didn’t connect a CRM and still the AI gave me great arguments. Impressive.”",
            name: "Larissa M.",
            role: "SDR at FastTrack",
        },
        {
            text: "“Onboarding for new reps dropped from 3 months to 3 weeks.”",
            name: "Felipe A.",
            role: "Head of Sales at ConsultX",
        },
    ];

    return (
        <section className="
            relative py-16 
            bg-gradient-to-br from-cursale-blue-50 to-cursale-blue-100
            bg-[url('/src/assets/images/background-curve.svg')] 
            bg-top bg-no-repeat bg-cover
            overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ amount: 0.3, once: false }}
                    className="text-3xl md:text-4xl font-bold text-cursale-blue-900 mb-10"
                >
                    Who uses it,{" "}
                    <span className="text-cursale-orange-900">
                        never sells without it again
                    </span>
                </motion.h2>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -300, right: 0 }}
                    className="flex gap-6 cursor-grab active:cursor-grabbing"
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 120,
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="
                                min-w-[280px] sm:min-w-[320px] md:min-w-[350px]
                                bg-gradient-to-br from-cursale-blue-900 to-cursale-blue-700
                                rounded-2xl p-6 shadow-lg shadow-cursale-blue-700/40
                                text-left text-cursale-blue-50
                            "
                        >
                            <div className="flex mb-3 text-yellow-400">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                            </div>
                            <p className="text-base md:text-lg italic leading-relaxed mb-4">
                                {item.text}
                            </p>
                            <div className="text-sm md:text-base text-cursale-blue-200">
                                <span className="font-bold text-cursale-blue-50">{item.name}</span>, {item.role}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
