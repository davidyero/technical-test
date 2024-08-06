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
import CopyIcon from '../../../assets/icons/copy.svg';
import EditIcon from '../../../assets/icons/pen.svg';
import TrashIcon from '../../../assets/icons/trash.svg';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useNotifications } from '../../../hooks/useNotifications';
import { RoleEnum } from '../../../shared/enums/role.enum';
import './SuperActionButtons.scss';
import { DataContext } from '../../../context/DataContext';
import { useProducts } from '../../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
export const SuperActionButtons = ({ productId }) => {
    var _a;
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { auth } = useContext(AuthContext);
    const { data, setData } = useContext(DataContext);
    const { showNotification } = useNotifications();
    const { removeProductById } = useProducts();
    const isAdmin = ((_a = auth === null || auth === void 0 ? void 0 : auth.user) === null || _a === void 0 ? void 0 : _a.role) === RoleEnum.ADMIN;
    const canEdit = data.featureFlags.EDIT_PRODUCT;
    const canRemove = data.featureFlags.REMOVE_PRODUCT;
    const removeProduct = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield removeProductById(productId);
            showNotification(t('removeProduct'), t('removeProductSuccess'), 'success');
            setData(Object.assign(Object.assign({}, data), { products: data.products.filter(product => product.id !== productId), modal: Object.assign(Object.assign({}, data.modal), { isOpen: false }) }));
        }
        catch (error) {
            showNotification(t('removeProduct'), t('removeProductError'), 'danger');
        }
    });
    const handleRemoveProduct = (event) => {
        setData(Object.assign(Object.assign({}, data), { modal: {
                isOpen: true,
                title: t('removeProduct'),
                message: t('removeProductMessage') + ' ' + productId + '?',
                textConfirm: t('removeProductConfirm'),
                textCancel: t('removeProductCancel'),
                classNameButtonConfirm: 'super-button__danger',
                onConfirm: () => removeProduct(),
                onCancel: () => {
                    setData(Object.assign(Object.assign({}, data), { modal: Object.assign(Object.assign({}, data.modal), { isOpen: false }) }));
                },
                children: null,
            } }));
        event.stopPropagation();
    };
    const copyProduct = (event, id) => {
        showNotification(t('copyProduct'), t('copyProductMessage'), 'success');
        navigator.clipboard.writeText(`http://localhost:5173/detail/${id}`);
        event.stopPropagation();
    };
    const editProduct = (event) => {
        navigate(`/edit/${productId}`);
        event.stopPropagation();
    };
    return (_jsxs("div", { className: 'action-buttons-container', children: [_jsx("img", { onClick: event => copyProduct(event, productId), className: 'card-product--icon', src: CopyIcon }), isAdmin && canEdit && (_jsx("img", { onClick: editProduct, className: 'card-product--icon', src: EditIcon })), isAdmin && canRemove && (_jsx("img", { onClick: handleRemoveProduct, className: 'card-product--icon', src: TrashIcon }))] }));
};
