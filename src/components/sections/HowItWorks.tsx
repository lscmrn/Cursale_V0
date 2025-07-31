import HowItWorksChecklist from '../HowItWorksChecklist'; // certifique-se do caminho correto
import SalesAIImage from '@/assets/images/sales-ai.png'; // sua imagem da parte branca

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="flex min-h-screen w-full flex-col lg:flex-row"
        >
            {/* ESQUERDA - 30% */}
            <div className="flex w-full flex-col items-start justify-center bg-white px-6 py-10 lg:w-[30%]">
                <h2 className="text-2xl font-bold leading-snug text-[#1c0039] sm:text-3xl md:text-4xl">
                    The Sales AI that thinks in frameworks <br />
                    <span className="text-[#6A00E6]">and feels in real time.</span>
                </h2>

                <img
                    src={SalesAIImage}
                    alt="AI Dashboard Demo"
                    className="mt-8 w-full max-w-xs rounded-lg object-contain shadow-md"
                />
            </div>

            {/* DIREITA - 70% */}
            <div className="relative w-full bg-gradient-check px-6 py-16 text-white lg:w-[70%]">
                <HowItWorksChecklist />
            </div>
        </section>
    );
}
