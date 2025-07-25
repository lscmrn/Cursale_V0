import { useState } from 'react';

export type FAQItem = {
    question: string;
    answer: string;
};

export function useFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: 'Do I need to integrate with my CRM to use Cursale?',
            answer: 'No. Integration is optional. A simple briefing already activates the AI with contextual suggestions.',
        },
        {
            question: 'Which CRMs are compatible?',
            answer: 'Salesforce, HubSpot, Pipedrive, Zoho, and any CRM with an open API.',
        },
        {
            question: 'Does Cursale work in real time?',
            answer: 'Yes. Suggestions appear during the call, in real time.',
        },
        {
            question: 'Is it secure?',
            answer: '100%. Everything is encrypted, processed locally, and fully compliant with GDPR and LGPD.',
        },
        {
            question: 'Do I need to train the AI with lots of data?',
            answer: 'No. Just give basic context about the client and the product. Cursale understands and acts.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return { faqs, openIndex, toggleFAQ };
}
