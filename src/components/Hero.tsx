import { motion } from "framer-motion";
import heroImage from "../assets/images/hero.png";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <>
      <section
        id="hero-5"
        className="
        relative w-full z-[3]
        bg-gradient-to-br from-slate-50 to-slate-100
        pt-[140px] pb-[80px]
        lg:pt-[130px] lg:pb-[100px]
        md:pt-[80px] md:pb-[80px]
        sm:mb-[50px]
      "
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-3">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full xl:w-6/12 lg:w-6/12 md:w-6/12 px-3"
            >
              <h2
                className="
                text-[2.0625rem] sm:text-[2.5rem]
                md:text-[3.08823rem] lg:text-[3.375rem]
                xl:text-[3.625rem]
                font-bold leading-[1.3]
                mb-4 xl:mb-[25px] lg:mb-[20px] md:mb-[20px]
                font-jakarta text-gray-900
              "
              >
                Your real-time sales copilot that makes every call a winning call.
              </h2>
              <p
                className="
                text-gray-600 text-lg
                mb-6 xl:mb-[30px] lg:mb-[25px] md:mb-[25px]
                pr-0 lg:pr-[10%]
              "
              >
                Sell more with less effort. Cursale supports you on calls, suggests questions, addresses objections, and generates follow-ups that actually close deals.            </p>
              <a
                href="#cta"
                className="
                inline-block px-6 py-3
                rounded-[4px]
                bg-orange-600 text-white
                hover:bg-orange-700
                transition duration-300
              "
              >
                Get started for free
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full xl:w-6/12 lg:w-6/12 md:w-6/12 px-3 mt-10 md:mt-0"
            >
              <div className="relative flex flex-col justify-center">
                <img
                  src={heroImage}
                  alt="hero"
                  className="rounded-2xl shadow-lg max-w-full h-auto"
                />
                <div className="max-w-3xl mx-auto mt-4 text-center text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    The{" "}
                    <span className="font-semibold text-cursale-blue-900">
                      Cursale
                    </span>{" "}
                    accompanies you on calls, suggests questions, addresses
                    objections, and generates follow-ups that actually close
                    deals.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,160L120,160C240,160,480,160,720,138.7C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <div className="flex flex-row justify-center items-center text-6xl bg-white py-12 -mt-[60px]">
        <p className="font-bold text-gray-800">
          <CountUp
            end={50}
            duration={2} />
          %
        </p>
        <p className="text-2xl text-gray-600 text-center ml-2">
          More sales conversions
        </p>
      </div>
    </>
  );
}
