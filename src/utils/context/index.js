import { createContext, useState } from "react"
// Create new Context
export const Context = createContext()
// Initial value for each form input
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
}

// Provider which will wrap all our app
const ContextProvider = props => {
    const [dataContext, setDataContext] = useState(INITIALE_STATE)
    const [employeeList, setEmployeeList] = useState([])
    return (
        <Context.Provider value={{ dataContext, setDataContext, employeeList, setEmployeeList }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider