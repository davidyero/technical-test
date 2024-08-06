import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SuperInput } from '../../components/atoms/SuperInput/SuperInput'
import './CreateEditView.scss'
import { useTranslation } from 'react-i18next'
import { SuperButton } from '../../components/atoms/SuperButton/SuperButton'
import { SuperLoader } from '../../components/atoms/SuperLoader/SuperLoader'
import { IProducts } from '../../shared/interfaces/IProducts'
import { useProducts } from '../../hooks/useProducts'
import LeftIcon from '../../assets/icons/left.svg'
import { useNotifications } from '../../hooks/useNotifications'

export const CreateEditView = () => {
  const { showNotification } = useNotifications()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { createProduct, editProduct, getProductDetail, isLoading } =
    useProducts()
  const { id } = useParams()
  const [nameEs, setNameEs] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [descriptionEs, setDescriptionEs] = useState('')
  const [descriptionEn, setDescriptionEn] = useState('')
  const [price, setPrice] = useState(0)
  const [ram, setRam] = useState('')
  const [cpu, setCpu] = useState('')
  const [gpu, setGpu] = useState('')
  const [display, setDisplay] = useState('')
  const [disk, setDisk] = useState('')
  const [image, setImage] = useState('')

  const handleEditProduct = async () => {
    const newProduct: IProducts = {
      id: id ?? '',
      name: {
        es: nameEs,
        en: nameEn,
      },
      description: {
        es: descriptionEs,
        en: descriptionEn,
      },
      data: {
        ram,
        cpu,
        gpu,
        display,
        disk,
      },
      price,
      image,
    }
    try {
      await editProduct(newProduct)
      showNotification(
        t('updatedProduct'),
        t('updatedProductSuccess'),
        'success'
      )
      handleBack()
    } catch (error) {
      console.error('handleEditProduct', error)
    }
  }

  const handleCreateProduct = async () => {
    const newProduct: IProducts = {
      id: '',
      name: {
        es: nameEs,
        en: nameEn,
      },
      description: {
        es: descriptionEs,
        en: descriptionEn,
      },
      data: {
        ram,
        cpu,
        gpu,
        display,
        disk,
      },
      price,
      image,
    }
    try {
      await createProduct(newProduct)
      showNotification(
        t('createdProduct'),
        t('createdProductSuccess'),
        'success'
      )
      handleBack()
    } catch (error) {
      console.error('handleCreateProduct', error)
    }
  }

  const validateForm = () => {
    if (
      !nameEs ||
      !nameEn ||
      !descriptionEs ||
      !descriptionEn ||
      !price ||
      !ram ||
      !cpu ||
      !gpu ||
      !display ||
      !disk ||
      !image
    ) {
      return false
    }
    return true
  }

  const handleBack = () => {
    navigate('/')
  }

  const initValuesToEdit = async () => {
    if (id) {
      try {
        const product = await getProductDetail(id)
        if (product) {
          setNameEs(product.name.es)
          setNameEn(product.name.en)
          setDescriptionEs(product.description.es)
          setDescriptionEn(product.description.en)
          setPrice(product.price)
          setRam(product.data.ram)
          setCpu(product.data.cpu)
          setGpu(product.data.gpu)
          setDisplay(product.data.display)
          setDisk(product.data.disk)
          setImage(product.image)
        } else {
          console.error('initValuesToEdit', 'Product not found')
          navigate('/')
        }
      } catch (error) {
        console.error('initValuesToEdit', error)
      }
    }
  }

  useEffect(() => {
    if (id) {
      initValuesToEdit()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='create'>
      <div className='create__container'>
        <div className='detail__container--back'>
          <div onClick={handleBack} className='detail__container--back-action'>
            <img className='paginator__icon' src={LeftIcon} alt='left' />
            <label className='detail__container--back-text'>{t('back')}</label>
          </div>
        </div>
        <div className='create__container--title'>
          <h1>{id ? 'Edit' : 'Create'}</h1>
        </div>
        {isLoading && <SuperLoader />}
        <div className='create__container--content'>
          <div className='create__form'>
            <SuperInput
              className={'super-input'}
              type={'text'}
              placeholder={t('nameEn')}
              label={t('nameEn')}
              value={nameEn}
              onChange={e => setNameEn(e.target.value)}
            />
            <SuperInput
              className={'super-input'}
              type={'text'}
              placeholder={t('nameEs')}
              label={t('nameEs')}
              value={nameEs}
              onChange={e => setNameEs(e.target.value)}
            />
            <SuperInput
              className={'super-input'}
              type={'text'}
              placeholder={t('descriptionEn')}
              label={t('descriptionEn')}
              value={descriptionEn}
              onChange={e => setDescriptionEn(e.target.value)}
            />
            <SuperInput
              className={'super-input'}
              type={'text'}
              placeholder={t('descriptionEs')}
              label={t('descriptionEs')}
              value={descriptionEs}
              onChange={e => setDescriptionEs(e.target.value)}
            />
            <SuperInput
              className={'super-input'}
              type={'number'}
              placeholder={t('price')}
              label={t('price')}
              value={String(price)}
              onChange={e => setPrice(e.target.value as unknown as number)}
            />
            <SuperInput
              className={'super-input'}
              type={'text'}
              placeholder={t('ram')}
              label={t('ram')}
              value={ram}
              onChange={e => setRam(e.target.value)}
            />
            <SuperInput
              className={'super-input'}
              type={'text'}
              placeholder={t('cpu')}
              label={t('cpu')}
              value={cpu}
              onChange={e => setCpu(e.target.value)}
            />
            <SuperInput
              className={'super-input'}
              type={'text'}
              placeholder={t('gpu')}
              label={t('gpu')}
              value={gpu}
              onChange={e => setGpu(e.target.value)}
            />
            <SuperInput
              className={'super-input'}
              type={'text'}
              placeholder={t('display')}
              label={t('display')}
              value={display}
              onChange={e => setDisplay(e.target.value)}
            />
            <SuperInput
              className={'super-input'}
              type={'text'}
              placeholder={t('disk')}
              label={t('disk')}
              value={disk}
              onChange={e => setDisk(e.target.value)}
            />
            <SuperInput
              className={'super-input'}
              type={'text'}
              placeholder={t('image')}
              label={t('image')}
              value={image}
              onChange={e => setImage(e.target.value)}
            />
            <div className='create__content-buttons'>
              <SuperButton
                isDisabled={!validateForm()}
                text={t(id ? 'updateProduct' : 'createProduct')}
                onClick={id ? handleEditProduct : handleCreateProduct}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
