import { IProducts } from '../shared/interfaces/IProducts'
import { ILanguageSupported } from '../shared/interfaces/ILanguage'
import { PRODUCT_LIST } from '../shared/mocks/products.mock'

export const editProduct = async (
  product: IProducts,
  products: IProducts[]
) => {
  return products.map(currentProduct => {
    if (currentProduct.id === product.id) {
      return product
    }
    return currentProduct
  })
}

export const addProduct = async (product: IProducts, products: IProducts[]) => {
  return [...products, product]
}

export const removeProduct = async (
  productId: string,
  products: IProducts[]
): Promise<IProducts[]> => {
  return products.filter(product => product.id !== productId)
}

export const searchProduct = async (
  text: string,
  currentLanguage: ILanguageSupported,
  products: IProducts[]
) => {
  const allProducts = products.length > 0 ? products : PRODUCT_LIST
  if (text === '') {
    return allProducts
  }
  return allProducts.filter(product => {
    if (
      product.name[currentLanguage].includes(text) ||
      product.description[currentLanguage].includes(text)
    ) {
      return product
    }
  })
}

export const getProductsByPage = (
  page: number,
  allProducts: IProducts[],
  totalPages: number
) => {
  if (page > totalPages) {
    return []
  }
  return allProducts.filter(
    (_, index) => index >= (page - 1) * 10 && index < page * 10
  )
}

export const getNextPage = (page: number, totalPages: number) => {
  if (page === totalPages) {
    return totalPages
  }
  if (page < totalPages) {
    return page + 1
  }
  return page
}

export const getBeforePage = (page: number, totalPages: number) => {
  if (page < totalPages && page > 1) {
    return page - 1
  }
  if (page > totalPages || page === totalPages) {
    return totalPages - 1
  }
  return 0
}
