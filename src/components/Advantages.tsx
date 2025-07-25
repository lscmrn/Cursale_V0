import { motion } from "framer-motion";
import { FaChartLine, FaUserShield, FaSmile, FaTachometerAlt, FaLightbulb, FaRobot } from "react-icons/fa";

export default function Advantages() {
  const items = [
    { icon: <FaChartLine />, text: "+50% average conversion increase" },
    { icon: <FaUserShield />, text: "+85% retention after the first month" },
    { icon: <FaSmile />, text: "NPS > 60" },
    { icon: <FaTachometerAlt />, text: "Real-time dashboards for leaders" },
    { icon: <FaLightbulb />, text: "Arguments based on validated frameworks" },
    { icon: <FaRobot />, text: "AI that learns from each seller's routine" },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-cursale-blue-50 to-cursale-blue-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* ✅ Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-cursale-blue-900 mb-12"
        >
          Real <span className="text-cursale-orange-900">advantages</span> for your team
        </motion.h2>

        {/* ✅ Grid de vantagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.3, once: false }}
              transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.05 }}
              className="
                bg-gradient-to-br from-cursale-blue-900 to-cursale-blue-700
                rounded-2xl shadow-lg shadow-cursale-blue-500/30
                p-6 flex flex-col items-center text-center text-cursale-blue-50
              "
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="text-cursale-blue-200 text-4xl mb-4"
              >
                {item.icon}
              </motion.div>
              <p className="text-base md:text-lg font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
