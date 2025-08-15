import { useFeatures } from '@/hooks/useFeatures';
import { useTranslation } from 'react-i18next';
import iconSeller from '@/assets/images/icons/cursale-ai.svg';
import iconManager from '@/assets/images/icons/cursale-task.svg';
import iconOperations from '@/assets/images/icons/cursale-sound.svg';

const heroIconByPersona = {
    seller: iconSeller,
    manager: iconManager,
    operations: iconOperations,
};

const gradientByPersona = {
    seller: 'bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600',
    manager: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500',
    operations: 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500',
};

const textColorByPersona = {
    seller: 'text-purple-700',
    manager: 'text-cyan-700',
    operations: 'text-pink-700',
};

export default function Features() {
    const personas = useFeatures();
    const { t } = useTranslation();

    return (
        <section
            id="features"
            className="w-full bg-gradient-cursale-light py-12 font-poppins"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold text-brand-purple800 sm:text-4xl lg:text-5xl">
                    {t('features.heading')}
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {(['seller', 'manager', 'operations'] as const).map((key) => {
                        const { items, heroIndex } = personas[key];
                        const hero = items[heroIndex];
                        const others = items.filter((_, i) => i !== heroIndex);

                        return (
                            <div
                                key={key}
                                className={`${gradientByPersona[key]} flex flex-col gap-6 rounded-3xl p-6 shadow-xl`}
                            >
                                <h3 className="text-center text-2xl font-bold uppercase tracking-wide text-white drop-shadow-lg">
                                    {t(`features.tabs.${key}`)}
                                </h3>
                                <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 shadow-lg">
                                    <img
                                        src={heroIconByPersona[key]}
                                        alt={`${key} hero icon`}
                                        className="h-20 w-20 object-contain drop-shadow-lg"
                                    />
                                    <div className="text-center">
                                        <h4
                                            className={`text-lg font-semibold ${textColorByPersona[key]}`}
                                        >
                                            {t(hero.titleKey)}
                                        </h4>
                                        <p
                                            className={`mt-2 text-sm opacity-90 ${textColorByPersona[key]}`}
                                        >
                                            {t(hero.descKey)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {others.map((f) => (
                                        <div
                                            key={f.id}
                                            className="rounded-xl bg-white/5 p-4 shadow-sm transition hover:bg-white/10"
                                        >
                                            <h5 className="font-semibold text-white">
                                                {t(f.titleKey)}
                                            </h5>
                                            <p className="text-sm text-white opacity-80">
                                                {t(f.descKey)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
