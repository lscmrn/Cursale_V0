import { motion } from "framer-motion";

export default function SecondaryCTA() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-cursale-blue-900 to-cursale-blue-700 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* ✅ Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-cursale-blue-50 mb-6"
        >
          With or without CRM, <span className="text-cursale-orange-900">you sell more with Cursale</span>
        </motion.h2>

        {/* ✅ Texto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cursale-blue-100 text-base md:text-lg mb-8 leading-relaxed"
        >
          Get AI-powered help based on your data — or simply tell us who the client is and what you’re selling.{" "}
          <span className="font-semibold text-cursale-blue-50">Cursale adapts and acts in seconds.</span>
        </motion.p>

        {/* ✅ Botões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Botão primário */}
          <motion.a
            href="#signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              bg-cursale-orange-900 text-white 
              px-6 py-3 rounded-md font-semibold
              hover:bg-cursale-orange-300 transition text-base md:text-lg
              shadow-md shadow-cursale-orange-300/30
            "
          >
            Start free now
          </motion.a>

          {/* Botão secundário */}
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="
              border border-cursale-blue-100 text-cursale-blue-50 
              px-6 py-3 rounded-md font-medium
              hover:text-white hover:border-white transition text-base md:text-lg
            "
          >
            See Cursale in action
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
