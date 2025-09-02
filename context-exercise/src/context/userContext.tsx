import React, { createContext, useContext, useState } from 'react'
const UserContext = createContext({});

export const useUser = ()=> useContext(UserContext);

export default function UserProvieder({children}){
    const [user,setUser] = useState({name:'shema',role:'admin'});

    return (
        <UserContext.Provider value={{user,setUser}} >
            {children}
        </UserContext.Provider>
    )
}






