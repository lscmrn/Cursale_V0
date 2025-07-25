import iconIA from '@/assets/images/icon_IA.webp';
import iconCheck from '@/assets/images/icon-check.webp';
import iconNormal from '@/assets/images/icon_normal.webp';
import iconSound from '@/assets/images/icon_sound.webp';
import iconMoney from '@/assets/images/icon_money.webp';
import iconScared from '@/assets/images/icon_assustado.webp';

export function useFeatures() {
    const features = [
        {
            icon: iconIA,
            title: 'Real-Time AI in Video Calls',
            description:
                'Live suggestions, during the call, based on the main sales methodologies (SPIN, BANT, Challenger, etc.).',
        },
        {
            icon: iconCheck,
            title: 'Immediate Results',
            description:
                'Give Cursale quick context—such as who the customer is and what you sell—and it immediately starts supporting you with intelligent suggestions.',
        },
        {
            icon: iconNormal,
            title: 'Native Integration with Your CRM',
            description:
                'Connect Cursale to Salesforce, HubSpot, Pipedrive, Zoho, or any other CRM in just a few clicks—and unlock even more personalized suggestions, rich data, and automations that accelerate every sale.',
        },
        {
            icon: iconSound,
            title: 'Automatic Follow-Ups',
            description:
                'Intelligent generation of emails, summaries, and next steps. All right after the call.',
        },
        {
            icon: iconScared,
            title: 'Real-Time Objection Handling',
            description:
                'AI detects barriers and delivers ready-to-use counterarguments at the right time.',
        },
        {
            icon: iconMoney,
            title: 'Dashboards for Managers',
            description:
                'Clear insight into performance, conversion, pitch adherence, and efficiency by salesperson—in real time.',
        },
    ];

    return { features };
}
