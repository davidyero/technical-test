import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import './SuperLoader.scss';
export const SuperLoader = () => {
    const { t } = useTranslation();
    return (_jsx("div", { className: 'loader', children: _jsx("label", { className: 'loader__text', children: t('loading') }) }));
};
