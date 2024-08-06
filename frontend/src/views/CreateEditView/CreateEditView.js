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
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SuperInput } from '../../components/atoms/SuperInput/SuperInput';
import './CreateEditView.scss';
import { useTranslation } from 'react-i18next';
import { SuperButton } from '../../components/atoms/SuperButton/SuperButton';
import { SuperLoader } from '../../components/atoms/SuperLoader/SuperLoader';
import { useProducts } from '../../hooks/useProducts';
import LeftIcon from '../../assets/icons/left.svg';
import { useNotifications } from '../../hooks/useNotifications';
export const CreateEditView = () => {
    const { showNotification } = useNotifications();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { createProduct, editProduct, getProductDetail, isLoading } = useProducts();
    const { id } = useParams();
    const [nameEs, setNameEs] = useState('');
    const [nameEn, setNameEn] = useState('');
    const [descriptionEs, setDescriptionEs] = useState('');
    const [descriptionEn, setDescriptionEn] = useState('');
    const [price, setPrice] = useState(0);
    const [ram, setRam] = useState('');
    const [cpu, setCpu] = useState('');
    const [gpu, setGpu] = useState('');
    const [display, setDisplay] = useState('');
    const [disk, setDisk] = useState('');
    const [image, setImage] = useState('');
    const handleEditProduct = () => __awaiter(void 0, void 0, void 0, function* () {
        const newProduct = {
            id: id !== null && id !== void 0 ? id : '',
            name: {
                es: nameEs,
                en: nameEn,
            },
            description: {
                es: descriptionEs,
                en: descriptionEn,
            },
            data: {
                ram,
                cpu,
                gpu,
                display,
                disk,
            },
            price,
            image,
        };
        try {
            yield editProduct(newProduct);
            showNotification(t('updatedProduct'), t('updatedProductSuccess'), 'success');
            handleBack();
        }
        catch (error) {
            console.error('handleEditProduct', error);
        }
    });
    const handleCreateProduct = () => __awaiter(void 0, void 0, void 0, function* () {
        const newProduct = {
            id: '',
            name: {
                es: nameEs,
                en: nameEn,
            },
            description: {
                es: descriptionEs,
                en: descriptionEn,
            },
            data: {
                ram,
                cpu,
                gpu,
                display,
                disk,
            },
            price,
            image,
        };
        try {
            yield createProduct(newProduct);
            showNotification(t('createdProduct'), t('createdProductSuccess'), 'success');
            handleBack();
        }
        catch (error) {
            console.error('handleCreateProduct', error);
        }
    });
    const validateForm = () => {
        if (!nameEs ||
            !nameEn ||
            !descriptionEs ||
            !descriptionEn ||
            !price ||
            !ram ||
            !cpu ||
            !gpu ||
            !display ||
            !disk ||
            !image) {
            return false;
        }
        return true;
    };
    const handleBack = () => {
        navigate('/');
    };
    const initValuesToEdit = () => __awaiter(void 0, void 0, void 0, function* () {
        if (id) {
            try {
                const product = yield getProductDetail(id);
                if (product) {
                    setNameEs(product.name.es);
                    setNameEn(product.name.en);
                    setDescriptionEs(product.description.es);
                    setDescriptionEn(product.description.en);
                    setPrice(product.price);
                    setRam(product.data.ram);
                    setCpu(product.data.cpu);
                    setGpu(product.data.gpu);
                    setDisplay(product.data.display);
                    setDisk(product.data.disk);
                    setImage(product.image);
                }
                else {
                    console.error('initValuesToEdit', 'Product not found');
                    navigate('/');
                }
            }
            catch (error) {
                console.error('initValuesToEdit', error);
            }
        }
    });
    useEffect(() => {
        if (id) {
            initValuesToEdit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (_jsx("div", { className: 'create', children: _jsxs("div", { className: 'create__container', children: [_jsx("div", { className: 'detail__container--back', children: _jsxs("div", { onClick: handleBack, className: 'detail__container--back-action', children: [_jsx("img", { className: 'paginator__icon', src: LeftIcon, alt: 'left' }), _jsx("label", { className: 'detail__container--back-text', children: t('back') })] }) }), _jsx("div", { className: 'create__container--title', children: _jsx("h1", { children: id ? 'Edit' : 'Create' }) }), isLoading && _jsx(SuperLoader, {}), _jsx("div", { className: 'create__container--content', children: _jsxs("div", { className: 'create__form', children: [_jsx(SuperInput, { className: 'super-input', type: 'text', placeholder: t('nameEn'), label: t('nameEn'), value: nameEn, onChange: e => setNameEn(e.target.value) }), _jsx(SuperInput, { className: 'super-input', type: 'text', placeholder: t('nameEs'), label: t('nameEs'), value: nameEs, onChange: e => setNameEs(e.target.value) }), _jsx(SuperInput, { className: 'super-input', type: 'text', placeholder: t('descriptionEn'), label: t('descriptionEn'), value: descriptionEn, onChange: e => setDescriptionEn(e.target.value) }), _jsx(SuperInput, { className: 'super-input', type: 'text', placeholder: t('descriptionEs'), label: t('descriptionEs'), value: descriptionEs, onChange: e => setDescriptionEs(e.target.value) }), _jsx(SuperInput, { className: 'super-input', type: 'number', placeholder: t('price'), label: t('price'), value: String(price), onChange: e => setPrice(e.target.value) }), _jsx(SuperInput, { className: 'super-input', type: 'text', placeholder: t('ram'), label: t('ram'), value: ram, onChange: e => setRam(e.target.value) }), _jsx(SuperInput, { className: 'super-input', type: 'text', placeholder: t('cpu'), label: t('cpu'), value: cpu, onChange: e => setCpu(e.target.value) }), _jsx(SuperInput, { className: 'super-input', type: 'text', placeholder: t('gpu'), label: t('gpu'), value: gpu, onChange: e => setGpu(e.target.value) }), _jsx(SuperInput, { className: 'super-input', type: 'text', placeholder: t('display'), label: t('display'), value: display, onChange: e => setDisplay(e.target.value) }), _jsx(SuperInput, { className: 'super-input', type: 'text', placeholder: t('disk'), label: t('disk'), value: disk, onChange: e => setDisk(e.target.value) }), _jsx(SuperInput, { className: 'super-input', type: 'text', placeholder: t('image'), label: t('image'), value: image, onChange: e => setImage(e.target.value) }), _jsx("div", { className: 'create__content-buttons', children: _jsx(SuperButton, { isDisabled: !validateForm(), text: t(id ? 'updateProduct' : 'createProduct'), onClick: id ? handleEditProduct : handleCreateProduct }) })] }) })] }) }));
};
