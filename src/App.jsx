import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  
  return (
    <>
     <NextUIProvider>
      <HomePage />
     </NextUIProvider>
      
    </>
  )
}

export default App
