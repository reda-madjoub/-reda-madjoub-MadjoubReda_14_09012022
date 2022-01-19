import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form'
import './CreateEmployee.css'
// import Modal from '../../components/Modal/Modal'
// import Modal from '../../../node_modules/modale-react/dist/Modal'
import Modal from 'modale-react'
import {Context} from '../../utils/context/index'

const CreateEmployee = () => {
    const { dataContext, setDataContext} = useContext(Context)
    
    return (
        <>
         <Modal content='Employé crée !' open={dataContext.isModalOpen} isOpen={setDataContext}/>
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