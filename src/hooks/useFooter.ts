export function useFooter() {
    const year = new Date().getFullYear();
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };
    return { year, scrollToSection };
}
