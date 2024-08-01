import englishFlag from '../../../assets/flags/english-flag.svg'
import spanishFlag from '../../../assets/flags/spanish-flag.svg'
import userIcon from '../../../assets/icons/user.svg'
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {ILanguageSupported} from "../../../shared/interfaces/ILanguage.ts";
import './SuperTooltip.scss'
import {useAuth} from "../../../hooks/useAuth.ts";

export const SuperTooltip = () => {
  const {logout} = useAuth()
  const {i18n, t} = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false)
  const languages = [
    {
      name: 'en',
      flag: englishFlag
    },
    {
      name: 'es',
      flag: spanishFlag
    }
  ];

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language as ILanguageSupported);
    setShowTooltip(false)
  }

  const handleLogout = () => {
    logout();
  }

  return (
    <div className={'tooltip-container'}>
      <img
        onClick={() => setShowTooltip(!showTooltip)}
        src={userIcon}
        alt="Download on the App Store"
        className="tooltip__icon"/>
      {showTooltip && <div className={'tooltip-container__select'}>
        <div className={'tooltip-container__triangle'}></div>
        <div className={'tooltip-container__row'}>
          {languages.map((language, index) => (
            <div key={index} className={`tooltip-container__option ${i18n.language === language.name ? 'tooltip-container__selected' : ''}`}
                 onClick={() => handleLanguageChange(language.name)}>
              <img className={'tooltip-container__flag'} src={language.flag} alt={language.name}/>
            </div>
          ))}
        </div>
        <div className={'tooltip-container__row'}>
            <label onClick={handleLogout} className={'tooltip-container__option tooltip-container__label'}>{t('closeSession')}</label>
        </div>
      </div>}
    </div>
  )
}
