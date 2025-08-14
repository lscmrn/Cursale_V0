export type Feature = {
    id: string;
    titleId: string;
    descId: string;
    titleKey: string;
    descKey: string;
};
export type PersonaKey = 'seller' | 'manager' | 'operations';
export type PersonaFeatures = { heroIndex: number; items: Feature[] };

export function useFeatures(): Record<PersonaKey, PersonaFeatures> {
    return {
        seller: {
            heroIndex: 0,
            items: [
                {
                    id: 'feature-ai',
                    titleId: 'feature-title-ai',
                    descId: 'feature-desc-ai',
                    titleKey: 'features.seller.items.ai.title',
                    descKey: 'features.seller.items.ai.desc',
                },
                {
                    id: 'feature-immediate-results',
                    titleId: 'feature-title-immediate-results',
                    descId: 'feature-desc-immediate-results',
                    titleKey: 'features.seller.items.immediateResults.title',
                    descKey: 'features.seller.items.immediateResults.desc',
                },
                {
                    id: 'feature-crm',
                    titleId: 'feature-title-crm',
                    descId: 'feature-desc-crm',
                    titleKey: 'features.seller.items.crm.title',
                    descKey: 'features.seller.items.crm.desc',
                },
                {
                    id: 'feature-follow-ups',
                    titleId: 'feature-title-follow-ups',
                    descId: 'feature-desc-follow-ups',
                    titleKey: 'features.seller.items.followUps.title',
                    descKey: 'features.seller.items.followUps.desc',
                },
                {
                    id: 'feature-objections',
                    titleId: 'feature-title-objections',
                    descId: 'feature-desc-objections',
                    titleKey: 'features.seller.items.objections.title',
                    descKey: 'features.seller.items.objections.desc',
                },
                {
                    id: 'feature-dashboards-lite',
                    titleId: 'feature-title-dashboards-lite',
                    descId: 'feature-desc-dashboards-lite',
                    titleKey: 'features.seller.items.dashboardsLite.title',
                    descKey: 'features.seller.items.dashboardsLite.desc',
                },
            ],
        },
        manager: {
            heroIndex: 0,
            items: [
                {
                    id: 'feature-mgr-dashboards',
                    titleId: 'feature-title-mgr-dashboards',
                    descId: 'feature-desc-mgr-dashboards',
                    titleKey: 'features.manager.items.dashboards.title',
                    descKey: 'features.manager.items.dashboards.desc',
                },
                {
                    id: 'feature-performance-analysis',
                    titleId: 'feature-title-performance-analysis',
                    descId: 'feature-desc-performance-analysis',
                    titleKey: 'features.manager.items.performance.title',
                    descKey: 'features.manager.items.performance.desc',
                },
                {
                    id: 'feature-efficiency-insights',
                    titleId: 'feature-title-efficiency-insights',
                    descId: 'feature-desc-efficiency-insights',
                    titleKey: 'features.manager.items.efficiency.title',
                    descKey: 'features.manager.items.efficiency.desc',
                },
                {
                    id: 'feature-best-practices',
                    titleId: 'feature-title-best-practices',
                    descId: 'feature-desc-best-practices',
                    titleKey: 'features.manager.items.bestPractices.title',
                    descKey: 'features.manager.items.bestPractices.desc',
                },
                {
                    id: 'feature-proactive-alerts',
                    titleId: 'feature-title-proactive-alerts',
                    descId: 'feature-desc-proactive-alerts',
                    titleKey: 'features.manager.items.alerts.title',
                    descKey: 'features.manager.items.alerts.desc',
                },
                {
                    id: 'feature-coaching',
                    titleId: 'feature-title-coaching',
                    descId: 'feature-desc-coaching',
                    titleKey: 'features.manager.items.coaching.title',
                    descKey: 'features.manager.items.coaching.desc',
                },
            ],
        },
        operations: {
            heroIndex: 0,
            items: [
                {
                    id: 'feature-ops-crm',
                    titleId: 'feature-title-ops-crm',
                    descId: 'feature-desc-ops-crm',
                    titleKey: 'features.operations.items.crm.title',
                    descKey: 'features.operations.items.crm.desc',
                },
                {
                    id: 'feature-ops-automation',
                    titleId: 'feature-title-ops-automation',
                    descId: 'feature-desc-ops-automation',
                    titleKey: 'features.operations.items.automation.title',
                    descKey: 'features.operations.items.automation.desc',
                },
                {
                    id: 'feature-ops-apis',
                    titleId: 'feature-title-ops-apis',
                    descId: 'feature-desc-ops-apis',
                    titleKey: 'features.operations.items.apis.title',
                    descKey: 'features.operations.items.apis.desc',
                },
                {
                    id: 'feature-ops-security',
                    titleId: 'feature-title-ops-security',
                    descId: 'feature-desc-ops-security',
                    titleKey: 'features.operations.items.security.title',
                    descKey: 'features.operations.items.security.desc',
                },
                {
                    id: 'feature-ops-localization',
                    titleId: 'feature-title-ops-localization',
                    descId: 'feature-desc-ops-localization',
                    titleKey: 'features.operations.items.localization.title',
                    descKey: 'features.operations.items.localization.desc',
                },
                {
                    id: 'feature-ops-reports',
                    titleId: 'feature-title-ops-reports',
                    descId: 'feature-desc-ops-reports',
                    titleKey: 'features.operations.items.reports.title',
                    descKey: 'features.operations.items.reports.desc',
                },
            ],
        },
    };
}
