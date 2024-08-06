var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loginService } from '../services/auth';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocalStorage } from './useLocalStorage';
export const useAuth = () => {
    const { setAuth } = useContext(AuthContext);
    const { clear } = useLocalStorage();
    const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        return yield loginService(email, password);
    });
    const logout = () => {
        setAuth({
            isGuest: false,
            isLogged: false,
        });
        clear();
    };
    return {
        login,
        logout,
    };
};
