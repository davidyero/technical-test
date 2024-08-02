import {
  createProductService,
  editProductService,
  getAllProductsService,
  getProductDetailService,
  removeProductService,
  searchProductsService,
} from '../services/products.ts'
import { useContext, useState } from 'react'
import { IListResponse, IProducts } from '../shared/interfaces/IProducts.ts'
import { ILanguageSupported } from '../shared/interfaces/ILanguage.ts'
import { DataContext } from '../context/DataContext.tsx'

export const useProducts = () => {
  const { data, setData } = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(false)
  const getAllProducts = async (page: number) => {
    try {
      setIsLoading(true)
      return await getAllProductsService(page, data, setData)
    } catch (error) {
      console.error('getAllProducts', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const getProductDetail = async (id: string) => {
    try {
      setIsLoading(true)
      return await getProductDetailService(id, data.products)
    } catch (error) {
      console.error('getProductDetail', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const searchProducts = async (
    text: string,
    currentLanguage: ILanguageSupported,
    page: number
  ): Promise<IListResponse> => {
    try {
      setIsLoading(true)
      return await searchProductsService(
        text,
        currentLanguage,
        page,
        data.products
      )
    } catch (error) {
      console.error('searchProducts', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const removeProductById = async (productId: string) => {
    try {
      setIsLoading(true)
      const newList = await removeProductService(productId, data.products)
      setData({
        ...data,
        products: newList,
      })
    } catch (error) {
      console.error('removeProduct', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const createProduct = async (product: IProducts) => {
    setIsLoading(true)
    try {
      const newProducts = await createProductService(product, data.products)
      setData({
        ...data,
        products: newProducts,
      })
    } catch (error) {
      console.error('createProduct', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const editProduct = async (product: IProducts) => {
    setIsLoading(true)
    try {
      const newProducts = await editProductService(product, data.products)
      setData({
        ...data,
        products: newProducts,
      })
    } catch (error) {
      console.error('editProduct', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    getAllProducts,
    getProductDetail,
    searchProducts,
    removeProductById,
    createProduct,
    editProduct,
    isLoading,
  }
}
