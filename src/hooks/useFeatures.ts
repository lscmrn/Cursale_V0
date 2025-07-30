import iconSound from '@/assets/images/icons/cursale-sound.svg';
import iconMoney from '@/assets/images/icons/cursale-money.svg';
import iconAI from '@/assets/images/icons/cursale-ai.svg';
import iconCheck from '@/assets/images/icons/cursale-check.svg';
import iconScared from '@/assets/images/icons/cursale-scared.svg';
import iconTask from '@/assets/images/icons/cursale-task.svg';

export function useFeatures() {
    const features = [
        {
            icon: iconSound,
            title: 'Real-Time AI in Video Calls',
            description:
                'Live suggestions during the call, based on key sales methodologies such as SPIN, BANT, and Challenger. Available in 89 languages.',
        },
        {
            icon: iconMoney,
            title: 'Immediate Results',
            description:
                'Give Cursale quick context—such as who the customer is and what you sell—and it immediately starts supporting you with intelligent suggestions.',
        },
        {
            icon: iconAI,
            title: 'Native Integration with Your CRM',
            description:
                'Connect Cursale to Salesforce, HubSpot, Pipedrive, Zoho, or any other CRM in just a few clicks—and unlock even more personalized suggestions, rich data, and automations that accelerate every sale.',
        },
        {
            icon: iconCheck,
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
            icon: iconTask,
            title: 'Dashboards for Managers',
            description:
                'Clear insight into performance, conversion, pitch adherence, and efficiency by salesperson—in real time.',
        },
    ];

    return { features };
}
