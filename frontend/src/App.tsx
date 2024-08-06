import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { ContentApp } from './views/ContentApp/ContentApp'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import './translation/i18n'
import { DataContextProvider } from './context/DataContext'

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
