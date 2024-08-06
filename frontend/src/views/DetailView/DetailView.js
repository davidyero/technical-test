var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useTranslation } from 'react-i18next';
import './DetailView.scss';
import LeftIcon from '../../assets/icons/left.svg';
import { SuperLoader } from '../../components/atoms/SuperLoader/SuperLoader';
import { SuperActionButtons } from '../../components/atoms/SuperActionButtons/SuperActionButtons';
export const DetailView = () => {
    const { i18n, t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const { getProductDetail, isLoading } = useProducts();
    const getProductDetailById = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!id) {
            navigate('/');
            return;
        }
        try {
            const product = yield getProductDetail(id);
            setProduct(product);
        }
        catch (error) {
            console.error('getProductDetailById', error);
        }
    });
    const handleBack = () => {
        navigate('/');
    };
    useEffect(() => {
        getProductDetailById();
        // eslint-disable-next-line
    }, []);
    return (_jsxs("div", { className: 'detail', children: [isLoading && _jsx(SuperLoader, {}), product && (_jsx(_Fragment, { children: _jsxs("div", { className: 'detail__container', children: [_jsx("div", { className: 'detail__container--back', children: _jsxs("div", { onClick: handleBack, className: 'detail__container--back-action', children: [_jsx("img", { className: 'paginator__icon', src: LeftIcon, alt: 'left' }), _jsx("label", { className: 'detail__container--back-text', children: t('back') })] }) }), _jsx("img", { className: 'detail__row--image', src: product.image, alt: 'product' }), _jsxs("div", { className: 'detail__container--info', children: [_jsxs("label", { className: 'detail__row', children: [_jsx("span", { className: 'detail__row--title', children: "ID: " }), _jsx("span", { className: 'detail__row--text', children: product === null || product === void 0 ? void 0 : product.id })] }), _jsxs("label", { className: 'detail__row', children: [_jsxs("span", { className: 'detail__row--title', children: [t('name'), ": "] }), _jsx("span", { className: 'detail__row--text', children: product === null || product === void 0 ? void 0 : product.name[i18n.language] })] }), _jsxs("label", { className: 'detail__row', children: [_jsxs("span", { className: 'detail__row--title', children: [t('description'), ": "] }), _jsx("span", { className: 'detail__row--text', children: product === null || product === void 0 ? void 0 : product.description[i18n.language] })] }), _jsxs("label", { className: 'detail__row', children: [_jsxs("span", { className: 'detail__row--title', children: [t('price'), ": "] }), _jsx("span", { className: 'detail__row--text', children: product === null || product === void 0 ? void 0 : product.price })] }), _jsxs("label", { className: 'detail__row', children: [_jsxs("span", { className: 'detail__row--title', children: [t('disk'), ": "] }), _jsx("span", { className: 'detail__row--text', children: product === null || product === void 0 ? void 0 : product.data.disk })] }), _jsxs("label", { className: 'detail__row', children: [_jsxs("span", { className: 'detail__row--title', children: [t('cpu'), ": "] }), _jsx("span", { className: 'detail__row--text', children: product === null || product === void 0 ? void 0 : product.data.cpu })] }), _jsxs("label", { className: 'detail__row', children: [_jsxs("span", { className: 'detail__row--title', children: [t('gpu'), ": "] }), _jsx("span", { className: 'detail__row--text', children: product === null || product === void 0 ? void 0 : product.data.gpu })] }), _jsxs("label", { className: 'detail__row', children: [_jsxs("span", { className: 'detail__row--title', children: [t('ram'), ": "] }), _jsx("span", { className: 'detail__row--text', children: product === null || product === void 0 ? void 0 : product.data.ram })] }), _jsxs("label", { className: 'detail__row', children: [_jsxs("span", { className: 'detail__row--title', children: [t('display'), ": "] }), _jsx("span", { className: 'detail__row--text', children: product === null || product === void 0 ? void 0 : product.data.display })] }), _jsx("div", { className: 'detail__row detail__row--actions', children: _jsx(SuperActionButtons, { productId: product.id }) })] })] }) }))] }));
};
