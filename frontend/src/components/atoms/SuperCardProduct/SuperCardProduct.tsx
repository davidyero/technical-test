import { ILanguageSupported } from '../../../shared/interfaces/ILanguage'
import { SuperCardProductProps } from './SuperCardProduct.type'
import { useTranslation } from 'react-i18next'
import './SuperCardProduct.scss'
import { SuperActionButtons } from '../SuperActionButtons/SuperActionButtons'

export const SuperCardProduct = ({ product }: SuperCardProductProps) => {
  const { i18n } = useTranslation()

  return (
    <>
      <div className='card-product--container'>
        <div className='card-product--left'>
          <img
            className='card-product--image'
            src={product.image}
            alt='laptop'
          />
        </div>
        <div className='card-product--container-text'>
          <div className='card-product--right--title'>
            {product.name[i18n.language as ILanguageSupported]}
          </div>
          <div className='card-product--right--description'>
            {product.description[i18n.language as ILanguageSupported]}
          </div>
        </div>
      </div>
      <div className='card-product--right'>
        <label className='home__text--cost'>${product.price}</label>
        <div>
          <SuperActionButtons productId={product.id} />
        </div>
      </div>
    </>
  )
}
