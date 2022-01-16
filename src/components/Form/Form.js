import React, { useContext } from 'react'
import { DateTimePicker } from '../DateTimePicker'
import { STATES, DEPARTMENTS } from '../../constant/data'
import {Context} from '../../utils/context/index'
import './Form.css'

const Form = () => {
    const { dataContext, setDataContext, employeeList, setEmployeeList } = useContext(Context)
    const handleSubmit = (e) => {
        e.preventDefault()
        const newEmployee = {...dataContext}
        setDataContext({
            ...dataContext,
            isModalOpen: true,
        })
        setEmployeeList(employeeList.concat(newEmployee))
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" onChange={e => setDataContext({...dataContext,firstName: e.target.value})} value={dataContext.firstName}/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" onChange={e => setDataContext({...dataContext,lastName: e.target.value})} value={dataContext.lastName}/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DateTimePicker name='birth'/>

                <label htmlFor="start-date">Start Date</label>
                <DateTimePicker name='start'/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" onChange={e => setDataContext({...dataContext,street: e.target.value})} value={dataContext.street}/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" onChange={e => setDataContext({...dataContext,city: e.target.value})} value={dataContext.city}/>

                    <label htmlFor="state">State</label>
                    <select name="state" id="state" onChange={e => setDataContext({...dataContext,state: e.target.value})} value={dataContext.state}>
                    { STATES.map((el, index) => <option key={index}>{el.name}</option>) }
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" onChange={e => setDataContext({...dataContext,zipCode: e.target.value})} value={dataContext.zipCode}/>
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department" onChange={e => setDataContext({...dataContext,department: e.target.value})} value={dataContext.department}>
                    { DEPARTMENTS.map((el, index) => <option key={index}>{el.name}</option>) }
                </select>
            <br />
                <input type="submit" value="Save"/>
            </form>
        </>
            
    )
}

export default Form