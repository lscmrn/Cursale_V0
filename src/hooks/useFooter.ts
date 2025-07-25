export function useFooter() {
    const year = new Date().getFullYear();

    const links = [
        { key: 'about', id: 'about' },
        { key: 'pricing', id: 'pricing' },
        { key: 'contact', id: 'contact' },
        { key: 'login', id: 'login' },
    ];

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    return { year, links, scrollToSection };
}
