import './SuperHeader.scss'
import {useTranslation} from "react-i18next";

export const SuperHeader = () => {
  const {i18n} = useTranslation();
  const handleLanguage = () => {
    i18n.changeLanguage('es')
  }
  return (
    <div className="header">
      <div className="header__container">
        <div>HEADER</div>
        <div onClick={handleLanguage}>Change Language</div>
      </div>
    </div>
  )
}
