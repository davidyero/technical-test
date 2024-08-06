var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Modal from 'react-modal';
import { DataContext } from '../../../context/DataContext';
import { useContext } from 'react';
import { SuperButton } from '../../atoms/SuperButton/SuperButton';
import './SuperModal.scss';
export const SuperModal = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { data } = useContext(DataContext);
    return (_jsx(Modal, Object.assign({ style: customStyles }, props, { children: _jsxs("div", { className: 'modal', children: [_jsxs("div", { className: 'modal__text-container', children: [_jsx("label", { className: 'modal__text-container--title', children: data.modal.title }), _jsx("label", { className: 'modal__text-container--subtitle', children: data.modal.message })] }), children, _jsxs("div", { className: 'modal__button-container', children: [_jsx(SuperButton, { className: data.modal.classNameButtonConfirm, text: data.modal.textConfirm, onClick: data.modal.onConfirm }), _jsx(SuperButton, { className: data.modal.classNameButtonCancel, text: data.modal.textCancel, onClick: data.modal.onCancel })] })] }) })));
};
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 20,
    },
};
