var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { USER_JULIAN, USER_TATIANA } from '../shared/mocks/users.mock';
export const loginService = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    if (email === 'julian@gmail.com' && password === '123456') {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(USER_JULIAN);
            }, 500);
        });
    }
    if (email === 'tatiana@gmail.com' && password === '123456') {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(USER_TATIANA);
            }, 500);
        });
    }
    throw new Error('Invalid credentials');
});
