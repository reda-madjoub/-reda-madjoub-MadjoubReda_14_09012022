import { createContext, useState } from "react"


export const add_employee = createContext()
const INITIALE_STATE = [
    {firstName: ''},
    {lastName: ''},
    {dateOfBirth: ''},
    {startDate: ''},
    {street: ''},
    {city: ''},
    {state: ''},
    {zipCode: ''},
    {department: ''},
    {isModalOpen: false},
]

export const Provider = ({ children }) => {
    const [employee, setEmployee] = useState(INITIALE_STATE)
    setEmployee([
        {firstName: ''},
        {lastName: ''},
        {dateOfBirth: ''},
        {startDate: ''},
        {street: ''},
        {city: ''},
        {state: ''},
        {zipCode: ''},
        {department: ''},
        {isModalOpen: false},
    ])
 
    return (
        <add_employee.Provider value={{ employee }}>
            {children}
        </add_employee.Provider>
    )
}