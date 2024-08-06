import { Store } from 'react-notifications-component';
export const useNotifications = () => {
    const showNotification = (title, message, type) => {
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
        });
    };
    return {
        showNotification,
    };
};
