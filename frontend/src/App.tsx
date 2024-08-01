import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.tsx'
import { ContentApp } from './views/ContentApp/ContentApp.tsx'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import './translation/i18n.tsx'
import { DataContextProvider } from './context/DataContext.tsx'

function App() {
  return (
    <AuthContextProvider>
      <DataContextProvider>
        <BrowserRouter basename=''>
          <div className='app'>
            <ReactNotifications />
            <ContentApp />
          </div>
        </BrowserRouter>
      </DataContextProvider>
    </AuthContextProvider>
  )
}

export default App
