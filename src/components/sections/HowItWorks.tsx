import SalesAIImage from '@/assets/images/sales-ai.png'; // substitua pelo novo JPG se necessário
import HowItWorksChecklist from '../HowItWorksChecklist';

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="flex min-h-screen w-full flex-col lg:flex-row"
        >
            {/* ESQUERDA - 50% */}
            <div className="flex w-full flex-col justify-center bg-white px-6 py-10 lg:w-[50%]">
                <h2 className="text-2xl font-bold leading-snug text-ia-cyberpunk-darkBlue sm:text-3xl md:text-4xl">
                    The Sales AI that thinks in <br />
                    <span className="text-ia-cyberpunk-neonPurple">frameworks</span> and feels in{' '}
                    <br />
                    <span className="text-black">real time.</span>
                </h2>

                <img
                    src={SalesAIImage}
                    alt="AI Live Demo"
                    className="mt-8 w-full max-w-full object-contain"
                />
            </div>

            {/* DIREITA - 50% */}
            <div className="relative w-full bg-gradient-ia-landing-harmony px-6 py-16 text-white lg:w-[50%]">
                <HowItWorksChecklist />
            </div>
        </section>
    );
}
