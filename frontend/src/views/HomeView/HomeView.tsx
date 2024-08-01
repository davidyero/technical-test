import './HomeView.scss';
import FilterIcon from '../../assets/icons/filter.svg';
import MagnifierIcon from '../../assets/icons/magnifer.svg';
import {SuperCard} from "../../components/atoms/SuperCard/SuperCard.tsx";
import {SuperInput} from "../../components/atoms/SuperInput/SuperInput.tsx";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {SuperPaginator} from "../../components/atoms/SuperPaginator/SuperPaginator.tsx";
import {useProducts} from "../../hooks/useProducts.ts";
import {IProducts} from "../../shared/interfaces/IProducts.ts";
import {SuperLoader} from "../../components/atoms/SuperLoader/SuperLoader.tsx";
import {useNavigate} from "react-router-dom";
import {SuperCardProduct} from "../../components/atoms/SuperCardProduct/SuperCardProduct.tsx";
import {ILanguageSupported} from "../../shared/interfaces/ILanguage.ts";
import {SuperEmptyState} from "../../components/atoms/SuperEmptyState/SuperEmptyState.tsx";

export const HomeView = () => {
  const navigate = useNavigate();
  const {t, i18n} = useTranslation();
  const {searchProducts, getAllProducts, isLoading} = useProducts();
  const [allProducts, setAllProducts] = useState<IProducts[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [textFilter, setTextFilter] = useState('')

  const handleSearch = async (page: number) => {
    setCurrentPage(page)
    const newFilter = await searchProducts(textFilter, i18n.language as ILanguageSupported, page);
    setAllProducts(newFilter.results);
    setAllProducts(newFilter.results);
    setTotalPages(newFilter.totalPages);
  }

  const handleProductDetail = (id: string) => {
    navigate(`/detail/${id}`);
    console.log('detail')
  }

  const handleFilter = () => {
    console.log('Filter by type')
    console.log('Filter by price')
    console.log('order')
  }

  const initialValues = async () => {
    try {
      const listResponse = await getAllProducts(currentPage);
      setAllProducts(listResponse.results);
      setTotalPages(listResponse.totalPages);
    } catch (error) {
      console.error('initialValues ::: ', error);
    }
  }

  useEffect(() => {
    if(textFilter === '') {
      initialValues()
    } else {
      handleSearch(currentPage)
    }
    // eslint-disable-next-line
  }, [currentPage])

  return (
    <div className="home">
      <div className="home__containter">
        <div className="home__containter--content">
          <div className="home__filter-row">
            <div className="home__filter-row--text">
              <label className="home__containter--title">{t('products')}</label>
              <img className="home--icon home--icon-filter" src={FilterIcon} onClick={handleFilter} alt={'filter'}/>
            </div>
            <div className="home__filter">
              <SuperInput className={'home__filter--search-button'} type={''} placeholder={'Search'} label={''} value={textFilter} onChange={(event) => setTextFilter(event.target.value)}/>
              <img className="home--icon home--icon-search" src={MagnifierIcon} alt={'search'} onClick={() => handleSearch(1)}/>
            </div>
          </div>
          <div className="home--list">
            {isLoading && <SuperLoader />}
            {!isLoading && allProducts.length === 0 && <SuperEmptyState text={t('noProducts')} />}
            {!isLoading && allProducts.length > 0 &&(<>
              <SuperPaginator currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
              {
                allProducts.map((product, index) => (
                  <SuperCard className="card-product" onClick={() => handleProductDetail(product.id)} key={`product-${index}`}>
                    <SuperCardProduct product={product}/>
                  </SuperCard>
                ))
              }
            </>)}
          </div>
        </div>
      </div>
    </div>
  );
}
