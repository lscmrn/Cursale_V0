import personImage from "../assets/images/hero.png"; // Troque para sua imagem real
import logoCursale from "../assets/images/logo_icon.webp"; // Logo do cursale (a coruja)

export default function CursaleInAction() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* ✅ Imagem e elementos sobrepostos */}
        <div className="relative md:w-1/2 flex justify-center">
          {/* Fundo preto (opcional) */}
          <div className="absolute inset-0 bg-black rounded-lg"></div>

          {/* Imagem da pessoa */}
          <img
            src={personImage}
            alt="Cursale em ação"
            className="relative z-10 rounded-lg shadow-lg"
          />

          {/* Logo Cursale no topo */}
          <img
            src={logoCursale}
            alt="Cursale Logo"
            className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 z-20"
          />

          {/* Etiquetas SPIN / BANT / CHALLENGER */}
          <div className="absolute top-28 right-6 flex flex-col gap-4 z-20">
            <div className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full font-medium shadow">
              SPIN
            </div>
            <div className="bg-pink-600 text-white text-sm px-3 py-1 rounded-full font-medium shadow">
              BANT
            </div>
            <div className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-medium shadow">
              CHALLENGER
            </div>
          </div>
        </div>

        {/* ✅ Texto à direita */}
        <div className="md:w-1/2 text-left">
          <p className="text-sm uppercase text-gray-500 tracking-wide mb-2">
            Cursale em ação
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Você fala. O Cursale escuta, entende e te entrega o próximo melhor
            passo para fechar.
          </h2>
          <p className="text-gray-600 mb-4">
            Enquanto outras IAs fazem análises genéricas ou só funcionam após a
            gravação da call, o{" "}
            <span className="font-bold text-gray-900">Cursale entra em cena</span>{" "}
            quando você mais precisa:{" "}
            <span className="text-cursale-blue-900 font-semibold">
              durante a conversa real com seu cliente.
            </span>
          </p>
          <a
            href="#cta"
            className="
              inline-block bg-red-500 text-white
              px-6 py-3 rounded font-medium
              hover:bg-red-600 transition duration-300
            "
          >
            Get started for free
          </a>
        </div>
      </div>
    </section>
  );
}
