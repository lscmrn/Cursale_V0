import { useState, useEffect } from 'react';

export function useHero() {
    const [countUpStart, setCountUpStart] = useState(false);

    const scrollToCta = () => {
        const cta = document.getElementById('cta');
        if (cta) cta.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById('hero');
            if (!hero) return;

            const rect = hero.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom >= 0;
            setCountUpStart(inView);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { countUpStart, scrollToCta };
}
