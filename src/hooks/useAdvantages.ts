import {
    FaChartLine,
    FaUserShield,
    FaSmile,
    FaTachometerAlt,
    FaLightbulb,
    FaRobot,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

type Advantage = { icon: IconType; textKey: string };

export function useAdvantages() {
    const items: Advantage[] = [
        { icon: FaChartLine, textKey: 'advantages.items.conversion' },
        { icon: FaUserShield, textKey: 'advantages.items.retention' },
        { icon: FaSmile, textKey: 'advantages.items.nps' },
        { icon: FaTachometerAlt, textKey: 'advantages.items.dashboards' },
        { icon: FaLightbulb, textKey: 'advantages.items.frameworks' },
        { icon: FaRobot, textKey: 'advantages.items.learning' },
    ];
    return { items };
}
