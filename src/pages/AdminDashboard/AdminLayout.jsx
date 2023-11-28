/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/index/users";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import DashboardHeader from "./components/Header";
import { useState } from "react";
import Sidebar from "./components/DrawerSidbar/Sidebar";
import {  AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SideBarMenu from "./components/DrawerSidbar/SideBarMenu";
import { images } from "../../constants";
const AdminLayout = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
    onSuccess: (data) => {
      if (data && data?.admin === false ) {
        navigate("/");
        toast.error("Your are not allowed to access admin panel");
      }else {
        setIsAdmin(true);
      }
      
    },
    onError: (err) => {
      console.log(err);
      navigate("/");
      toast.error("Your are not allowed to access admin panel");
    },
  });

  if (profileIsLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h3 className="text-2xl text-slate-700">Loading...</h3>
      </div>
    );
  }
 if (profileError || !profileData || profileData.admin === false) {
  navigate("/");
  toast.error("You are not allowed to access the admin panel.");
  return null;
}


  return (
  <>
  
     <div className="bg-gray-50 ">

        <DashboardHeader></DashboardHeader>

  {/* <!-- ========== MAIN CONTENT ========== -->
  <!-- Sidebar Toggle -->  */}
  <div className="sticky top-0  inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden ">
    <div className="flex items-center  py-4">
 

       {/* menu burger icon Navigation Toggle*/}
      <div className="cursor-pointer lg:hidden">
        {isOpen ? (
          <AiOutlineClose className="w-6 h-6" onClick={() => setIsOpen(false)} />
        ) : (
          <AiOutlineMenu className="w-6 h-6" onClick={() => setIsOpen(true)} />
        )}
      </div>
      {/* <!-- End Navigation Toggle -->

      <!-- Breadcrumb --> */}
      <ol className="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
        <li className="flex items-center text-sm text-gray-800 ">
          Application Layout
          <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </li>
        <li className="text-sm font-semibold text-gray-800 truncate " aria-current="page">
          Dashboard
        </li>
      </ol>
      {/* <!-- End Breadcrumb --> */}
    </div>
  </div>
  {/* <!-- End Sidebar Toggle -->
    
  <!-- Sidebar --> */}
  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
  <SideBarMenu></SideBarMenu>

  </Sidebar>
  <div className="hs-overlay -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 ">
    <div className="px-6">
     <Link to="/"> <img src={images.Logo} className="max-w-[34px] max-h-[34px]" alt="mind Space" title="Mind Space - Home"></img></Link>
    </div>

    <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <ul className="space-y-1.5">
       
       <Link to="/admin"><li>
          <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 " href="#">
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Dashboard
          </a>
        </li>
        </Link> 

      <Link to="/admin/users">  
      <li>
          <button type="button" className=" w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100  ">
            <svg className="flex-shrink-0 mt-0.5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
            Account
             {/* <svg className="hs-accordion-active:block ms-auto hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

            <svg className="hs-accordion-active:hidden ms-auto block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg> */}
          </button>
        </li>
    </Link>

    

      </ul>
    </nav>
  </div>
  {/* <!-- End Sidebar -->

  <!-- Content --> */}
  <div className="w-full py-2 min-h-screen px-4 sm:px-6 md:px-8 lg:ps-72">
    {/* <!-- Children  --> */}
            <Outlet></Outlet>
  </div>

  {/* <!-- End Content -->
  <!-- ========== END MAIN CONTENT ========== --> */}
</div>

  
</>

  );
};

export default AdminLayout;