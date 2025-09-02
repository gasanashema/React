
import Dashboard from './context/Dashboard'
import ThemeProvider from './context/themeContext'
import UserProvider from './context/userContext'

function App() {

  return (
    <UserProvider>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
