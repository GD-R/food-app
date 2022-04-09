import { CircularProgress } from "@mui/material";
import { getAuth, User } from "firebase/auth"
import React, { createContext, ReactNode, useEffect, useState } from 'react'


export const Context = createContext<User | any>({});

interface IProps {
    children: ReactNode
}

const UserContext = (props: IProps) => {

    const[user,setUser] = useState<User | null>(null)
    const[isLoading, setIsLoading] = useState<boolean>(true)
  
    useEffect(() => {
        getAuth().onAuthStateChanged((userDetails: User | null) => {
           setIsLoading(true)
           setUser(userDetails)
           setIsLoading(false)
        })
    }, [])
    
  return (
  
      <Context.Provider value={{user}}>
          {!isLoading && props.children}
          {isLoading && <CircularProgress color="success"/>}
      </Context.Provider>
  
  )
}

export default UserContext
