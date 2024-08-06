import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { ContentApp } from './views/ContentApp/ContentApp';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import './translation/i18n';
import { DataContextProvider } from './context/DataContext';
function App() {
    return (_jsx(AuthContextProvider, { children: _jsx(DataContextProvider, { children: _jsx(BrowserRouter, { basename: '/technical-test/', children: _jsxs("div", { className: 'app', children: [_jsx(ReactNotifications, {}), _jsx(ContentApp, {})] }) }) }) }));
}
export default App;
