import { PRODUCT_LIST } from '../shared/mocks/products.mock.ts'
import { IListResponse, IProducts } from '../shared/interfaces/IProducts.ts'
import { ILanguageSupported } from '../shared/interfaces/ILanguage.ts'
import { SetStateAction } from 'react'
import { DataContextInterface } from '../context/DataContext.tsx'
import {
  addProduct,
  editProduct,
  getBeforePage,
  getNextPage,
  getProductsByPage,
  removeProduct,
  searchProduct,
} from './products.helper.ts'

export const getAllProductsService = async (
  page: number,
  data: DataContextInterface,
  setData: {
    (value: SetStateAction<DataContextInterface>): void
    (arg0: never): void
  }
): Promise<IListResponse> => {
  const allProducts = data.products.length > 0 ? data.products : PRODUCT_LIST
  if (data.products.length === 0) {
    setData({
      ...data,
      products: allProducts,
    })
  }
  const totalPages = Math.ceil(allProducts.length / 10)
  const response = {
    count: allProducts.length,
    next: getNextPage(page, totalPages),
    previous: getBeforePage(page, totalPages),
    totalPages: totalPages,
    results: getProductsByPage(page, allProducts, totalPages),
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 500)
  })
}

export const getProductDetailService = async (
  id: string,
  products: IProducts[]
): Promise<IProducts> => {
  const allProducts = products.length > 0 ? products : PRODUCT_LIST
  const product = allProducts.find(product => product.id === id)
  if (!product) {
    throw new Error('Product not found')
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(product)
    }, 500)
  })
}

export const searchProductsService = async (
  text: string,
  currentLanguage: ILanguageSupported,
  page: number,
  products: IProducts[]
): Promise<IListResponse> => {
  const productsResponse = await searchProduct(text, currentLanguage, products)
  const totalPages = Math.ceil(productsResponse.length / 10)
  const response = {
    count: productsResponse.length,
    next: getNextPage(page, totalPages),
    previous: getBeforePage(page, totalPages),
    totalPages: totalPages,
    results: getProductsByPage(page, productsResponse, totalPages),
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 500)
  })
}

export const removeProductService = async (
  productId: string,
  products: IProducts[]
): Promise<IProducts[]> => {
  const allProducts = products.length > 0 ? products : PRODUCT_LIST
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(removeProduct(productId, allProducts))
    }, 500)
  })
}

export const createProductService = async (
  product: IProducts,
  products: IProducts[]
): Promise<IProducts[]> => {
  const allProducts = products.length > 0 ? products : PRODUCT_LIST
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(addProduct(product, allProducts))
    }, 500)
  })
}

export const editProductService = async (
  product: IProducts,
  products: IProducts[]
): Promise<IProducts[]> => {
  const allProducts = products.length > 0 ? products : PRODUCT_LIST
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(editProduct(product, allProducts))
    }, 500)
  })
}
