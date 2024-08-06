var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PRODUCT_LIST } from '../shared/mocks/products.mock';
export const editProduct = (product, products) => __awaiter(void 0, void 0, void 0, function* () {
    return products.map(currentProduct => {
        if (currentProduct.id === product.id) {
            return product;
        }
        return currentProduct;
    });
});
export const addProduct = (product, products) => __awaiter(void 0, void 0, void 0, function* () {
    return [...products, product];
});
export const removeProduct = (productId, products) => __awaiter(void 0, void 0, void 0, function* () {
    return products.filter(product => product.id !== productId);
});
export const searchProduct = (text, currentLanguage, products) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = products.length > 0 ? products : PRODUCT_LIST;
    if (text === '') {
        return allProducts;
    }
    return allProducts.filter(product => {
        if (product.name[currentLanguage].includes(text) ||
            product.description[currentLanguage].includes(text)) {
            return product;
        }
    });
});
export const getProductsByPage = (page, allProducts, totalPages) => {
    if (page > totalPages) {
        return [];
    }
    return allProducts.filter((_, index) => index >= (page - 1) * 10 && index < page * 10);
};
export const getNextPage = (page, totalPages) => {
    if (page === totalPages) {
        return totalPages;
    }
    if (page < totalPages) {
        return page + 1;
    }
    return page;
};
export const getBeforePage = (page, totalPages) => {
    if (page < totalPages && page > 1) {
        return page - 1;
    }
    if (page > totalPages || page === totalPages) {
        return totalPages - 1;
    }
    return 0;
};
