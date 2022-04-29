import React, { useContext } from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from "react-router-dom";
import { Context } from "./UserContext";
import {  User } from "firebase/auth"

interface ISearch {
  setSearch(value: string): void;
  search: string,

}

const TopBar = (props:ISearch) => {
    
    const navigate = useNavigate();
    
    const  {user}  = useContext<User | any>(Context)
    const isUserExits = user && user.uid

  return (
    <div className='relative my-4'>
       <AppBar className='fixed'>
         <Toolbar className='flex'>
             <div className='bg-slate-300 flex-grow'>
         <SearchIcon className='text-white'/>
         <InputBase className='w-[95%]' value={props.search} 
           onChange={(e) => props.setSearch(e.target.value)}
         />
         </div>
         <div>
             {!isUserExits && <Button className='text-white' onClick={() => navigate("/login")}>Login</Button>}
             {!isUserExits && <Button className='text-white' onClick={() => navigate("/signup")}>SignUp</Button>}
             {isUserExits && <Button className='text-white' onClick={() => navigate("/profile")}>Profile</Button>}
             </div>
         </Toolbar>
     </AppBar>
    </div>
  )
}

export default TopBar
