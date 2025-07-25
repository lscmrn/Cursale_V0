import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need to integrate with my CRM to use Cursale?",
      answer:
        "No. Integration is optional. A simple briefing already activates the AI with contextual suggestions.",
    },
    {
      question: "Which CRMs are compatible?",
      answer:
        "Salesforce, HubSpot, Pipedrive, Zoho, and any CRM with an open API.",
    },
    {
      question: "Does Cursale work in real time?",
      answer:
        "Yes. Suggestions appear during the call, in real time.",
    },
    {
      question: "Is it secure?",
      answer:
        "100%. Everything is encrypted, processed locally, and fully compliant with GDPR and LGPD.",
    },
    {
      question: "Do I need to train the AI with lots of data?",
      answer:
        "No. Just give basic context about the client and the product. Cursale understands and acts.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-cursale-blue-50 to-cursale-blue-100">
      <div className="max-w-3xl mx-auto px-4">
        {/* ✅ Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cursale-blue-900 mb-10">
          Frequently Asked <span className="text-cursale-orange-900">Questions</span>
        </h2>

        {/* ✅ Lista de FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Pergunta */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className="font-semibold text-cursale-blue-900 text-base md:text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-cursale-blue-700"
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              {/* Resposta */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 pb-4 text-cursale-blue-700 text-sm md:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
