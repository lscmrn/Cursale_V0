import iconIA from "../assets/images/icon_IA.webp";
import iconCheck from "../assets/images/icon-check.webp";
import iconNormal from "../assets/images/icon_normal.webp";
import iconSound from "../assets/images/icon_sound.webp";
import iconMoney from "../assets/images/icon_money.webp";
import iconScared from "../assets/images/icon_assustado.webp";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: iconIA,
      title: "Real-Time AI in Video Calls",
      description:
        "Live suggestions, during the call, based on the main sales methodologies (SPIN, BANT, Challenger, etc.).",
    },
    {
      icon: iconCheck,
      title: "Immediate Results",
      description:
        "Give Cursale quick context—such as who the customer is and what you sell—and it immediately starts supporting you with intelligent suggestions.",
    },
    {
      icon: iconNormal,
      title: "Native Integration with Your CRM",
      description:
        "Connect Cursale to Salesforce, HubSpot, Pipedrive, Zoho, or any other CRM in just a few clicks—and unlock even more personalized suggestions, rich data, and automations that accelerate every sale.",
    },
    {
      icon: iconSound,
      title: "Automatic Follow-Ups",
      description:
        "Intelligent generation of emails, summaries, and next steps. All right after the call.",
    },
    {
      icon: iconScared,
      title: "Real-Time Objection Handling",
      description:
        "AI detects barriers and delivers ready-to-use counterarguments at the right time.",
    },
    {
      icon: iconMoney,
      title: "Dashboards for Managers",
      description:
        "Clear insight into performance, conversion, pitch adherence, and efficiency by salesperson—in real time.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-cursale-blue-900 mb-3">
          Main Features
        </h2>
        <p className="text-cursale-blue-700 text-2xl mb-12">
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
                flex items-center space-x-3
                p-2 rounded-2xl bg-gradient-to-br from-cursale-blue-900 to-cursale-blue-500
                shadow-lg shadow-cursale-blue-100/50 hover:shadow-cursale-blue-300/50
                hover:-translate-y-1 hover:shadow-xl
                transition-all duration-300
              "
            >
              <div
                className="
                  w-36 h-36 flex items-center justify-center
                  bg-transparent
                "
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-36 h-28 flex-shrink-0"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cursale-blue-100 mb-1">
                  {feature.title}
                </h3>
                <p className="text-cursale-blue-50 text-sm font-rubik leading-relaxed">
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
