import { jsx as _jsx } from "react/jsx-runtime";
import './SuperEmptyState.scss';
export const SuperEmptyState = ({ text }) => {
    return (_jsx("div", { className: 'empty-state', children: _jsx("p", { children: text }) }));
};
