import {getAllProductsService, getProductDetailService, searchProductsService} from "../services/products.ts";
import {useState} from "react";
import {IListResponse} from "../shared/interfaces/IProducts.ts";
import {ILanguageSupported} from "../shared/interfaces/ILanguage.ts";

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const getAllProducts = async (page: number): Promise<IListResponse> => {
    try {
      setIsLoading(true);
      return await getAllProductsService(page);
    } catch (error) {
      console.error('getAllProducts', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const getProductDetail = async (id: string) => {
    try {
      setIsLoading(true);
      return await getProductDetailService(id);
    } catch (error) {
      console.error('getProductDetail', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const searchProducts = async (text: string, currentLanguage: ILanguageSupported, page: number): Promise<IListResponse> => {
    try {
      setIsLoading(true);
      return await searchProductsService(text, currentLanguage, page);
    } catch (error) {
      console.error('searchProducts', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    getAllProducts,
    getProductDetail,
    searchProducts,
    isLoading
  }
}
