import CopyIcon from '../../../assets/icons/copy.svg'
import EditIcon from '../../../assets/icons/pen.svg'
import TrashIcon from '../../../assets/icons/trash.svg'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { useNotifications } from '../../../hooks/useNotifications'
import { RoleEnum } from '../../../shared/enums/role.enum'
import { SuperActionButtonsProps } from './SuperActionButtons.type'
import './SuperActionButtons.scss'
import { DataContext } from '../../../context/DataContext'
import { useProducts } from '../../../hooks/useProducts'
import { useNavigate } from 'react-router-dom'

export const SuperActionButtons = ({ productId }: SuperActionButtonsProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { auth } = useContext(AuthContext)
  const { data, setData } = useContext(DataContext)
  const { showNotification } = useNotifications()
  const { removeProductById } = useProducts()
  const isAdmin = auth?.user?.role === RoleEnum.ADMIN
  const canEdit = data.featureFlags.EDIT_PRODUCT
  const canRemove = data.featureFlags.REMOVE_PRODUCT

  const removeProduct = async () => {
    try {
      await removeProductById(productId)
      showNotification(t('removeProduct'), t('removeProductSuccess'), 'success')
      setData({
        ...data,
        products: data.products.filter(product => product.id !== productId),
        modal: {
          ...data.modal,
          isOpen: false,
        },
      })
    } catch (error) {
      showNotification(t('removeProduct'), t('removeProductError'), 'danger')
    }
  }

  const handleRemoveProduct = (event: React.MouseEvent<HTMLImageElement>) => {
    setData({
      ...data,
      modal: {
        isOpen: true,
        title: t('removeProduct'),
        message: t('removeProductMessage') + ' ' + productId + '?',
        textConfirm: t('removeProductConfirm'),
        textCancel: t('removeProductCancel'),
        classNameButtonConfirm: 'super-button__danger',
        onConfirm: () => removeProduct(),
        onCancel: () => {
          setData({
            ...data,
            modal: {
              ...data.modal,
              isOpen: false,
            },
          })
        },
        children: null,
      },
    })
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
    navigate(`/edit/${productId}`)
    event.stopPropagation()
  }
  return (
    <div className='action-buttons-container'>
      <img
        onClick={event => copyProduct(event, productId)}
        className='card-product--icon'
        src={CopyIcon}
      />
      {isAdmin && canEdit && (
        <img
          onClick={editProduct}
          className='card-product--icon'
          src={EditIcon}
        />
      )}
      {isAdmin && canRemove && (
        <img
          onClick={handleRemoveProduct}
          className='card-product--icon'
          src={TrashIcon}
        />
      )}
    </div>
  )
}
