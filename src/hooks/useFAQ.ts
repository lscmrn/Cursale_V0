import { useState } from 'react';

export type FAQItem = { qKey: string; aKey: string };

export function useFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        { qKey: 'faq.items.integrate.q', aKey: 'faq.items.integrate.a' },
        { qKey: 'faq.items.crms.q', aKey: 'faq.items.crms.a' },
        { qKey: 'faq.items.realtime.q', aKey: 'faq.items.realtime.a' },
        { qKey: 'faq.items.secure.q', aKey: 'faq.items.secure.a' },
        { qKey: 'faq.items.training.q', aKey: 'faq.items.training.a' },
    ];

    const toggleFAQ = (index: number) => setOpenIndex((prev) => (prev === index ? null : index));

    return { faqs, openIndex, toggleFAQ };
}
