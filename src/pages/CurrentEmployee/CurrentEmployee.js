import React from 'react'
import { Link } from 'react-router-dom';
import {Context} from '../../utils/context/index'
import { DataTable } from '../../components/DataTable'
import './CurrentEmployee.css'

const Employee = () => {
    return (
            <div id="employee-div" className="container">
                <h1>Current Employees</h1>
                {/* <table id="employee-table" className="display"> */}
                    <DataTable/>
                <Link to='/'>
                    <button type='button'>Home</button>
                </Link>
            </div>
    )
}

export default Employee