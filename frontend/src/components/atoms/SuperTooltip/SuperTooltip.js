import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import englishFlag from '../../../assets/flags/english-flag.svg';
import spanishFlag from '../../../assets/flags/spanish-flag.svg';
import userIcon from '../../../assets/icons/user.svg';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SuperTooltip.scss';
import { useAuth } from '../../../hooks/useAuth';
import { DataContext } from '../../../context/DataContext';
export const SuperTooltip = () => {
    const { logout } = useAuth();
    const { data } = useContext(DataContext);
    const { i18n, t } = useTranslation();
    const [showTooltip, setShowTooltip] = useState(false);
    const canChangeLanguage = data === null || data === void 0 ? void 0 : data.featureFlags.INTERNATIONALIZATION;
    const languages = [
        {
            name: 'en',
            flag: englishFlag,
        },
        {
            name: 'es',
            flag: spanishFlag,
        },
    ];
    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
        setShowTooltip(false);
    };
    const handleLogout = () => {
        logout();
    };
    return (_jsxs("div", { className: 'tooltip-container', children: [_jsx("img", { onClick: () => setShowTooltip(!showTooltip), src: userIcon, alt: 'Download on the App Store', className: 'tooltip__icon' }), showTooltip && (_jsxs("div", { className: 'tooltip-container__select', children: [_jsx("div", { className: 'tooltip-container__triangle' }), canChangeLanguage && (_jsx("div", { className: 'tooltip-container__row', children: languages.map((language, index) => (_jsx("div", { className: `tooltip-container__option ${i18n.language === language.name ? 'tooltip-container__selected' : ''}`, onClick: () => handleLanguageChange(language.name), children: _jsx("img", { className: 'tooltip-container__flag', src: language.flag, alt: language.name }) }, index))) })), _jsx("div", { className: 'tooltip-container__row', children: _jsx("label", { onClick: handleLogout, className: 'tooltip-container__option tooltip-container__label', children: t('closeSession') }) })] }))] }));
};
