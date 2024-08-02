import './HomeView.scss'
import FilterIcon from '../../assets/icons/filter.svg'
import MagnifierIcon from '../../assets/icons/magnifer.svg'
import { SuperCard } from '../../components/atoms/SuperCard/SuperCard'
import { SuperInput } from '../../components/atoms/SuperInput/SuperInput'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SuperPaginator } from '../../components/atoms/SuperPaginator/SuperPaginator'
import { useProducts } from '../../hooks/useProducts'
import { IProducts } from '../../shared/interfaces/IProducts'
import { SuperLoader } from '../../components/atoms/SuperLoader/SuperLoader'
import { useNavigate } from 'react-router-dom'
import { SuperCardProduct } from '../../components/atoms/SuperCardProduct/SuperCardProduct'
import { ILanguageSupported } from '../../shared/interfaces/ILanguage'
import { SuperEmptyState } from '../../components/atoms/SuperEmptyState/SuperEmptyState'
import { DataContext } from '../../context/DataContext'
import { SuperButton } from '../../components/atoms/SuperButton/SuperButton'
import { RoleEnum } from '../../shared/enums/role.enum'
import { AuthContext } from '../../context/AuthContext'

export const HomeView = () => {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const { searchProducts, getAllProducts, isLoading } = useProducts()
  const { data } = useContext(DataContext)
  const [allProducts, setAllProducts] = useState<IProducts[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [textFilter, setTextFilter] = useState('')
  const { auth } = useContext(AuthContext)
  const isAdmin = auth?.user?.role === RoleEnum.ADMIN
  const canCreate = data.featureFlags.CREATE_PRODUCT

  const handleSearch = async (page: number) => {
    setCurrentPage(page)
    const newFilter = await searchProducts(
      textFilter,
      i18n.language as ILanguageSupported,
      page
    )
    setAllProducts(newFilter.results)
    setAllProducts(newFilter.results)
    setTotalPages(newFilter.totalPages)
  }

  const handleProductDetail = (id: string) => {
    navigate(`/detail/${id}`)
  }

  const handleFilter = () => {
    console.log('Filter by type')
    console.log('Filter by price')
    console.log('order')
  }

  const initialValues = async () => {
    try {
      const listResponse = await getAllProducts(currentPage)
      setAllProducts(listResponse.results)
      setTotalPages(listResponse.totalPages)
    } catch (error) {
      console.error('initialValues ::: ', error)
    }
  }

  const updateValues = async () => {
    try {
      const listResponse = await getAllProducts(currentPage)
      setAllProducts(listResponse.results)
      setTotalPages(listResponse.totalPages)
    } catch (error) {
      console.error('updateValues ::: ', error)
    }
  }

  const handleCreateProduct = () => {
    navigate('/create')
  }

  useEffect(() => {
    if (textFilter === '') {
      initialValues()
    } else {
      handleSearch(currentPage)
    }
    // eslint-disable-next-line
  }, [currentPage])

  useEffect(() => {
    updateValues()
    // eslint-disable-next-line
  }, [data.products]);

  return (
    <div className='home'>
      <div className='home__containter'>
        <div className='home__containter--content'>
          <div className='home__filter-row'>
            <div className='home__filter-row--text'>
              <label className='home__containter--title'>{t('products')}</label>
              <img
                className='home--icon home--icon-filter'
                src={FilterIcon}
                onClick={handleFilter}
                alt={'filter'}
              />
            </div>
            <div className='home__filter'>
              <SuperInput
                className={'home__filter--search-button'}
                type={''}
                placeholder={'Search'}
                label={''}
                value={textFilter}
                onChange={event => setTextFilter(event.target.value)}
              />
              <img
                className='home--icon home--icon-search'
                src={MagnifierIcon}
                alt={'search'}
                onClick={() => handleSearch(1)}
              />
            </div>
          </div>
          {canCreate && isAdmin && (
            <div>
              <SuperButton
                text={t('createProduct')}
                onClick={handleCreateProduct}
              />
            </div>
          )}
          <div className='home--list'>
            {isLoading && <SuperLoader />}
            {!isLoading && allProducts.length === 0 && (
              <SuperEmptyState text={t('noProducts')} />
            )}
            {!isLoading && allProducts.length > 0 && (
              <>
                <SuperPaginator
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
                {allProducts.map((product, index) => (
                  <SuperCard
                    className='card-product'
                    onClick={() => handleProductDetail(product.id)}
                    key={`product-${index}`}
                  >
                    <SuperCardProduct product={product} />
                  </SuperCard>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
