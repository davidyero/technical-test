import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './SuperHeader.scss';
import { SuperTooltip } from '../../atoms/SuperTooltip/SuperTooltip';
import MouseIcon from '../../../assets/icons/mouse.svg';
import { useNavigate } from 'react-router-dom';
export const SuperHeader = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    };
    return (_jsx("div", { className: 'header', children: _jsxs("div", { className: 'header__container', children: [_jsxs("div", { className: 'header__container__logo', onClick: handleNavigate, children: [_jsx("img", { className: 'header__logo', src: MouseIcon, alt: 'mouse' }), _jsx("label", { className: 'header__text', children: "SuperStore" })] }), _jsx("div", { children: _jsx(SuperTooltip, {}) })] }) }));
};
