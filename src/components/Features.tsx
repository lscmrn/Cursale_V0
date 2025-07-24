import {
  FaChartBar,
  FaLightbulb,
  FaBullhorn,
  FaCode,
  FaPaintBrush,
  FaSearchDollar,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <FaChartBar />,
      title: "Real-Time AI in Video Calls",
      description:
        "Live suggestions, during the call, based on the main sales methodologies (SPIN, BANT, Challenger, etc.).",
    },
    {
      icon: <FaLightbulb />,
      title: "Immediate Results",
      description:
        "Give Cursale quick context—such as who the customer is and what you sell—and it immediately starts supporting you with intelligent suggestions.",
    },
    {
      icon: <FaBullhorn />,
      title: "Native Integration with Your CRM",
      description:
        "Connect Cursale to Salesforce, HubSpot, Pipedrive, Zoho, or any other CRM in just a few clicks—and unlock even more personalized suggestions, rich data, and automations that accelerate every sale.",
    },
    {
      icon: <FaCode />,
      title: "Automatic Follow-Ups",
      description:
        "Intelligent generation of emails, summaries, and next steps. All right after the call.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Real-Time Objection Handling",
      description:
        "AI detects barriers and delivers ready-to-use counterarguments at the right time.",
    },
    {
      icon: <FaSearchDollar />,
      title: "Dashboards for Managers",
      description:
        "Clear insight into performance, conversion, pitch adherence, and efficiency by salesperson—in real time.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-gray-900 mb-3">
          Main Features
        </h2>
        <p className="text-gray-600 mb-12">
          Everything the seller needs. Where they need it most.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15, // ✅ efeito cascata
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="
                flex items-start space-x-4
                p-5 rounded-xl bg-gray-50 shadow-sm
                hover:-translate-y-1 hover:shadow-xl
                transition-all duration-300
              "
            >
              <div
                className="
                  w-12 h-12 flex items-center justify-center
                  rounded-lg text-white text-2xl
                  bg-gradient-to-br from-cursale-blue-700 to-cursale-blue-900
                  shadow-md
                "
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
