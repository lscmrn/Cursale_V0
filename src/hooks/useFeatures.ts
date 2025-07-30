export function useFeatures() {
    const features = [
        {
            id: 'feature-ai',
            title: 'Real-Time AI in Video Calls',
            titleId: 'feature-title-ai',
            descId: 'feature-desc-ai',
            description:
                'Live suggestions during the call, based on key sales methodologies such as SPIN, BANT, and Challenger. Available in 89 languages.',
            position:
                'sm:top-[10%] sm:left-[0%] md:top-[10%] md:left-[5%] lg:top-[1%] lg:left-[20%] xl:top-[10%] xl:left-[20%] 2xl:top-[8%] 2xl:left-[28%] 3xl:top-[5%] 3xl:left-[20%] -translate-x-1/2',
        },
        {
            id: 'feature-immediate-results',
            title: 'Immediate Results',
            titleId: 'feature-title-immediate-results',
            descId: 'feature-desc-immediate-results',
            description:
                'Give Cursale quick context—such as who the customer is and what you sell—and it immediately starts supporting you with intelligent suggestions.',
            position:
                'sm:top-[15%] sm:left-[58%] md:top-[15%] md:left-[58%] lg:top-[5%] lg:left-[58%] xl:top-[10%] xl:left-[55%] -translate-x-1/2',
        },
        {
            id: 'feature-crm',
            title: 'Native Integration with Your CRM',
            titleId: 'feature-title-crm',
            descId: 'feature-desc-crm',
            description:
                'Easily connect Cursale to your CRM for personalized suggestions, rich data, and sales-boosting automations.',
            position:
                'sm:top-[37%] sm:-left-[5%] md:top-[37%] md:-left-[3%] lg:top-[37%] lg:left-[5%] xl:top-[38%] xl:left-[12%] -translate-y-1/2',
        },
        {
            id: 'feature-follow-ups',
            title: 'Automatic Follow-Ups',
            titleId: 'feature-title-follow-ups',
            descId: 'feature-desc-follow-ups',
            description:
                'Intelligent generation of emails, summaries, and next steps. All right after the call.',
            position:
                'sm:bottom-[40%] sm:left-[65%] md:bottom-[40%] md:left-[70%] lg:bottom-[42%] lg:left-[70%] xl:bottom-[42%] xl:left-[67%] -translate-x-1/2',
        },
        {
            id: 'feature-objections',
            title: 'Real-Time Objection Handling',
            titleId: 'feature-title-objections',
            descId: 'feature-desc-objections',
            description:
                'AI detects barriers and delivers ready-to-use counterarguments at the right time.',
            position:
                'sm:top-[75%] sm:left-[0%] md:top-[75%] md:left-[5%] lg:top-[75%] lg:left-[10%] xl:top-[75%] xl:left-[20%] -translate-x-1/2',
        },
        {
            id: 'feature-dashboards',
            title: 'Dashboards for Managers',
            titleId: 'feature-title-dashboards',
            descId: 'feature-desc-dashboards',
            description:
                'Clear insight into performance, conversion, pitch adherence, and efficiency by salesperson—in real time.',
            position:
                'sm:top-[68%] sm:left-[60%] md:top-[68%] md:left-[58%]  lg:top-[68%] lg:left-[55%] xl:top-[68%] xl:left-[55%] translate-x-1/2',
        },
    ];

    return { features };
}
