import './SuperHeader.scss'
import { SuperTooltip } from '../../atoms/SuperTooltip/SuperTooltip.tsx'
import MouseIcon from '../../../assets/icons/mouse.svg'
import { useNavigate } from 'react-router-dom'

export const SuperHeader = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/')
  }
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__container__logo' onClick={handleNavigate}>
          <img className='header__logo' src={MouseIcon} alt='mouse' />
          <label className='header__text'>SuperStore</label>
        </div>
        <div>
          <SuperTooltip />
        </div>
      </div>
    </div>
  )
}
