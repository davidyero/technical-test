import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
const defaultState = {
    products: [],
    modal: {
        isOpen: false,
        title: '',
        message: '',
        textCancel: '',
        textConfirm: '',
        onConfirm: () => { },
        onCancel: () => { },
        children: null,
    },
    featureFlags: {
        INTERNATIONALIZATION: false,
        EDIT_PRODUCT: false,
        REMOVE_PRODUCT: false,
        CREATE_PRODUCT: false,
    },
};
const DataContext = createContext({
    data: defaultState,
    setData: {},
});
const DataContextProvider = ({ children }) => {
    const [data, setData] = useState(defaultState);
    return (_jsx(DataContext.Provider, { value: { data, setData }, children: children }));
};
export { DataContext, DataContextProvider };
