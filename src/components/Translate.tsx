import { useTranslation } from 'react-i18next';

export function Translate({ k }: { k: string }) {
    const { t } = useTranslation();
    return <>{t(k)}</>;
}
