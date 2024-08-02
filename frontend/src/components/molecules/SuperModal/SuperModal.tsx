import Modal from 'react-modal'
import { SuperModalProps } from './SuperModal.type.ts'
import { DataContext } from '../../../context/DataContext.tsx'
import { useContext } from 'react'
import { SuperButton } from '../../atoms/SuperButton/SuperButton.tsx'
import './SuperModal.scss'

export const SuperModal = ({ children, ...props }: SuperModalProps) => {
  const { data } = useContext(DataContext)
  return (
    <Modal style={customStyles} {...props}>
      <div className='modal'>
        <div className='modal__text-container'>
          <label className='modal__text-container--title'>
            {data.modal.title}
          </label>
          <label className='modal__text-container--subtitle'>
            {data.modal.message}
          </label>
        </div>
        {children}
        <div className='modal__button-container'>
          <SuperButton
            className={data.modal.classNameButtonConfirm}
            text={data.modal.textConfirm}
            onClick={data.modal.onConfirm}
          />
          <SuperButton
            className={data.modal.classNameButtonCancel}
            text={data.modal.textCancel}
            onClick={data.modal.onCancel}
          />
        </div>
      </div>
    </Modal>
  )
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 20,
  },
}
