import { jsx as _jsx } from "react/jsx-runtime";
import './SuperButton.scss';
export const SuperButton = ({ onClick, isDisabled, text, className, }) => {
    const handleClick = () => {
        console.log('Button clicked');
        if (isDisabled) {
            return;
        }
        if (onClick) {
            onClick();
        }
    };
    return (_jsx("button", { className: `super-button ${className} ${isDisabled ? 'super-button__disabled' : ''}`, onClick: handleClick, disabled: isDisabled, children: text }));
};
