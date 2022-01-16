import React from 'react'
import { Link } from 'react-router-dom';
import { DateTimePicker } from '../../components/DateTimePicker';
import { STATES, DEPARTMENTS } from '../../constant/data';
import './CreateEmployee.css'

const CreateEmployee = () => {
    const handleSubmit = () => {
        // call action context to add employee
    }
    return (
        <>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
            <Link to='/employee-list'>
                <button type='button'>View Current Employees</button>
            </Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DateTimePicker/>

                <label htmlFor="start-date">Start Date</label>
                <DateTimePicker/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state">
                    { STATES.map((el, index) => <option key={index}>{el.name}</option>) }
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    { DEPARTMENTS.map((el, index) => <option key={index}>{el.name}</option>) }
                </select>
            </form>

            <button onclick="saveEmployee()">Save</button>
        </div>
        </>
    )
}

export default CreateEmployee