import {
    FaChartLine,
    FaUserShield,
    FaSmile,
    FaTachometerAlt,
    FaLightbulb,
    FaRobot,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

type Advantage = {
    icon: IconType;
    text: string;
};

export function useAdvantages() {
    const items: Advantage[] = [
        { icon: FaChartLine, text: '+50% average conversion increase' },
        { icon: FaUserShield, text: '+85% retention after the first month' },
        { icon: FaSmile, text: 'NPS > 60' },
        { icon: FaTachometerAlt, text: 'Real-time dashboards for leaders' },
        { icon: FaLightbulb, text: 'Arguments based on validated frameworks' },
        { icon: FaRobot, text: "AI that learns from each seller's routine" },
    ];

    return { items };
}
