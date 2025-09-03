import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import {UserProvider} from "./context/UserContext"


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
