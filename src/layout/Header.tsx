import { JSX } from 'react';
import LogoHeaderDark from '@/assets/images/icons/logo-header-dark.png';
import LogoHeaderGradient from '@/assets/images/icons/logo-header-gradient.png';
import { useHeader } from '@/hooks/useHeader';
import { Button } from '@/ui/Button';
import { Dropdown } from '@/ui/Dropdown';
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
        dropdownItems,
    } = useHeader();

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-500 ${
                scrolled
                    ? 'border-ia-cyberpunk-neonBlue/40 bg-white/70 shadow-md'
                    : 'border-ia-cyberpunk-neonBlue/30 bg-gradient-ia-light shadow-md'
            }`}
        >
            <div className="container flex items-center justify-between py-3">
                <div className="flex items-center space-x-2">
                    <a
                        onClick={scrollToTop}
                        className="flex cursor-pointer items-center space-x-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ia-cyberpunk-neonMagenta"
                    >
                        <img
                            src={scrolled ? LogoHeaderGradient : LogoHeaderDark}
                            alt="Cursale Logo"
                            className="h-6 w-auto transition-all duration-500 sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16"
                        />
                    </a>
                </div>
                <nav
                    className={`hidden grow justify-center space-x-4 font-rubik transition-colors duration-500 sm:space-x-5 md:flex md:space-x-6 ${
                        scrolled ? 'text-ia-cyberpunk-darkBlue' : 'text-ia-cyberpunk-darkBlue'
                    }`}
                >
                    {mainNavItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => scrollToSection(item.id)}
                            className="relative rounded-md text-xs font-semibold transition-all hover:text-ia-cyberpunk-neonBlue hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ia-cyberpunk-neonMagenta sm:text-sm md:text-base lg:text-lg 2xl:text-xl"
                        >
                            <Translate k={`header.nav.${item.key}`} />
                        </button>
                    ))}
                    <Dropdown
                        label={<Translate k="header.nav.more" />}
                        scrolled={scrolled}
                        variant={scrolled ? 'tertiary' : 'outline'}
                        items={dropdownItems.map((item) => ({
                            label: <Translate k={`header.nav.${item.key}`} />,
                            onClick: () => scrollToSection(item.id),
                        }))}
                    />
                </nav>
                <div className="hidden space-x-2 sm:space-x-3 md:flex">
                    <Button
                        variant={scrolled ? 'primary' : 'secondary'}
                        className="text-xs text-white shadow-sm transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-ia-cyberpunk-neonBlue sm:text-sm md:text-base lg:text-lg"
                    >
                        <Translate k="header.buttons.signUp" />
                    </Button>
                </div>
                <button
                    className={`rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ia-cyberpunk-neonMagenta md:hidden ${
                        scrolled ? 'text-ia-cyberpunk-darkBlue' : 'text-ia-cyberpunk-darkBlue'
                    }`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6"
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
                            className="h-5 w-5 sm:h-6 sm:w-6"
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
                    className={`flex max-h-screen flex-col items-center space-y-3 py-4 font-rubik transition-all duration-500 sm:space-y-4 md:hidden ${
                        scrolled
                            ? 'bg-white/90 text-ia-cyberpunk-darkBlue'
                            : 'bg-gradient-ia-light text-ia-cyberpunk-darkBlue'
                    }`}
                >
                    {[...mainNavItems, ...dropdownItems].map((item) => (
                        <button
                            key={item.key}
                            onClick={() => {
                                scrollToSection(item.id);
                                closeMenu();
                            }}
                            className="rounded-md text-sm font-semibold transition hover:text-ia-cyberpunk-neonBlue hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ia-cyberpunk-neonMagenta sm:text-base"
                        >
                            <Translate k={`header.nav.${item.key}`} />
                        </button>
                    ))}
                    <div className="flex w-full max-w-xs flex-col space-y-2">
                        <Button
                            variant="primary"
                            fullWidth
                            onClick={closeMenu}
                            className="text-sm text-white shadow-sm transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-ia-cyberpunk-neonBlue sm:text-base"
                        >
                            <Translate k="header.buttons.signUp" />
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
