import { images } from "../constants";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { FiEdit } from 'react-icons/fi';


const Header =  () => {


    return (
    <Navbar className="bg-transparent rounded-lg" justify="start">
     
      <NavbarBrand  justify="start" className="">
        <img src={images.Logo}></img>
      </NavbarBrand>
    

      <NavbarContent className="hidden sm:flex gap-4 hover:text-cyan-600 font-merriweather" justify="center">
        <NavbarItem>
           blog
        </NavbarItem>
      
      </NavbarContent>

      <NavbarContent as="div" justify="end">
       
          <NavbarItem className="flex items-center justify-center hover:text-cyan-600">
            <FiEdit /> write
              </NavbarItem>
          
  
       
          Login
      
          <Dropdown placement="bottom-end">
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
            <p className="font-semibold text-cyan-600">sample email</p>           
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
     
        
        
      </NavbarContent>
      
    </Navbar>
  );
};

export default Header;
