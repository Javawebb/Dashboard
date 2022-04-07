import { createContext , useContext, useState } from "react";

const MyContext = createContext()
MyContext.displayName = "react Context"

export const useCustomContext = () => {
    return useContext(MyContext)
}

function MyContextProvider({children}){

    const [name,setName] = useState('')
    const [name_1,setName_1] = useState('')
    const [name_2,setName_2] = useState('')



    let obj  = {
        name: name,
        setName:setName,
        name_1: name_1,
        setName_1:setName_1,
        name_2: name_2,
        setName_2:setName_2,
    }


    return(
        <MyContext.Provider value={obj}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider