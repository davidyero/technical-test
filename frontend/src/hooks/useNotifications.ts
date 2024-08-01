import { Store } from 'react-notifications-component'
import { NOTIFICATION_TYPE } from 'react-notifications-component/dist/src/typings'

export const useNotifications = () => {
  const showNotification = (
    title: string,
    message: string,
    type: NOTIFICATION_TYPE
  ) => {
    Store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    })
  }

  return {
    showNotification,
  }
}
