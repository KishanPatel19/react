import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
  <UserContextProvider>
   <h2 id='heading'>Context API</h2>
   <Login />
   <Profile />
   </UserContextProvider>
  
  )
}

export default App
