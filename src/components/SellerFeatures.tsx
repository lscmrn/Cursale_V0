import iconIA from "../assets/images/icon_IA.webp";
import iconNormal from "../assets/images/icon_normal.webp";
import iconSound from "../assets/images/icon_sound.webp";
import iconCheck from "../assets/images/icon_check.webp";

export default function SellerFeatures() {
  const features = [
    {
      icon: iconIA,
      title: "IA em tempo real nas videochamadas",
      description:
        "Sugestões ao vivo, durante a call, baseadas nas principais metodologias de vendas como SPIN, BANT e Challenger. Disponível em 89 línguas.",
    },
    {
      icon: iconCheck,
      title: "Resultados Imediatos",
      description:
        "Dê ao Cursale um contexto rápido, como quem é o cliente e o que você vende. Ele já começa a te apoiar com sugestões inteligentes.",
    },
    {
      icon: iconSound,
      title: "Contorno de objeções em tempo real",
      description:
        "A IA detecta barreiras e entrega contra-argumentos prontos para usar, no momento exato.",
    },
    {
      icon: iconNormal,
      title: "Integração nativa com seu CRM",
      description:
        "Conecte o Cursale ao Salesforce, HubSpot, Pipedrive, Zoho ou qualquer outro CRM em poucos cliques e desbloqueie sugestões ainda mais personalizadas, dados ricos e automações que aceleram cada venda.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* ✅ Título */}
        <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-gray-900 mb-2">
          Tudo que um vendedor precisa.
        </h2>
        <p className="text-gray-600 mb-10">Onde ele mais precisa.</p>

        {/* ✅ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
