import {PRODUCT_LIST} from "../shared/mocks/products.mock.ts";
import {IListResponse, IProducts} from "../shared/interfaces/IProducts.ts";
import {ILanguageSupported} from "../shared/interfaces/ILanguage.ts";

export const getAllProductsService = async (page: number): Promise<IListResponse> => {
  const allProducts = PRODUCT_LIST;
  const totalPages = Math.ceil(allProducts.length / 10);
  const response = {
    count: allProducts.length,
    next: getNextPage(page, totalPages),
    previous: getBeforePage(page, totalPages),
    totalPages: totalPages,
    results: getProductsByPage(page, allProducts, totalPages)
  }
  return new Promise((resolve) => {setTimeout(() => {resolve(response)}, 500)})
}

export const getProductDetailService = async (id: string): Promise<IProducts> => {
  const product = PRODUCT_LIST.find((product) => product.id === id);
  if (!product) {
    throw new Error('Product not found');
  }
  return new Promise((resolve) => {setTimeout(() => {resolve(product)}, 500)})
}

export const searchProductsService = async (text: string, currentLanguage: ILanguageSupported, page: number): Promise<IListResponse> => {
  const productsResponse = await searchProduct(text, currentLanguage);
  const totalPages = Math.ceil(productsResponse.length / 10);
  const response = {
    count: productsResponse.length,
    next: getNextPage(page, totalPages),
    previous: getBeforePage(page, totalPages),
    totalPages: totalPages,
    results: getProductsByPage(page, productsResponse, totalPages)
  }
  return new Promise((resolve) => {setTimeout(() => {resolve(response)}, 500)})
}

const searchProduct = async (text: string, currentLanguage: ILanguageSupported) => {
  if (text === '') {
    return PRODUCT_LIST;
  }
  return PRODUCT_LIST.filter((product) => {
    if (product.name[currentLanguage].includes(text) || product.description[currentLanguage].includes(text)) {
      return product;
    }
  });
}

const getProductsByPage = (page: number, allProducts: IProducts[], totalPages: number) => {
  if (page > totalPages) {
    return [];
  }
  return allProducts.filter((_, index) => index >= (page - 1) * 10 && index < page * 10)
}

const getNextPage = (page: number, totalPages: number) => {
  if (page === totalPages) {
    return totalPages;
  }
  if (page < totalPages) {
    return page + 1;
  }
  return page;
}
const getBeforePage = (page: number, totalPages: number) => {
  if (page < totalPages && page > 1) {
    return page - 1;
  }
  if (page > totalPages || page === totalPages) {
    return totalPages - 1;
  }
  return 0;
}
