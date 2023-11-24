import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import BlogDetailsPage from './pages/BlogDetails/BlogDetailsPage'
import RegisterPage from './pages/AuthPages/register/RegisterPage'
import { Toaster } from 'react-hot-toast'
import LoginPage from './pages/AuthPages/register/LoginPage'
function App() {
  
  return (
    <>
     <NextUIProvider>
       <Routes>
           <Route index path="/" element={<HomePage />} />
           <Route path="/blog/:id" element={<BlogDetailsPage />} />
           <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
       </Routes>
       <Toaster position="top-center" reverseOrder={false}></Toaster>
     </NextUIProvider>
      
    </>
  )
}

export default App
