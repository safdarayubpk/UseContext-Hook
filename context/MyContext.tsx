'use client'

import { createContext, useState } from "react";


export const MyContext = createContext()

export  function ContextProvider({children}:any) {
    const[nameState, setNameState]=useState('Awais Akhtar')
    return (
        <MyContext.Provider value={{nameState, setNameState}}>
            {children}
        </MyContext.Provider>
    )
}