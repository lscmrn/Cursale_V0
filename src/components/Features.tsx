import { FaChartBar, FaLightbulb, FaBullhorn, FaCode, FaPaintBrush, FaSearchDollar } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaChartBar className="text-cursale-blue-900 text-3xl" />,
      title: "Market Research",
      description:
        "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    },
    {
      icon: <FaLightbulb className="text-cursale-blue-900 text-3xl" />,
      title: "User Experience",
      description:
        "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    },
    {
      icon: <FaBullhorn className="text-cursale-blue-900 text-3xl" />,
      title: "Digital Marketing",
      description:
        "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    },
    {
      icon: <FaCode className="text-cursale-blue-900 text-3xl" />,
      title: "Web Development",
      description:
        "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    },
    {
      icon: <FaPaintBrush className="text-cursale-blue-900 text-3xl" />,
      title: "Brand Design Identity",
      description:
        "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    },
    {
      icon: <FaSearchDollar className="text-cursale-blue-900 text-3xl" />,
      title: "SEO & SMM Services",
      description:
        "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* ✅ Título */}
        <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-gray-900 mb-3">
          We make your business gain more revenue at a glance
        </h2>
        <p className="text-gray-600 mb-10">
          Ligula risus auctor tempus magna feugiat lacinia.
        </p>

        {/* ✅ Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{feature.icon}</div>
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
