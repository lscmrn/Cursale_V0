import CursaleMascot from '@/assets/images/icons/cursale-task.svg';

export default function HowItWorksChecklist() {
    const steps = [
        {
            number: '1',
            text: 'Install the Chrome extension and create your account',
        },
        {
            number: '2',
            text: (
                <>
                    Get ready to sell! <br />
                    <span className="text-sm font-normal ">
                        Give a simple briefing: who is the customer, what do you sell
                        <br />
                        (Optional)
                    </span>
                </>
            ),
        },
        {
            number: '3',
            text: (
                <>
                    Supercharge Cursale by connecting your CRM
                    <br />
                    <span className="text-sm font-normal">(Optional)</span>
                </>
            ),
        },
        {
            number: '4',
            text: 'Sell with real-time AI support',
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-10 text-center text-ia-cyberpunk-darkBlue">
            <h2 className="text-2xl font-bold text-ia-futurist-magenta sm:text-3xl md:text-4xl">
                Get started now!
            </h2>

            <div className="grid w-full max-w-3xl grid-cols-1 gap-10 sm:grid-cols-2">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-3"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-white">
                            {step.number}
                        </div>
                        <p className="text-lg font-semibold leading-snug text-ia-cyberpunk-darkBlue">
                            {step.text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <img
                    src={CursaleMascot}
                    alt="Cursale Mascot"
                    className="w-[160px] sm:w-[180px] md:w-[200px]"
                />
            </div>
        </div>
    );
}
