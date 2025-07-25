import { motion } from "framer-motion";
import cursaleInAction from "../assets/images/cursale_em_acao.png";

export default function CursaleInAction() {
  return (
    <section className="py-12 md:py-16 bg-cursale-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12 px-4">
        {/* ✅ Imagem com animação */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative md:w-1/2 flex justify-center items-center"
        >
          <img
            src={cursaleInAction}
            alt="Cursale in action"
            className="
              relative z-10 rounded-lg shadow-lg
              w-full max-w-sm sm:max-w-md md:max-w-full
            "
          />
        </motion.div>

        {/* ✅ Texto com animação */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-left p-2 md:p-4"
        >
          <p className="text-sm md:text-md uppercase text-cursale-orange-900 tracking-wide mb-2 md:mb-3">
            Cursale in action
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cursale-blue-900 leading-snug mb-6 md:mb-8 lg:mb-12">
            You speak. Cursale listens, understands, and gives you the next best step to close.
          </h2>
          <div className="text-justify text-base md:text-lg lg:text-xl leading-relaxed">
            <p className="text-cursale-blue-900 mb-8 md:mb-12 lg:mb-16">
              While other AIs make generic analyses or only work after the call is recorded,{" "}
              <span className="font-bold text-cursale-blue-900">
                Cursale steps in when you need it most:
              </span>{" "}
              <span className="text-cursale-blue-500 font-semibold">
                during the real conversation with your client.
              </span>
            </p>
          </div>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-block bg-cursale-orange-900 text-white
              px-5 py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-md font-medium
              hover:bg-cursale-orange-300 transition duration-300 text-sm md:text-base lg:text-lg
            "
          >
            Get started for free
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
