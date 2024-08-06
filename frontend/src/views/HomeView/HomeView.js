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
import './HomeView.scss';
import FilterIcon from '../../assets/icons/filter.svg';
import MagnifierIcon from '../../assets/icons/magnifer.svg';
import { SuperCard } from '../../components/atoms/SuperCard/SuperCard';
import { SuperInput } from '../../components/atoms/SuperInput/SuperInput';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SuperPaginator } from '../../components/atoms/SuperPaginator/SuperPaginator';
import { useProducts } from '../../hooks/useProducts';
import { SuperLoader } from '../../components/atoms/SuperLoader/SuperLoader';
import { useNavigate } from 'react-router-dom';
import { SuperCardProduct } from '../../components/atoms/SuperCardProduct/SuperCardProduct';
import { SuperEmptyState } from '../../components/atoms/SuperEmptyState/SuperEmptyState';
import { DataContext } from '../../context/DataContext';
import { SuperButton } from '../../components/atoms/SuperButton/SuperButton';
import { RoleEnum } from '../../shared/enums/role.enum';
import { AuthContext } from '../../context/AuthContext';
export const HomeView = () => {
    var _a;
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { searchProducts, getAllProducts, isLoading } = useProducts();
    const { data } = useContext(DataContext);
    const [allProducts, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [textFilter, setTextFilter] = useState('');
    const { auth } = useContext(AuthContext);
    const isAdmin = ((_a = auth === null || auth === void 0 ? void 0 : auth.user) === null || _a === void 0 ? void 0 : _a.role) === RoleEnum.ADMIN;
    const canCreate = data.featureFlags.CREATE_PRODUCT;
    const handleSearch = (page) => __awaiter(void 0, void 0, void 0, function* () {
        setCurrentPage(page);
        const newFilter = yield searchProducts(textFilter, i18n.language, page);
        setAllProducts(newFilter.results);
        setAllProducts(newFilter.results);
        setTotalPages(newFilter.totalPages);
    });
    const handleProductDetail = (id) => {
        navigate(`/detail/${id}`);
    };
    const handleFilter = () => {
        console.log('Filter by type');
        console.log('Filter by price');
        console.log('order');
    };
    const initialValues = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const listResponse = yield getAllProducts(currentPage);
            setAllProducts(listResponse.results);
            setTotalPages(listResponse.totalPages);
        }
        catch (error) {
            console.error('initialValues ::: ', error);
        }
    });
    const updateValues = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const listResponse = yield getAllProducts(currentPage);
            setAllProducts(listResponse.results);
            setTotalPages(listResponse.totalPages);
        }
        catch (error) {
            console.error('updateValues ::: ', error);
        }
    });
    const handleCreateProduct = () => {
        navigate('/create');
    };
    useEffect(() => {
        if (textFilter === '') {
            initialValues();
        }
        else {
            handleSearch(currentPage);
        }
        // eslint-disable-next-line
    }, [currentPage]);
    useEffect(() => {
        updateValues();
        // eslint-disable-next-line
    }, [data.products]);
    return (_jsx("div", { className: 'home', children: _jsx("div", { className: 'home__containter', children: _jsxs("div", { className: 'home__containter--content', children: [_jsxs("div", { className: 'home__filter-row', children: [_jsxs("div", { className: 'home__filter-row--text', children: [_jsx("label", { className: 'home__containter--title', children: t('products') }), _jsx("img", { className: 'home--icon home--icon-filter', src: FilterIcon, onClick: handleFilter, alt: 'filter' })] }), _jsxs("div", { className: 'home__filter', children: [_jsx(SuperInput, { className: 'home__filter--search-button', type: '', placeholder: 'Search', label: '', value: textFilter, onChange: event => setTextFilter(event.target.value) }), _jsx("img", { className: 'home--icon home--icon-search', src: MagnifierIcon, alt: 'search', onClick: () => handleSearch(1) })] })] }), canCreate && isAdmin && (_jsx("div", { children: _jsx(SuperButton, { text: t('createProduct'), onClick: handleCreateProduct }) })), _jsxs("div", { className: 'home--list', children: [isLoading && _jsx(SuperLoader, {}), !isLoading && allProducts.length === 0 && (_jsx(SuperEmptyState, { text: t('noProducts') })), !isLoading && allProducts.length > 0 && (_jsxs(_Fragment, { children: [_jsx(SuperPaginator, { currentPage: currentPage, totalPages: totalPages, onPageChange: setCurrentPage }), allProducts.map((product, index) => (_jsx(SuperCard, { className: 'card-product', onClick: () => handleProductDetail(product.id), children: _jsx(SuperCardProduct, { product: product }) }, `product-${index}`)))] }))] })] }) }) }));
};
