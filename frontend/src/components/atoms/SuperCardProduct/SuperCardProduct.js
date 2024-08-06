import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import './SuperCardProduct.scss';
import { SuperActionButtons } from '../SuperActionButtons/SuperActionButtons';
export const SuperCardProduct = ({ product }) => {
    const { i18n } = useTranslation();
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: 'card-product--container', children: [_jsx("div", { className: 'card-product--left', children: _jsx("img", { className: 'card-product--image', src: product.image, alt: 'laptop' }) }), _jsxs("div", { className: 'card-product--container-text', children: [_jsx("div", { className: 'card-product--right--title', children: product.name[i18n.language] }), _jsx("div", { className: 'card-product--right--description', children: product.description[i18n.language] })] })] }), _jsxs("div", { className: 'card-product--right', children: [_jsxs("label", { className: 'home__text--cost', children: ["$", product.price] }), _jsx("div", { children: _jsx(SuperActionButtons, { productId: product.id }) })] })] }));
};
