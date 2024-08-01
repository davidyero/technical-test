import { useTranslation } from 'react-i18next'
import './SuperLoader.scss'

export const SuperLoader = () => {
  const { t } = useTranslation()
  return (
    <div className='loader'>
      <label className='loader__text'>{t('loading')}</label>
    </div>
  )
}
