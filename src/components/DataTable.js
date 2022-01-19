import { useContext } from 'react'
import DataTables from "datatables-plugin-react"
import { Labels } from "../constant/data"
import {Context} from '../utils/context/index'

export const DataTable = () => {
    const { employeeList } = useContext(Context)
    const val = employeeList
    val.map(el =>delete el.isModalOpen)
    return <DataTables labels={Labels} data={val}/>
}