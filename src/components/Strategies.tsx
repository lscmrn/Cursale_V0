import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import heroPerson from "../assets/images/hero.png"; // troque pela imagem que quiser

const data = [
  { name: "Mon", value: 40 },
  { name: "Tue", value: 55 },
  { name: "Wed", value: 30 },
  { name: "Thu", value: 65 },
  { name: "Fri", value: 50 },
];

export default function Strategies() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* ✅ Imagem com Card do Gráfico */}
        <div className="relative md:w-1/2">
          <img
            src={heroPerson}
            alt="Strategies"
            className="rounded-lg shadow-md"
          />

          {/* Card com gráfico */}
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg w-40">
            <p className="text-gray-800 font-bold text-sm">24,96%</p>
            <p className="text-green-500 text-xs mb-2">▲ 7,44%</p>
            <div className="h-16">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Bar
                    dataKey="value"
                    fill="#2563eb" // azul tailwind (blue-600)
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ✅ Texto à direita */}
        <div className="md:w-1/2 text-left">
          <p className="text-xs uppercase text-gray-500 tracking-wider mb-2">
            Strategies that work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Right strategies & implementations
          </h2>
          <p className="text-gray-600 mb-4">
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus in ipsum suscipit.
          </p>
          <p className="text-gray-600 mb-4">
            Nemo ipsam egestas volute turpis egestas ipsum and purus sapien
            ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue
            magna purus erat ligula purus egestas magna cursus undo varius purus
            magnis sapien quaerat.
          </p>
          <a
            href="#more"
            className="text-cursale-blue-900 font-medium hover:underline"
          >
            Friendly with others →
          </a>
        </div>
      </div>
    </section>
  );
}
