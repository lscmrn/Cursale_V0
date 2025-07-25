import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

const languages = [
    { code: 'en', country: 'US' },
    { code: 'pt', country: 'BR' },
    { code: 'es', country: 'ES' },
];

export function LanguageDropdown() {
    const { i18n, t } = useTranslation();
    const [open, setOpen] = useState(false);

    const current = languages.find((l) => l.code === i18n.language) || languages[0];

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-md border border-cursale-gray-200 bg-white px-2 py-1 shadow-sm hover:shadow-md focus:outline-none"
            >
                <ReactCountryFlag
                    countryCode={current.country}
                    svg
                    className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                />
                <span className="text-xs sm:text-sm md:text-base">
                    {t(`languages.${current.code}`)}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {open && (
                <div className="absolute right-0 mt-1 w-36 rounded-md border border-cursale-gray-200 bg-white shadow-md">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className="flex w-full items-center gap-2 px-2 py-1 text-left text-xs hover:bg-cursale-blue-50 sm:text-sm"
                        >
                            <ReactCountryFlag
                                countryCode={lang.country}
                                svg
                                className="h-4 w-4 sm:h-5 sm:w-5"
                            />
                            {t(`languages.${lang.code}`)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
