import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const barData = [
  { name: "Mon", value: 38.4 },
  { name: "Tue", value: 50 },
  { name: "Wed", value: 42 },
  { name: "Thu", value: 65 },
  { name: "Fri", value: 48 },
];

const pieData = [
  { name: "Completed", value: 76 },
  { name: "Remaining", value: 24 },
];

const COLORS = ["#F59E0B", "#E5E7EB"]; // amarelo e cinza claro

export default function CompleteSolutions() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* ✅ Gráficos à esquerda */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {/* Gráfico de barras */}
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-gray-800 font-semibold text-sm mb-2">+38,4%</p>
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Bar
                    dataKey="value"
                    fill="#3B82F6" // azul (blue-500)
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gauge simples (fake com gráfico de pizza) */}
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-gray-800 font-semibold text-sm mb-2">74%</p>
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={30}
                    outerRadius={40}
                    startAngle={180}
                    endAngle={0}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pizza 76% */}
          <div className="bg-white p-4 rounded-lg shadow text-center col-span-2">
            <p className="text-gray-800 font-semibold text-sm mb-2">76%</p>
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={30}
                    outerRadius={40}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ✅ Texto à direita */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            The Complete Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            Ligula risus auctor tempus magna feugiat lacinia.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="text-green-600 text-lg">✅</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Built-in automation
                </h3>
                <p className="text-gray-600 text-sm">
                  Quaerat sodales sapien blandit purus primis purus ipsum
                  cubilia laoreet augue luctus and magna dolor luctus egestas.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-yellow-500 text-lg">⚡</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Automatic workflows
                </h3>
                <p className="text-gray-600 text-sm">
                  Quaerat sodales sapien blandit purus primis purus ipsum
                  cubilia laoreet augue luctus and magna dolor luctus egestas.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-blue-600 text-lg">📊</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Real-time analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Quaerat sodales sapien blandit purus primis purus ipsum
                  cubilia laoreet augue luctus and magna dolor luctus egestas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
