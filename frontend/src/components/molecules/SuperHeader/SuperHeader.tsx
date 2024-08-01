import './SuperHeader.scss'
import {SuperTooltip} from "../../atoms/SuperTooltip/SuperTooltip.tsx";
import MouseIcon from '../../../assets/icons/mouse.svg'

export const SuperHeader = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__logo">
          <img className="header__logo" src={MouseIcon} alt="mouse"/>
          <label>SuperStore</label>
        </div>
        <div>
          <SuperTooltip />
        </div>
      </div>
    </div>
  )
}
