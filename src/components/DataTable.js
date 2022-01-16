import { useContext } from 'react'
import DataTables from "datatables-plugin-react"
import { Labels, exampleData } from "../constant/data"
import {Context} from '../utils/context/index'

export const DataTable = () => {

    const { dataContext, setDataContext } = useContext(Context)
    // const {dd, mm, yyyy} = exampleData
    // console.log(dataContext.employee.map(el => el));
    return (<DataTables 
                labels={Labels} 
                data={exampleData} 
            />)

}