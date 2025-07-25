import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/assets/i18n/en.json';
import pt from '@/assets/i18n/pt.json';
import es from '@/assets/i18n/es.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        pt: { translation: pt },
        es: { translation: es },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});

export default i18n;
