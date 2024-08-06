import { jsx as _jsx } from "react/jsx-runtime";
import './SuperCard.scss';
export const SuperCard = ({ children, className, onClick }) => {
    return (_jsx("div", { className: `super-card ${className}`, onClick: onClick, children: children }));
};
