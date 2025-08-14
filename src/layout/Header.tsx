import { JSX } from 'react';
import LogoHeaderDark from '@/assets/images/icons/logo-header-dark.png';
import LogoHeaderGradient from '@/assets/images/icons/logo-header-gradient.png';
import { useHeader } from '@/hooks/useHeader';
import { Button } from '@/ui/Button';
import { Translate } from '@/components/Translate';

export default function Header(): JSX.Element {
    const {
        scrolled,
        menuOpen,
        toggleMenu,
        closeMenu,
        scrollToSection,
        scrollToTop,
        mainNavItems,
    } = useHeader();
    const wrapBg = scrolled
        ? 'border-brand-blue/40 bg-white/85 shadow-md'
        : 'border-brand-blue/30 bg-gradient-ia-light shadow-md';
    const navColor = scrolled ? 'text-brand-purple700' : 'text-cursale-blue-900';
    const hoverColor = scrolled
        ? 'hover:text-ia-futurist-magenta'
        : 'hover:text-ia-cyberpunk-neonBlue';

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-500 ${wrapBg}`}
        >
            <div className="container flex items-center justify-between py-2.5 font-poppins">
                <a
                    onClick={scrollToTop}
                    className="flex cursor-pointer items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40"
                >
                    <img
                        src={scrolled ? LogoHeaderGradient : LogoHeaderDark}
                        alt="Cursale Logo"
                        className="h-9 w-auto sm:h-10 md:h-10 lg:h-12 xl:h-14"
                    />
                </a>

                <nav
                    className={`hidden grow justify-center gap-5 transition-colors duration-500 md:flex ${navColor}`}
                >
                    {mainNavItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => scrollToSection(item.id)}
                            className={`rounded-md text-sm font-semibold ${hoverColor} hover:underline md:text-base lg:text-lg`}
                        >
                            <Translate k={`header.nav.${item.key}`} />
                        </button>
                    ))}
                </nav>

                <div className="hidden md:flex">
                    <Button
                        variant={scrolled ? 'secondary' : 'primary'}
                        onClick={() => scrollToSection('signup')}
                        className="px-4 py-2 text-sm md:text-sm lg:text-base"
                    >
                        <Translate k="header.buttons.getStarted" />
                    </Button>
                </div>

                <button
                    className={`rounded-md p-2 md:hidden ${navColor} focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 sm:h-7 sm:w-7"
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
                            className="h-6 w-6 sm:h-7 sm:w-7"
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

            {menuOpen && (
                <div
                    className={`flex max-h-screen flex-col items-center space-y-4 py-4 font-poppins transition-all duration-500 md:hidden ${scrolled ? 'bg-white/90 text-brand-purple700' : 'bg-gradient-ia-light text-cursale-blue-900'}`}
                >
                    {mainNavItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => {
                                scrollToSection(item.id);
                                closeMenu();
                            }}
                            className={`rounded-md text-base font-semibold ${hoverColor} hover:underline sm:text-lg`}
                        >
                            <Translate k={`header.nav.${item.key}`} />
                        </button>
                    ))}
                    <div className="flex w-full max-w-xs flex-col">
                        <Button
                            variant="primary"
                            onClick={() => {
                                scrollToSection('signup');
                                closeMenu();
                            }}
                            className="px-8 py-3 text-base"
                            fullWidth
                        >
                            <Translate k="header.buttons.getStarted" />
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
