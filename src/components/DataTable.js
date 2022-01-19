import { useContext } from 'react'
import DataTables from "datatables-plugin-react"
import { Labels, exampleData } from "../constant/data"
import {Context} from '../utils/context/index'

export const DataTable = () => {
    console.log(exampleData);
    const { employeeList } = useContext(Context)
    console.log(employeeList);
    return <DataTables labels={Labels} data={employeeList}/>
}