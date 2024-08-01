import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import loginEN from './en/login.json'
import loginES from './es/login.json'
import homeEN from './en/home.json'
import homeES from './es/home.json'
import detailEN from './en/detail.json'
import detailES from './es/detail.json'

const resources = {
  en: {
    translation: {
      ...loginEN,
      ...homeEN,
      ...detailEN,
    },
  },
  es: {
    translation: {
      ...loginES,
      ...homeES,
      ...detailES,
    },
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
