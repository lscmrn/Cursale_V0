export function useFooter() {
    const year = new Date().getFullYear();

    const links = ['About', 'Pricing', 'Contact', 'Login'];

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    return { year, links, scrollToSection };
}
