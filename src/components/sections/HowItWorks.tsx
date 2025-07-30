import { motion } from 'framer-motion';
import { useHowItWorks } from '@/hooks/useHowItWorks';
import SalesAi from '@/assets/images/sales-ai.png';
import HowItWorksImage from '@/assets/images/how-works.png';
export default function HowItWorks() {
    const { steps } = useHowItWorks();

    return (
        <section
            id="how-it-works"
            className="flex w-full flex-col lg:flex-row"
        >
            {/* Esquerda: texto e balões */}
            <div className="flex w-full items-center justify-center lg:w-1/2">
                <div className="max-w-md">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        The Sales AI that thinks in frameworks <br />
                        <span className="text-ia.cyberpunk.magenta">and feels in real time.</span>
                    </h2>
                    {/* Balões/Imagem ou texto adicional pode entrar aqui */}
                    <img
                        src={SalesAi}
                        alt="Left content"
                        className="mt-6 rounded-lg"
                    />
                </div>
            </div>

            {/* Direita: gradiente + passos */}
            <div className="flex w-full flex-col items-center justify-center bg-gradient-ia-how-it-works px-6 py-14 text-white lg:w-11/12">
                <h3 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
                    Comece agora!
                </h3>
                <div className="flex flex-row">
                    <div className="flex max-w-md flex-col items-center gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="text-center"
                            >
                                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[1.4rem] font-bold text-[#6C00FF]">
                                    {index + 1}
                                </div>
                                <p className="text-base leading-relaxed sm:text-lg">{step.title}</p>
                            </div>
                        ))}
                    </div>

                    <img
                        src={HowItWorksImage}
                        alt="How it works UI"
                        className="w-full max-w-sm rounded-xl object-contain shadow-lg sm:max-w-md md:max-w-lg"
                    />
                </div>
            </div>
        </section>
    );
}
