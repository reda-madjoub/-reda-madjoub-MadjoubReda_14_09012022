import { createContext, useState } from "react"


export const Context = createContext()
// export const Context = createContext({
//     INITIALE_STATE,
//     employee:[]
// })
export const INITIALE_STATE = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
    isModalOpen: false,
    // employee:[]
}

const ContextProvider = props => {
    const [dataContext, setDataContext] = useState(INITIALE_STATE)
    const [employeeList, setEmployeeList] = useState([])
// console.log(INITIALE_STATE);
    return (
        <Context.Provider value={{ dataContext, setDataContext, employeeList, setEmployeeList }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider