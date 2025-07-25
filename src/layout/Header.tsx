import { JSX } from 'react';
import LogoHeader from '@/assets/images/logo-header.png';
import LogoHeaderLight from '@/assets/images/logo-light.png';
import { useHeader } from '@/hooks/useHeader';
import { Button } from '@/ui/Button';
import { Dropdown } from '@/ui/Dropdown';

export default function Header(): JSX.Element {
    const {
        scrolled,
        menuOpen,
        toggleMenu,
        closeMenu,
        scrollToSection,
        scrollToTop,
        mainNavItems,
        dropdownItems,
    } = useHeader();

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled ? 'bg-cursale-blue-900 shadow-md' : 'bg-cursale-blue-100'
            }`}
        >
            <div className="mx-auto flex w-full max-w-full items-center justify-between p-4">
                {/* ✅ Logo */}
                <a
                    onClick={scrollToTop}
                    className="flex cursor-pointer items-center space-x-2"
                >
                    <img
                        src={scrolled ? LogoHeaderLight : LogoHeader}
                        alt="Cursale Logo"
                        className="h-8 w-auto transition-all duration-500 md:h-12 lg:h-14 2xl:h-16"
                    />
                </a>

                {/* ✅ Desktop Navigation */}
                <nav
                    className={`hidden grow justify-center space-x-6 font-rubik transition-colors duration-500 md:flex ${
                        scrolled ? 'text-cursale-blue-100' : 'text-cursale-blue-900'
                    }`}
                >
                    {mainNavItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                            className="text-sm font-semibold transition hover:text-cursale-blue-300 hover:underline md:text-base lg:text-lg 2xl:text-xl"
                        >
                            {item}
                        </button>
                    ))}

                    {/* ✅ Dropdown usando o novo componente */}
                    <Dropdown
                        label="More"
                        scrolled={scrolled}
                        variant={scrolled ? 'outline' : 'secondary'}
                        items={dropdownItems.map((item) => ({
                            label: item,
                            onClick: () => scrollToSection(item.toLowerCase().replace(/\s+/g, '-')),
                        }))}
                    />
                </nav>

                {/* ✅ Desktop Buttons */}
                <div className="hidden space-x-3 md:flex">
                    <Button variant={scrolled ? 'outline' : 'secondary'}>Sign In</Button>
                    <Button variant="primary">Sign Up</Button>
                </div>

                {/* ✅ Mobile Menu Toggle */}
                <button
                    className={`transition-colors md:hidden ${
                        scrolled ? 'text-white' : 'text-cursale-blue-900'
                    }`}
                    onClick={toggleMenu}
                >
                    {menuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* ✅ Mobile Menu */}
            {menuOpen && (
                <div
                    className={`flex max-h-screen flex-col items-center space-y-4 py-4 font-rubik transition-all duration-500 md:hidden ${
                        scrolled
                            ? 'bg-cursale-blue-900 text-white'
                            : 'bg-cursale-blue-100 text-cursale-blue-900'
                    }`}
                >
                    {[...mainNavItems, ...dropdownItems].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                scrollToSection(item.toLowerCase().replace(/\s+/g, '-'));
                                closeMenu();
                            }}
                            className="text-base font-semibold transition hover:text-cursale-blue-300 hover:underline"
                        >
                            {item}
                        </button>
                    ))}
                    <div className="flex flex-col space-y-2">
                        <Button
                            variant={scrolled ? 'outline' : 'secondary'}
                            fullWidth
                            onClick={closeMenu}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="primary"
                            fullWidth
                            onClick={closeMenu}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
