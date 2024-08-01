import CopyIcon from '../../../assets/icons/copy.svg'
import EditIcon from '../../../assets/icons/pen.svg'
import TrashIcon from '../../../assets/icons/trash.svg'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext.tsx'
import { useNotifications } from '../../../hooks/useNotifications.ts'
import { RoleEnum } from '../../../shared/enums/role.enum.ts'
import { SuperActionButtonsProps } from './SuperActionButtons.type.ts'
import './SuperActionButtons.scss'

export const SuperActionButtons = ({ productId }: SuperActionButtonsProps) => {
  const { t } = useTranslation()
  const { auth } = useContext(AuthContext)
  const { showNotification } = useNotifications()
  const isAdmin = auth?.user?.role === RoleEnum.ADMIN

  const removeProduct = (event: React.MouseEvent<HTMLImageElement>) => {
    console.log('Remove product')
    event.stopPropagation()
  }

  const copyProduct = (
    event: React.MouseEvent<HTMLImageElement>,
    id: string
  ) => {
    showNotification(t('copyProduct'), t('copyProductMessage'), 'success')
    navigator.clipboard.writeText(`http://localhost:5173/detail/${id}`)
    event.stopPropagation()
  }

  const editProduct = (event: React.MouseEvent<HTMLImageElement>) => {
    console.log('Edit product')
    event.stopPropagation()
  }
  return (
    <div className='action-buttons-container'>
      <img
        onClick={event => copyProduct(event, productId)}
        className='card-product--icon'
        src={CopyIcon}
      />
      {isAdmin && (
        <img
          onClick={editProduct}
          className='card-product--icon'
          src={EditIcon}
        />
      )}
      {isAdmin && (
        <img
          onClick={removeProduct}
          className='card-product--icon'
          src={TrashIcon}
        />
      )}
    </div>
  )
}
