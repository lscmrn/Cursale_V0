import { motion, AnimatePresence } from "framer-motion";
import { FaUserPlus, FaChrome, FaDatabase, FaRegClipboard, FaRobot, FaChartLine } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    { icon: <FaUserPlus />, title: "Create your free account" },
    { icon: <FaChrome />, title: "Install the Chrome extension" },
    { icon: <FaDatabase />, title: "(Optional) Connect your CRM" },
    { icon: <FaRegClipboard />, title: "(Or) Give a quick briefing" },
    { icon: <FaRobot />, title: "Sell with real-time AI support" },
  ];

  return (
    <section className="py-16 bg-cursale-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* ✅ Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-4xl font-bold text-cursale-blue-900 mb-2"
        >
          Sell smarter. <span className="text-cursale-orange-900">Less improvisation.</span>
        </motion.h2>
        <p className="text-cursale-blue-700 text-md md:text-lg mb-10">
          Getting started is simple. Fast results, no friction.
        </p>

        {/* ✅ Grid com centralização dos últimos 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                viewport={{ amount: 0.3, once: false }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.07 }}
                className={`
                  w-full max-w-sm mx-auto
                  bg-gradient-to-br from-cursale-blue-900 to-cursale-blue-700
                  rounded-2xl shadow-lg shadow-cursale-blue-500/40
                  p-6 flex flex-col items-center text-center
                  text-cursale-blue-50
                  ${index === 3 ? "lg:col-start-1 ml-36" : ""} 
                  ${index === 4 ? "lg:col-start-3 -ml-36" : ""} 
                `}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-cursale-blue-200 text-4xl mb-4"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-cursale-blue-100 rounded-xl p-6 max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <FaChartLine className="text-cursale-blue-700 text-4xl" />
            <p className="text-cursale-blue-900 text-lg md:text-xl leading-relaxed">
              Up to <span className="font-bold text-cursale-orange-900">+50% conversion</span>.  
              Training in minutes. Immediate ROI.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
