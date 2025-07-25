import { useState, useEffect } from 'react';

export function useHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);
    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    const mainNavItems = [
        { key: 'about', id: 'about' },
        { key: 'testimonials', id: 'testimonials' },
        { key: 'faqs', id: 'faqs' },
        { key: 'contact', id: 'contact' },
    ];

    const dropdownItems = [
        { key: 'features', id: 'features' },
        { key: 'advantages', id: 'advantages' },
        { key: 'howItWorks', id: 'how-it-works' },
        { key: 'secondaryCta', id: 'secondary-cta' },
    ];

    return {
        scrolled,
        menuOpen,
        dropdownOpen,
        toggleMenu,
        toggleDropdown,
        closeMenu,
        scrollToSection,
        scrollToTop,
        mainNavItems,
        dropdownItems,
    };
}
