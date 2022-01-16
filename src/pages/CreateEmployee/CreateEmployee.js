import React from 'react'
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form'
import './CreateEmployee.css'

const CreateEmployee = () => {
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
            <Form/>
        </div>
        </>
    )
}

export default CreateEmployee