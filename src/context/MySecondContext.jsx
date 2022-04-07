import { createContext , useContext, useState } from "react";

const MySecondContext = createContext()
MySecondContext.displayName = "react Context"

export const useCustomContext2 = () => {
    return useContext(MySecondContext)
}

function MySecondContextProvider({children}){

    const [username,setUsername]=useState('')

    let obj2 ={
        username:username,
        setUsername:setUsername
    }


    return(
        <MySecondContext.Provider value={obj2}>
            {children}
        </MySecondContext.Provider>
    )
}
export default MySecondContextProvider