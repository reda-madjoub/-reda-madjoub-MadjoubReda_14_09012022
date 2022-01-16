import { useContext } from 'react'
import DataTables from "datatables-plugin-react"
import { Labels, exampleData } from "../constant/data"
import {Context} from '../utils/context/index'

export const DataTable = () => {

    const { employeeList } = useContext(Context)
    // const {dd, mm, yyyy} = exampleData
    // console.log(dataContext.employee.map(el => el));
    console.log(employeeList);
    const test = employeeList.dateOfBirth
    console.log(test);
    return (<DataTables 
                labels={Labels} 
                data={employeeList} 
            />)

}