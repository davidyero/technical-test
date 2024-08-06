var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createProductService, editProductService, getAllProductsService, getProductDetailService, removeProductService, searchProductsService, } from '../services/products';
import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
export const useProducts = () => {
    const { data, setData } = useContext(DataContext);
    const [isLoading, setIsLoading] = useState(false);
    const getAllProducts = (page) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setIsLoading(true);
            return yield getAllProductsService(page, data, setData);
        }
        catch (error) {
            console.error('getAllProducts', error);
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    });
    const getProductDetail = (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setIsLoading(true);
            return yield getProductDetailService(id, data.products);
        }
        catch (error) {
            console.error('getProductDetail', error);
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    });
    const searchProducts = (text, currentLanguage, page) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setIsLoading(true);
            return yield searchProductsService(text, currentLanguage, page, data.products);
        }
        catch (error) {
            console.error('searchProducts', error);
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    });
    const removeProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setIsLoading(true);
            const newList = yield removeProductService(productId, data.products);
            setData(Object.assign(Object.assign({}, data), { products: newList }));
        }
        catch (error) {
            console.error('removeProduct', error);
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    });
    const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        try {
            const newProducts = yield createProductService(product, data.products);
            setData(Object.assign(Object.assign({}, data), { products: newProducts }));
        }
        catch (error) {
            console.error('createProduct', error);
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    });
    const editProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        try {
            const newProducts = yield editProductService(product, data.products);
            setData(Object.assign(Object.assign({}, data), { products: newProducts }));
        }
        catch (error) {
            console.error('editProduct', error);
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    });
    return {
        getAllProducts,
        getProductDetail,
        searchProducts,
        removeProductById,
        createProduct,
        editProduct,
        isLoading,
    };
};
