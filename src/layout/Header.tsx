import { JSX } from 'react';
import LogoHeader from '@/assets/images/logo-header.png';
import LogoHeaderGradient from '@/assets/images/logo-gradient.png';
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
            className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-500 
                ${
                    scrolled
                        ? 'border-cursale-white/40 bg-cursale-blue-50/70 shadow-md'
                        : 'border-cursale-white/30 bg-gradient-to-r from-cursale-blue-50/80 via-cursale-gray-50/60 to-cursale-gray-100/70 shadow-md'
                }`}
        >
            <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-3 md:px-6 lg:px-8">
                <a
                    onClick={scrollToTop}
                    className="flex cursor-pointer items-center space-x-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cursale-orange-400"
                >
                    <img
                        src={scrolled ? LogoHeaderGradient : LogoHeader}
                        alt="Cursale Logo"
                        className="h-8 w-auto transition-all duration-500 md:h-12 lg:h-14 2xl:h-16"
                    />
                </a>
                <nav
                    className={`hidden grow justify-center space-x-6 font-rubik transition-colors duration-500 md:flex ${
                        scrolled ? 'text-cursale-blue-800' : 'text-cursale-blue-900'
                    }`}
                >
                    {mainNavItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                            className="relative rounded-md text-sm font-semibold transition-all hover:text-cursale-orange-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cursale-orange-400 md:text-base lg:text-lg 2xl:text-xl"
                        >
                            {item}
                        </button>
                    ))}
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
                <div className="hidden space-x-3 md:flex">
                    <Button
                        variant={scrolled ? 'outline' : 'secondary'}
                        className="transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cursale-orange-400"
                    >
                        Sign In
                    </Button>
                    <Button
                        variant={scrolled ? 'primary' : 'gradient'}
                        className="bg-gradient-ia text-white shadow-sm transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cursale-blue-50"
                    >
                        Sign Up
                    </Button>
                </div>
                <button
                    className={`rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cursale-orange-400 md:hidden ${
                        scrolled ? 'text-cursale-blue-900' : 'text-cursale-blue-900'
                    }`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
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
                            ? 'bg-white/80 text-cursale-blue-900'
                            : 'bg-white/70 text-cursale-blue-900'
                    }`}
                >
                    {[...mainNavItems, ...dropdownItems].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                scrollToSection(item.toLowerCase().replace(/\s+/g, '-'));
                                closeMenu();
                            }}
                            className="rounded-md text-base font-semibold transition hover:text-cursale-orange-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cursale-orange-400"
                        >
                            {item}
                        </button>
                    ))}
                    <div className="flex w-full max-w-xs flex-col space-y-2">
                        <Button
                            variant={scrolled ? 'outline' : 'secondary'}
                            fullWidth
                            onClick={closeMenu}
                            className="transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cursale-orange-400"
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="primary"
                            fullWidth
                            onClick={closeMenu}
                            className="bg-gradient-to-r from-cursale-orange-200 via-cursale-orange-300 to-cursale-orange-400 text-white shadow-sm transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cursale-orange-400"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
