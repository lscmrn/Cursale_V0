import heroImage from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section
      id="hero-5"
      className="
        relative w-full
        pt-[70px] pb-0 mb-[50px]
        text-center bg-gray-50
      "
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center px-4 md:text-left">
        {/* ✅ Texto */}
        <div className="w-full md:w-6/12 mb-8 md:mb-0 hero-5-txt">
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold leading-snug mb-3 text-gray-900">
            Your real-time sales copilot that makes every call a winning call.
          </h2>
          <p className="text-lg text-gray-600 mb-5 pr-0">
            Venda mais com menos esforço.
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

        {/* ✅ Imagem */}
        <div className="w-full md:w-6/12 flex justify-center">
          <img
            src={heroImage}
            alt="Cursale Hero"
            className="
              max-w-full h-auto
              mt-[35px] -mb-[50px]
              md:mt-[35px] md:-mb-[50px]
            "
          />
        </div>
      </div>

      {/* ✅ Texto adicional abaixo */}
      <div className="max-w-4xl mx-auto mt-10 text-center px-4">
        <p className="text-gray-700 text-lg leading-relaxed">
          O <span className="font-semibold text-cursale-blue-900">Cursale</span>{" "}
          acompanha você em calls, sugere perguntas, contorna objeções e gera
          follow-ups que realmente fecham negócio.
        </p>
        <p className="text-gray-900 font-bold text-xl mt-4">
          50%{" "}
          <span className="font-normal text-gray-700">
            Mais conversões de vendas.
          </span>
        </p>
      </div>
    </section>
  );
}
