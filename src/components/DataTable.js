import { useContext } from 'react'
import DataTables from "datatables-plugin-react"
import { Labels, exampleData } from "../constant/data"
import {Context} from '../utils/context/index'

export const DataTable = () => {
    const { employeeList } = useContext(Context)
    return <DataTables labels={Labels} data={employeeList}/>
}