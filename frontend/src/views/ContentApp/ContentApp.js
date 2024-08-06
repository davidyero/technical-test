import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SuperHeader } from '../../components/molecules/SuperHeader/SuperHeader';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ALL_ROUTES, PUBLIC_ROUTES } from '../../routes/routes.constants';
import { useContext, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { IS_GUEST, USER_STORAGE, } from '../../shared/constants/LocalStorages.constants';
import { AuthContext } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import './Content.scss';
import { SuperModal } from '../../components/molecules/SuperModal/SuperModal';
import { DataContext } from '../../context/DataContext';
import { useFeatureFlags } from '../../hooks/useFeatureFlags';
export const ContentApp = () => {
    var _a, _b;
    const { t } = useTranslation();
    const { getFeatureFlags } = useFeatureFlags();
    const { auth, setAuth } = useContext(AuthContext);
    const { data, setData } = useContext(DataContext);
    const { getItem } = useLocalStorage();
    const validateSession = () => {
        const featureFlags = getFeatureFlags();
        const userString = getItem(USER_STORAGE);
        const isGuest = getItem(IS_GUEST) === 'true';
        setData(Object.assign(Object.assign({}, data), { featureFlags }));
        if (userString && !isGuest) {
            const user = JSON.parse(userString);
            setAuth({
                isLogged: true,
                isGuest: false,
                user,
            });
        }
    };
    useEffect(() => {
        validateSession();
    }, []);
    return (_jsxs(_Fragment, { children: [auth.isLogged && (_jsxs(_Fragment, { children: [_jsx(SuperHeader, {}), _jsxs("div", { className: 'header-welcome', children: [!auth.isGuest && (_jsxs("label", { children: [t('welcome'), " ", (_a = auth.user) === null || _a === void 0 ? void 0 : _a.name] })), auth.isGuest && _jsx("label", { children: t('welcome') })] }), _jsx(Routes, { children: ALL_ROUTES.map(route => {
                            var _a;
                            return (_jsx(Route, { path: route.name, Component: route.validateRole.includes((_a = auth.user) === null || _a === void 0 ? void 0 : _a.role)
                                    ? route.component
                                    : () => _jsx(Navigate, { to: '/', replace: true }) }, route.name));
                        }) })] })), !auth.isLogged && (_jsx(Routes, { children: PUBLIC_ROUTES.map(route => (_jsx(Route, { path: route.name, Component: route.component }, route.name))) })), _jsx(SuperModal, { isOpen: (_b = data.modal) === null || _b === void 0 ? void 0 : _b.isOpen, onRequestClose: () => setData(Object.assign(Object.assign({}, data), { modal: Object.assign(Object.assign({}, data.modal), { isOpen: false, children: null }) })), children: data.modal.children })] }));
};
