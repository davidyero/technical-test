import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ALL_ROUTES} from "./routes/routes.constants.tsx";
import {AuthContextProvider} from "./context/AuthContext.tsx";
import {SuperHeader} from "./components/SuperHeader/SuperHeader.tsx";
import './translation/i18n.tsx';

function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter basename="">
        <div className="app">
          <SuperHeader />
          <Routes>
            {
              ALL_ROUTES.map(route => (
                <Route key={route.name} path={route.name} Component={route.component} />
              ))
            }
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App
