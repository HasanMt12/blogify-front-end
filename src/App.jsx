import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import BlogDetailsPage from './pages/BlogDetails/BlogDetailsPage'

function App() {
  
  return (
    <>
     <NextUIProvider>
       <Routes>
           <Route index path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />} />
       </Routes>
     </NextUIProvider>
      
    </>
  )
}

export default App
