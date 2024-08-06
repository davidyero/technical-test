var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './LoginView.scss';
import { SuperCard } from '../../components/atoms/SuperCard/SuperCard';
import { SuperButton } from '../../components/atoms/SuperButton/SuperButton';
import { SuperInput } from '../../components/atoms/SuperInput/SuperInput';
import { useAuth } from '../../hooks/useAuth';
import { useContext, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { IS_GUEST, USER_STORAGE, } from '../../shared/constants/LocalStorages.constants';
import { AuthContext } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { RoleEnum } from '../../shared/enums/role.enum';
import { useNotifications } from '../../hooks/useNotifications';
export const LoginView = () => {
    const { t } = useTranslation();
    const { setAuth } = useContext(AuthContext);
    const { setItem } = useLocalStorage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { showNotification } = useNotifications();
    const { login } = useAuth();
    const handleLogin = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield login(email.toLowerCase(), password);
            setItem(USER_STORAGE, JSON.stringify(user));
            setItem(IS_GUEST, 'false');
            setAuth({ isLogged: true, isGuest: false, user });
        }
        catch (error) {
            showNotification(t('errorLogin'), t('errorLoginMessage'), 'danger');
            console.error(error);
        }
    });
    const continueAsGuest = () => {
        setAuth({
            user: {
                role: RoleEnum.GUEST,
                id: '',
                email: '',
                name: '',
                token: '',
            },
            isLogged: true,
            isGuest: true,
        });
        setItem(IS_GUEST, 'true');
    };
    return (_jsx("div", { className: 'login__container', children: _jsxs(SuperCard, { className: 'login__card', onClick: () => { }, children: [_jsx("div", { className: 'login__container--left', children: _jsx("label", { className: 'login__label', children: t('getEverything') }) }), _jsx("div", { className: 'login__container--right', children: _jsxs("div", { className: 'login__form', children: [_jsx("div", { className: 'login__container-text', children: _jsx("label", { className: 'login__container-text--title', children: t('welcomeBack') }) }), _jsx("div", { className: 'login__container-text', children: _jsx("label", { className: 'login__container-text--description', children: t('enterYourEmail') }) }), _jsx(SuperInput, { label: t('email'), className: 'login__input', type: 'email', placeholder: t('enterYourEmail'), value: email, onChange: e => setEmail(e.target.value) }), _jsx(SuperInput, { label: t('password'), className: 'login__input', type: 'password', placeholder: t('enterYourPassword'), value: password, onChange: e => setPassword(e.target.value) }), _jsxs("div", { className: 'login__container--actions', children: [_jsx("label", { className: 'login__container-text--forgot', children: t('rememberMe') }), _jsx("label", { className: 'login__container-text--forgot', children: t('forgotPassword') })] }), _jsx(SuperButton, { isDisabled: email === '' || password === '', text: 'Login', onClick: handleLogin }), _jsx("div", { className: 'login__container-text', children: _jsx("label", { onClick: continueAsGuest, className: 'login__container-text--guest', children: t('continueAsGuest') }) })] }) })] }) }));
};
