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
import { addProduct, editProduct, getBeforePage, getNextPage, getProductsByPage, removeProduct, searchProduct, } from './products.helper';
export const getAllProductsService = (page, data, setData) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = data.products.length > 0 ? data.products : PRODUCT_LIST;
    if (data.products.length === 0) {
        setData(Object.assign(Object.assign({}, data), { products: allProducts }));
    }
    const totalPages = Math.ceil(allProducts.length / 10);
    const response = {
        count: allProducts.length,
        next: getNextPage(page, totalPages),
        previous: getBeforePage(page, totalPages),
        totalPages: totalPages,
        results: getProductsByPage(page, allProducts, totalPages),
    };
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(response);
        }, 500);
    });
});
export const getProductDetailService = (id, products) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = products.length > 0 ? products : PRODUCT_LIST;
    const product = allProducts.find(product => product.id === id);
    if (!product) {
        throw new Error('Product not found');
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(product);
        }, 500);
    });
});
export const searchProductsService = (text, currentLanguage, page, products) => __awaiter(void 0, void 0, void 0, function* () {
    const productsResponse = yield searchProduct(text, currentLanguage, products);
    const totalPages = Math.ceil(productsResponse.length / 10);
    const response = {
        count: productsResponse.length,
        next: getNextPage(page, totalPages),
        previous: getBeforePage(page, totalPages),
        totalPages: totalPages,
        results: getProductsByPage(page, productsResponse, totalPages),
    };
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(response);
        }, 500);
    });
});
export const removeProductService = (productId, products) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = products.length > 0 ? products : PRODUCT_LIST;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(removeProduct(productId, allProducts));
        }, 500);
    });
});
export const createProductService = (product, products) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = products.length > 0 ? products : PRODUCT_LIST;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(addProduct(product, allProducts));
        }, 500);
    });
});
export const editProductService = (product, products) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = products.length > 0 ? products : PRODUCT_LIST;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(editProduct(product, allProducts));
        }, 500);
    });
});
