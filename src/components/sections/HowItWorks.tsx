import type { FC } from 'react';
import HowItWorksChecklist from '@/components/HowItWorksChecklist';
import { useTranslation } from 'react-i18next';

const HowItWorks: FC = () => {
    const { t } = useTranslation();

    return (
        <section
            id="how-it-works"
            className="w-full bg-gradient-cursale-light py-8 font-poppins sm:py-12 md:py-16 lg:py-20"
            aria-labelledby="howitworks-heading"
        >
            <div className="container mx-auto max-w-7xl px-6">
                <h1
                    id="howitworks-heading"
                    className="text-center text-3xl font-extrabold leading-tight text-brand-body900 sm:text-4xl md:text-5xl"
                >
                    {t('howItWorks.heading')}{' '}
                    <span className="bg-gradient-to-r from-brand-purple800 to-brand-blue bg-clip-text text-transparent">
                        {t('howItWorks.title.thinksIn')}
                    </span>{' '}
                    <span className="bg-gradient-to-r from-ia-futurist-purple via-ia-cyberpunk-neonPurple to-ia-futurist-magenta bg-clip-text text-transparent">
                        {t('howItWorks.title.frameworks')}
                    </span>{' '}
                    {t('howItWorks.title.and')}{' '}
                    <span className="bg-gradient-to-r from-cursale-blue-900 to-ia-classic-deep bg-clip-text text-transparent">
                        {t('howItWorks.title.feelsInReal')}
                    </span>{' '}
                    <span className="bg-gradient-to-r from-ia-futurist-purple to-ia-cyberpunk-neonBlue bg-clip-text text-transparent">
                        {t('howItWorks.title.time')}
                    </span>
                </h1>

                <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-brand-body900/85">
                    {t('howItWorks.subcopy')}
                </p>

                <h2 className="mt-10 text-center text-2xl font-bold text-brand-purple sm:text-3xl">
                    {t('howItWorks.ctaTitle')}
                </h2>

                <div className="mt-8 flex w-full justify-center">
                    <HowItWorksChecklist />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
