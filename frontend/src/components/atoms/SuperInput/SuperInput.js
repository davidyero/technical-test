import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './SuperInput.scss';
export const SuperInput = (props) => {
    return (_jsxs("div", { className: 'super-input--container', children: [_jsx("label", { className: 'super-input__label', children: props.label }), _jsx("input", { className: `super-input ${props.className}`, type: props.type, placeholder: props.placeholder, value: props.value, onChange: props.onChange })] }));
};
