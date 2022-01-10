import React from 'react'
import { Link } from 'react-router-dom';
import './CurrentEmployee.css'

const Employee = () => {
    return (
        <>
            <div id="employee-div" class="container">
                <h1>Current Employees</h1>
                <table id="employee-table" class="display"></table>
                <Link to='/'>
                    <button type='button'>Home</button>
                </Link>
            </div>
        </>
    )
}

export default Employee