import './HomeView.scss';
import EditIcon from '../../assets/icons/pen.svg';
import CopyIcon from '../../assets/icons/copy.svg';
import TrashIcon from '../../assets/icons/trash.svg';
import {SuperCard} from "../../components/atoms/SuperCard/SuperCard.tsx";
import {SuperInput} from "../../components/atoms/SuperInput/SuperInput.tsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";

export const HomeView = () => {
  const {t} = useTranslation();

  const [textFilter, setTextFilter] = useState('')

  const list = [
    {
      id: '0',
      name: 'Computer',
      description: '16 ram',
      price: 20
    },
    {
      id: '1',
      name: 'Computer',
      description: '16 ram',
      price: 20
    },
    {
      id: '2',
      name: 'Computer',
      description: '16 ram',
      price: 20
    },
    {
      id: '3',
      name: 'Computer',
      description: '16 ram',
      price: 20
    },
    {
      id: '4',
      name: 'Computer',
      description: '16 ram',
      price: 20
    },
    {
      id: '5',
      name: 'Computer',
      description: '16 ram',
      price: 20
    },
    {
      id: '6',
      name: 'Computer',
      description: '16 ram',
      price: 20
    },
    {
      id: '7',
      name: 'Computer',
      description: '16 ram',
      price: 20
    },
    {
      id: '8',
      name: 'Computer',
      description: '16 ram',
      price: 20
    },
    {
      id: '9',
      name: 'Computer',
      description: '16 ram',
      price: 20
    },
  ]

  const removeProduct = () => {
    console.log('Remove product');
  }

  const copyProduct = () => {
    console.log('Copy product');
  }

  const editProduct = () => {
    console.log('Edit product');
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextFilter(event.target.value)
  }

  const handleProductDetail = () => {
    console.log('detail')
  }

  const handleFilter = () => {
    console.log('Filter by type')
    console.log('Filter by price')
    console.log('order')
  }

  return (
    <div className="home">
      <div className="home__containter">
        <div className="home__containter--content">
          <div className="home__filter-row">
            <label className="home__containter--title">{t('products')}</label>
            <div className="home__filter">
              <SuperInput className={''} type={''} placeholder={'Search'} label={''} value={textFilter} onChange={handleSearch}/>
              </div>
            </div>
          <div className="home--list">
            {
              list.map((product, index) => (
                <SuperCard className="home__card" onClick={handleProductDetail} key={`product-${index}`}>
                  <>
                    <div className="home__card--container">
                      <div className="home__card--left" />
                      <div className="home__card--container-text">
                        <div className="home__card--right--title">{index} - {product.name}</div>
                        <div className="home__card--right--description">{product.description}</div>
                      </div>
                    </div>
                    <div className="home__card--right">
                      <label className="home__text--cost">${product.price}</label>
                      <div>
                        <img onClick={editProduct} className="home__card--icon" src={EditIcon}/>
                        <img onClick={copyProduct}  className="home__card--icon" src={CopyIcon}/>
                        <img onClick={removeProduct} className="home__card--icon" src={TrashIcon}/>
                      </div>
                    </div>
                  </>
                </SuperCard>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
