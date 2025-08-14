import { IconType } from 'react-icons';
import { FaUserPlus, FaChrome, FaDatabase, FaRegClipboard, FaRobot } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

type Step = { icon: IconType; title: string };

export function useHowItWorks() {
    const { t } = useTranslation();
    const steps: Step[] = [
        { icon: FaUserPlus, title: t('howItWorks.steps.createAccount') },
        { icon: FaChrome, title: t('howItWorks.steps.installExtension') },
        { icon: FaDatabase, title: t('howItWorks.steps.connectCRMOpt') },
        { icon: FaRegClipboard, title: t('howItWorks.steps.quickBriefing') },
        { icon: FaRobot, title: t('howItWorks.steps.sellWithAI') },
    ];
    return { steps };
}
