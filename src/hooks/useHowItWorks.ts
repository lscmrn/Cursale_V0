import { IconType } from 'react-icons';
import { FaUserPlus, FaChrome, FaDatabase, FaRegClipboard, FaRobot } from 'react-icons/fa';

type Step = {
    icon: IconType;
    title: string;
};

export function useHowItWorks() {
    const steps: Step[] = [
        { icon: FaUserPlus, title: 'Create your free account' },
        { icon: FaChrome, title: 'Install the Chrome extension' },
        { icon: FaDatabase, title: '(Optional) Connect your CRM' },
        { icon: FaRegClipboard, title: '(Or) Give a quick briefing' },
        { icon: FaRobot, title: 'Sell with real-time AI support' },
    ];

    return { steps };
}
