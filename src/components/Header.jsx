import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, Image} from "@nextui-org/react";
import { images, stables } from "../constants";
import {Link} from "react-router-dom"
import { FiEdit } from 'react-icons/fi';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/userLogout.js";
import { useEffect, useState } from "react";

const Header =  () => {
  // Redux hooks for dispatch and selecting user state
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
const [isAdmin, setIsAdmin] = useState(false);
  // Array of menu items for the additional dropdown
  const menuItems = [
    "blogs",
    "articles",
    "FAQ",
    "Help & Feedback",
    "Log Out",
  ];
  
  // Logout handler dispatches the logout action
   const logoutHandler = () => {
   dispatch(logout());
  };
useEffect(() => {
    // Check if the user is an admin after the initial render
    if (userState?.userInfo?.admin === true) {
      setIsAdmin(true);
      console.log('User is an admin');
    }
  }, [userState]);
      console.log(isAdmin)
      console.log(userState?.userInfo)
  return (
  
    <Navbar  className="bg-transparent rounded-lg font-opensans px-0" >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden flex" justify="start">
        <NavbarBrand>
          <Link to="/"> <img src={images.Logo} className="w-9 h-9 " alt="mind Space" title="Mind Space - Home"></img></Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarBrand>
          <Link to="/"> <img src={images.Logo} className="max-w-[50px] min-h-[50px]" alt="mind Space" title="Mind Space - Home"></img>
                        <p className="text-tiny -ml-1 -mt-1">MIND SPACE</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link to="/" color="foreground" href="#">
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="warning">
            Articles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/register" color="foreground" >
            register
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="" justify={{ sm: 'center', md: 'end', lg: 'end' }}>
          <Link to="/blog-post" color="foreground" > 
          <NavbarItem className="flex items-center justify-center md:text-md text-sm hover:text-cyan-600">
            <FiEdit /> write
          </NavbarItem> </Link> 
        
         {userState?.userInfo?( <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Image
              
              src={
                userState?.userInfo.avatar
                  ? stables.UPLOAD_FOLDER_BASE_URL + userState?.userInfo.avatar
                  : "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
              }
              className="transition-transform ring-1 p-[1px] ring-cyan-600 w-8 h-8 md:w-9 md:h-9 cursor-pointer rounded-full"
              size="sm"
            
            />
          </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold text-cyan-600">{userState?.userInfo.email}</p>           
              </DropdownItem>
               {isAdmin ? 
               ( <DropdownItem> <Link to="/admin">Admin Dashboard</Link> </DropdownItem>):
               ""}
              <DropdownItem> <Link to="/user-profile">My profile</Link> </DropdownItem>
              <DropdownItem   onClick={logoutHandler} key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>):(
            <NavbarItem>
            <Link to="/login" color="foreground" >
              Login
            </Link>
          </NavbarItem>
          )}
        
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
   
  );
}

export default Header;