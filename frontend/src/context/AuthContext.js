import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
const defaultState = {
    isLogged: false,
    isGuest: false,
};
const AuthContext = createContext({
    auth: defaultState,
    setAuth: {},
});
const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(defaultState);
    return (_jsx(AuthContext.Provider, { value: { auth, setAuth }, children: children }));
};
export { AuthContext, AuthContextProvider };
