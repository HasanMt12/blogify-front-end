import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { images } from "../constants";
import {Link} from "react-router-dom"
import { FiEdit } from 'react-icons/fi';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/userLogout.js";

const Header =  () => {
  // Redux hooks for dispatch and selecting user state
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

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

  return (
    <Navbar  className="bg-transparent rounded-lg font-opensans ">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
           <img src={images.Logo}></img>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
           <img src={images.Logo}></img>
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

      <NavbarContent justify="end">
        <NavbarItem className="flex items-center justify-center hover:text-cyan-600">
            <FiEdit /> write
         </NavbarItem>
         {userState?.userInfo?( <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform ring-cyan-600"
              size="sm"
            
            />
          </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold text-cyan-600">{userState?.userInfo.email}</p>           
              </DropdownItem>
              <DropdownItem key="settings">Dashboard</DropdownItem>
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