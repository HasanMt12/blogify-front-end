import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import BlogDetailsPage from './pages/BlogDetails/BlogDetailsPage'
import RegisterPage from './pages/AuthPages/register/RegisterPage'
import { Toaster } from 'react-hot-toast'
import LoginPage from './pages/AuthPages/register/LoginPage'
import UserProfilePage from './pages/UserProfile/UserProfilePage'
import AdminLayout from './pages/AdminDashboard/AdminLayout'
import DashboardHome from './pages/AdminDashboard/components/DashboardPages/Dashboardhome'
import Users from './pages/AdminDashboard/components/DashboardPages/Users'
import ManagePosts from './pages/AdminDashboard/components/DashboardPages/Posts/ManagePosts'
import EditPost from './pages/AdminDashboard/components/DashboardPages/Posts/EditPost'
import UserBlogPost from './pages/UserBlogPost/UserBlogPost'
function App() {
  
  return (
    <>
     <NextUIProvider>
       <Routes>
           <Route index path="/" element={<HomePage />} />
           <Route path="/blog/:slug" element={<BlogDetailsPage />} />
           <Route path="/register" element={<RegisterPage />} />
           <Route path="/login" element={<LoginPage />} />
           <Route path="/user-profile" element={<UserProfilePage />} />
           <Route path="/blog-post" element={<UserBlogPost />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="posts/manage" element={<ManagePosts />} />
            <Route path="users" element={<Users />} />
             <Route path="posts/manage/edit/:slug" element={<EditPost />} />
          </Route>
       
       </Routes>
       <Toaster position="top-center" reverseOrder={false}></Toaster>
     </NextUIProvider>
      
    </>
  )
}

export default App
