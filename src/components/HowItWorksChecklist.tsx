import type { FC } from 'react';
import { FiChrome, FiEdit3, FiLink, FiZap } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

type StepDef = {
    id: number;
    Icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
    titleKey: string;
    descKey: string;
};

const STEP_DEFS: StepDef[] = [
    {
        id: 1,
        Icon: FiChrome,
        titleKey: 'howItWorksChecklist.steps.install.title',
        descKey: 'howItWorksChecklist.steps.install.desc',
    },
    {
        id: 2,
        Icon: FiEdit3,
        titleKey: 'howItWorksChecklist.steps.briefing.title',
        descKey: 'howItWorksChecklist.steps.briefing.desc',
    },
    {
        id: 3,
        Icon: FiLink,
        titleKey: 'howItWorksChecklist.steps.crm.title',
        descKey: 'howItWorksChecklist.steps.crm.desc',
    },
    {
        id: 4,
        Icon: FiZap,
        titleKey: 'howItWorksChecklist.steps.sell.title',
        descKey: 'howItWorksChecklist.steps.sell.desc',
    },
];

const HowItWorksChecklist: FC = () => {
    const { t } = useTranslation();
    return (
        <ol className="grid w-full max-w-5xl grid-cols-1 gap-6 font-poppins sm:grid-cols-2 lg:grid-cols-4">
            {STEP_DEFS.map(({ id, titleKey, descKey, Icon }) => (
                <li
                    key={id}
                    className="group rounded-3xl bg-white p-5 text-left shadow-sm ring-1 ring-brand-blue/20 transition hover:shadow-lg hover:shadow-brand-purple/30"
                >
                    <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-ia-mirror font-bold text-white">
                            {id}
                        </div>
                        <Icon
                            aria-hidden
                            className="h-6 w-6 text-brand-purple opacity-90 transition group-hover:opacity-100"
                        />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug text-brand-body900">
                        {t(titleKey)}
                    </h3>
                    <p className="mt-2 text-sm text-brand-body900/85">{t(descKey)}</p>
                </li>
            ))}
        </ol>
    );
};

export default HowItWorksChecklist;
