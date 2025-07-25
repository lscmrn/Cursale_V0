export function useCursaleInAction() {
    const scrollToCta = () => {
        const cta = document.getElementById('cta');
        if (cta) cta.scrollIntoView({ behavior: 'smooth' });
    };

    return { scrollToCta };
}
